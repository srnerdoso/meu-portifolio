"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import ContactmeInputs from "../types/ContactmeInputs";
import LabelInput from "./LabelInput";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Error from "./Error";

export default function ContactForm() {
  const [btnValue, setBtnValue] = useState<
    "Enviar" | "Enviando..." | "Enviado!" | "Erro"
  >("Enviar");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactmeInputs>();
  const onSubmit: SubmitHandler<ContactmeInputs> = (data) => {
    setBtnValue("Enviando...");

    data.date = new Date().toLocaleString();
    emailjs
      .send("service_gaml8i8", "template_j4pmx95", data, "yrVlR-mR76zOKpkI5")
      .then((res) => {
        console.log("email success: ", res.status, res.text);
        setBtnValue("Enviado!");
        reset();
      })
      .catch((err) => {
        setBtnValue("Erro");
        console.log("email error: ", err);
      });
  };

  return (
    <form
      id="contact-me"
      className="max-xl:py-[15vh] flex flex-col justify-center items-start gap-5 text-[16px] h-screen"
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
      <input
        type="submit"
        value={btnValue}
        className="h-10 w-full font-normal border-[1px] py-1 px-2 rounded-md hover:text-background hover:transition hover:ease-in-out hover:duration-100 hover:bg-white hover:cursor-pointer disabled:hover:text-inherit disabled:hover:bg-inherit disabled:cursor-default"
        disabled={btnValue === "Enviando..." || btnValue === "Enviado!" || btnValue === "Erro"}
        style={{
          borderColor:
            btnValue === "Erro"
              ? "#9B111E"
              : btnValue === "Enviado!"
              ? "#228B22"
              : "",
          color:
            btnValue === "Erro"
              ? "#9B111E"
              : btnValue === "Enviado!"
              ? "#228B22"
              : "",
        }}
      />
      {btnValue === "Erro" && (
        <Error message="Erro ao enviar e-mail, tente novamente mais tarde" />
      )}
    </form>
  );
}
