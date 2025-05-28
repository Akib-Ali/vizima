import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Annie",
      city: "Noida",
      image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/ellipse-7-3.png",
      stars: 5,
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
    },
    {
      id: 2,
      name: "Annie",
      city: "Noida",
      image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/ellipse-7-3.png",
      stars: 4,
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
    },
    {
      id: 3,
      name: "Annie",
      city: "Noida",
      image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/ellipse-7-3.png",
      stars: 5,
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
    },
    {
      id: 4,
      name: "Annie",
      city: "Noida",
      image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/ellipse-7-3.png",
      stars: 5,
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
    },
  ];

  return (
    <section className="w-full py-16 relative">
      <div className="flex flex-col items-center justify-center mb-12 gap-4">
        <h2 className="font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] text-center tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
          What our partners think
        </h2>
        <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] text-center tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
          See what our partners say about us
        </p>
      </div>

      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/3 lg:basis-1/3"
            >
              <Card className="bg-bg border-none h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-[62px] h-[62px]">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h4 className="font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-text text-[length:var(--desktop-h4-font-size)] leading-[var(--desktop-h4-line-height)] tracking-[var(--desktop-h4-letter-spacing)] [font-style:var(--desktop-h4-font-style)]">
                        {testimonial.name}
                      </h4>
                      <p className="font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)]">
                        City: {testimonial.city}
                      </p>
                      <div className="flex mt-1">
                        {Array.from({ length: testimonial.stars }).map(
                          (_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 fill-current text-yellow-400"
                              size={20}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-10 mt-8">
        <Button
          variant="outline"
          size="icon"
          className="bg-green rounded-xl p-[18px] hover:bg-green/90"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-green rounded-xl p-[18px] hover:bg-green/90"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </Button>
      </div>
    </section>
  );
};