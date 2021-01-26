import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <Card fluid as={Link} to="/products/">
      <Image src="http://placekitten.com/300/300" />
      <Card.Content>
        <Card.Header>Product Name</Card.Header>
        <Card.Meta>price</Card.Meta>
        <Card.Description>
          short description blah blah blah blah item blah sale blah buy it blah
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
export default ProductCard;
