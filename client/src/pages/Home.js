import React from "react";
import ProductCard from "../components/ProductCard";
import { Grid } from "semantic-ui-react";

function Home() {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row className="page-title">
          <h1>Recent Listings</h1>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ProductCard />
          </Grid.Column>
          <Grid.Column>
            <ProductCard />
          </Grid.Column>
          <Grid.Column>
            <ProductCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
export default Home;
