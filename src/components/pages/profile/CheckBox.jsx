import React from "react";

import { Field } from "formik";

export default function CheckBox({ name, onChange, value }) {
    const storedInfo = JSON.parse(localStorage.getItem("profile"));
    const isChecked = storedInfo && storedInfo[name].find(info => info === value);

    return (
        <label>
            <Field type="checkbox" name={name} onChange={onChange} value={value} checked={isChecked} />
            {value}
        </label>
    );
}
