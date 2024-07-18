import { ReactElement, ReactNode } from "react";
import IconComponent from "../Icon";

export function BorderedTitleComponent({
  title,
  icon,
}: {
  title: string;
  icon: ReactElement<typeof IconComponent>;
}): ReactNode {
  return (
    <header className="flex px-4 bg-transparent border-l-4 mx-2 border-blue-500 text-lg items-center font-bold tracking-wide mb-4 py-1">
      {icon}
      <h1>{title}</h1>
    </header>
  );
}
