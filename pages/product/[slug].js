import React, { useContext } from 'react';
import axios from 'axios';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Link,
  Typography,
  Grid,
  List,
  ListItem,
  Card,
  CardActionArea,
  Button
} from '@material-ui/core';
import db from '../../lib/db';
import Product from '../../models/Product';
import useStyles from '../../utils/styles';
import Layout from '../../components/Layout';
import { Store } from '../../utils/Store';

export default function ProductScreen({ product }) {
  const { dispatch, state } = useContext(Store);
  const classes = useStyles();
  const router = useRouter();

  if (!product) {
    return <Typography>Product Not Found</Typography>;
  }

  const addToCartHandler = async () => {
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
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>back to products</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Card>
            <CardActionArea>
              <Image
                src={product.image}
                alt={product.name}
                width={540}
                height={540}
                layout="responsive"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography> Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating:
                {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? 'In Stock' : 'Unavailable'}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  return {
    props: {
      product: db.convertDocToObj(product)
    }
  };
}
