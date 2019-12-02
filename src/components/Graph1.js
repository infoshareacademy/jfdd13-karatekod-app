import React from 'react';
import Chart from "react-apexcharts";
import {watchUsers, stopUsers} from "../services/UserService"

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
        ],
        userNumber: '',

      };
    }

    componentDidMount() {
      watchUsers(users => { // gets booklist from firebase
        console.log(users)  // creates array with book types 
        this.setState({userNumber:users})
      });
    }

    componentWillUnmount(){
      stopUsers();
    }
  
    render() {
      return (
        <div className="app" style={{width:'100%'}}>
          <div className="row" style={{width:'100%'}}>
            <div className="mixed-chart" style={{width:'100%'}}>
              {this.state.userNumber!==""?<h1>BookSwapp has <b style={{color: '#c2185b'}}>{this.state.userNumber}</b> registered users</h1>:""}
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="100%"
              />
            </div>
        </div>       
         </div>
      );
    }
  }
  
  export default Graph1;