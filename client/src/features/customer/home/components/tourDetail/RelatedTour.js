import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Paper } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import { tours } from '../../../../../fakeData';

RelatedTour.propTypes = {

};

function RelatedTour(props) {
    return (
        <Box sx={{ mt: 5 }}>
            <Box sx={{ color: '#0066d9', fontSize: '1.6rem', fontWeight: 'bold', borderLeft: '2px solid #0066d9', pl: 2 }}>Các Tour khác có thể bạn quan tâm</Box>
            <Box sx={{ mt: 1 }}>
                {tours.map(tour => {
                    return (
                        <Grid container key={tour.id} spacing={3} sx={{ mt: 0 }}>
                            <Grid item xs={3}>
                                <img src={tour.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} />
                            </Grid>
                            <Grid item xs={9}>
                                <Box sx={{ fontSize: '1.6rem', lineHeight: '2rem', cursor: 'pointer' }}>{tour.title}</Box>
                                <Box sx={{ fontSize: '1.6rem', mt: 1.5 }}>
                                    Price:
                                    <Box component="span" sx={{ fontSize: '1.8rem', fontWeight: 'bold', ml: 0.5 }}>
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tour.price)}
                                    </Box>
                                </Box>
                                <Box sx={{ fontSize: '1.6rem', display: 'flex', alignItems: 'center', mt: 1.5 }}>
                                    <EventAvailableIcon sx={{ fontSize: '2rem' }} />
                                    <Box>Khởi hành: {tour.time}</Box>
                                </Box>
                            </Grid>
                        </Grid>
                    )
                })}
            </Box >
        </Box >
    );
}

export default RelatedTour;