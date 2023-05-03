import Head from "next/head";
import {Box} from "@mui/material";

export const AuthLayout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box>
                    {children}
                </Box>
            </main>


        </>
    )
}


