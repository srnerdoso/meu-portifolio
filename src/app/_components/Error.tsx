import { IoAlertCircleOutline } from "react-icons/io5";

export default function Error({ message }: { message: string }) {
  return (
    <span className="text-red-500 flex items-center gap-1 text-start select-none">
      <IoAlertCircleOutline /> {message}
    </span>
  );
}
