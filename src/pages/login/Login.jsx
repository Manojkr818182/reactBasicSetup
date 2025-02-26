import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/reducers/authSlice';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { TextField, Button, Container, Typography, CircularProgress, Card, Link } from '@mui/material';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const { userDetail, isLoading } = useSelector((state) => state.auth);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: "Manoj",
            bio: "Developer"
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            dispatch(userLogin(values));
        }
    });

    if (userDetail) {
        return <Navigate to="/" replace />;
    }

    return (
        <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Card sx={{ width: 420, p: 3, textAlign: "center", boxShadow: 3 }}>
                <form onSubmit={formik.handleSubmit}>
                    <Typography variant="h4" gutterBottom>Login</Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        disabled={isLoading}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Password"
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        disabled={isLoading}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isLoading}
                        sx={{ mt: 2, px:3 }}
                    >
                        {isLoading ? <CircularProgress size={24} /> : 'Login'}
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        <Link href="/forgot-password">Forgot Password?</Link>
                    </Typography>
                </form>
            </Card>
        </Container>
    );
};

export default Login;
