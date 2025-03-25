import { UseFormRegister, FieldErrors } from "react-hook-form";

type ContactmeInputs = {
  subject: string;
  message: string;
  name: string;
  email: string;
  date: string;
};

export interface LabelInputProps {
  type: "subject" | "message" | "name" | "email";
  children: string;
  register?: UseFormRegister<ContactmeInputs>;
  errors: FieldErrors<ContactmeInputs>;
}

export default ContactmeInputs;
