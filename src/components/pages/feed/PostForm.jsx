import React from "react";

import { Formik, Field } from "formik";
import { ReactComponent as Image } from "../../../assets/icons/upload.svg";

import "../../../assets/styles/css/postform.css";

export default function PostForm({ formSubmit }) {
    const fileRef = React.useRef(null);
    const [file, setFile] = React.useState(null);

    const handleCancel = props => {
        props.resetForm();
        setFile(null);
    };

    React.useEffect(() => {}, []);

    return (
        <Formik
            initialValues={{ description: "", file: [] }}
            onSubmit={(values, actions) => {
                // insert new post
                formSubmit(values);
                actions.resetForm();
                actions.setSubmitting(false);
                setFile(null);
            }}
        >
            {props => (
                <form className="post-form" onSubmit={props.handleSubmit}>
                    <div className="input-file" onClick={() => fileRef.current.click()}>
                        <Field
                            type="file"
                            name="file"
                            innerRef={fileRef}
                            value={props.values.imgFile}
                            onChange={e => {
                                setFile(URL.createObjectURL(e.target.files[0]));
                                props.setFieldValue("file", e.currentTarget.files[0]);
                            }}
                        />
                        <Image />
                    </div>
                    <div className="post-description">
                        <Field
                            as="textarea"
                            name="description"
                            placeholder="Share your thoughts today."
                            value={props.values.description}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            required
                        />
                        <div className="post-form-img-wrapper">{file && <img src={file} alt="preview of pic" />}</div>

                        <div className="btns" style={{ display: props.values.description && props.values.file ? "flex" : "none" }}>
                            <input type="button" className="cancel" value="Cancel" onClick={() => handleCancel(props)} />
                            <input type="submit" className="submit" value="Post" disabled={!props.isValid} />
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
}
