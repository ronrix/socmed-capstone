import React from "react";

import { useSpring, animated } from "react-spring";
import { ReactComponent as Like } from "../../assets/icons/like.svg";

import "../../assets/styles/css/preview.css";

export default function PostPreview({ post, setPostPreview }) {
    const [state, toggle] = React.useState(false);
    const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 }
    });

    const [close, setClose] = React.useState(false);
    const modalRef = React.useRef(null);
    const handleCloseModal = () => {
        modalRef.current.style.transform = "scale(0)";
        setClose(true);
        setPostPreview(null);
    };

    React.useEffect(() => {
        setClose(false);
    }, [close]);

    return (
        <div ref={modalRef} className="post-preview" style={{ transform: post && "scale(1)" }} onClick={handleCloseModal}>
            <div className="post-preview-inside" onClick={e => e.stopPropagation()}>
                <img src={post?.imgFile || require(`../../assets/images/model.jpg`)} alt="sample post" />

                <div className="post-preview-inside-info">
                    <div className="post-preview-inside-info-header">
                        <img src="" alt="" />
                        {post?.username}
                    </div>
                    <div className="post-preview-inside-info-body">
                        <p>{post?.description}</p>

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
                        <h6>other photos</h6>
                        <div className="post-preview-inside-info-body-img-wrapper">
                            <div className="img">
                                <img src={require("../../assets/images/model.jpg")} alt="" />
                            </div>
                            <div className="img">
                                <img src={require("../../assets/images/model.jpg")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
