import { ReactNode } from "react";
import { IOption } from "../../shared/interfaces/option.interface";

interface OptionProps {
  option: IOption;
  selected?: boolean;
  percentage?: number;
  voteCount?: number;
  className?: string;
}

export function OptionComponent({
  option,
  selected = false,
  percentage,
  voteCount,
  className = "",
}: OptionProps): ReactNode {
  return (
    <div
      className={`border border-slate-600 flex items-center hover:border-white transition-colors duration-75 cursor-pointer justify-between ${className}`}
    >
      <div className="flex items-center z-10 p-4">
        <div className="p-px rounded-full border-2 mr-2 border-white/[0.45]">
          <div
            className={`m-1 size-6 rounded-full ${selected && "bg-white"}`}
          ></div>
        </div>
        <h1 className="text-2xl">{option.value}</h1>
      </div>
      {typeof percentage !== "undefined" &&
        typeof voteCount !== "undefined" && (
          <>
            <div className="flex items-center">
              <span className="text-2xl">75%</span>
              <span className="text-sm ml-2 mr-4">504</span>
            </div>
            <div className="absolute bg-amber-500 h-[68px] w-[600px]"></div>
          </>
        )}
    </div>
  );
}
