import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

FeedBack.propTypes = {
    feedback: PropTypes.object
};

function FeedBack({ feedback = {} }) {
    const stars = new Array(5)

    return (
        <Paper
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '20rem',
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
            }}
        >
            <Box sx={{ textAlign: 'center', padding: 1 }}>
                <Avatar
                    src={feedback.avatar || "https://i1.sndcdn.com/avatars-xZb8MS9peo3DljjZ-UJZM3g-t500x500.jpg"}
                    sx={{
                        width: '8rem',
                        height: '8rem',
                        margin: '0 auto',
                        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
                    }}
                />
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    {feedback.name || 'Hoàng Ka'}
                </Typography>
                <Box
                    variant='body2'
                    sx={{
                        fontSize: '1.4rem',
                        lineHeight: '1.4rem',
                        mb: 1
                    }}
                >
                    {feedback.content || 'hoang ka vô đối quá!'}
                </Box>
                <Box>
                    <StarIcon sx={{ color: '#daa15e', fontSize: '2.5rem' }} />
                    <StarIcon sx={{ color: '#daa15e', fontSize: '2.5rem' }} />
                    <StarIcon sx={{ color: '#daa15e', fontSize: '2.5rem' }} />
                    <StarIcon sx={{ color: '#daa15e', fontSize: '2.5rem' }} />
                    <StarIcon sx={{ color: '#daa15e', fontSize: '2.5rem' }} />
                </Box>
            </Box>
        </Paper>
    );
}

export default FeedBack;