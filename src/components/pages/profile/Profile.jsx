import React from "react";
import CheckBox from "./CheckBox";
import Navigations from "../../Navigations";

import { Formik } from "formik";

import "../../../assets/styles/css/profile.css";
import { ReactComponent as Location } from "../../../assets/icons/location.svg";
import { ReactComponent as DocumentUpload } from "../../../assets/icons/documentupload.svg";
import { ReactComponent as Camera } from "../../../assets/icons/camera.svg";

import { sports, hobbies } from "../../../config/user-details";

export default function Profile() {
    const documentFileRef = React.useRef(null);
    const profileRef = React.useRef(null);
    const locationRef = React.useRef(null);

    const [file, setFile] = React.useState(null);
    const [moreInfo, _] = React.useState({ sports, hobbies });
    const [whats, setWhats] = React.useState({ sports: "", hobbies: "" });
    const [user, setUser] = React.useState(() => JSON.parse(localStorage.getItem("profile")));

    const handleAddInfo = (array, value, name) => {
        array.push(value);
        setWhats({ ...whats, [name]: "" });
    };

    const handleEditLocation = () => {
        locationRef.current.classList.add("edit");
        locationRef.current.disabled = false;
    };

    React.useEffect(() => {
        setUser(() => JSON.parse(localStorage.getItem("profile")));
    }, [moreInfo]);

    return (
        <Formik
            initialValues={{
                profilePicture: "",
                description: "",
                location: "",
                hobbies: [],
                sports: [],
                posts: []
            }}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                localStorage.setItem("profile", JSON.stringify(values));
                locationRef.current.classList.remove("edit");
                locationRef.current.disabled = true;
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <div className="profile-container">
                        <Navigations otherClass="prof-nav" active="profile" />
                        <div className="description">
                            <h3>Create your profile</h3>
                            <div className="head-profile">
                                <div className="head-profile-img-wrapper">
                                    <img src={user?.file || file || require("../../../assets/images/profile.png")} alt="profile" />
                                    <Camera onClick={() => profileRef.current.click()} />
                                    <input
                                        type="file"
                                        value={props.values.file}
                                        onChange={e => {
                                            setFile(URL.createObjectURL(e.target.files[0]));
                                            props.setFieldValue("profilePicture", e.currentTarget.files[0]);
                                        }}
                                        ref={profileRef}
                                    />
                                </div>
                                <div className="head-profile-txt">
                                    <h3>{localStorage.getItem("fullname")}</h3>
                                    <p>click the image above to upload your profile picture</p>
                                </div>
                            </div>
                            <div className="more-info">
                                <label htmlFor="">
                                    <span>Description</span>
                                    <textarea
                                        name="description"
                                        value={user?.description || props.values.description}
                                        onChange={props.handleChange}
                                        placeholder="Describe yourself here to impress everyone"
                                    ></textarea>
                                </label>
                                <div className="location">
                                    <h4 htmlFor="">Location</h4>
                                    <span>
                                        <Location />
                                        <textarea
                                            type="text"
                                            name="location"
                                            className="location-text"
                                            disabled
                                            ref={locationRef}
                                            onChange={props.handleChange}
                                            defaultValue={user?.location || props.values.location || "Palengke ng San Francisco, USA."}
                                        ></textarea>
                                        <input type="button" value="edit" onClick={handleEditLocation} />
                                    </span>
                                </div>
                                <h4 htmlFor="">What are your favourite sports?</h4>
                                <div className="checkbox-wrapper">
                                    {moreInfo.sports?.map((sport, key) => {
                                        return <CheckBox key={key} value={sport} onChange={props.handleChange} name="sports" />;
                                    })}
                                </div>
                                <label className="fw-bold">
                                    others
                                    <input
                                        type="text"
                                        name="sports"
                                        placeholder="Add sport to the lists"
                                        value={whats.sports}
                                        onChange={e => setWhats({ [e.target.name]: e.target.value })}
                                    />
                                    <input
                                        type="button"
                                        value="add"
                                        onClick={() => handleAddInfo(moreInfo.sports, whats.sports, "sports")}
                                        disabled={!whats.sports}
                                    />
                                </label>
                                <h4>What are your hobbies?</h4>
                                <div className="checkbox-wrapper">
                                    {moreInfo.hobbies?.map((sport, key) => {
                                        return <CheckBox key={key} value={sport} onChange={props.handleChange} name="hobbies" />;
                                    })}
                                </div>
                                <label className="fw-bold">
                                    others
                                    <input
                                        type="text"
                                        name="hobbies"
                                        placeholder="Add hobby to the lists"
                                        value={whats.hobbies}
                                        onChange={e => setWhats({ [e.target.name]: e.target.value })}
                                    />
                                    <input
                                        type="button"
                                        value="add"
                                        onClick={() => handleAddInfo(moreInfo.hobbies, whats.hobbies, "hobbies")}
                                        disabled={!whats.hobbies}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="posts">
                            <h4>
                                Upload your first photo
                                <span onClick={() => documentFileRef.current.click()}>
                                    click here <DocumentUpload />
                                    <input type="file" ref={documentFileRef} />
                                </span>
                            </h4>
                            <div className="img-post-wrapper">
                                <img src={require("../../../assets/images/model.jpg")} alt="profile" />
                            </div>
                            <div className="btns">
                                <input type="submit" value="Save" className="save" />
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    );
}
