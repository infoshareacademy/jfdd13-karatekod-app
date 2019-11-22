import React from 'react';
import Chart from "react-apexcharts";




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
          series:  [30, 23, 11, 10, 9, 7, 6, 4],
         
        }
      }
    
    
      render() {
    
        return (
          <div className="donut">
            <Chart  options={this.state.options} series={this.state.series} colors={this.state.colors} type="donut" width="600" />
          </div>
        );
      }
    }
    
  export default Graph2;


