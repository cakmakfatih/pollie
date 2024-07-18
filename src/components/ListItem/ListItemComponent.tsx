import { ReactNode } from "react";
import IconComponent from "../Icon";

export function ListItemComponent({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}): ReactNode {
  return (
    <li
      className={`px-4 py-3 flex justify-between transition-colors duration-150 hover:border-indigo-300 cursor-pointer border border-white/[0.15] active:border-indigo-500 ${className}`}
    >
      <span className="pr-2 truncate max-w-[300px]">{text}</span>
      <IconComponent size={6} icon="comment" />
    </li>
  );
}
