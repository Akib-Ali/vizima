import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";

// Apartment listing data for mapping
const apartmentListings = [
  {
    id: 1,
    image: "https://c.animaapp.com/mbdfcvegHJjZtn/img/rectangle-222.png",
    title: "Comfort Stay PG – Karol Bagh",
    amenities: [
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/group.png",
        text: "1 bedroom",
      },
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/fa-solid-bath.svg",
        text: "1 bath",
      },
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/group-1.png",
        text: "WiFi",
      },
    ],
    description: "Double Sharing | Unisex | Food: Included",
    rent: "From ₹7,500 / month",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/mbdfcvegHJjZtn/img/rectangle-222-1.png",
    title: "Comfort Stay PG – Karol Bagh",
    amenities: [
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/group-2.png",
        text: "1 bedroom",
      },
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/fa-solid-bath.svg",
        text: "1 bath",
      },
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/group-3.png",
        text: "WiFi",
      },
    ],
    description: "Double Sharing | Unisex | Food: Included",
    rent: "From ₹7,500 / month",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/mbdfcvegHJjZtn/img/rectangle-222-2.png",
    title: "Comfort Stay PG – Karol Bagh",
    amenities: [
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/group-4.png",
        text: "1 bedroom",
      },
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/fa-solid-bath.svg",
        text: "1 bath",
      },
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/group-5.png",
        text: "WiFi",
      },
    ],
    description: "Double Sharing | Unisex | Food: Included",
    rent: "From ₹7,500 / month",
  },
  {
    id: 4,
    image: "https://c.animaapp.com/mbdfcvegHJjZtn/img/rectangle-222-3.png",
    title: "Comfort Stay PG – Karol Bagh",
    amenities: [
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/group-6.png",
        text: "1 bedroom",
      },
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/fa-solid-bath.svg",
        text: "1 bath",
      },
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/group-7.png",
        text: "WiFi",
      },
    ],
    description: "Double Sharing | Unisex | Food: Included",
    rent: "From ₹7,500 / month",
  },
  {
    id: 5,
    image: "https://c.animaapp.com/mbdfcvegHJjZtn/img/rectangle-222-4.png",
    title: "Comfort Stay PG – Karol Bagh",
    amenities: [
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/group-8.png",
        text: "1 bedroom",
      },
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/fa-solid-bath.svg",
        text: "1 bath",
      },
      {
        icon: "https://c.animaapp.com/mbdfcvegHJjZtn/img/group-9.png",
        text: "WiFi",
      },
    ],
    description: "Double Sharing | Unisex | Food: Included",
    rent: "From ₹7,500 / month",
  },
];

const ApartmentListingsSection = () => {
  return (
    <section className="flex flex-col items-center gap-[60px] w-full max-w-[758px] mx-auto my-8">
      <div className="flex flex-col w-full items-start gap-5">
        {apartmentListings.map((apartment) => (
          <Card
            key={apartment.id}
            className="flex w-full overflow-hidden bg-bg rounded-[60px_60px_60px_12px]"
          >
            <img
              className="w-[305px] h-auto object-cover"
              alt={`${apartment.title} thumbnail`}
              src={apartment.image}
            />
            <CardContent className="flex flex-col items-start gap-1 px-8 py-5 flex-1">
              <h3 className="self-stretch font-desktop-subtitle-bold font-[number:var(--desktop-subtitle-bold-font-weight)] text-text text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)]">
                {apartment.title}
              </h3>

              <div className="flex flex-col items-start gap-1 self-stretch w-full">
                <div className="flex flex-col items-start gap-2 py-2.5 self-stretch w-full">
                  <div className="flex gap-5 self-stretch w-full items-start">
                    {apartment.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="inline-flex items-start gap-2"
                      >
                        <div className="relative w-5 h-5">
                          <img
                            className="absolute w-auto h-auto top-[3px] left-0.5"
                            alt={amenity.text}
                            src={amenity.icon}
                          />
                        </div>
                        <span className="font-desktop-description font-[number:var(--desktop-description-font-weight)] text-text text-[length:var(--desktop-description-font-size)] tracking-[var(--desktop-description-letter-spacing)] leading-[var(--desktop-description-line-height)] whitespace-nowrap">
                          {amenity.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="self-stretch font-desktop-description font-[number:var(--desktop-description-font-weight)] text-text text-[length:var(--desktop-description-font-size)] tracking-[var(--desktop-description-letter-spacing)] leading-[var(--desktop-description-line-height)]">
                    {apartment.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-3">
                  <Button className="px-5 py-1 bg-[#064749] rounded-[30px] text-white font-bold">
                    <Link to="/hostel-detail/521">
                      View Details
                    </Link>

                  </Button>
                  <span className="font-extrabold text-[#49735a] text-base leading-5 whitespace-nowrap">
                    Rent: {apartment.rent}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="px-10 py-3 rounded-[40px] bg-green">
        <span className="font-desktop-subtitle-bold font-[number:var(--desktop-subtitle-bold-font-weight)] text-white text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)] whitespace-nowrap">
          Show more
        </span>
      </Button>
    </section>
  );
};



export default ApartmentListingsSection




// const ApartmentListingSection=()=>{

//   return(
//     <>
//     <h1>Apartment lsitiong</h1>
//     </>
//   )
// }

// export default ApartmentListingSection
