import * as yup from "yup";

const signupSchema = yup.object({
    name: yup.string().min(3, "Too short").max(50).required("Name is required!"),
    email: yup.string().email().required(),
    password: yup.string().min(5).required()
});

export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required()
});

export default signupSchema;