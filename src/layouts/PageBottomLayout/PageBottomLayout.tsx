import { ReactNode } from "react";

export function PageBottomLayout({
  children,
}: {
  children?: ReactNode;
}): ReactNode {
  return (
    <section className="w-[80%] max-w-[800px] flex-1 flex flex-col items-center">
      {children}
    </section>
  );
}
