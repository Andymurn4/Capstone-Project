import React from "react";
import ProductCard from "../components/ProductCard";
import { Grid } from "semantic-ui-react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts as listProducts } from "../redux/actions/productActions";

function Home() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

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
