import React from "react";
import Card from "react-bootstrap/Card";

const CardItem = (props) => (
  <div className="use-bootstrap">
    <Card style={{ width: "30rem", minHeight: '30rem' }} className="mb-4 mx-auto">
      <Card.Img variat="top" src={props.imgURL} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Card.Link
          href={props.siteURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore
        </Card.Link>
      </Card.Body>
    </Card>
  </div>
);

export default CardItem;
