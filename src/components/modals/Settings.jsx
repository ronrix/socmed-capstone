import React from "react";

import { Formik, Field } from "formik";

import Notification from "./Notification";
import { changePasswordSchema } from "../../config/validation";
import "../../assets/styles/css/settings.css";

export default function Settings({ setShowSettingsModal }) {
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleCancel = props => {
        props.resetForm();
        setShowSettingsModal(false);
    };

    return (
        <Formik
            initialValues={{
                currentPass: "",
                newPass: "",
                confirmPass: ""
            }}
            onSubmit={(values, actions) => {
                actions.resetForm();
                actions.setSubmitting(false);
                setIsSubmitted(true);

                setTimeout(() => {
                    setIsSubmitted(false);
                }, 2000);
            }}
            validationSchema={changePasswordSchema}
        >
            {props => (
                <form onSubmit={props.handleSubmit} className="settings-container">
                    <Notification
                        show={isSubmitted}
                        notifBodyMsg="Successfully changing your password"
                        notifHeaderMsg="Success"
                        status="success"
                    />
                    <div className="settings-container-inside">
                        <h4>Change Password</h4>
                        <label>
                            Current password
                            <Field type="password" name="currentPass" value={props.values.currentPass} onChange={props.handleChange} />
                        </label>

                        <label>
                            New password
                            <Field
                                type="password"
                                name="newPass"
                                value={props.values.newPass}
                                onChange={props.handleChange}
                                className={`${props.touched.newPass && props.errors.newPass ? "error" : ""}`}
                            />
                            {props.touched.newPass && <span className="error">{props.errors.newPass}</span>}
                        </label>

                        <label>
                            Confirm new password
                            <Field
                                type="password"
                                name="confirmPass"
                                value={props.values.confirmPass}
                                onChange={props.handleChange}
                                className={`${props.touched.confirmPass && props.errors.confirmPass ? "error" : ""}`}
                            />
                            {props.touched.confirmPass && <span className="error">{props.errors.confirmPass}</span>}
                        </label>

                        <div className="btns">
                            <a href="##" className="cancel" onClick={() => handleCancel(props)}>
                                Cancel
                            </a>
                            <input type="submit" value="Save" className="save" />
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
}
