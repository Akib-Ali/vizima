import { BathIcon } from "lucide-react";
import React from "react";

export const KeyDetailsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-[15px] w-full">
      <div className="flex flex-col items-start gap-4">
        <h1 className="font-desktop-h1 font-[number:var(--desktop-h1-font-weight)] text-text text-[length:var(--desktop-h1-font-size)] tracking-[var(--desktop-h1-letter-spacing)] leading-[var(--desktop-h1-line-height)] [font-style:var(--desktop-h1-font-style)]">
          Comfort Stay PG – Karol Bagh
        </h1>

        <h2 className="font-['Lato',Helvetica] font-semibold text-text text-lg tracking-[0] leading-6">
          Delhi, India
        </h2>

        <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
          &nbsp;&nbsp;&nbsp;&nbsp; 4.5 &amp; total reviews (120 Reviews)
        </p>
      </div>

      <div className="flex items-start gap-[60px] py-2.5">
        <div className="flex items-start gap-5">
          <div className="flex items-start gap-2">
            <div className="relative w-5 h-5">
              <img
                className="absolute w-[17px] h-3.5 top-[3px] left-0.5"
                alt="Bedroom icon"
                src="https://c.animaapp.com/mbduyqxs2wyM01/img/group.png"
              />
            </div>

            <span className="font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)]">
              2 bedroom
            </span>
          </div>

          <div className="flex items-start gap-2">
            <BathIcon className="w-5 h-5" />

            <span className="font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)]">
              2 bath
            </span>
          </div>
        </div>

        <div className="font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)]">
          <span className="font-[number:var(--desktop-text-regular-font-weight)] leading-[var(--desktop-text-regular-line-height)] font-desktop-text-regular [font-style:var(--desktop-text-regular-font-style)] tracking-[var(--desktop-text-regular-letter-spacing)] text-[length:var(--desktop-text-regular-font-size)]">
            PG Type:{" "}
          </span>

          <span className="leading-[var(--desktop-text-regular-line-height)] font-desktop-text-regular [font-style:var(--desktop-text-regular-font-style)] font-[number:var(--desktop-text-regular-font-weight)] tracking-[var(--desktop-text-regular-letter-spacing)] text-[length:var(--desktop-text-regular-font-size)]">
            [For Boys / Girls / Unisex]
          </span>
        </div>
      </div>
    </div>
  );
};
