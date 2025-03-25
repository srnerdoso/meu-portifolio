import { useForm, SubmitHandler } from "react-hook-form";
import ContactmeInputs from "../types/ContactmeInputs";
import LabelInput from "./LabelInput";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactmeInputs>();
  const onSubmit: SubmitHandler<ContactmeInputs> = (data) => {
    data.date = new Date().toLocaleString();

    emailjs
      .send("service_gaml8i8", "template_j4pmx95", data, "yrVlR-mR76zOKpkI5")
      .then((res) => {
        console.log("email success: ", res.status, res.text);
        reset();
      })
      .catch((err) => console.log("email error: ", err));
  };

  return (
    <form
      id="contact-me"
      className="py-[20vh] max-xl:py-[15vh] flex flex-col justify-center items-start gap-5 text-[16px] h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="uppercase font-medium">Contato</h2>
      {(
        [
          { type: "name", children: "Nome" },
          { type: "email", children: "E-mail" },
          { type: "subject", children: "Assunto" },
          { type: "message", children: "Mensagem" },
        ] as {
          type: "subject" | "message" | "name" | "email";
          children: string;
        }[]
      ).map((input, index) => (
        <LabelInput
          key={`input-form-${index}`}
          type={input.type}
          register={register}
          errors={errors}
        >
          {input.children}
        </LabelInput>
      ))}
      {/* <LabelInput type="name" register={register} errors={errors}>
                  Nome
                </LabelInput>
                <LabelInput type="subject" register={register} errors={errors}>
                  Assunto
                </LabelInput>
                <LabelInput type="email" register={register} errors={errors}>
                  E-mail
                </LabelInput>
                <LabelInput type="message" register={register} errors={errors}>
                  Mensagem
                </LabelInput> */}
      <input
        type="submit"
        value="Enviar"
        className="h-10 w-full font-normal border-[1px] py-1 px-2 rounded-md hover:bg-white hover:text-background hover:transition hover:ease-in-out hover:duration-100"
      />
    </form>
  );
}
