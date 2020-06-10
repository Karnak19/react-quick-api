import React from "react";
import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";

function UserCard({ id, pseudo }) {
  return (
    <Col xs="4" className="my-1">
      <Card>
        <CardBody>
          <CardTitle>{pseudo}</CardTitle>
          <CardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias doloremque
            ea quae ratione. Similique?
          </CardText>
          <Button tag={Link} to={`/users/${id}`} block>
            More details about {pseudo}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default UserCard;
