import { HomeIcon, MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card,CardContent } from "@/components/ui/card";
import { Table ,  TableBody,TableCell, TableHead,TableHeader,TableRow,} from "@/components/ui/table";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../../components/ui/table";
import { AmenitiesSection } from "@/screens/PropertyDetails/sections/AmenitiesSection";
import { FeaturedPropertiesSection } from "@/screens/PropertyDetails/sections/FeaturedPropertiesSection/FeaturedPropertiesSection";
import { KeyDetailsSection } from "@/screens/PropertyDetails/sections/KeyDetailSection/KeyDetailSection";
import { PropertyDescriptionSection } from "@/screens/PropertyDetails/sections/PropertyDescriptionSection/PropertyDescriptionSection";
import { UserTestimonialsSection } from "@/screens/PropertyDetails/sections/UserTestimonialSection/UserTestimonialSection";




// import { Card, CardContent } from "../../components/ui/card";


// import { AmenitiesSection } from "./sections/AmenitiesSection";
// import { FooterSection } from "./sections/FooterSection/FooterSection";
// import { KeyDetailsSection } from "./sections/KeyDetailsSection/KeyDetailsSection";
// import { NavigationMenuSection } from "./sections/NavigationMenuSection";
// import { PropertyDescriptionSection } from "./sections/PropertyDescriptionSection/PropertyDescriptionSection";
// import { UserTestimonialsSection } from "./sections/UserTestimonialsSection";





import React from "react";
import { Link } from "react-router-dom";

export const PropertyDetail = (): JSX.Element => {
  // Room options data for the table
  const roomOptions = [
    {
      type: "Single Sharing",
      rent: "Rs. XXXX",
      deposit: "Rs. XXXX",
      ac: "AC",
      meals: "Yes",
    },
    {
      type: "Double Sharing",
      rent: "Rs. XXXX",
      deposit: "Rs. XXXX",
      ac: "AC",
      meals: "Yes",
    },
    {
      type: "Triple Sharing",
      rent: "Rs. XXXX",
      deposit: "Rs. XXXX",
      ac: "Non- AC",
      meals: "No",
    },
  ];

  // House rules data
  const houseRules = [
    {
      icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/eva-clock-fill.svg",
      text: "Entry/Exit Timings",
    },
    {
      icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/eva-clock-fill.svg",
      text: "Gate Closing Time",
    },
    {
      icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/group-1.png",
      text: "Alcohol / Smoking Allowed?",
    },
    {
      icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/ic-twotone-pets.svg",
      text: "Curfew Rules",
    },
    {
      icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/bx-bxs-party.svg",
      text: "Guests Allowed?",
    },
  ];

  // Nearby locations data
  const nearbyLocations = [
    {
      icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/mdi-metro.svg",
      text: "0.5Km From XYZ Metro",
    },
    {
      icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/maki-college.svg",
      text: "Near ABC College",
    },
    {
      icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/mask-group.png",
      text: "Mall within 1Km",
    },
    {
      icon: "https://c.animaapp.com/mbduyqxs2wyM01/img/group-11.png",
      text: "Bus stop nearby",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Navigation Menu */}
        {/* <NavigationMenuSection /> */}

        {/* Key Details Section */}
        <section className="container mt-36 mb-8">
          <div className="w-full">
            <KeyDetailsSection />
            <img
              className="w-[19px] h-[18px] mt-2"
              alt="Star"
              src="https://c.animaapp.com/mbduyqxs2wyM01/img/star-3.svg"
            />
          </div>
        </section>

        {/* Property Images */}
        <section className="container mb-12">
          <div className="w-full flex gap-2 h-[480px]">
            <div className="flex-1 h-full">
              <img
                className="w-full h-full object-cover rounded-l-lg"
                alt="Property Main Image"
                src="https://c.animaapp.com/mbduyqxs2wyM01/img/1.png"
              />
            </div>
            <div className="flex flex-col gap-2 w-[234px]">
              <img
                className="h-[235px] w-full object-cover"
                alt="Property Image"
                src="https://c.animaapp.com/mbduyqxs2wyM01/img/5.png"
              />
              <img
                className="h-[235px] w-full object-cover"
                alt="Property Image"
                src="https://c.animaapp.com/mbduyqxs2wyM01/img/4.png"
              />
            </div>
            <div className="flex flex-col gap-2 w-[234px]">
              <img
                className="h-[235px] w-full object-cover rounded-tr-lg"
                alt="Property Image"
                src="https://c.animaapp.com/mbduyqxs2wyM01/img/unsplash-akz0w36dpm4.png"
              />
              <img
                className="h-[235px] w-full object-cover rounded-br-lg"
                alt="Property Image"
                src="https://c.animaapp.com/mbduyqxs2wyM01/img/unsplash-qeiufr5vpm8.png"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <Button className="bg-green rounded-full">
              <img
                className="w-[25px] h-[25px] mr-2"
                alt="Vector"
                src="https://c.animaapp.com/mbduyqxs2wyM01/img/vector.svg"
              />
              Show on Map
            </Button>
            <Button className="bg-green rounded-full"><Link to="/book-room/51">Book This Room</Link> </Button>
            <Button className="bg-green rounded-full">Schedule Visit</Button>
          </div>
        </section>

        {/* Room Options Section */}
        <section className="container mb-12">
          <h3 className="font-desktop-h3 text-[length:var(--desktop-h3-font-size)] leading-[var(--desktop-h3-line-height)] mb-4">
            Room Options
          </h3>

          <Card className="border-[#c3d0d7] rounded-xl overflow-hidden">
            <div className="bg-[#e2f1e8] p-4 border-b border-[#c3d0d7]">
             <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center font-desktop-subtitle-bold">
                      Room Type
                    </TableHead>
                    <TableHead className="text-center font-desktop-subtitle-bold">
                      Monthly <br />
                      Rent
                    </TableHead>
                    <TableHead className="text-center font-desktop-subtitle-bold">
                      Security <br />
                      Deposit
                    </TableHead>
                    <TableHead className="text-center font-desktop-subtitle-bold">
                      AC/
                      <br />
                      Non- AC
                    </TableHead>
                    <TableHead className="text-center font-desktop-subtitle-bold">
                      Meals
                      <br />
                      Included
                    </TableHead>
                    <TableHead className="text-center font-desktop-subtitle-bold">
                      CTA
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roomOptions.map((room, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-center font-desktop-subtitle-bold">
                        {room.type}
                      </TableCell>
                      <TableCell className="text-center font-desktop-subtitle">
                        {room.rent}
                      </TableCell>
                      <TableCell className="text-center font-desktop-subtitle">
                        {room.deposit}
                      </TableCell>
                      <TableCell className="text-center font-desktop-subtitle">
                        {room.ac}
                      </TableCell>
                      <TableCell className="text-center font-desktop-subtitle">
                        {room.meals}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button className="bg-green rounded-full text-white text-[15px] font-bold py-3 px-10">
                            <Link to="/book-room/51">
                             Book Now
                            </Link>
                         
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table> 
            </div>
          </Card>
        </section>

        {/* Amenities and House Rules Section */}
        <section className="container mb-12">
          <div className="flex gap-6">
            <Card className="flex-1 border-[#c3d0d7] rounded-xl">
              <CardContent className="p-0">
                <AmenitiesSection />
              </CardContent>
            </Card>

            <Card className="w-[346px] border-[#c3d0d7] rounded-xl">
              <CardContent className="p-6">
                <h2 className="font-bold text-5xl mb-12">House rules</h2>
                <div className="flex flex-col gap-2">
                  {houseRules.map((rule, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {rule.icon.includes(".svg") ? (
                        <img
                          className="w-5 h-5"
                          alt={rule.text}
                          src={rule.icon}
                        />
                      ) : (
                        <div className="relative w-5 h-5">
                          <img
                            className="absolute w-[18px] h-[18px] top-px left-px"
                            alt={rule.text}
                            src={rule.icon}
                          />
                        </div>
                      )}
                      <div className="font-desktop-subtitle text-text">
                        {rule.text}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Location Section */}
        <section className="container mb-12">
          <h2 className="font-desktop-h2 text-center mb-6">Location</h2>
          <div className="relative w-full h-[400px] bg-[url(https://c.animaapp.com/mbduyqxs2wyM01/img/map.png)] bg-cover bg-center rounded-lg mb-4">
            <div className="absolute w-[60px] h-[60px] top-[179px] left-[353px] bg-bg rounded-[30px] border-8 border-solid border-[#49735a]">
              <HomeIcon className="absolute w-6 h-6 top-2.5 left-2.5" />
            </div>

            <Button className="absolute top-5 left-5 p-2 bg-green rounded-[10px]">
              <PlusIcon className="w-6 h-6" />
            </Button>

            <Button className="absolute top-[68px] left-5 p-2 bg-green rounded-[10px]">
              <MinusIcon className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex justify-between">
            {nearbyLocations.map((location, index) => (
              <div key={index} className="flex items-center">
                {location.icon.includes(".svg") ? (
                  <img
                    className="w-[37px] h-[37px] mr-2"
                    alt={location.text}
                    src={location.icon}
                  />
                ) : (
                  <div className="w-[37px] h-[37px] relative mr-2">
                    <img
                      className="absolute w-[30px] h-[31px] top-[3px] left-1"
                      alt={location.text}
                      src={location.icon}
                    />
                  </div>
                )}
                <div className="font-medium text-lg text-text">
                  {location.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Property Description Section */}
        <section className="container mb-12">
          <PropertyDescriptionSection />
        </section>

        {/* User Testimonials Section */}
        <section className="container mb-12">
          <UserTestimonialsSection />
        </section>

        {/* Featured Properties Section */}
        <section className="container mb-12">
          <FeaturedPropertiesSection />
        </section>

        {/* Footer Section */}
        <footer className="w-full bg-[#e2f1e8]">
          {/* <FooterSection /> */}
        </footer>
      </div>
    </div>
  );
};


export default PropertyDetail
