import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NextLink from 'next/link';
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
import useStyles from '../../utils/styles';
import Layout from '../../components/Layout';
import data from '../../utils/data';

function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((p) => p.slug === slug);

  if (!product) {
    return <Typography>Product Not Found</Typography>;
  }

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
                <Button fullWidth variant="contained" color="secondary">
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

export default ProductScreen;
