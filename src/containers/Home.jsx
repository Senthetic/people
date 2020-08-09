import React, { Component } from "react";
import Employees from "../employees.json";
class Home extends Component {
  state = {
      search: "",
    employees: Employees,
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

  handleInputChange = (e) => {
    const {name, value} = e.target;
    this.setState({
        [name]: value,
    });
  };
  handleSubmit = (e) => {
      e.preventDefault();
      this.filterEmployees();
  }

  filterEmployees = () => {
      const searchTerm = this.state.search.toLowerCase();
      this.setState({
          employees: this.state.employees.filter((employee) => 
      employee.name.toLowerCase().includes(searchTerm)
      ),
      });
  };


  render() {
    return (
      <div className="Container">
        <div className="row">
            <div className="col">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search by name"
                    name="search"
                    value={this.state.search}
                    onChange={this.handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
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
    );
  }
}

export default Home;
