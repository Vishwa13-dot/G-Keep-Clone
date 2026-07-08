import * as Yup from "yup";

export const noteSchema = Yup.object({
  title: Yup.string()
    .max(80, "Maximum 80 characters"),

  note: Yup.string()
    .max(1000, "Maximum 1000 characters"),
});