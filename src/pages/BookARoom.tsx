// const BookARoom=()=>{


//     return(

//         <>
//         <h1>Book A Room</h1>
//         </>
//     )


// }




import { StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import BookingConfirmationSection from "@/screens/BookARoom/sections/BookConfirmationSection/BookConfirmationSection";
import BookingFormSection from "@/screens/BookARoom/sections/BookFormSection/BookingFormSection";
import CancellationPolicySection from "@/screens/BookARoom/sections/CancellationPolicySection/CancellationPolicySection";
import { FAQSection } from "@/screens/BookARoom/sections/FaqSection/FaqSection";
import { HeaderSection } from "@/screens/BookARoom/sections/HeaderSection";
import { TrustBoostersSection } from "@/screens/BookARoom/sections/TrustBoosterSection/TrustBoosterSection";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BookARoom = (): JSX.Element => {
    // Property data
    const propertyData = {
        name: "Comfort Stay PG Karol Bagh",
        price: "Rs. 8,000",
        period: "/ month",
        rating: "4.5",
        reviews: "230",
        images: [
            "https://c.animaapp.com/mbdx675eoAM9mA/img/rectangle-229.svg",
            "https://c.animaapp.com/mbdx675eoAM9mA/img/rectangle-230.svg",
        ],
    };

    return (
        <div className="bg-[#ffffff] flex flex-row justify-center w-full">
            <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">

                <div className="w-full max-w-[1285px] mx-auto mt-28 px-4">
                    <Card className="rounded-[30px] border-[3px] border-solid border-[#c3d0d7] overflow-hidden">
                        <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row">
                                <div className="flex flex-col w-full md:w-[595px]">
                                    <img
                                        className="w-full h-72 object-cover"
                                        alt="Property image top"
                                        src={propertyData.images[0]}
                                    />
                                    <img
                                        className="w-full h-72 object-cover mt-[21px]"
                                        alt="Property image bottom"
                                        src={propertyData.images[1]}
                                    />
                                </div>

                                <div className="p-12 flex flex-col">
                                    <h1 className="font-['Lato',Helvetica] font-extrabold text-text text-[49px] leading-[60px]">
                                        {propertyData.name}
                                    </h1>

                                    <div className="mt-[96px] flex items-baseline">
                                        <span className="font-desktop-h1 font-[number:var(--desktop-h1-font-weight)] text-text text-[length:var(--desktop-h1-font-size)] tracking-[var(--desktop-h1-letter-spacing)] leading-[var(--desktop-h1-line-height)]">
                                            {propertyData.price}
                                        </span>
                                        <span className="ml-4 font-['Lato',Helvetica] font-normal text-text text-4xl leading-[44px]">
                                            {propertyData.period}
                                        </span>
                                    </div>

                                    <BookingConfirmationSection />

                                    <div className="mt-4 flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <span className="font-['Lato',Helvetica] font-bold text-black text-3xl leading-6">
                                                {propertyData.rating}
                                            </span>
                                            <StarIcon className="w-6 h-[23px] ml-3 fill-current text-yellow-400" />
                                            <span className="font-['Lato',Helvetica] font-normal text-black text-3xl leading-6 ml-6">
                                                /{propertyData.reviews} reviews
                                            </span>
                                        </div>
                                        <div className="flex">
                                            {[...Array(5)].map((_, index) => (
                                                <StarIcon
                                                    key={index}
                                                    className="w-[19px] h-[18px] mr-[3px] fill-current text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Tabs defaultValue="book" className="mt-[54px]">
                        <TabsList className="w-full h-[103px] p-0 bg-transparent">
                            <TabsTrigger
                                value="book"
                                className="w-1/2 h-[102px] rounded-[30px] border border-solid border-[#e2f1e8] data-[state=active]:bg-white data-[state=active]:border-[#e2f1e8] data-[state=inactive]:bg-[#e2f1e8]"
                            >
                                <span className="font-['Lato',Helvetica] font-bold text-black text-4xl leading-6">
                                    Book a Room
                                </span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="schedule"
                                className="w-1/2 h-[102px] rounded-[30px] border-[3px] border-solid border-[#e2f1e8] data-[state=active]:bg-white data-[state=inactive]:bg-[#e2f1e8]"
                            >
                                <span className="font-['Lato',Helvetica] font-bold text-black text-4xl leading-6">
                                    Schedule a Visit
                                </span>
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <h2 className="mt-[44px] font-desktop-h2 font-[number:var(--desktop-h2-font-weight)] text-text text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)]">
                        Booking Form
                    </h2>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FAQSection />
                        <CancellationPolicySection />
                    </div>

                    <HeaderSection />
                    <TrustBoostersSection />
                    <BookingFormSection />
                </div>
            </div>
        </div>
    );
};



export default BookARoom
