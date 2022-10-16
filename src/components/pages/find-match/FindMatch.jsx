import React from "react";
import Header from "../../Header";
import Navigations from "../../Navigations";
import Loading from "./Loading";
import MatchInfo from "./MatchInfo";

import { useSpring, animated } from "react-spring";
import { useParams } from "react-router-dom";

// icons
import { ReactComponent as Details } from "../../../assets/icons/firstline.svg";
import { ReactComponent as Description } from "../../../assets/icons/information.svg";
import { ReactComponent as Location } from "../../../assets/icons/location.svg";
import { ReactComponent as Like } from "../../../assets/icons/like.svg";
import { ReactComponent as Search } from "../../../assets/icons/searchfavorite1.svg";
import { ReactComponent as More } from "../../../assets/icons/more.svg";

import "../../../assets/styles/css/feed.css";
import { users } from "../../../config/users";

export default function FindMatch() {
    const [loading, setLoading] = React.useState(true);
    const [state, toggle] = React.useState(false);
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 }
    });
    const params = useParams();
    const [randomUser, setRandomUser] = React.useState({});

    const handleSearch = () => {
        const randomId = Math.floor(Math.random() * users.length + 1);
        setRandomUser(() => users.find(user => user.id === randomId));

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    React.useEffect(() => {
        // check if id param is present if not do a random pick
        if (params.id) {
            setRandomUser(users.find(user => user.id === parseInt(params.id)));
        } else {
            handleSearch();
        }

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [params]);

    return (
        <div className="feed">
            <div className="container">
                <Header />
                <div className="inside-container">
                    <Navigations active="find-match" />
                    <div className="find-match">
                        <span className="space"></span>
                        {loading ? (
                            <Loading />
                        ) : (
                            <>
                                <div className="match">
                                    <div className="match-img-wrapper">
                                        <h4>We have found your match!</h4>
                                        <img src={require(`../../../assets/images/${randomUser.posts[0].img}`)} alt="" />
                                    </div>
                                    <div className="match-info">
                                        <MatchInfo
                                            icon={<Details />}
                                            title={"Details"}
                                            desc={
                                                <>
                                                    <p>{randomUser.username}</p>
                                                    <p>{randomUser.birthday}</p>
                                                </>
                                            }
                                        />
                                        <MatchInfo
                                            icon={<Description />}
                                            title={"Description"}
                                            desc={
                                                <>
                                                    <p>{randomUser.description}</p>
                                                </>
                                            }
                                        />
                                        <MatchInfo icon={<Location />} title={"Location"} desc={<p>{randomUser.location}</p>} />
                                        <MatchInfo icon={<More />} title={"Hobbies"} desc={<p>{JSON.stringify(randomUser.hobbies)}</p>} />
                                        <MatchInfo
                                            icon={<More />}
                                            title={"Favourite Sports"}
                                            desc={<p>{JSON.stringify(randomUser.sports)}</p>}
                                        />

                                        <animated.button
                                            onClick={() => toggle(!state)}
                                            style={{
                                                opacity: x.to({ range: [0, 1], output: [0.9, 1] }),
                                                scale: x.to({
                                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                                })
                                            }}
                                        >
                                            <Like />
                                            {state ? "Liked" : "Like"}
                                        </animated.button>
                                        <p className="match-info-muted">You have to like this person to start chatting.</p>
                                        <button className="search-again" onClick={handleSearch}>
                                            <Search />
                                            Search Again
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
