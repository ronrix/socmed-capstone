import React from "react";

import "../../../assets/styles/css/post.css";
import { ReactComponent as Like } from "../../../assets/icons/like.svg";
import { useSpring, animated } from "react-spring";

export default function Post({ post, onClick }) {
    const [state, toggle] = React.useState(false);
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 }
    });

    const [loading, setLoading] = React.useState(true);

    const handleLikeBtn = e => {
        toggle(!state);
        e.stopPropagation();
    };

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {loading ? (
                <div className="placeholder-loading">
                    <div className="ph-item">
                        <div className="ph-col-12">
                            <div className="ph-picture"></div>
                        </div>
                        <div className="ph-col-12">
                            <div className="ph-row">
                                <div className="ph-col-12 big"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="post-wrapper" onClick={() => onClick(post)}>
                    <div className="post-wrapper-header">
                        <div className="post-wrapper-header-info">
                            <span>
                                <img src={post.imgFile || require(`../../../assets/images/${post.imgPath}`)} alt="sample post" />
                                {post.username}
                            </span>
                            <p>{post.description}</p>
                        </div>
                        <animated.button
                            onClick={handleLikeBtn}
                            style={{
                                opacity: x.to({ range: [0, 1], output: [0.9, 1] }),
                                scale: x.to({
                                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                                })
                            }}
                            className={`${state && "liked"}`}
                        >
                            <Like />
                            {state ? "Liked" : "Like"}
                        </animated.button>
                    </div>
                    <div className="post-wrapper-post">
                        <img src={post.imgFile || require(`../../../assets/images/${post.imgPath}`)} alt="sample post" />
                    </div>
                </div>
            )}
        </>
    );
}
