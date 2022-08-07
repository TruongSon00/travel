import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid } from '@mui/material';
import Program from './Program';
import Service from './Service';
import Regulations from './Regulations';

Planning.propTypes = {

};

function Planning(props) {
    const [plan, setPlan] = useState('program')

    return (
        <Box sx={{ mt: 2 }}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Button
                        variant={plan === 'program' ? 'text' : 'contained'}
                        fullWidth
                        onClick={() => setPlan('program')}
                        sx={{ fontSize: '1.4rem' }}
                    >Program</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant={plan === 'service' ? 'text' : 'contained'}
                        fullWidth
                        onClick={() => setPlan('service')}
                        sx={{ fontSize: '1.4rem' }}
                    >Service</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant={plan === 'regulations' ? 'text' : 'contained'}
                        fullWidth
                        onClick={() => setPlan('regulations')}
                        sx={{ fontSize: '1.4rem' }}
                    >Regulations</Button>
                </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
                {plan === 'program'
                    ? <Program />
                    : plan === 'service'
                        ? <Service />
                        : <Regulations />
                }
            </Box>
        </Box>
    );
}

export default Planning;