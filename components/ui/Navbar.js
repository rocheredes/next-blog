import React, {useState} from "react";
import NextLink from 'next/link'
import {AppBar, Box, Button, Container, Link, Toolbar, Typography} from "@mui/material";
import {UserNavbarMenu} from "./UserNavbarMenu";

export const Navbar = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    return (
        <AppBar>
            <Toolbar>
                <Container style={{display: "flex", alignItems:"center"}}>
                    <NextLink href="/" passHref className="underline-none">
                        <Link component='div' sx={{display: 'flex', alignItems: 'baseline'}}>
                            <Typography variant="h6" fontWeight="700">Blog</Typography>

                        </Link>
                    </NextLink>

                    <Box flex={1}/>

                    <Box>
                        {
                            !isAuthenticated ? (
                                    <NextLink href={'/auth/login'} passHref>
                                        <Link component={"span"}>
                                            <Button size='small' sx={{borderRadius: '10px', fontWeight: 700}}>Login</Button>
                                        </Link>
                                    </NextLink>
                                )
                                : (
                                   <UserNavbarMenu />
                                )
                        }

                    </Box>

                </Container>


            </Toolbar>
        </AppBar>
    )


}