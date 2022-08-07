import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Contact from '../../../../assets/contact.jpeg';

FeedBackForm.propTypes = {

};

function FeedBackForm(props) {
    const schema = yup.object().shape({
        name: yup.string().required('please enter your name')
            .min(6, 'Please enter at least 6 characters'),

        email: yup.string().required('please enter your email')
            .email('Must be a valid email').max(255),

        proplem: yup.string().required('please enter your proplem'),

        number: yup.number().required('please enter your phone number')
            .min(1000000000, "Phone number must be 10 characters")
            .max(9999999999, "Phone number must be 10 characters"),
        feedback: yup.string().required('please enter your feedback')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => console.log(data);

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <img src={Contact} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Grid>
                <Grid item md={8} xs={12}>
                    <Paper sx={{ padding: 2 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        {...register("name")}
                                        InputProps={{ style: { fontSize: '1.6rem' } }}
                                        InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                        error={!!errors.name?.message}
                                    />
                                    <Typography
                                        sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', color: 'red', ml: 1 }}
                                    >
                                        {errors.name?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        {...register("email")}
                                        InputProps={{ style: { fontSize: '1.6rem' } }}
                                        InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                        error={!!errors.email?.message}
                                    />
                                    <Typography
                                        sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', color: 'red', ml: 1 }}
                                    >
                                        {errors.email?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Vấn đề cần cải thiện"
                                        {...register("proplem")}
                                        InputProps={{ style: { fontSize: '1.6rem' } }}
                                        InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                        error={!!errors.proplem?.message}
                                    />
                                    <Typography
                                        sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', color: 'red', ml: 1 }}
                                    >
                                        {errors.proplem?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Telephone number"
                                        {...register("number")}
                                        InputProps={{ style: { fontSize: '1.6rem' } }}
                                        InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                        error={!!errors.number?.message}
                                    />
                                    <Typography
                                        sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', color: 'red', ml: 1 }}
                                    >
                                        {errors.number?.message}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Nhận xét đánh giá..."
                                        {...register("feedback")}
                                        InputProps={{ style: { fontSize: '1.6rem' } }}
                                        InputLabelProps={{ style: { fontSize: '1.6rem' } }}
                                        error={!!errors.feedback?.message}
                                        multiline
                                        rows={4}
                                    />
                                    <Typography
                                        sx={{ fontSize: '1.2rem', lineHeight: '1.2rem', color: 'red', ml: 1 }}
                                    >
                                        {errors.feedback?.message}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Button fullWidth variant="contained" sx={{ mt: 2, fontSize: '1.8rem', fontWeight: 'bold' }} type="submit">Send</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FeedBackForm;