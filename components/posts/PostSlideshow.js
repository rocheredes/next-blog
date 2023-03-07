import React from "react";
import Carousel from "react-material-ui-carousel";
import {Box, CardMedia} from "@mui/material";

export const PostSlideshow = ({images}) => {
    return (
        <>

            <Carousel indicators={false}>
                {
                    images.map((image, index) => {
                        return (

                            <Box
                                key={index}
                                sx={{
                                    overflow: "hidden",

                                }}>
                                <CardMedia
                                    component={"img"}
                                    src={image}
                                    alt={image}
                                    sx={{
                                        width: "100%",
                                        borderRadius: '10px',
                                        height: {xs: "auto", md: '600px'}
                                    }}
                                />
                            </Box>
                        )
                    })
                }
            </Carousel>

        </>
    )
}