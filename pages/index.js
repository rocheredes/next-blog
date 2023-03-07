import React from "react";
import {Box, Button, Container, Grid} from "@mui/material";
import {BlogLayout} from "../components/layout/BlogLayout";
import {PostSlideshow} from "../components/posts/PostSlideshow";
import {posts} from "../database/posts";
import {PostList} from "../components/posts/PostList";
import {LoopOutlined} from "@mui/icons-material";

const imageList = [
    '/gallery/cat-g153f8c075_1920.jpg',
    '/gallery/cat-ga2548b503_1920.jpg',
    '/gallery/cat-gba079e182_1920.jpg',
    '/gallery/cat-gcc6a9ebe5_1920.jpg',
    '/gallery/wink-g93e9fee41_1920.jpg',
]

export default function Home() {
    return (
        <>
            <BlogLayout title={"Home"} pageDescription={"Home Page"}>

                <Container sx={{mt: 2}}>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <PostSlideshow images={imageList}/>
                        </Grid>
                    </Grid>

                    <Box xs={12} sm={12}>
                        <PostList posts={posts}/>
                    </Box>

                    <Box xs={12} sm={12}>
                        <Button
                            fullWidth
                            startIcon={ <LoopOutlined />}
                        >Load more posts</Button>
                    </Box>

                </Container>


            </BlogLayout>
        </>
    )
}
