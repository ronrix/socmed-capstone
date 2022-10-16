import React from "react";

import { useSpring, animated } from "react-spring";
import "../../../assets/styles/css/loading.css";

export default function Loading() {
    const styles = useSpring({
        loop: true,
        to: { transform: "scale(1.3)" },
        from: { transform: "scale(1)" }
    });
    return (
        <div className="loading">
            <div>
                <animated.svg style={styles} viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M34.125 18.6875C34.125 27.2188 27.2188 34.125 18.6875 34.125C10.1562 34.125 3.25 27.2188 3.25 18.6875C3.25 10.1562 10.1562 3.25 18.6875 3.25M35.75 35.75L32.5 32.5"
                        stroke="#00B0F9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M23.5626 9.96126C22.9939 8.17376 23.6601 5.94751 25.5451 5.34626C26.5364 5.02126 27.7551 5.29751 28.4539 6.25626C29.1039 5.26501 30.3714 5.03751 31.3464 5.34626C33.2314 5.94751 33.8976 8.17376 33.3289 9.96126C32.4351 12.805 29.3151 14.2838 28.4539 14.2838C27.5764 14.2838 24.4889 12.8375 23.5626 9.96126V9.96126Z"
                        stroke="#00B0F9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </animated.svg>
                <span>We're finding your match</span>
            </div>
        </div>
    );
}
