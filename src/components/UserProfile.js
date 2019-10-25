import React from 'react';
import {
  Col,
  Card, 
  CardText, 
  CardBody,
  CardTitle
} from 'reactstrap';

const UserProfile = ({ repo }) => {
  let repoName = repo["name"].replace(/([A-Z])|-|_/g, ' $1').trim()
  let repoType = repo["private"] ? "Private" : "Public"
  let createdDate = new Date(repo["created_at"]).toDateString()
  let lastPushDate = new Date(repo["pushed_at"]).toDateString()
  return (
    <Col md={{ size:6, offset: 3}} className="mb-4">
      <Card>
        <CardBody>
          <CardTitle>{repoName}</CardTitle>
          <CardText>URL: <a href={repo.html_url}>{repo.html_url}</a></CardText>
          <CardText>Description: {repo.description}</CardText>
          <CardText>Language: {repo.language}</CardText>
          <CardText>Repo Type: {repoType}</CardText>
          <CardText>Created at: {createdDate}</CardText>
          <CardText>
            <small className="text-muted">Last updated at: {lastPushDate}</small>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
}

export default UserProfile;
