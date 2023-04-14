import React from "react";
import {Box, CardMedia, Chip, Typography} from "@mui/material";
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
        </>
    )
}