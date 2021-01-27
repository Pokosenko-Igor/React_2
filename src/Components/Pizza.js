import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";
import PizzaData from "../data/data.json";

export default class Pizza extends Component {
    constructor(props){
        super(props);
        this.state = {
            size : "30cm",
            price : PizzaData.pizza[this.props.id].price30,
            weight : PizzaData.pizza[this.props.id].weight30,
        };
    }

    changeSizePrice(){
        if(this.state.size === "30cm"){
            this.setState({
                size : "40cm",
                price : PizzaData.pizza[this.props.id].price40,
                weight : PizzaData.pizza[this.props.id].weight40,
            });
        } else{
            this.setState({
                size : "30cm",
                price : PizzaData.pizza[this.props.id].price30,
                weight : PizzaData.pizza[this.props.id].weight30,
            });
        }
    }

    render(){
        return(
                <Card border="Dark"
                class="card text-right"
                style={{ width: '18rem' }}
                className="mb-2">
                    <Card.Img variant="top" src={PizzaData.pizza[this.props.id].img} />
                    <Card.Body>
                        <Card.Title>{PizzaData.pizza[this.props.id].title}</Card.Title>
                        <Card.Text>{PizzaData.pizza[this.props.id].desc}</Card.Text>
                        <Form>
                            <Form.Check
                                type="switch"
                                id={PizzaData.pizza[this.props.id].id}
                                label={this.state.size}
                                onChange={() => {
                                    this.changeSizePrice();
                                }}
                            />
                        </Form>
                        <Card.Title>{this.state.price}</Card.Title> 
                        <Button variant="primary">Купить</Button>
                        <Card.Title style={{display: "inline-block", float: "right"}}>{this.state.weight}</Card.Title> 
                    </Card.Body>
                </Card>
        );
    }
}