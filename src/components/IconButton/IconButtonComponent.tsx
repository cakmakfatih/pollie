import { MouseEventHandler, ReactElement, ReactNode } from "react";
import IconComponent from "../Icon";

export function IconButtonComponent({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon: ReactElement<typeof IconComponent>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}): ReactNode {
  return (
    <button
      className="mx-2 rounded-sm text-lg font-bold bg-indigo-800 px-4 flex border-2 border-indigo-500 p-2 py-2 transition-colors duration-150 hover:border-white hover:bg-indigo-700 active:border-indigo-500 items-center"
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
