import React, { Component } from "react";
import SearchForm from "./Search";
import EmployeeCard from "./Employee";
import API from "../utils/api";

class SearchResultContainer extends Component {
  state = {
    result: [],
    filter: "",
    filterBy: "lastName",
    currentSort: "default",
    sortField: ""

  };

  componentDidMount() {
    API.search()
      .then(res => {
        console.log(res)
        this.setState({
          result: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            dob: e.age,
            key: i
          }))

        })
     
      })
      .catch(err => console.log(err));
  }

  filterEmployees = (searchkey) => {
    console.log(searchkey);
    console.log(this.state.result);

    var filterResult = this.state.result.filter(person => person.firstName === searchkey)

    this.setState({
      result:filterResult
      
    })

  }

  handleFormSubmit = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    console.log(value);
    console.log(name);
    //filter function here
    this.filterEmployees(value);
    this.setState({

      [name]: value

    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);

  };

  handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    const value = event.target.value;
    const name = event.target.name;
    console.log("**********");
    console.log(value);
    console.log(name);

    this.setState({

      [name]: value

    });
        
  };

  render() {

    return (
      <div className="container">
        <div className="row">
        </div>
        <div className="row">
          <div className="col-md-6">
            <SearchForm
              value={this.state.search}
               handleInputChange={this.handleInputChange}
               handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>

        <div className="row">

          <table className="table">
            <tr>
              <th scope="col">Photo</th>
              <th>First Name</th>
           
              <th scope="col">Last Name </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>

            {[...this.state.result].map((item) =>
              <EmployeeCard
                picture={item.picture}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                phone={item.phone}
                key={item.key}
              />
            )}

          </table>
        </div>

      </div>
    );
  }
}

export default SearchResultContainer;