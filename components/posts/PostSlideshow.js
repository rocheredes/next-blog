import React from "react";
import Carousel from "react-material-ui-carousel";
import {Box, CardMedia} from "@mui/material";

export const PostSlideshow = ({images}) => {
    return (
        <>

            <Carousel indicators={false}>
                {
                    images.map(image => {
                        return (

                            <Box sx={{
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

                            // <div key={image}
                            //      style={{overflow: "hidden", borderRadius: '5px'}}>
                            //     <img
                            //         src={image}
                            //         alt={image}
                            //         style={{borderRadius: '5px'}}
                            //     />
                            // </div>

                        )
                    })
                }
            </Carousel>

            {/*<Slide*/}
            {/*    easing="ease"*/}
            {/*>*/}
            {/*    {*/}
            {/*        images.map(image => {*/}
            {/*            return (*/}
            {/*                <div className={styles['each-slide']} key={image}*/}
            {/*                     style={{overflow: "hidden"}}>*/}
            {/*                    <img*/}
            {/*                        src={image}*/}
            {/*                        alt={image}*/}
            {/*                        style={{borderRadius: '5px',}}*/}
            {/*                    />*/}
            {/*                </div>*/}

            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</Slide>*/}
        </>
    )
}