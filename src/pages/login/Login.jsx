import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/reducers/authSlice';
import { useFormik } from 'formik';
import * as Yup from "yup";
import stylesheet from './login.module.css';

const Login = () => {
    const dispatch = useDispatch();
    const { userDetail, isLoading } = useSelector((state) => state.auth);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name:"Manoj",
            bio:"Developer"
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            dispatch(userLogin(values));
        }
    })


    if (userDetail) {
        return <Navigate to="/" replace />; // Redirect to home if already logged in
    }

    return (
        <div className={stylesheet.container}>
            <form className={stylesheet.loginForm} onSubmit={formik.handleSubmit}>
                <h2>Login</h2>
                <div className={stylesheet.input_group}>
                    <label>Email</label>
                    <input
                        type="email"
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                    />
                </div>
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}
                <div className={stylesheet.input_group}>
                    <label>Password</label>
                    <input
                        type="password"
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                ) : null}
                <button type='submit' disabled={isLoading} className={stylesheet.login_button}>
                    {isLoading ? 'Authenticating...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default Login;
