import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

BackToTop.propTypes = {

};

function BackToTop(props) {
    const [showScrollTop, setShowScrollTop] = useState(false)

    window.addEventListener('scroll', () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled >= 400) {
            setShowScrollTop(true)
        }
        else {
            setShowScrollTop(false)
        }
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <Box sx={{
            padding: '1rem',
            borderRadius: '50%',
            display: showScrollTop ? 'block' : 'none',
            position: 'fixed',
            bottom: '3rem',
            right: '4rem',
            backgroundColor: '#1976d2',
            color: '#fff',
            fontSize: '2rem',
            cursor: 'pointer'
        }}
            onClick={scrollToTop}>
            <KeyboardArrowUpIcon sx={{ fontSize: '3rem' }} />
        </Box>
    );
}

export default BackToTop;