import { ReactNode } from "react";
import IconComponent from "../Icon";
import { Icon } from "../Icon/IconComponent";

export function ListItemComponent({
  text,
  icon = "comment",
  className = "",
}: {
  text: string;
  icon?: Icon;
  className?: string;
}): ReactNode {
  return (
    <li
      className={`px-4 py-3 flex justify-between transition-colors duration-75 hover:border-white cursor-pointer border border-white/[0.15] active:border-cyan-500 border-l-4 border-l-blue-300 ${className}`}
    >
      <span className="pr-2 truncate max-w-[300px]">{text}</span>
      <IconComponent size={6} icon={icon} />
    </li>
  );
}
