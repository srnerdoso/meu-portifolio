import { FieldErrors, UseFormRegister } from "react-hook-form";
import ContactmeInputs, { LabelInputProps } from "../types/ContactmeInputs";
import { IoAlertCircleOutline } from "react-icons/io5";
import { HTMLInputTypeAttribute, useRef } from "react";

export default function LabelInput({
  type,
  children,
  register,
  errors,
}: LabelInputProps) {
  if (!register) return;

  const inputRef = useRef<React.ReactElement>(null);

  const defaultInputClassName =
    "w-full h-full text-[16px] font-normal border-[1px] px-2 rounded-md hover:border-link hover:transition hover:ease-in-out hover:duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-link flex text-black";

  const setInput = (inputType: HTMLInputTypeAttribute) => {
    inputRef.current = (
      <input
        type={inputType}
        className={defaultInputClassName + " py-1"}
        {...register(type, { required: true })}
      />
    );
  };

  switch (type) {
    case "subject":
      setInput("text");
      break;
    case "name":
      setInput("text");
      break;
    case "email":
      setInput("email");
      break;
    case "message":
      inputRef.current = (
        <textarea
          className={defaultInputClassName + " resize-none min-h-[30vh] py-3"}
          {...register(type, { required: true })}
        />
      );
      break;
  }

  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-[16px] font-normal flex flex-col gap-1 w-full">
        {children}
        {inputRef.current}
      </label>
      {errors?.[type] && (
        <span className="text-red-500 flex gap-1">
          <IoAlertCircleOutline /> Este campo é obrigatorio
        </span>
      )}
    </div>
  );
}
