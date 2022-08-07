import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

import Slide1 from '../../../../assets/slide1.mp4';
import Slide2 from '../../../../assets/slide2.mp4';
import Slide3 from '../../../../assets/slide3.mp4';
import Slide4 from '../../../../assets/slide4.mp4';

Slide.propTypes = {

};

const videos = [Slide1, Slide2, Slide3, Slide4];
// const delay = 30000;

function Slide(props) {
    const [index, setIndex] = useState(0);
    // const timeoutRef = useRef(null);
    // const videoRef = useRef(null);

    // function resetTimeout() {
    //     if (timeoutRef.current) {
    //         clearTimeout(timeoutRef.current);
    //     }
    // }

    // useEffect(() => {
    //     resetTimeout();
    //     timeoutRef.current = setTimeout(
    //         () =>
    //             setIndex((prevIndex) =>
    //                 prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    //             ),
    //         delay
    //     );

    //     return () => {
    //         resetTimeout();
    //     };
    // }, [index]);

    return (
        <Box sx={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
            <Box
                sx={{
                    transform: `translate3d(${-index * 100}%, 0, 0)`,
                    width: '100%',
                    height: '100%',
                    whiteSpace: 'nowrap',
                    transition: 'ease 1000ms'
                }}
            >
                {videos.map((video, index) => (
                    <video
                        // ref={videoRef}
                        key={index}
                        src={video}
                        loop
                        autoPlay
                        muted
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'inline-block',
                            objectFit: 'cover'
                        }}></video>
                ))}
            </Box>

            <Box
                sx={{
                    textAlign: 'center',
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                {videos.map((_, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: 'inline-block',
                            height: '20px',
                            width: '20px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            margin: '15px 7px 0px',
                            backgroundColor: index === idx ? '#6a0dad' : '#c4c4c4',
                        }}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></Box>
                ))}
            </Box>
        </Box >
    );
}

export default Slide;