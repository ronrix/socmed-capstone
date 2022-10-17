import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = response => {
    console.log(response);
};

export default function Google() {
    return (
        <GoogleLogin
            clientId="418009733136-s9bi4r5n3u9pkio67p2sk900bgcp8gk8.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="auth-btn"
        />
    );
}
