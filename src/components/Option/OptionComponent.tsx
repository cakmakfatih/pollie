import { MouseEventHandler, ReactNode } from "react";
import { IOption } from "../../shared/interfaces/option.interface";

interface OptionProps {
  option: IOption;
  selected?: boolean;
  percentage?: number;
  voteCount?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function OptionComponent({
  option,
  selected = false,
  percentage,
  voteCount,
  className = "",
  onClick,
}: OptionProps): ReactNode {
  return (
    <div
      onClick={onClick}
      className={`relative border border-slate-600 flex items-center hover:border-white transition-colors duration-75 cursor-pointer justify-between ${className}`}
    >
      <div className="flex items-center z-10 p-4">
        <div className="p-px rounded-full border-2 mr-2 border-white/[0.45]">
          <div
            className={`m-1 size-6 rounded-full ${selected ? "bg-white" : ""}`}
          ></div>
        </div>
        <h1 className="text-2xl">{option.value}</h1>
      </div>
      <div
        style={{
          width: `${percentage ?? 0}%`,
        }}
        className="absolute self-stretch h-[100%] bg-amber-600"
      ></div>
      <div className="flex items-center z-10">
        <span className="text-2xl">
          {typeof percentage !== "undefined" ? percentage + "%" : ""}
        </span>
        <span className="text-sm ml-2 mr-4">{voteCount ?? ""}</span>
      </div>
    </div>
  );
}
