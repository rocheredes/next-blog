import {AppBar, Link, Toolbar} from "@mui/material";
import NextLink from 'next/link'
import {useState} from "react";

export const Navbar = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AppBar>
            <Toolbar>
                <NextLink href='auth/login' passHref>
                    <Link component={'span'}>
                        Loginssss
                    </Link>

                </NextLink>
            </Toolbar>
        </AppBar>
    )


}