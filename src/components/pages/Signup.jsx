import React from "react";
import { Field, Formik } from "formik";
import { registerSchema } from "../../config/validation";
import { useNavigate } from "react-router-dom";

import "../../assets/styles/css/registration.css";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";

import { Link } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <Formik
                initialValues={{
                    fullname: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    localStorage.setItem("fullname", values.fullname);
                    actions.setSubmitting(false);
                    actions.resetForm();
                    navigate("/app/profile");
                }}
                validationSchema={registerSchema}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <div className="form-wrapper">
                            <h1>Register</h1>
                            <a href="#something" className="btn google">
                                <Google className="me-3" />
                                Sign in with Google
                            </a>
                            <a href="#something" className="btn fb">
                                <Facebook className="me-3" />
                                Sign in with facebook
                            </a>
                            <div className="absolute-or"></div>
                            <label htmlFor="fullname">
                                Full Name
                                <Field
                                    id="fullname"
                                    type="text"
                                    name="fullname"
                                    className={`${props.touched.fullname && props.errors.fullname ? "error" : ""}`}
                                />
                                {props.touched.fullname && <span className="error">{props.errors.fullname}</span>}
                            </label>
                            <label htmlFor="email">
                                Email Address
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`${props.touched.email && props.errors.email ? "error" : ""}`}
                                />
                                {props.touched.email && <span className="error">{props.errors.email}</span>}
                            </label>
                            <label htmlFor="password">
                                Password
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    className={`${props.touched.password && props.errors.password ? "error" : ""}`}
                                />
                                {props.touched.password && <span className="error">{props.errors.password}</span>}
                            </label>
                            <label htmlFor="confirm-password">
                                Confirm Password
                                <Field
                                    id="confirm-password"
                                    name="confirmPassword"
                                    type="password"
                                    className={`${props.touched.confirmPassword && props.errors.confirmPassword ? "error" : ""}`}
                                />
                                {props.touched.confirmPassword && <span className="error">{props.errors.confirmPassword}</span>}
                            </label>
                            <input type="submit" value="LOGIN" className="btn" />
                            <p>
                                Don't have an account yet? Sign in
                                <Link to="/login" className="link">
                                    here
                                </Link>
                            </p>
                        </div>
                    </form>
                )}
            </Formik>

            <div className="social-media-bg"></div>
        </div>
    );
};

export default Signup;
