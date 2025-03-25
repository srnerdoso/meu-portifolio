import { FieldErrors, UseFormRegister } from "react-hook-form";
import ContactmeInputs from "../types/ContactmeInputs";
import { IoAlertCircleOutline } from "react-icons/io5";

interface LabelInputProps {
  type: "subject" | "message";
  children: string;
  register: UseFormRegister<ContactmeInputs>;
  errors: FieldErrors<ContactmeInputs>;
}

export default function LabelInput({
  type,
  children,
  register,
  errors,
}: LabelInputProps) {
  const defaultInputClassName =
    "w-full h-full text-[16px] font-normal border-[1px] px-2 rounded-md hover:border-link hover:transition hover:ease-in-out hover:duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-link flex text-black";

  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-[16px] font-normal flex flex-col gap-1 w-full">
        {children}
        {type === "subject" ? (
          <input
            type="text"
            className={defaultInputClassName + " py-1"}
            {...register(type, { required: true })}
          />
        ) : (
          <textarea
            className={defaultInputClassName + " resize-none min-h-[30vh] py-3"}
            {...register(type, { required: true })}
          />
        )}
      </label>
      {errors?.[type] && (
        <span className="text-red-500 flex gap-1">
          <IoAlertCircleOutline /> Este campo é obrigatorio
        </span>
      )}
    </div>
  );
}
