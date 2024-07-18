import { ReactNode } from "react";
import { LogoComponent } from "../Logo/LogoComponent";
import DividerComponent from "../Divider";

export function LogoWithSubtitleComponent({
  subtitle,
}: {
  subtitle: string;
}): ReactNode {
  return (
    <>
      <section className="min-h-[40%] flex flex-col items-center justify-center py-8">
        <LogoComponent />
        <div className="flex justify-center items-center">
          <h1 className="pr-2 text-3xl text-center mt-4 text-white/[.54] font-light select-none">
            {subtitle}
          </h1>
        </div>
      </section>
      <DividerComponent />
    </>
  );
}
