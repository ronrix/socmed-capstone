import React from "react";

import { Field, Formik } from "formik";
import Notification from "./Notification";
import { ReactComponent as Photo } from "../../assets/icons/upload.svg";

import "../../assets/styles/css/post-form-modal.css";

export default function PostFormModal({ setCarouselItemsState, setShowPostFormModal }) {
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

    React.useEffect(() => {
    }, [showNoficationModal]);

    return (
        <Formik
            initialValues={{
                file: [],
                description: ""
            }}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                actions.resetForm();

                setShowNoticationModal(true);
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

                setTimeout(() => {
                    setShowNoticationModal(false);
                }, 5000);
            }}
        >
            {props => (
                <>
                    <Notification
                        show={showNoficationModal}
                        notifBodyMsg="Successfully saving your profile"
                        notifHeaderMsg="Success"
                        status={"success"}
                    />
                    <form onSubmit={props.handleSubmit} className="modal-container">
                        <div className="modal-container-inside" onClick={e => e.stopPropagation()}>
                            <div className="modal-container-inside-start">
                                <h3>Upload new photo</h3>

                                <Field
                                    type="file"
                                    name="file"
                                    value={props.values.imgFile}
                                    onChange={e => {
                                        props.setFieldValue("file", e.currentTarget.files[0]);
                                        setFile(e.currentTarget.files[0]);
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
                                    <Field
                                        as="textarea"
                                        name="description"
                                        placeholder="what's your thoughts?"
                                        value={props.values.description}
                                        onChange={props.handleChange}
                                    />
                                </label>
                                <input type="button" value="Cancel" className="cancel" onClick={() => handleCancel(props)} />
                                <input type="submit" value="Post" className="submit" />
                            </div>
                        </div>
                    </form>
                </>
            )}
        </Formik>
    );
}
