import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";
import NewsData from "../data/data.json";

export default function Post(props) {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>{NewsData.news[props.id].title}</h1>
        <p>{NewsData.news[props.id].content}</p>
        <p>{NewsData.news[props.id].date}</p>
      </Container>
    </Jumbotron>
  );
}