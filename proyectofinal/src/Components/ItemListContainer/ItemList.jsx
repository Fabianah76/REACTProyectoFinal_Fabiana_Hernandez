import Item from "./Item"
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {
        products.map((product)=> {
          return <Item key={product.id} product={product} />
        })
      }
    </div>
  );
};

export default ItemList;
