import { Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';

import data from '../utils/data';

export default function Home() {
  return (
    <Layout>
      <div>
        <h2>Products</h2>
        <Grid container spacing={3}>
          {data.products.map((product) => {
            return (
              <Grid item md={4} key={product.name}>
                <ProductItem product={product} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}
