import React from 'react';
import Chart from "react-apexcharts";
import { watchUsersNumber, stopUsers, watchUsers } from "../services/UserService"
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
          categories: []
        },
        fill: {
          colors: ['#c2185b']
        }
      },
      series: [
        {
          name: "Total number of users registered",
          data: []
        }
      ],
      userNumber: '',

    };
  }
  componentDidMount() {
    watchUsers(users => {
      let dataArr = users.map(x => moment(x).format('YYY-MM-DD').slice(2))
      let users7DaysAgo = dataArr.filter(x => x === moment().subtract(7, 'd').format('YYYY-MM-DD')).length
      let users6DaysAgo = dataArr.filter(x => x === moment().subtract(6, 'd').format('YYYY-MM-DD')).length
      let users5DaysAgo = dataArr.filter(x => x === moment().subtract(5, 'd').format('YYYY-MM-DD')).length
      let users4DaysAgo = dataArr.filter(x => x === moment().subtract(4, 'd').format('YYYY-MM-DD')).length
      let users3DaysAgo = dataArr.filter(x => x === moment().subtract(3, 'd').format('YYYY-MM-DD')).length
      let users2DaysAgo = dataArr.filter(x => x === moment().subtract(2, 'd').format('YYYY-MM-DD')).length
      let users1DaysAgo = dataArr.filter(x => x === moment().subtract(1, 'd').format('YYYY-MM-DD')).length
      this.setState({ series: [{ name: 'Total number of users registered', data: [users7DaysAgo, users6DaysAgo, users5DaysAgo, users4DaysAgo, users3DaysAgo, users2DaysAgo, users1DaysAgo] }] })
    })
    watchUsersNumber(users => {
      this.setState({ userNumber: users })
    })
    var date7DaysAgo = moment().subtract(7, 'd').format('YYYY-MM-DD');
    var date6DaysAgo = moment().subtract(6, 'd').format('YYYY-MM-DD');
    var date5DaysAgo = moment().subtract(5, 'd').format('YYYY-MM-DD');
    var date4DaysAgo = moment().subtract(4, 'd').format('YYYY-MM-DD');
    var date3DaysAgo = moment().subtract(3, 'd').format('YYYY-MM-DD');
    var date2DaysAgo = moment().subtract(2, 'd').format('YYYY-MM-DD');
    var date1DaysAgo = moment().subtract(1, 'd').format('YYYY-MM-DD');
    this.setState({ options: { xaxis: { categories: [date7DaysAgo, date6DaysAgo, date5DaysAgo, date4DaysAgo, date3DaysAgo, date2DaysAgo, date1DaysAgo] } } })
  }
  componentWillUnmount() {
    stopUsers();
  }
  render() {
    return (
      <div className="app" style={{ width: '100%' }}>
        <div className="row" style={{ width: '100%' }}>
          <div className="mixed-chart" style={{ width: '100%', textAlign: 'center' }}>
            {this.state.userNumber !== "" ? <h3>BookSwapp already has <b style={{ color: '#c2185b' }}>{this.state.userNumber}</b> registered users!</h3> : <h3>Loading statistics...</h3>}
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