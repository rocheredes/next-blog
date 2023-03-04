import Head from "next/head";
import {Navbar} from "../ui/Navbar";

export const BlogLayout = ({children, title, pageDescription, imageFullUrl}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription}/>
                <meta name="og:title" content={title}/>
                <meta name="og:description" content={pageDescription}/>
                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl}/>
                    )
                }
            </Head>

            <Navbar/>

            <main style={{background: "#eaedf2"}}>

                    {children}

            </main>

        </>
    )
}

