import React, { Component } from 'react';
import UserProfile from "../components/UserProfile";
import axios from "axios";
import { Row, Col, Jumbotron } from "reactstrap";
import { config } from "../utils";
import Loader from "../assets/img/loader.gif";

class SingleSearchResult extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      userImg: "",
      repos: [],
      loading: true
    }
  }

  componentDidMount() {
    const { pathname, state: { image } } = this.props.location;
    let user = pathname.split("/")[2];
    this.setState(prevState => ({
      ...prevState,
      username: user,
      userImg: image
    }));
    this.callApi(user)
  }

  callApi = username => {
    axios.get(
      `${config.baseUrl}/users/${username}/repos`,
      {
        headers: {
          // "User-Agent": `${config.GHUserAgent}`,
          "Authorization": `token ${config.GHKey}`
        }
      }
    )
      .then((response) => {
        // console.log(response.data)
        this.setState((prevState) => ({
          repos: response.data,
          loading: false
        }));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { repos, loading, username, userImg } = this.state
    const repoDetails = repos && repos.length ? repos.map(repo => (
      <UserProfile key={repo.id} repo={repo} />
    )) : null
    // console.log(repoDetails)
    return (
      <div>
        {loading ? 
          <img
            src={Loader}
            className="img-responsive"
            style={{ height: '100px', margin: '20% 45%' }}
            alt="loading gif"
          />
           : null
        }
        {
          repos && repos.length ? 
            <Row>
              <Col md={12}>
                <Jumbotron>
                  <h2>{username} repos</h2>
                  <img src={userImg} alt="User" className="details" />
                </Jumbotron>
              </Col>
              {repoDetails}
            </Row>
          : null
        }
      </div>
    );
  }
}

export default SingleSearchResult;
