import React from "react";
import CheckBox from "./CheckBox";
import Navigations from "../../Navigations";

import "../../../assets/styles/css/profile.css";
import { ReactComponent as Location } from "../../../assets/icons/location.svg";
import { ReactComponent as DocumentUpload } from "../../../assets/icons/documentupload.svg";

export default function Profile() {
    const documentFileRef = React.useRef(null);
    return (
        <div className="container">
            <Navigations otherClass="prof-nav" active="profile" />
            <div className="description">
                <h3>Create your profile</h3>
                <div className="head-profile">
                    <img src={require("../../../assets/images/model.jpg")} alt="profile" />
                    <div className="head-profile-txt">
                        <h3>Ronrix Lante</h3>
                        <p>click to upload your profile picture</p>
                    </div>
                </div>
                <form action="">
                    <label htmlFor="">
                        <span>Description</span>
                        <textarea placeholder="Describe yourself here to impress anynone"></textarea>
                    </label>
                    <div className="location">
                        <h4 htmlFor="">Location</h4>
                        <span>
                            <Location />
                            Palengke ng San Francisco, USA.
                            <a href="#">edit</a>
                        </span>
                    </div>
                    <h4 htmlFor="">What are your favourite sports?</h4>
                    <div className="checkbox-wrapper">
                        <div className="checkbox-wrapper-left">
                            <CheckBox text={"Basketball"} name="sports" />
                            <CheckBox text={"Volleyball"} name="sports" />
                            <CheckBox text={"Soccer"} name="sports" />
                            <CheckBox text={"Badminton"} name="sports" />
                        </div>
                        <div className="checkbox-wrapper-right">
                            <CheckBox text={"American Football"} name="sports" />
                            <CheckBox text={"Chess"} name="sports" />
                            <CheckBox text={"Other"} name="sports" />
                        </div>
                    </div>
                    <h4>What are your hobbies?</h4>
                    <CheckBox text={"Playing Games"} name="hobbies" />
                    <CheckBox text={"Singing"} name="hobbies" />
                    <CheckBox text={"Others"} name="hobbies" />
                </form>
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
                    <input type="button" value="Cancel" className="cancel" />
                    <input type="submit" value="Save" className="save" />
                </div>
            </div>
        </div>
    );
}
