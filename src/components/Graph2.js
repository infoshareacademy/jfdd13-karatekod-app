


import React from 'react';
import Chart from "react-apexcharts";




class Graph2 extends React.Component {
      

    
      constructor(props) {
        super(props);
    
        this.state = {
          options: {},
          series: [30, 23, 11, 10, 9, 7, 6, 4],
          labels: ['drama', 'romance', 'thriller', 'guide', 'crime']
        }
      }
    
      render() {
    
        return (
          <div className="donut">
            <Chart  options={this.state.options} series={this.state.series} labels={this.state.labels} type="donut" width="600" />
          </div>
        );
      }
    }
    
  export default Graph2;


