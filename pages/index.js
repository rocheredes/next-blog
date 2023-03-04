import React from "react";
import {Box, Container} from "@mui/material";
import {BlogLayout} from "../components/layout/BlogLayout";
import {PostSlideshow} from "../components/posts/PostSlideshow";
import Grid from "@mui/material/Grid";
import {posts} from "../database/posts";
import {PostList} from "../components/posts/PostList";

const imageList = [
    'gallery/images1.jpg',
    'gallery/images2.jpg',
    'gallery/images3.jpg',
    'gallery/images4.jpg',
    'gallery/images5.jpg',
]

export default function Home() {
    return (
        <>
            <BlogLayout title={"Home"} pageDescription={"Home Page"}>

                <Container  sx={{mt: 2}}>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <PostSlideshow images={imageList}/>
                        </Grid>
                    </Grid>

                    <Box xs={12} sm={12}>
                        <PostList posts={posts}/>
                    </Box>
                </Container>


            </BlogLayout>
        </>
    )
}
