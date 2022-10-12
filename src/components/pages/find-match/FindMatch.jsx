import React from "react";
import Header from "../../Header";
import Navigations from "../../Navigations";
import Loading from "./Loading";
import MatchInfo from "./MatchInfo";

// icons
import { ReactComponent as Details } from "../../../assets/icons/firstline.svg";
import { ReactComponent as Description } from "../../../assets/icons/information.svg";
import { ReactComponent as Location } from "../../../assets/icons/location.svg";
import { ReactComponent as Like } from "../../../assets/icons/like.svg";
import { ReactComponent as More } from "../../../assets/icons/more.svg";

import "../../../assets/styles/css/feed.css";

export default function FindMatch() {
    const [loading, setLoading] = React.useState(false);

    return (
        <div class="feed">
            <div className="container">
                <Header />
                <div className="inside-container">
                    <Navigations active="find-match" />
                    <div className="find-match">
                        <span className="space"></span>
                        {loading ? (
                            <Loading />
                        ) : (
                            <div className="match">
                                <div className="match-img-wrapper">
                                    <h4>We have found your match!</h4>
                                    <img src={require("../../../assets/images/model.jpg")} alt="" />
                                </div>
                                <div className="match-info">
                                    <MatchInfo
                                        icon={<Details />}
                                        title={"Details"}
                                        desc={
                                            <>
                                                <p>Her Name</p>
                                                <p>Birthday 19, 2000</p>
                                            </>
                                        }
                                    />
                                    <MatchInfo
                                        icon={<Description />}
                                        title={"Description"}
                                        desc={
                                            <>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus velit rem dicta tempora
                                                    amet omnis ex explicabo inventore totam facere.
                                                </p>
                                            </>
                                        }
                                    />
                                    <MatchInfo icon={<Location />} title={"Location"} desc={<p>purok purokan philippines</p>} />
                                    <MatchInfo icon={<More />} title={"Hobbies"} desc={<p>hobby1, hobby2, hobby3</p>} />
                                    <MatchInfo icon={<More />} title={"Favourite Sports"} desc={<p>sport 1, sport 2</p>} />

                                    <button>
                                        <Like />
                                        Like
                                    </button>
                                    <p className="match-info-muted">You have to like this person to start chatting.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
