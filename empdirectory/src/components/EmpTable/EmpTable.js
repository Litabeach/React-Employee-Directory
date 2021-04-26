import React, { Component } from "react";
import API from "../../utils/API";
import SearchRes from "../SearchRes/SearchRes";
import Employee from "../Employee/Employee";
import Navbar from "../Navbar/Navbar";


class EmpTable extends Component {
  state = {
    result: {},
       //should result be a []? 
    search: "",
    // order: ""
  };

  // When this component mounts
  componentDidMount() {
    this.searchEmp();
  }

  searchEmp = () => {
    API.getEmp()
      .then(res => this.setState({ result: res.data }))
      // .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };


//   handleSubmit = event => {
//     event.preventDefault()
// }

render() {
  return (
      <div>
          <Navbar
              value={this.state.search}
              handleInputChange={this.handleInputChange}
          />
          <table id="table" className="table table-striped table-hover table-condensed">
              <thead>
                  <tr>
                      <th>
                          Image
              </th>
                      <th className="pointer"
                          data-order={this.state.order}
                          onClick={this.handleSubmit}
                          >
                          Name
              </th>
                      <th>
                          Phone
              </th>
                      <th>
                          Email
              </th>
                      <th>
                          DOB
              </th>
                  </tr>
              </thead>
{/* 
              {!this.state.search ? (
                  <Employee results={this.state.result} />
              ) : (
                  <SearchRes results={this.state.result} value={this.state.search} />
              )} */}
          </table>
      </div>
  );
}
}

export default EmpTable;


