// // import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
// // import React from "react";
// // import {
// //   Avatar,
// //   AvatarFallback,
// //   AvatarImage,
// // } from "../../../../components/ui/avatar";
// // import { Button } from "../../../../components/ui/button";
// // import { Card, CardContent } from "../../../../components/ui/card";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// // } from "../../../../components/ui/carousel";

// // export const TestimonialsSection = (): JSX.Element => {
// //   // Testimonial data for mapping
// //   const testimonials = [
// //     {
// //       id: 1,
// //       name: "Annie",
// //       city: "Noida",
// //       image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/ellipse-7-3.png",
// //       stars: 5,
// //       text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
// //     },
// //     {
// //       id: 2,
// //       name: "Annie",
// //       city: "Noida",
// //       image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/ellipse-7-3.png",
// //       stars: 4,
// //       text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
// //     },
// //     {
// //       id: 3,
// //       name: "Annie",
// //       city: "Noida",
// //       image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/ellipse-7-3.png",
// //       stars: 5,
// //       text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
// //     },
// //     {
// //       id: 4,
// //       name: "Annie",
// //       city: "Noida",
// //       image: "https://c.animaapp.com/mb8dvo30LDNV4D/img/ellipse-7-3.png",
// //       stars: 5,
// //       text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
// //     },
// //   ];

// //   return (
// //     <section className="w-full py-16 relative">
// //       <div className="flex flex-col items-center justify-center mb-12 gap-4">
// //         <h2 className="font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] text-center tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
// //           What our partners think
// //         </h2>
// //         <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] text-center tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
// //           See what our partners say about us
// //         </p>
// //       </div>

// //       <Carousel className="w-full max-w-5xl mx-auto">
// //         <CarouselContent>
// //           {testimonials.map((testimonial) => (
// //             <CarouselItem
// //               key={testimonial.id}
// //               className="md:basis-1/3 lg:basis-1/3"
// //             >
// //               <Card className="bg-bg border-none h-full">
// //                 <CardContent className="p-6">
// //                   <div className="flex items-start gap-4 mb-4">
// //                     <Avatar className="w-[62px] h-[62px]">
// //                       <AvatarImage
// //                         src={testimonial.image}
// //                         alt={testimonial.name}
// //                       />
// //                       <AvatarFallback>
// //                         {testimonial.name.charAt(0)}
// //                       </AvatarFallback>
// //                     </Avatar>
// //                     <div className="flex flex-col">
// //                       <h4 className="font-desktop-h4 font-[number:var(--desktop-h4-font-weight)] text-text text-[length:var(--desktop-h4-font-size)] leading-[var(--desktop-h4-line-height)] tracking-[var(--desktop-h4-letter-spacing)] [font-style:var(--desktop-h4-font-style)]">
// //                         {testimonial.name}
// //                       </h4>
// //                       <p className="font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-text text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)]">
// //                         City: {testimonial.city}
// //                       </p>
// //                       <div className="flex mt-1">
// //                         {Array.from({ length: testimonial.stars }).map(
// //                           (_, i) => (
// //                             <StarIcon
// //                               key={i}
// //                               className="w-5 h-5 fill-current text-yellow-400"
// //                               size={20}
// //                             />
// //                           ),
// //                         )}
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <p className="font-desktop-subtitle font-[number:var(--desktop-subtitle-font-weight)] text-text text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] [font-style:var(--desktop-subtitle-font-style)]">
// //                     {testimonial.text}
// //                   </p>
// //                 </CardContent>
// //               </Card>
// //             </CarouselItem>
// //           ))}
// //         </CarouselContent>
// //       </Carousel>

// //       <div className="flex justify-center gap-10 mt-8">
// //         <Button
// //           variant="outline"
// //           size="icon"
// //           className="bg-green rounded-xl p-[18px] hover:bg-green/90"
// //         >
// //           <ChevronLeftIcon className="w-6 h-6 text-white" />
// //         </Button>
// //         <Button
// //           variant="outline"
// //           size="icon"
// //           className="bg-green rounded-xl p-[18px] hover:bg-green/90"
// //         >
// //           <ChevronRightIcon className="w-6 h-6 text-white" />
// //         </Button>
// //       </div>
// //     </section>
// //   );
// // };




"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const TestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      id: 1,
      name: "Annie",
      city: "Noida",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DmLwxP3R_uzXUdQAHnqjhJUyUJRidJrzzg&s",
      stars: 5,
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
    },
    {
      id: 2,
      name: "Annie",
      city: "Noida",
      image: "https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg",
      stars: 4,
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
    },
    {
      id: 3,
      name: "Annie",
      city: "Noida",
      image: "https://smartasset.com/wp-content/uploads/sites/2/2023/03/iStock-1413993585-2.jpg",
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
    {
      id: 5,
      name: "Annie",
      city: "Noida",
      image: "https://www.capgemini.com/wp-content/uploads/2025/03/Top-consumer-goods-company-client-story-web-banner.webp?w=960",
      stars: 4,
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
    },
    {
      id: 6,
      name: "Annie",
      city: "Noida",
      image: "https://www.getcanopy.com/hubfs/Legacy/Imported_Blog_Media/effective-client-onboarding-2.jpg",
      stars: 5,
      text: "Nascetur urna, fusce consectetur massa nulla viverra aenean semper. Dignissim nibh sed condimentum eget ac suspendisse eget amet integer. Mattis etiam",
    },
  ];

  return (
    <section className="w-full py-16 relative">
      <div className="flex flex-col items-center justify-center mb-12 gap-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What our partners think
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          See what our partners say about us
        </p>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="basis-full sm:basis-1/2 md:basis-1/3"
            >
              <Card className="bg-white shadow-md h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-[62px] h-[62px]">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        City: {testimonial.city}
                      </p>
                      <div className="flex mt-1">
                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                          <StarIcon
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{testimonial.text}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Carousel Controls */}
        <div className="flex justify-center gap-4 mt-6">
          <CarouselPrevious className="bg-green text-white hover:bg-green/90 rounded-xl w-12 h-12">
            <ChevronLeftIcon className="w-5 h-5" />
          </CarouselPrevious>
          <CarouselNext className="bg-green text-white hover:bg-green/90 rounded-xl w-12 h-12">
            <ChevronRightIcon className="w-5 h-5" />
          </CarouselNext>
        </div>
      </Carousel>
    </section>
  );
};


