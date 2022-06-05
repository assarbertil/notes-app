import * as Yup from "yup"

export const authSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
})
