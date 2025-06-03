import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "lucide-react";
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

export const UserTestimonialsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Annie",
      city: "Noida",
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
      avatar: "https://c.animaapp.com/mbduyqxs2wyM01/img/ellipse-7-3.png",
      stars: 5,
    },
    {
      id: 2,
      name: "Annie",
      city: "Noida",
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
      avatar: "https://c.animaapp.com/mbduyqxs2wyM01/img/ellipse-7-3.png",
      stars: 5,
    },
    {
      id: 3,
      name: "Annie",
      city: "Noida",
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
      avatar: "https://c.animaapp.com/mbduyqxs2wyM01/img/ellipse-7-3.png",
      stars: 5,
    },
    {
      id: 4,
      name: "Annie",
      city: "Noida",
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
      avatar: "https://c.animaapp.com/mbduyqxs2wyM01/img/ellipse-7-3.png",
      stars: 5,
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] text-center tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
            What our user think
          </h2>
          <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] text-center tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
            See what our partners say about us
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="flex">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/3 lg:basis-1/3"
              >
                <Card className="bg-bg h-[244px]">
                  <CardContent className="p-0 h-full relative">
                    <div className="p-12 pt-10 h-full flex flex-col">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-[62px] h-[62px]">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <h4 className="font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-text text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)]">
                            {testimonial.name}
                          </h4>
                          <p className="font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)]">
                            City: {testimonial.city}
                          </p>
                        </div>
                        <div className="flex ml-auto">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className="w-5 h-5 text-yellow-500 fill-yellow-500"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-4 font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
                        {testimonial.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-10 mt-8">
          <Button
            variant="default"
            size="icon"
            className="bg-green rounded-xl p-[18px]"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="bg-green rounded-xl p-[18px]"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
