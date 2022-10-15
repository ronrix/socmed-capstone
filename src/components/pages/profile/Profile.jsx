import React from "react";
import CheckBox from "./CheckBox";
import Navigations from "../../Navigations";

import { Formik } from "formik";
import { useSpringCarousel } from "react-spring-carousel";

import "../../../assets/styles/css/profile.css";
import { ReactComponent as Location } from "../../../assets/icons/location.svg";
import { ReactComponent as DocumentUpload } from "../../../assets/icons/documentupload.svg";
import { ReactComponent as Camera } from "../../../assets/icons/camera.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/icons/arrowleft2.svg";
import { ReactComponent as ArrowRight } from "../../../assets/icons/arrowright2.svg";

import { sports, hobbies } from "../../../config/user-details";
import { carouselItems } from "../../../config/carousel-items";
import PostFormModal from "../../modals/PostFormModal";
import Notification from "../../modals/Notification";

export default function Profile() {
    const profileRef = React.useRef(null);
    const locationRef = React.useRef(null);

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
        items: carouselItems.map(i => ({
            id: i.id,
            renderItem: <img src={require(`../../../assets/images/${i.img}`)} alt="profile" />
        }))
    });

    const handleEditLocation = () => {
        locationRef.current.classList.add("edit");
        locationRef.current.disabled = false;
    };

    const handleAddPostImg = () => {
        setShowPostFormModal(true);
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
                setShowNoticationModal(true);

                setTimeout(() => {
                    setShowNoticationModal(false);
                }, 2000);
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
                        status={"error"}
                    />

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
                                    Upload new photo
                                    <span onClick={handleAddPostImg}>
                                        click here <DocumentUpload />
                                    </span>
                                </h4>
                                <div className="img-post-wrapper">
                                    {/* <img src={require("../../../assets/images/model.jpg")} alt="profile" /> */}
                                    {carouselFragment}
                                    <button onClick={slideToPrevItem} className="arrow-left">
                                        <ArrowLeft />
                                    </button>
                                    <button onClick={slideToNextItem} className="arrow-right">
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
