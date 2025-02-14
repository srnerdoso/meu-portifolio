import ElementProps from "./interfaces/ElementsProps";

export default function Ul({ children, className }: ElementProps) {
  return (
    <ul className={className}>
      {children.map((li, index) => (
        <li key={`li-${index}`}>
          <div className="flex gap-5">
            <img key={`img-${index}`} src="/images/svg/line1.svg" />
            {li}
          </div>
        </li>
      ))}
    </ul>
  );
}
