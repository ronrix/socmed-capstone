import React from "react";

import { ReactComponent as Image } from "../../../assets/icons/upload.svg";
import "../../../assets/styles/css/postform.css";

export default function PostForm() {
    const fileRef = React.useRef(null);

    const [postState, setPostState] = React.useState({
        imgFile: null,
        description: ""
    });

    React.useEffect(() => {}, []);

    return (
        <div className="post-form">
            <div className="input-file" onClick={() => fileRef.current.click()}>
                <input type="file" name="" ref={fileRef} value={postState.imgFile} />
                <Image />
            </div>
            <form className="post-description">
                <textarea name="" placeholder="Share your thoughts today."></textarea>
                <div className="btns">
                    <input type="button" className="cancel" value="Cancel" />
                    <input type="submit" className="submit" value="Post" />
                </div>
            </form>
        </div>
    );
}
