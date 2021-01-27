import React from "react";
import { Card } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import NewsData from "../data/data.json";

export default function Post(props) {
  return (
    <>
      <Card style={{width: "18rem"}}>
        <Card.Img variant="top" src={NewsData.products[props.id].img} />
        <Card.Body>
          <Card.Title>{NewsData.products[props.id].title}</Card.Title>
          <Card.Text>{NewsData.products[props.id].price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}