import { MouseEventHandler, ReactElement, ReactNode } from "react";
import IconComponent from "../Icon";

export function IconButtonComponent({
  text,
  icon,
  onClick,
  className = "",
}: {
  text: string;
  icon: ReactElement<typeof IconComponent>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}): ReactNode {
  return (
    <button
      className={`mx-2 rounded-sm text-xl bg-blue-600 flex border-2 shadow-lg border-slate-700 p-1 px-4 transition-colors duration-75 hover:border-white hover:bg-indigo-700 active:border-indigo-500 items-center ${className}`}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
