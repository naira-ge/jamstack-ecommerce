import React from 'react';
import { Typography, ListItem, List, TextField } from '@material-ui/core';
import Layout from '../components/Layout';


export default function login() {
    return (
        <Layout title="Login">
            <form>
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
                </List>
            </form>
        </Layout>
    )
}