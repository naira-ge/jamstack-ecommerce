import { useContext } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import { Store } from '../utils/Store';

import db from '../lib/db';
import Product from '../models/Product';

export default function Home( { products } ) {
  const router = useRouter();
  const { state,dispatch } = useContext( Store );
  
  const addToCartHandler = async (product) => {  
    const existItem = state.cart.cartItems.find( x => x._id === product._id );
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get( `/api/products/${product._id}` );
    if (data.countIsStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };

  return (
    <Layout>
      <div>
        <h2>Products</h2>
        <Grid container spacing={3}>
          {products.map((product) => {
            return (
              <Grid item md={4} key={product.name}>
                <ProductItem
                  product={product}
                  addToCartHandler={addToCartHandler}
                />
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
