import NextLink from "next/link";
import {Link, Typography} from "@mui/material";
import React from "react";

export const PostsMostRead = ({image, title, slug}) => {

    return (
        <>
            <NextLink href={`/post/${slug}`} passHref style={{textDecoration: "none"}}>
                <Link component={"div"}
                      sx={{
                          display: "flex",
                          alignItems: "start",
                          mb: 2,
                          textDecoration: "none"
                      }}>
                    <img src={image} alt={slug}
                         style={{
                             width: '50px',
                             height: '40px',
                             borderRadius: '5px',
                             objectFit: 'cover',
                             objectPosition: 'center',
                             marginRight: 15
                         }}/>


                    <Typography component="h6" variant="h6" sx={{
                        fontSize: '1.2em',
                        lineHeight: 1.25,
                        fontWeight: 500
                    }}>
                        {title}
                    </Typography>
                </Link>
            </NextLink>

        </>
    )

}