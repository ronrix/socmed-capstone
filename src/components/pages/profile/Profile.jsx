import React from "react";
import CheckBox from "./CheckBox";

import { Formik, Field } from "formik";
import { useSpringCarousel } from "react-spring-carousel";

import "../../../assets/styles/css/profile.css";
import { ReactComponent as Location } from "../../../assets/icons/location.svg";
import { ReactComponent as DocumentUpload } from "../../../assets/icons/documentupload.svg";
import { ReactComponent as Camera } from "../../../assets/icons/camera.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrowleft2.svg";
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrowright2.svg";
import { ReactComponent as Cake } from "../../../assets/icons/cake.svg";

import { sports, hobbies } from "../../../config/user-details";
import { carouselItems } from "../../../config/carousel-items";
import PostFormModal from "../../modals/PostFormModal";
import Notification from "../../modals/Notification";

export default function Profile() {
    const profileRef = React.useRef(null);

    const [disableLoc, setDisableLoc] = React.useState(true);
    const [file, setFile] = React.useState(null);
    const [showPostFormModal, setShowPostFormModal] = React.useState(false);
    const [moreInfo, _] = React.useState({ sports, hobbies });
    const [whats, setWhats] = React.useState({ sports: "", hobbies: "" });
    const [user, setUser] = React.useState(() => JSON.parse(localStorage.getItem("profile")));
    const [carouselItemsState, setCarouselItemsState] = React.useState(carouselItems);
    const [showNoficationModal, setShowNoticationModal] = React.useState(false);

    const handleAddInfo = (array, value, name) => {
        array.push(value);
        setWhats({ ...whats, [name]: "" });
    };

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        items: carouselItemsState.map(i => ({
            id: i.id,
            renderItem: (
                <div className="img">
                    <img src={i.file || require(`../../../assets/images/${i.img}`)} alt="profile" />
                    <p>{i.description}</p>
                </div>
            )
        }))
    });

    const handleEditLocation = () => {
        setDisableLoc(false);
    };

    const handleAddPostImg = () => {
        setShowPostFormModal(true);
    };

    React.useEffect(() => {
        setUser(() => JSON.parse(localStorage.getItem("profile")));
    }, [moreInfo, disableLoc]);

    return (
        <Formik
            initialValues={{
                profilePicture: "",
                description: "",
                location: "",
                bday: "",
                hobbies: [],
                sports: [],
                posts: []
            }}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                localStorage.setItem("profile", JSON.stringify(values));
                setShowNoticationModal(true);
                setDisableLoc(false);

                setTimeout(() => {
                    setShowNoticationModal(false);
                }, 5000);
            }}
        >
            {props => (
                <>
                    {showPostFormModal && (
                        <PostFormModal setCarouselItemsState={setCarouselItemsState} setShowPostFormModal={setShowPostFormModal} />
                    )}

                    <Notification
                        show={showNoficationModal}
                        notifBodyMsg="Successfully saving your profile"
                        notifHeaderMsg="Success"
                        status={"success"}
                    />

                    <form onSubmit={props.handleSubmit}>
                        <div className="profile-container">
                            <div className="description">
                                <h3>Create your profile</h3>
                                <div className="head-profile">
                                    <div className="head-profile-img-wrapper">
                                        <img src={user?.file || file || require("../../../assets/images/profile.png")} alt="profile" />
                                        <Camera onClick={() => profileRef.current.click()} />
                                        <Field
                                            type="file"
                                            value={props.values.file}
                                            onChange={e => {
                                                setFile(URL.createObjectURL(e.target.files[0]));
                                                props.setFieldValue("profilePicture", e.currentTarget.files[0]);
                                            }}
                                            innerRef={profileRef}
                                        />
                                    </div>
                                    <div className="head-profile-txt">
                                        <h3>{localStorage.getItem("fullname") || "Ronrix Lante"}</h3>
                                        <p>click the image to upload your profile picture</p>
                                    </div>
                                </div>
                                <div className="more-info">
                                    <label>
                                        <span>Description</span>
                                        <Field
                                            as="textarea"
                                            name="description"
                                            value={user?.description || props.values.description}
                                            onChange={props.handleChange}
                                            placeholder="Describe yourself here to impress everyone"
                                        />
                                    </label>
                                    <div className="location">
                                        <h4 htmlFor="">Location</h4>
                                        <span>
                                            <Location />
                                            <Field
                                                as="textarea"
                                                name="location"
                                                className={`location-text ${!disableLoc ? "edit" : ""}`}
                                                disabled={disableLoc}
                                                onChange={props.handleChange}
                                                value={user?.location || props.values.location || "Palengke ng San Francisco, USA."}
                                            />
                                            <input type="button" value="edit" onClick={handleEditLocation} />
                                        </span>
                                    </div>
                                    <div className="bday">
                                        <h4 htmlFor="">Birthday</h4>
                                        <span>
                                            <Cake />
                                            <Field
                                                type="date"
                                                name="bday"
                                                value={user?.bday || props.values.bday}
                                                onChange={props.handleChange}
                                            />
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
                                    Upload new photo
                                    <span onClick={handleAddPostImg}>
                                        click here <DocumentUpload />
                                    </span>
                                </h4>
                                <div className="img-post-wrapper">
                                    {carouselFragment}
                                    <button type="button" onClick={slideToPrevItem} className="arrow-left">
                                        <ArrowLeft />
                                    </button>
                                    <button type="button" onClick={slideToNextItem} className="arrow-right">
                                        <ArrowRight />
                                    </button>
                                </div>
                                <div className="btns">
                                    <input type="submit" value="Save" className="save" />
                                </div>
                            </div>
                        </div>
                    </form>
                </>
            )}
        </Formik>
    );
}
