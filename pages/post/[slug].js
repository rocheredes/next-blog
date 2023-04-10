import {BlogLayout} from "../../components/layout/BlogLayout";
import {Avatar, Box, Container, Grid, Typography} from "@mui/material";
import React from "react";
import {posts} from "../../database/posts";
import {PostSingleContent} from "../../components/posts/PostSingleContent";


const PostSingle = ({post}) => {
    const {user} = post
    return (
        <BlogLayout title={post.title} pageDescription={post.description}>
            <Container sx={{
                background: '#fff',
                mt: 5,
                borderRadius: '10px',
            }}>
                <Grid container columnSpacing={5} sx={{py: 3}}>
                    <Grid item xs={12} md={7}>
                        <PostSingleContent post={post}/>

                    </Grid>
                    <Grid item xs={12} md={5}>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'start',
                                flexWrap:'wrap',
                                p:3,
                            }}
                        >
                            <Avatar
                                src={user.image_profile}
                                sx={{
                                    width: '74px',
                                    height: '74px',
                                    border: 5,
                                    borderColor: 'error.main',
                                    mr: 1
                                }}
                            />
                            <Box>
                                <Typography component="p" variant="body2" color='textMuted.main'>
                                    Hello, I'm
                                </Typography>
                                <Typography
                                    component={"p"}
                                    variant={'h5'}
                                    sx={{fontWeight: "500"}}
                                >
                                    {user.first_name} {user.last_name}
                                </Typography>

                            </Box>

                            <Typography sx={{mt:3}}>{user.bio}</Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </BlogLayout>
    )
}


export const getStaticPaths = async () => {
// Todo: Obtener todos los slug de la bd
    return {
        paths: posts.map(({slug}) => ({
            params: {
                slug
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params}) => {
    const {slug = ''} = params

    const post = posts.find((post) => post.slug === slug)

    if (!post) {
        return {

            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            post,
            revalidate: 60 * 60 * 24
        }
    }


}

export default PostSingle