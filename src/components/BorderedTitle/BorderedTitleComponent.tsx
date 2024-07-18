import { ReactNode } from "react";

export function BorderedTitleComponent({
  title,
}: {
  title: string;
}): ReactNode {
  return (
    <header className="flex px-4 bg-transparent border-l-4 mx-2 border-blue-500 text-lg items-center font-bold tracking-wide mb-4 py-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 mr-2 text-blue-300"
      >
        <path
          fillRule="evenodd"
          d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
          clipRule="evenodd"
        />
      </svg>
      <h1>{title}</h1>
    </header>
  );
}
