import React from "react";
import { Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../config/validation";

import "../../assets/styles/css/registration.css";
import Google from "../authentication-btns/Google";
import Facebook from "../authentication-btns/Facebook";

import { ReactComponent as FbIcon } from "../../assets/icons/facebook.svg";

import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    actions.setSubmitting(false);
                    navigate("/app");
                }}
                validationSchema={loginSchema}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <div className="form-wrapper">
                            <h1>LOGIN</h1>

                            <Google />
                            <Facebook FacebookIcon={FbIcon} />

                            <div className="absolute-or"></div>
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
                            <input type="submit" value="LOGIN" className="btn" />
                            <p>
                                Don't have an account yet? Sign up
                                <Link to="/signup" className="link">
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

export default Login;
