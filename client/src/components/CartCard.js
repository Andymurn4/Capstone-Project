import React from "react";
import { Card, Image } from "semantic-ui-react";

function CartCard() {
  return (
    //   Find a way to make the card elements align horizontally
    <Card fluid>
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
export default CartCard;
