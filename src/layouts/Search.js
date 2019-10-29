import React, { Component } from 'react';
import axios from "axios";
import {
  Row,
  Col,
  Input
} from "reactstrap";
import { config } from "../utils";
import Navbar from "../components/Navbar";
import SearchItems from "../components/SearchItems";
import debounce from "lodash/debounce";

class Search extends Component {
  constructor() {
    super()
    this.state = {
      currentSearch: "",
      filteredResults: []
    }
  }

  callApi = searchTerm => {
    axios.get(
      `${config.baseUrl}/search/users?q=${searchTerm}`,
      // {
      //   headers: {
      //     "User-Agent": `${config.GHUserAgent}`,
      //     "Authorization": `token ${config.GHKey}`
      //   }
      // }
    )
      .then((response) => {
        // console.log(response.data)
        this.setState((prevState) => ({
          ...prevState,
          filteredResults: response.data
        }));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  debouncedApiCall = debounce((value) => {
    // console.log(value)
    this.callApi(value)
  }, 500)
  
  // componentDidMount() {
  //   this.callApi("ikem") 
  // }

  handleSearchChange = ({ target: { value } }) => {
    // console.log(e)
    // e.persist()
    this.setState(prevState => ({
      ...prevState,
      currentSearch: value
    }));
    if (value !== '') {
      this.debouncedApiCall(value)
    }
    // const { value } = e.target
    // console.log(value)
    // if (value) {
    //   this.debouncedApiCall(value)
    //   this.setState((prevState) => ({
    //     ...prevState,
    //     currentSearch: value
    //   }));
    // }
  }

  render() {
    const { filteredResults } = this.state
    const { items } = this.state.filteredResults
    // console.log(filteredResults.items)
    const searchResults = filteredResults && items ? items.map(item => (
      <SearchItems key={item.id} user={item} />
    )) : null
    // console.log(searchResults)

    return (
      <div>
        <Navbar />
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="search-container">
                <Input type="text" name="user-search" placeholder="Search Github usernames" onChange={this.handleSearchChange} />                
                { searchResults ? searchResults : null}
                {/*"No results found"*/}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Search;
