import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

 const FiltersAndSortingSection = ()=> {
  // Filter options data
  const filterOptions = [
    { name: "Location", width: "w-[194px]" },
    { name: "Property Type", width: "w-[138px]" },
    { name: "Sharing Type", width: "w-36" },
    { name: "Budget", width: "w-[118px]" },
    { name: "Amenities", width: "w-[124px]" },
  ];

  return (
    <div className="flex w-full items-center justify-between px-6 py-4 sticky top-[205px] bg-white z-10">
      <div className="flex items-start gap-[30px]">
        {filterOptions.map((option, index) => (
          <div key={index} className="flex items-start gap-3">
            <Button
              variant="outline"
              className={`${option.width} flex items-center justify-between px-5 py-3 rounded-[40px] border border-solid border-[#00000080] bg-transparent`}
            >
              <span className="font-['Lato',Helvetica] font-medium text-black text-lg">
                {option.name}
              </span>
              {index === 0 && <ChevronDownIcon className="w-5 h-5" />}
            </Button>
          </div>
        ))}
      </div>

      <Separator orientation="vertical" className="h-[46px]" />

      <div className="flex items-center gap-8">
        <div className="flex items-start gap-3">
          <div className="font-desktop-subtitle-bold text-text text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)]">
            Sort by:
          </div>

          <div className="flex items-center gap-2">
            <div className="font-desktop-subtitle-bold text-[#49735a] text-[length:var(--desktop-subtitle-bold-font-size)] tracking-[var(--desktop-subtitle-bold-letter-spacing)] leading-[var(--desktop-subtitle-bold-line-height)]">
              Availability
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default FiltersAndSortingSection
