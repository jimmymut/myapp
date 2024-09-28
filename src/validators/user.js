import * as yup from "yup";

const addUserSchema = yup.object({
    name: yup.string().matches(/^[A-Za-z\s]{3,50}$/, "Not a valid name!").required(),
    email: yup.string().email().required(),
    username: yup.string().required()
})

export default addUserSchema;