import { LabelInputProps } from "../types/ContactmeInputs";
import Error from "./Error";

export default function LabelInput({
  type,
  children,
  register,
  errors,
}: LabelInputProps) {
  if (!register) return null;

  const defaultInputClassName =
    "w-full h-full text-[16px] font-normal border-[1px] px-2 rounded-md hover:border-link hover:transition hover:ease-in-out hover:duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-link flex text-black";

  const input = () => {
    switch (type) {
      case "subject":
        return (
          <input
            type="text"
            className={defaultInputClassName + " py-1"}
            {...register(type, { required: true })}
          />
        );

      case "name":
        return (
          <input
            type="text"
            className={defaultInputClassName + " py-1"}
            {...register(type, { required: true })}
          />
        );

      case "email":
        return (
          <input
            type="text"
            className={defaultInputClassName + " py-1"}
            {...register(type, { required: true })}
          />
        );
      case "message":
        return (
          <textarea
            className={defaultInputClassName + " resize-none min-h-[30vh] py-3"}
            {...register(type, { required: true })}
          />
        );
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-[16px] font-normal flex flex-col gap-1 w-full">
        {children}
        {input()}
      </label>
      {errors?.[type] && <Error message="Este campo é obrigatorio" />}
    </div>
  );
}
