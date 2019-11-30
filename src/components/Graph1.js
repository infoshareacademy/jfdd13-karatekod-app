import React from 'react';
import Chart from "react-apexcharts";
import {addBooksFirebase, watchBooks} from "../services/UserService"




class Graph1 extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ['28.10-03.11', '04.11-10.11', '11.11-17.11', '18.11-today']
          },
          fill: {
            colors: ['#c2185b']
          }
        },
        series: [
          {
            name: "series-1",
            data: [12053, 18502, 35645, 50253]
          }
        ]
      };
    }
  
    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="700"
              />

            </div>

        </div>       
         </div>
      );
    }
  }
  
  export default Graph1;