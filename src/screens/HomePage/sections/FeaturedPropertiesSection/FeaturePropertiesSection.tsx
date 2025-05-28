import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedPropertiesSection = (): JSX.Element => {
  // Property data for mapping
  const properties = [
    {
      id: 1,
      name: "XYZ PG or Hotel",
      location: "Delhi, India",
      price: "Rs. 5000/Month",
      image:
        "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-ywwuobjy60c.svg",
      amenities: [
        {
          name: "1 bedroom",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/group-4.png",
        },
        {
          name: "1 bath",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/fa-solid-bath.svg",
        },
        {
          name: "WiFi",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/group-5.png",
        },
      ],
    },
    {
      id: 2,
      name: "XYZ PG or Hotel",
      location: "Delhi, India",
      price: "Rs. 5000/Month",
      image:
        "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-ywwuobjy60c.svg",
      amenities: [
        {
          name: "1 bedroom",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/group-6.png",
        },
        {
          name: "1 bath",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/fa-solid-bath.svg",
        },
        {
          name: "WiFi",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/group-7.png",
        },
      ],
    },
    {
      id: 3,
      name: "XYZ PG or Hotel",
      location: "Delhi, India",
      price: "Rs. 5000/Month",
      image:
        "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-ywwuobjy60c.svg",
      amenities: [
        {
          name: "1 bedroom",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/group-8.png",
        },
        {
          name: "1 bath",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/fa-solid-bath.svg",
        },
        {
          name: "WiFi",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/group-9.png",
        },
      ],
    },
    {
      id: 4,
      name: "XYZ PG or Hotel",
      location: "Delhi, India",
      price: "Rs. 5000/Month",
      image:
        "https://c.animaapp.com/mb8dvo30LDNV4D/img/unsplash-ywwuobjy60c.svg",
      amenities: [
        {
          name: "1 bedroom",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/group-10.png",
        },
        {
          name: "1 bath",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/fa-solid-bath.svg",
        },
        {
          name: "WiFi",
          icon: "https://c.animaapp.com/mb8dvo30LDNV4D/img/group-11.png",
        },
      ],
    },
  ];

  return (
    <section className="w-full py-16 px-5">
      <div className="container mx-auto">
        <h2 className="text-center mb-10 font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] [font-style:var(--desktop-h2-font-style)]">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="rounded-[30px] bg-bg overflow-hidden"
            >
              <div className="relative">
                <img
                  className="w-full h-[300px] object-cover"
                  alt="Property"
                  src={property.image}
                />
              </div>

              <CardContent className="p-5">
                <div className="mb-4">
                  <h3 className="font-desktop-subtitle-bold font-[number:var(--desktop-subtitle-bold-font-weight)] text-text text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] [font-style:var(--desktop-subtitle-bold-font-style)]">
                    {property.name}
                    <br />
                    {property.location}
                  </h3>
                </div>

                <div className="mb-4">
                  <p className="font-desktop-description font-[number:var(--desktop-description-font-weight)] text-text text-[length:var(--desktop-description-font-size)] tracking-[var(--desktop-description-letter-spacing)] leading-[var(--desktop-description-line-height)] [font-style:var(--desktop-description-font-style)]">
                    <span className="text-[#171917]">Starting Price </span>
                    <span className="text-[#49735a]">{property.price}</span>
                  </p>
                </div>

                <div className="flex items-center gap-5 mb-6">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="relative w-5 h-5">
                        <img
                          className={`${amenity.name === "1 bath" ? "w-5 h-5" : "absolute w-[17px] h-[13px] top-[3px] left-0.5"} ${amenity.name === "1 bedroom" ? "h-3.5 top-0.5" : ""}`}
                          alt={amenity.name}
                          src={amenity.icon}
                        />
                      </div>
                      <span className="font-desktop-description font-[number:var(--desktop-description-font-weight)] text-text text-[length:var(--desktop-description-font-size)] tracking-[var(--desktop-description-letter-spacing)] leading-[var(--desktop-description-line-height)] whitespace-nowrap [font-style:var(--desktop-description-font-style)]">
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button className="bg-[#064749] text-white rounded-[30px] px-5 py-1 h-7 font-desktop-text-regular font-[number:var(--desktop-text-regular-font-weight)] text-[length:var(--desktop-text-regular-font-size)] tracking-[var(--desktop-text-regular-letter-spacing)] leading-[var(--desktop-text-regular-line-height)] [font-style:var(--desktop-text-regular-font-style)]">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
