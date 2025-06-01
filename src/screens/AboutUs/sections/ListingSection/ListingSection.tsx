import React from "react";
import { Button } from "../../../../components/ui/button";

export const ListingsSection = (): JSX.Element => {
  return (
    <section className="relative py-[60px] px-8 md:px-20 rounded-[0px_60px_60px_0px] max-w-full">
      <div className="flex flex-col max-w-[599px] gap-6">
        <h1 className="text-white [text-shadow:0px_4px_74.5px_#00000040] font-desktop-h1 font-[number:var(--desktop-h1-font-weight)] text-[length:var(--desktop-h1-font-size)] tracking-[var(--desktop-h1-letter-spacing)] leading-[var(--desktop-h1-line-height)] [font-style:var(--desktop-h1-font-style)]">
          Not Just A Stay. A Better Living Experience.
        </h1>

        <p className="text-white [text-shadow:0px_4px_74.5px_#00000040] font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
          Explore a new way of living with Vizima&apos;s curated PGs &amp;
          hostels across&nbsp;&nbsp;India.
        </p>
      </div>

      <Button className="mt-8 px-10 py-3 bg-green rounded-[40px] hover:bg-green/90">
        <span className="font-desktop-subtitle-bold font-[number:var(--desktop-subtitle-bold-font-weight)] text-white text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] [font-style:var(--desktop-subtitle-bold-font-style)]">
          Explore Properties
        </span>
      </Button>
    </section>
  );
};
