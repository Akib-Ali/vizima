import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const TrustBoostersSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "Are meals included in the rent?",
      answer:
        "Yes, most PGs offer food packages — some include breakfast, lunch, and dinner.",
      defaultOpen: true,
    },
    {
      question: "Can I book a PG without visiting?",
      answer: "Yes, you can request a video tour or book directly if verified.",
      defaultOpen: true,
    },
    {
      question: "What's the minimum stay period?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Are there girls-only or boys-only PGs?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Do PGs offer attached bathrooms?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="w-full py-14">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-desktop-h3 text-text text-[length:var(--desktop-h3-font-size)] tracking-[var(--desktop-h3-letter-spacing)] leading-[var(--desktop-h3-line-height)] mb-14">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="multiple"
          defaultValue={["item-0", "item-1"]}
          className="space-y-10"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`item-${index}`}
              value={`item-${index}`}
              className="border-0"
            >
              <div className="flex items-start justify-between w-full">
                <AccordionTrigger className="font-desktop-h4 text-text text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
              </div>

              <AccordionContent className="pt-4">
                {item.answer && (
                  <p className="font-desktop-text-regular text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)]">
                    {item.answer}
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
