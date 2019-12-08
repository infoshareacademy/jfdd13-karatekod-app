import React from 'react';
import Chart from "react-apexcharts";
import { watchBooks, stopBooks } from "../services/BookService"
class Graph2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        labels: [],
        fill: {
          colors: ['#c2185b', '#e94989', '#f4a4c4', '#ff0080', '#00ccff', '#ff0066', '#ff66ff', '#3399ff']
        },
        colors: ['#c2185b', '#e94989', '#f4a4c4', '#ff0080', '#00ccff', '#ff0066', '#ff66ff', '#3399ff']
      },
      series: [],
      types: {},
    }
  }
  componentDidMount() {
    watchBooks(booksList => {
      let types = booksList.map(x => x.type)
      console.log(types)
      let myTypes = types.reduce((result, next) => {
        result[next] = (result[next] || 0) + 1;
        return result;
      }, {})
      this.setState({ options:{labels: Object.keys(myTypes) }})
      this.setState({ series: Object.values(myTypes) }, ()=>console.log(this.state.series))
    });
  }
  componentWillUnmount() {
    stopBooks();
  }
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Chart options={this.state.options} series={this.state.series} colors={this.state.colors} type="donut" width="100%" />
      </div>
    );
  }
}
export default Graph2;


