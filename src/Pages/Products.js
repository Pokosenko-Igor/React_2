import React from "react";
import ProductData from "../data/data.json";
import ProductCard from "../Components/ProductCard";
import CardDeck from 'react-bootstrap/CardDeck'
import Pizzas from "../Components/Pizzas";

export default function Products() {
  return (
    <div>
      <h1>Our Products:</h1>
      <CardDeck>
        {ProductData.products.map((product, index) => {
          return <ProductCard Key={index} id={index} />;
        })}
      </CardDeck>
      <hr />
      <h1>Our Pizzas:</h1>
      <Pizzas />
    </div>
  );
}
