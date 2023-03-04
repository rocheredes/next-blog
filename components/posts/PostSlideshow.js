import React from "react";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import styles from '../../styles/PostsSlideshow.module.css'
import {Button} from "@mui/material";

export const PostSlideshow = ({images}) => {
    return (
        <>

            <Slide
                easing="ease"
            >
                {
                    images.map(image => {
                        return (
                            <div className={styles['each-slide']} key={image}
                                 style={{overflow: "hidden"}}>
                                <img
                                    src={image}
                                    alt={image}
                                    style={{borderRadius: '5px',}}
                                />
                            </div>

                        )
                    })
                }
            </Slide>
        </>
    )
}