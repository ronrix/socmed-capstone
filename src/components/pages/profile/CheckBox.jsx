import React from "react";

export default function CheckBox({ text, name }) {
    return (
        <label className="">
            <input type="checkbox" name={name} id="" />
            {text}
        </label>
    );
}
