import React from "react";

import * as yup from "yup";
import { Field, Formik } from "formik";
import Notification from "./Notification";
import { ReactComponent as Photo } from "../../assets/icons/upload.svg";

import "../../assets/styles/css/post-form-modal.css";

export default function PostFormModal({ setCarouselItemsState, setShowPostFormModal, handlePostSubmit }) {
    const documentFileRef = React.useRef(null);
    const [fileState, setFile] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [showNoficationModal, setShowNoticationModal] = React.useState(false);

    const handleCancel = props => {
        props.resetForm();
        setShowPostFormModal(false);
    };

    const handleResetFile = props => {
        props.setFieldValue("file", []);
        props.resetForm();
        setLoading(false);
        documentFileRef.current.value = null;
        setFile(null);
    };

    const handleSubmit = (values, actions) => {
        if (!fileState) {
            return;
        }

        actions.setSubmitting(false);
        actions.resetForm();

        setShowNoticationModal(true);

        handlePostSubmit(values);

        documentFileRef.current.value = null;
        setFile(null);
        setCarouselItemsState(prevState => [
            ...prevState,
            {
                id: prevState[0].id,
                img: values.file.pathname,
                file: URL.createObjectURL(values.file),
                description: values.description
            }
        ]);
    };

    React.useEffect(() => {}, [showNoficationModal]);

    return (
        <Formik
            initialValues={{
                file: [],
                description: ""
            }}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
            validationSchema={yup.object({
                description: yup.string().required("Please input your post description").max(200)
            })}
        >
            {props => (
                <>
                    <Notification
                        setShowNoticationModal={setShowNoticationModal}
                        show={showNoficationModal}
                        notifBodyMsg="Your post is now out to the public"
                    />

                    <form onSubmit={props.handleSubmit} className="modal-container">
                        <div className="modal-container-inside" onClick={e => e.stopPropagation()}>
                            <div className="modal-container-inside-start">
                                <h3>Upload new photo</h3>
                                {!fileState && props.touched.file ? <p className="error">Image file is required</p> : null}
                                <Field
                                    type="file"
                                    name="file"
                                    value=""
                                    onChange={e => {
                                        props.setFieldValue("file", e.currentTarget.files[0]);
                                        setFile(e.currentTarget.files[0]);
                                        setLoading(true);

                                        setTimeout(() => {
                                            setLoading(false);
                                        }, 3000);
                                    }}
                                    innerRef={documentFileRef}
                                />

                                <div className="modal-container-inside-start-btns">
                                    {fileState && (
                                        <button type="button" className="cancel" onClick={() => handleResetFile(props)}>
                                            Cancel
                                        </button>
                                    )}
                                </div>

                                <div className="modal-container-inside-start-img-wrapper">
                                    {loading ? (
                                        <div className="ph-item">
                                            <div className="ph-col-12">
                                                <div className="ph-picture"></div>
                                            </div>
                                        </div>
                                    ) : fileState ? (
                                        <img src={URL.createObjectURL(fileState) || require("../../assets/images/model-1.jpg")} alt="" />
                                    ) : (
                                        <>
                                            <Photo onClick={() => documentFileRef.current.click()} />
                                            <span>click to upload file</span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="modal-container-inside-end">
                                <label>
                                    Description
                                    {props.touched && props.errors.description ? <p className="error">{props.errors.description}</p> : null}
                                    <Field
                                        as="textarea"
                                        name="description"
                                        placeholder="what's your thoughts?"
                                        value={props.values.description}
                                        onChange={props.handleChange}
                                        className={`${props.errors.description && props.touched ? "error-border" : ""}`}
                                        maxLength={200}
                                    />
                                    <span className="description-length">{props.values.description.length}/200</span>
                                </label>
                                <input type="button" value="Cancel" className="cancel" onClick={() => handleCancel(props)} />
                                <input type="submit" value="Post" className="submit" disabled={!props.isValid} />
                            </div>
                        </div>
                    </form>
                </>
            )}
        </Formik>
    );
}
