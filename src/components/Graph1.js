import React from 'react';
import Chart from "react-apexcharts";
import {watchUsersNumber, stopUsers, watchUsers} from "../services/UserService"
import moment from 'moment'

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
      watchUsers(users=>{
        console.log(users)
        
      })
      watchUsersNumber(users => { // gets booklist from firebase
        this.setState({userNumber:users})
        console.log(users)
      })
      var date7DaysAgo = moment().subtract(7,'d').format('YYYY-MM-DD');
      var date6DaysAgo = moment().subtract(6,'d').format('YYYY-MM-DD');
      var date5DaysAgo = moment().subtract(5,'d').format('YYYY-MM-DD');
      var date4DaysAgo = moment().subtract(4,'d').format('YYYY-MM-DD');
      var date3DaysAgo = moment().subtract(3,'d').format('YYYY-MM-DD');
      var date2DaysAgo = moment().subtract(2,'d').format('YYYY-MM-DD');
      var date1DaysAgo = moment().subtract(1,'d').format('YYYY-MM-DD');
      var date0DaysAgo = moment().subtract(0,'d').format('YYYY-MM-DD');
      console.log(date7DaysAgo)
      console.log(date6DaysAgo)
      console.log(date5DaysAgo)
      console.log(date4DaysAgo)
      console.log(date3DaysAgo)
      console.log(date2DaysAgo)
      console.log(date1DaysAgo)
      console.log(date0DaysAgo)
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