import React from "react";

import { ReactComponent as Image } from "../../../assets/icons/upload.svg";

import "../../../assets/styles/css/postform.css";

export default function PostForm() {
    const fileRef = React.useRef(null);
    return (
        <div className="post-form">
            <div className="input-file" onClick={() => fileRef.current.click()}>
                <input type="file" name="" ref={fileRef} />
                <Image />
            </div>
            <form className="post-description">
                <textarea name="" placeholder="Share your thoughts today."></textarea>
            </form>
        </div>
    );
}
