import React from 'react';
import NextLink from 'next/link';
import { Typography,ListItem,List,TextField,Button,Link } from '@material-ui/core';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';


export default function Login() {
    const classes = useStyles();

    return (
        <Layout title="Login">
            <form className={classes.form}>
                <Typography component="h1" variant="h1">
                    Login
                </Typography>
                <List>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="Email"
                            inputProps={{ type: 'email' }}>
                        </TextField>
                    </ListItem>
                    <ListItem>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="password"
                            label="Password"
                            inputProps={{ type: 'password' }}>
                        </TextField>
                    </ListItem>
                    <ListItem>
                        <Button variant="contained" type="submit" fullWidth color="secondary">Login</Button>
                    </ListItem>
                    <ListItem>
                        Don't have an account? &nbsp; <NextLink href="/register" passHref><Link  color="secondary"> Register</Link></NextLink>
                    </ListItem>
                </List>
            </form>
        </Layout>
    )
}
