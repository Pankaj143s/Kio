import React from "react";
import whyBanner from "../../../assets/homepage/banners/whybgcrop.png";
import correctIcon from "../../../assets/homepage/whyChooseKio/correctIcon.png";

function WhyChooseKio() {
  return (
    <>
      <div className="md:flex ">
        <div className="w-4/5 md:w-1/2">
          <img
            src={whyBanner}
            className=" md:w-full h-auto "
            alt="whyChooseEmikoBanner"
          />
        </div>
        <div className=" flex flex-col gap-y-4 md:gap-y-16 items-start justify-center px-8">
          <div className="flex justify-center items-center">
            <img
              src={correctIcon}
              className="w-10 h-10 sm:w-6 sm:h-6 md:w-14 md:h-14 mr-2"
              alt="correctIcon"
            />
            <h1 className=" text-primary text-2xl md:text-4xl font-medium ">
              Exceptional Performance & durability
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={correctIcon}
              className="w-10 h-10 sm:w-6 sm:h-6 md:w-14 md:h-14 mr-2"
              alt="correctIcon"
            />
            <h1 className="text-primary text-2xl md:text-4xl font-medium">
              Power and dependability
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseKio;
