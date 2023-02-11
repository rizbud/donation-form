import * as yup from "yup";
import { regexNRIC } from "~/libs";

export const notOnlyDigits = (val?: string) =>
  val !== undefined && val.length > 0 && !/^[0-9]+$/.test(val);

export const formValidation = yup.object().shape({
  amount: yup.string().required("Amount is required."),
  name: yup.string().required("Name is required."),
  email: yup.string().email("Invalid email.").required("Email is required."),
  id_number: yup
    .string()
    .matches(regexNRIC, "Invalid NRIC number.")
    .required("NRIC number is required."),
  postal_code: yup
    .string()
    .min(6, "Minimum 6 digits.")
    .max(6, "Maximum 6 digits.")
    .required("Postal code is required."),
  unit_number: yup
    .string()
    .max(6, "Maximum 6 digits.")
    .matches(/-/, "Unit number is required.")
    .required("Unit number is required."),
  address: yup.string().when({
    is: (val?: string) => val !== undefined && val.length > 0,
    then: yup
      .string()
      .test(
        "not-only-digits",
        "Address should not only contain digits.",
        notOnlyDigits,
      ),
    otherwise: yup.string().optional(),
  }),
  remarks: yup.string().optional(),
});
