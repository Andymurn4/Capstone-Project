import React from "react";
import { Card, Icon } from "semantic-ui-react";

function ProductCard() {
  return (
    <div>
      <Card
        fluid
        image="http://placekitten.com/100/100"
        header="Product Name"
        meta="price"
        description="short description blah blah blah blah item blah sale blah buy it blah"
      />
    </div>
  );
}
export default ProductCard;
