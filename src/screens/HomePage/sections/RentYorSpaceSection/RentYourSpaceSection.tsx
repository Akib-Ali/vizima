import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const RentYourSpaceSection = (): JSX.Element => {
  return (
    <Card className="relative flex flex-col w-full max-w-[710px] border-none shadow-none bg-white rounded-[0px_60px_60px_0px]">
      <CardContent className="flex flex-col items-start gap-8 px-20 py-[60px]">
        <div className="flex flex-col w-full max-w-[519px] items-start gap-6">
          <h1 className="font-desktop-h1 font-[number:var(--desktop-h1-font-weight)] text-text text-[length:var(--desktop-h1-font-size)] tracking-[var(--desktop-h1-letter-spacing)] leading-[var(--desktop-h1-line-height)] [font-style:var(--desktop-h1-font-style)]">
            Find Verified PGs &amp; Hostels That Feel Like Home
          </h1>
          <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
            Trusted listings, meals, AC, Wi-Fi — everything ready to move in
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
