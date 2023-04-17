import React from "react";
import {Box, Button, CardMedia, Chip, Grid, Typography, TextField, FormControl} from "@mui/material";
import {CalendarMonthOutlined, VisibilityOutlined} from "@mui/icons-material";


export const PostSingleContent = ({post}) => {
    return (
        <>
            <Box>
                {post.tags.map(tag =>
                    <Chip
                        key={tag}
                        variant="filled"
                        size="small"
                        label={tag}
                        sx={{mr: 1}}/>
                )}

                <Typography
                    component="h1"
                    variant={'text-muted'}
                    sx={{fontWeight: 700, mt: 1}}>
                    {post.title}
                </Typography>

                <Box display="flex" align-items="center">
                    <Box display="flex" align-items="center">
                        <VisibilityOutlined/>
                        <Typography ml={1}>256k</Typography>
                    </Box>

                    <Box display="flex" align-items="center" ml={2}>
                        <CalendarMonthOutlined/>
                        <Typography ml={1}>{post.createdAt}</Typography>
                    </Box>

                </Box>

            </Box>

            <Box>
                <CardMedia
                    src={post.image}
                    component={"img"}
                    sx={{mt: 3, borderRadius: '10px'}}
                />

                <Typography
                    component={'p'}
                    variant={'body1'}
                    sx={{
                        mt: 3,
                        lineHeight: 1.5
                    }}>
                    {post.description}
                </Typography>

            </Box>


            <Box mt={3}>
                <Typography variant="h5" component="h5">
                    Leave a reply
                </Typography>
                <Typography component={"p"} variant={'body2'} mb={2}>
                    Your email address will not be published. Required fields are marked *
                </Typography>
                <form>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <FormControl fullWidth>
                                <TextField type="text" label="Name *"/>
                            </FormControl>
                        </Grid>
                        <Grid item md={6}>
                            <FormControl fullWidth>
                                <TextField type="email" label="Email *"/>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    multiline
                                    label="Your comment *"
                                    minRows={5}
                                />
                            </FormControl>
                        </Grid>


                    </Grid>

                    <Box sx={{mt: 3}} display='flex'>
                        <Button
                            type='submit'
                            color="primary"
                            size='large'>
                            <strong> Post comment</strong>
                        </Button>
                    </Box>

                </form>

            </Box>

        </>
    )
}