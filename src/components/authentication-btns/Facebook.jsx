import React from "react";
import FacebookLogin from "react-facebook-login";

export default function Facebook({ FacebookIcon }) {
    const responseFacebook = response => {
        console.log(response);
    };

    return (
        <FacebookLogin
            appId="5974247595953761"
            fields="name,email,picture"
            callback={responseFacebook}
            icon={<FacebookIcon />}
			cssClass="fb-btn"
        />
    );
}
