import React from 'react';
import {
  Col,
  Card, 
  // CardText, 
  CardBody,
  // CardTitle,
} from 'reactstrap';
import { Link } from "react-router-dom";

const Search = ({ user }) => {
  return (
    <Col className="p-0">
      <Link to={{
        pathname: `user/${user.login}`,
        state: { image: user.avatar_url }
      }}
      >
        <Card>
          <CardBody>
          <img src={user.avatar_url} alt="Github user" className="home" />
            <span>{user.login}</span>
            {/*<CardText>{user.}</CardText>
            <CardText>{user.}</CardText>
            <Button>Button</Button>*/}
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
}

export default Search;
