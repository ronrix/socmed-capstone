import React from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

import { useNavigate } from "react-router-dom";

export default function Google() {
    const navigate = useNavigate();

    const responseGoogle = response => {
        console.log(response);
        localStorage.setItem("socmed-profile", JSON.stringify(response.profileObj));
        navigate("/app");
    };

    React.useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: "1096949201057-qfkcdtmiie2tjnu46bstgca4otu93snk.apps.googleusercontent.com",
                scope: ""
            });
        };
        gapi.load("client:auth2", initClient);
    });

    return (
        <GoogleLogin
            clientId="1096949201057-qfkcdtmiie2tjnu46bstgca4otu93snk.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={() => console.log("error occured")}
            cookiePolicy={"single_host_origin"}
            className="auth-btn"
        />
    );
}
