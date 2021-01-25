import React from "react";
import { Grid, Image, Card, Button } from "semantic-ui-react";
function Product() {
  const description = [
    "Amy is a violinist with 2 years experience in the wedding industry.",
    "She enjoys the outdoors and currently resides in upstate New York.",
  ];
  return (
    <div>
      <h1>Product Page</h1>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Image src="http://placekitten.com/300/300" />
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content header="Product Name" />
              <Card.Content description={description} />
              <Card.Content>Price</Card.Content>
            </Card>
            <Button>Add to Cart</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
export default Product;
