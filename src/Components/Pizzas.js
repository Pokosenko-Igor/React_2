import PizzaData from "../data/data.json";
import Pizza from "./Pizza";
import CardDeck from "react-bootstrap/CardDeck";
import {Container, CardColumns} from "react-bootstrap";
import { render } from "@testing-library/react";

export default function Pizzas(){
    return(
        <Container>
            <CardColumns>
                {PizzaData.pizza.map((pizza, index) => {
                    return <Pizza key={index} id={index} />;
                })}
            </CardColumns>    
        </Container>
    )
}