import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { plan } from '../../../../../fakeData';

Program.propTypes = {

};

function Program(props) {

    return (
        <Box>
            {plan.content.map(data => {
                return (
                    <Box sx={{ mt: 2 }}>
                        <Box sx={{
                            fontSize: '1.8rem',
                            lineHeight: '1.8rem',
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                            color: '#B22222'
                        }}>Day {data.day}: {plan.title} </Box>
                        <Box sx={{
                            fontSize: '1.5rem',
                            lineHeight: '1.6rem',
                            color: '#444',
                            mt: 1
                        }}>{data.contentDetail}</Box>
                        <Box sx={{ fontSize: '1.6rem', mt: 2 }}>
                            <Box component='span' sx={{ fontWeight: 'bold' }}>Note: </Box>
                            <Box component='span' sx={{ fontSize: '1.5rem', color: '#444' }}>{data.note}</Box>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    );
}

export default Program;