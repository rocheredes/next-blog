import React from "react";
import NextLink from "next/link"
import {Grid, Link, Typography} from "@mui/material";
import Chip from "@mui/material/Chip";


export const PostList = ({posts}) => {

    return (
        <>
            {
                posts.map(post => {
                    return (
                        <Grid container sx={{background: '#fff', p: 2, mb: 2, borderRadius: '10px'}}>
                            <Grid item lg={5}>
                                {
                                    post.tags.map(tag => (
                                        <Chip
                                            label={tag}
                                            sx={{mr: 1}}
                                            size="small"/>
                                    ))
                                }

                                <NextLink className="underline-none" href={`/post/${post.slug}`} passHref>
                                    <Link component={'div'}>
                                        <Typography variant="h4" component="h2">{post.title}</Typography>
                                    </Link>
                                </NextLink>


                            </Grid>
                            <Grid item md={6} lg={4}>asd</Grid>
                            <Grid item md={6} lg={3}>asd</Grid>
                        </Grid>
                    )
                })

            }


        </>
    )

}