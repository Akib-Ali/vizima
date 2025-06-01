import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const BookingConfirmationSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[599px] border border-solid border-[#c3d0d7] rounded-xl">
      <CardContent className="flex items-center justify-between p-5">
        <div className="font-['Lato',Helvetica] font-normal text-text text-4xl leading-6">
          Single Sharing
        </div>

        <Button className="bg-green hover:bg-green/90 text-white rounded-xl px-10 py-3">
          <span className="font-['Lato',Helvetica] font-bold text-4xl leading-6 whitespace-nowrap">
            Change Room
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};


export default BookingConfirmationSection