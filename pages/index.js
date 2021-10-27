import { Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';

import db from '../lib/db';
import Product from '../models/Product';

export default function Home({ products }) {
  return (
    <Layout>
      <div>
        <h2>Products</h2>
        <Grid container spacing={3}>
          {products.map((product) => {
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

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj)
    }
  };
}
