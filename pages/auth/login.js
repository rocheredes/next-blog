import React from "react";
import NextLink from 'next/link'
import {AuthLayout} from "../../components/layout/AuthLayout";
import {Avatar, Button, Box, Grid, Link, Typography, TextField} from "@mui/material";
import {useRouter} from "next/router";


const LoginPage = () => {

    const router = useRouter()
    return (
        <AuthLayout title="Login">
            <Box

                sx={{
                    background: "white",
                    maxWidth: 450,
                    padding: '10px 20px 20px 20px',
                    borderRadius: '10px'
                }}>
                <Avatar

                    src="/gallery/cat-ga2548b503_1920.jpg"
                    sx={{
                        width: 75,
                        height: 75,
                        m: '-50px auto 0 auto',
                        border: 5,
                        borderColor: 'primary.main',
                    }}/>
                <Typography component="h5" variant="h5" m={2} textAlign={'center'}>
                    Welcome to <strong>FancyCats</strong>
                </Typography>
                <form onSubmit="" noValidate>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type='text'
                                label="Email or Username"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type='password'
                                label="Password"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" color="primary"
                                    className="circular-btn"
                                    size="large" fullWidth>
                                Login
                            </Button>
                        </Grid>


                        <Grid item xs={12} display="flex" justifyContent="end">
                            <NextLink href={router.query.p ? `/auth/register?p=${router.query.p}` : '/auth/register'}
                                      passHref>
                                <Link underline='always' component={"span"}>
                                    No tienes cuenta?
                                </Link>
                            </NextLink>
                        </Grid>

                    </Grid>

                </form>
            </Box>


        </AuthLayout>
    )


}

export default LoginPage