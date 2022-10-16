import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter valid email (ex. user@email.com)").required("Email is required"),
    password: yup.string().required("Password is required").min(8)
});

export const registerSchema = yup.object().shape({
    fullname: yup.string().min(5, "Full name must be more than 5 characters long").required("Full name is required"),
    email: yup.string().email("Please enter valid email (ex. user@email.com)").required("Email is required"),
    password: yup.string().required("Password is required").min(8),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
});

export const changePasswordSchema = yup.object().shape({
    currentPass: yup.string(),
    newPass: yup.string().min(8, "New password must be at least 8 characters"),
    confirmPass: yup.string().oneOf([yup.ref("newPass"), null], "New password must match")
});
