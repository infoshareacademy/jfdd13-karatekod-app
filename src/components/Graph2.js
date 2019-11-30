import React from 'react';
import Chart from "react-apexcharts";
import { watchBooks } from "../services/BookService"






class Graph2 extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["fantasy", "drama", "romance", "thriller", "guides", "crime", "biography", "other"],
        fill: {
          colors: ['#c2185b', '#e94989', '#f4a4c4', '#ff0080', '#00ccff', '#ff0066', '#ff66ff', '#3399ff']
        },
        colors: ['#c2185b', '#e94989', '#f4a4c4', '#ff0080', '#00ccff', '#ff0066', '#ff66ff', '#3399ff']
      },
      series: [30, 23, 11, 10, 9, 7, 6, 4],
      booksList:[],
      types: {},
    }
  }

  componentDidMount() {
    watchBooks(booksList => { // gets booklist from firebase
      let types = booksList.map(x=>x.type)  // creates array with book types
      let myTypes = types.reduce((result,next)=>{ // counts the number each type occured and puts it into object myTypes {fantasy: 42, drama: 15... etc}
        result[next]=(result[next] || 0) +1;
        return result;
        }, {})
        this.setState({types:myTypes})  // puts
        this.setState({names:[Object.keys(myTypes)]})
        this.setState({counts:[Object.values(myTypes)]})
        this.setState({options:{
          fill: {
            colors: ['#c2185b', '#e94989', '#f4a4c4', '#ff0080', '#00ccff', '#ff0066', '#ff66ff', '#3399ff']
          },
          colors: ['#c2185b', '#e94989', '#f4a4c4', '#ff0080', '#00ccff', '#ff0066', '#ff66ff', '#3399ff'],
        }
      })
        this.setState({series:Object.values(myTypes)})       
    });
  }

    componentWillUnmount(){
      console.log(this.state)
    }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} colors={this.state.colors} type="donut" width="600" />
      </div>
    );
  }
}

export default Graph2;


