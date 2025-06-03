
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";

export const FAQSection = () => {
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
    <section className="w-full max-w-[1280px] mx-auto px-5 py-10">
      <Accordion
        type="multiple"
        defaultValue={["item-0", "item-1"]}
        className="w-full space-y-6"
      >
        {faqItems.map((item, index) => (
          <AccordionItem
            key={`item-${index}`}
            value={`item-${index}`}
            className="border-b"
          >
            <AccordionTrigger className="flex justify-between py-4">
              <h4 className="text-left font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-text text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] [font-style:var(--desktop-h4-font-style)]">
                {item.question}
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)] pb-4">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
