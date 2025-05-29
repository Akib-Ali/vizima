import { Card, CardContent } from "../../../../components/ui/card";

export const RentYourSpaceSection = (): JSX.Element => {
  return (
    <Card className="relative w-full max-w-full md:max-w-[90%] lg:max-w-[710px] border-none shadow-none bg-white rounded-none lg:rounded-[0px_60px_60px_0px]">
      <CardContent className="flex flex-col items-start gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-[60px]">
        <div className="flex flex-col w-full items-start gap-4 sm:gap-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text leading-tight">
            Find Verified PGs & Hostels That Feel Like Home
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-text leading-relaxed">
            Trusted listings, meals, AC, Wi-Fi — everything ready to move in
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

