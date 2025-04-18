import React from "react";
import whyBanner from "../../../assets/homepage/banners/whybgcrop.png";
import correctIcon from "../../../assets/homepage/whyChooseKio/correctIcon.png";

function WhyChooseKio() {
  return (
    <>
      <div className="md:flex">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <img
            src={whyBanner}
            className="w-full h-auto"
            alt="whyChooseKioBanner"
          />
        </div>
        <div className="flex flex-col gap-y-4 md:gap-y-12 items-start justify-center px-6 md:px-10">
          <div className="flex items-center">
            <img
              src={correctIcon}
              className="w-10 h-10 sm:w-6 sm:h-6 md:w-14 md:h-14 mr-2"
              alt="correctIcon"
            />
            <h1 className="text-primary text-xl md:text-3xl font-medium">
              Exceptional Performance & durability
            </h1>
          </div>
          <div className="flex items-center">
            <img
              src={correctIcon}
              className="w-10 h-10 sm:w-6 sm:h-6 md:w-14 md:h-14 mr-2"
              alt="correctIcon"
            />
            <h1 className="text-primary text-xl md:text-3xl font-medium">
              Power and dependability
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseKio;
