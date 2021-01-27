import React from "react";
import { Card, Image, Grid, Button } from "semantic-ui-react";

function CartCard() {
  return (
    //   Find a way to make the card elements align horizontally
    <div>
      <Grid.Row>
        <Grid.Column>
          <Card>
            <Image src="http://placekitten.com/10/10" />
          </Card>
        </Grid.Column>
        <Grid.Column>B.ALAAAASDAFDSFGERG</Grid.Column>
      </Grid.Row>
    </div>
  );
}
export default CartCard;
