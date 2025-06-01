import { ShieldIcon, XCircleIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define the policy data for easier mapping
const policyData = [
  {
    title: "Cancellation Policy",
    icon: <XCircleIcon className="w-5 h-5" />,
    description: "Free Cancellation up to 24hrs\nbefore checkin",
  },
  {
    title: "Health & Safty",
    icon: <ShieldIcon className="w-5 h-5" />,
    description: "Cleaner in accordance with our\nCOVID safe cleaning policy",
  },
];

const BookingFormSection = (): JSX.Element => {
  return (
    <section className="w-full py-8 flex justify-between">
      {policyData.map((policy, index) => (
        <Card
          key={index}
          className="w-[340px] border-none shadow-none bg-transparent"
        >
          <CardContent className="flex flex-col items-start gap-5 p-0">
            <h4 className="font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-black text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] [font-style:var(--desktop-h4-font-style)]">
              {policy.title}
            </h4>

            <div className="flex items-start gap-3 w-full">
              {policy.icon}
              <p className="flex-1 font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
                {policy.description.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < policy.description.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};


export default BookingFormSection