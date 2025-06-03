import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

export const CancellationPolicySection = (): JSX.Element => {
  // Payment details data
  const paymentDetails = [
    { label: "Room Rent", amount: "Rs. 12,000" },
    { label: "Security Deposit", amount: "Rs. 6,000" },
    { label: "GST", amount: "XYZ" },
  ];

  // Payment methods data
  const paymentMethods = [
    { id: "upi", label: "UPI" },
    { id: "card", label: "Credit/Debit Card" },
    { id: "netbanking", label: "Net Banking" },
    { id: "wallets", label: "Wallets" },
  ];

  // Trust indicators data
  const trustIndicators = [
    {
      icon: "https://c.animaapp.com/mbdx675eoAM9mA/img/mdi-recurring-payment.svg",
      label: "Secure Payment",
    },
    {
      icon: "https://c.animaapp.com/mbdx675eoAM9mA/img/ix-support.svg",
      label: "24x7 Support",
    },
    {
      icon: "https://c.animaapp.com/mbdx675eoAM9mA/img/bitcoin-icons-verify-filled.svg",
      label: "Fully Verified",
    },
  ];

  return (
    <Card className="w-full max-w-[600px] bg-[#e2f1e8] border-[#c3d0d7] rounded-xl">
      <CardContent className="p-8">
        <h3 className="font-desktop-h3 text-text text-center mb-8">
          Confirm your booking by paying a small token amount
        </h3>

        {/* Payment details */}
        <div className="space-y-6">
          {paymentDetails.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-desktop-subtitle text-text">
                {item.label}
              </span>
              <span className="font-desktop-subtitle-bold text-text text-right">
                {item.amount}
              </span>
            </div>
          ))}

          {/* Coupon code section */}
          <div className="mt-6 space-y-2">
            <label className="font-desktop-subtitle-bold text-text block">
              Enter Coupon Code
            </label>
            <Input
              className="w-full h-[52px] bg-white border-[#c3d0d7] rounded-xl px-6 py-3 font-desktop-subtitle text-text"
              placeholder="XXXXXX"
            />
          </div>

          {/* Total amount */}
          <div className="flex justify-between items-center mt-6">
            <span className="font-desktop-subtitle-bold text-text">
              Total Payable Amount
            </span>
            <span className="font-desktop-subtitle-bold text-text text-right">
              Rs. 18,000
            </span>
          </div>

          {/* Payment methods */}
          <Card className="w-full bg-white border-[#c3d0d7] rounded-xl mt-4">
            <CardContent className="p-6">
              <h4 className="font-desktop-subtitle-bold text-text mb-4">
                Payment Methods
              </h4>
              <RadioGroup defaultValue="upi" className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={method.id} id={method.id} />
                    <Label
                      htmlFor={method.id}
                      className="font-normal text-lg text-text"
                    >
                      {method.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Trust indicators */}
          <div className="flex justify-between items-start mt-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex flex-col items-center w-1/3">
                <img
                  src={indicator.icon}
                  alt={indicator.label}
                  className="w-10 h-10 mb-2"
                />
                <span className="font-medium text-lg text-text text-center">
                  {indicator.label}
                </span>
              </div>
            ))}
          </div>

          {/* Book now button */}
          <Button className="w-full mt-6 bg-green text-white rounded-[40px] py-3 px-10 font-desktop-subtitle-bold">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};


export default CancellationPolicySection