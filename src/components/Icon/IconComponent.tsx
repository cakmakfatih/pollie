import { ReactNode } from "react";

export type Icon = "poll-solid" | "comment";
export type IconSize = 6 | 8 | 10 | 12;
export type IconColor = "white" | "primary" | "black";

function IconSvg({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconComponent({
  icon = "poll-solid",
  size = 10,
  color = "primary",
  className = "",
}: {
  icon?: Icon;
  size?: IconSize;
  color?: IconColor;
  className?: string;
}): ReactNode {
  const getIconColorClass = (clr: IconColor): string => {
    switch (clr) {
      case "primary":
        return "text-blue-100";
      default:
        return "text-white";
    }
  };

  const iconColor = getIconColorClass(color);
  const iconClassName = `size-${size} ${iconColor} ${className}`;

  switch (icon) {
    case "poll-solid":
      return (
        <IconSvg className={iconClassName}>
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
            clipRule="evenodd"
          />
        </IconSvg>
      );
    case "comment":
      return (
        <IconSvg className={iconClassName}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
          />
        </IconSvg>
      );
    default:
      return null;
  }
}
