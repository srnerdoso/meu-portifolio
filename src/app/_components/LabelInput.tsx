import { UseFormRegister } from "react-hook-form";
import ContactmeInputs from "../types/ContactmeInputs";

interface LabelInputProps {
  type: "subject" | "message";
  children: string;
  register: UseFormRegister<ContactmeInputs>;
}

export default function LabelInput({
  type,
  children,
  register,
}: LabelInputProps) {
  const defaultInputClassName =
    "w-full h-full text-[16px] font-normal border-[1px] px-2 rounded-md hover:border-link hover:transition hover:ease-in-out hover:duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-link flex text-black";

  return (
    <label className="max-xl:text-[2em] text-[16px] font-normal flex flex-col gap-1 w-full">
      {children}

      {type === "subject" ? (
        <input
          type="text"
          className={defaultInputClassName + " py-1"}
          {...register(type)}
        />
      ) : (
        <textarea
          className={defaultInputClassName + " resize-none min-h-[30vh] py-3"}
          {...register(type)}
        />
      )}
    </label>
  );
}
