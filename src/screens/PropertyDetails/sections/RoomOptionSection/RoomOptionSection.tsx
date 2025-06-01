import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const RoomOptionsSection = (): JSX.Element => {
  // Data for the room options
  const roomDetails = [
    { label: "Available From", value: "31.06.2025" },
    { label: "Rent Payment Options", value: "Online/ UPI/ Card" },
    {
      label: "Cancellation Policy",
      value: "Free till 224 hrs before check-in",
    },
  ];

  return (
    <div className="w-full max-w-[489px]">
      <Card className="w-full bg-[#e2f1e8] border border-solid border-[#c3d0d7] rounded-xl">
        <CardContent className="p-5">
          <h3 className="font-desktop-h3 font-[number:var(--desktop-h3-font-weight)] text-text text-[length:var(--desktop-h3-font-size)] text-center tracking-[var(--desktop-h3-letter-spacing)] leading-[var(--desktop-h3-line-height)] [font-style:var(--desktop-h3-font-style)] mb-6">
            Pricing &amp; Facilities
          </h3>

          {roomDetails.map((detail, index) => (
            <React.Fragment key={index}>
              <div className="flex justify-between py-3">
                <div className="font-desktop-subtitle-bold font-[number:var(--desktop-subtitle-bold-font-weight)] text-text text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] [font-style:var(--desktop-subtitle-bold-font-style)]">
                  {detail.label}
                </div>
                <div
                  className={`font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)] ${index === 2 ? "text-right" : ""}`}
                >
                  {detail.value}
                </div>
              </div>
              {index < roomDetails.length - 1 && <Separator className="my-2" />}
            </React.Fragment>
          ))}

          <div className="flex items-center gap-4 mt-6 bg-white rounded-xl border border-solid border-[#c3d0d7] p-3">
            <Input
              className="flex-1 font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)] border-none"
              placeholder="Enter Code"
            />
            <Button className="bg-green text-white font-desktop-subtitle-bold font-[number:var(--desktop-subtitle-bold-font-weight)] text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] [font-style:var(--desktop-subtitle-bold-font-style)]">
              Apply
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
