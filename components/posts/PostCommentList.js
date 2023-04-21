import {Avatar, Box, Typography} from "@mui/material";
import React from "react";

export const PostCommentList = ({comments}) => {
    return (
        <>
            <Box display="flex" mb={5}>
                <Avatar
                    src={"/gallery/cat-gdf2e404cc_1920.jpg"}
                    sx={{mr: 1, width: 48, height: 48}}/>

                <Box>
                    <Typography component='h5' fontWeight={600}>Allen Smith</Typography>
                    <Typography component='small'>June 11, 2022 at 6:01 am</Typography>
                    <Typography component='span' ml={2} fontWeight={600}
                                sx={{display: "inline-block", cursor: "pointer"}}>Reply</Typography>
                    <Typography component='p' variant='body1' color="textMuted.main" mt={1}>Satisfied conveying a dependent contented he
                        gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered
                        dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in
                        do. </Typography>
                </Box>
            </Box>


            {/*<Box sx={{*/}
            {/*    display: "flex",*/}
            {/*    justifyContent: "start",*/}
            {/*    alignItems: "start",*/}
            {/*    mt: 2*/}
            {/*}}>*/}
            {/*    <Avatar*/}
            {/*        src={post.user.image_profile}*/}
            {/*        sx={{mr: 1, width: 48, height: 48}}/>*/}
            {/*    <div>*/}
            {/*        <Typography*/}
            {/*            sx={{fontWeight: "bolder"}}>*/}
            {/*            {post.user.first_name} {post.user.last_name}*/}
            {/*        </Typography>*/}

            {/*        <Typography>{post.createdAt}</Typography>*/}
            {/*    </div>*/}
            {/*</Box>*/}


        </>
    )


}