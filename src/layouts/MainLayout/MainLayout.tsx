import { ReactNode } from "react";

export function MainLayout({ children }: { children?: ReactNode }): ReactNode {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen min-h-0 overflow-y-auto overflow-x-hidden absolute left-0 top-0 bg-neutral-900 text-blue-100 antialiased">
      {children}
    </div>
  );
}