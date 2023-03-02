import Head from 'next/head'
import {Button} from "@mui/material";
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <main>
                <Button variant={'contained'} color='primary'>primary</Button>
                <Button variant={'contained'} color='secondary'>secondary</Button>
                <Button variant={'contained'} color='info'>info</Button>
                <Button variant={'contained'} color='warning'>warning</Button>
                <Button variant={'contained'} color='error'>error</Button>
            </main>
        </>
    )
}
