import React from "react";
import NextLink from "next/link"
import {Avatar, Box, Grid, Link, Typography} from "@mui/material";
import Chip from "@mui/material/Chip";
import {truncateWords} from "../../utils/words";


export const PostList = ({posts}) => {

    return (
        <>
            {
                posts.map(post => {
                    return (
                        <Grid
                            key={post.id}
                            container
                            elevation={3}
                            spacing={2}
                            sx={{
                                background: '#fff',
                                py: 2,
                                px: 3,
                                my: 3,
                                borderRadius: '10px',
                                width: 'auto',
                                marginLeft: '0'
                            }}>
                            <Grid item xs={12} lg={5}>
                                {
                                    post.tags.map(tag => (
                                        <Chip
                                            label={tag}
                                            sx={{mr: 1}}
                                            size="small"/>
                                    ))
                                }

                                <NextLink className="underline-none" href={`/post/${post.slug}`} passHref>
                                    <Link sx={{mt: 1}} component={'div'}>
                                        <Typography variant="h5" component="h2">{post.title}</Typography>
                                    </Link>
                                </NextLink>

                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "start",
                                    mt: 2
                                }}>
                                    <Avatar
                                        src={post.user.image_profile}
                                        sx={{mr: 1, width: 48, height: 48}}/>
                                    <div>
                                        <Typography
                                            sx={{fontWeight: "bolder"}}>
                                            {post.user.first_name} {post.user.last_name}
                                        </Typography>

                                        <Typography>{post.createdAt}</Typography>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Typography>
                                    {
                                        post.description.length > 50 ? truncateWords(post.description, 50)+"..." : post.description
                                    }
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <img src={post.image} alt={post.slug}
                                     style={{
                                         width: '100%',
                                         height: "auto",
                                         borderRadius: '5px',
                                         objectFit: 'cover',
                                         objectPosition: 'center',
                                         maxHeight: "250px"
                                     }}/>
                            </Grid>
                        </Grid>
                    )
                })

            }


        </>
    )

}