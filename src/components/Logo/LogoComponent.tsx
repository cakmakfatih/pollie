import { ReactNode } from "react";
import IconComponent from "../Icon";

export function LogoComponent(): ReactNode {
  return (
    <h1 className="text-8xl text-center py-4 flex items-center">
      <IconComponent icon="lightning" size={12} color="white" />
      <span className="font-semibold text-white">poll</span>
      <span className="text-blue-400 font-medium">ie</span>
    </h1>
  );
}
