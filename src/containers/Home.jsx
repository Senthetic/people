import React, { Component } from "react";
import Employees from "../employees.json";
class Home extends Component {
  state = {
    employees:  Employees ,
  };

//   componentDidMount() {
//     this.sortEmployees();
//   }

  sortEmployees = () => {
    function compare(a, b) {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;

      return 0;
    }
    const sortedEmployees = this.state.employees.sort(compare);
    console.log(sortedEmployees);
    this.setState({
      employees: sortedEmployees,
    });
  };

  render() {
    return (
      <div className="Container">
        <div className="row">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col" onClick={this.sortEmployees}>
                Name
              </th>
              <th scope="col">Salary</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr>
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.salary}</td>
                <td>{employee.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default Home;
