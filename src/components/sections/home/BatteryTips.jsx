import React from "react";
import iconOne from "../../../assets/homepage/batteryTipsIcons/1.png";
import iconTwo from "../../../assets/homepage/batteryTipsIcons/2.png";
import iconThree from "../../../assets/homepage/batteryTipsIcons/3.png";
import bgGradient from "../../../assets/homepage/batteryTipsIcons/background.jpeg";

function BatteryTips() {
  return (
    <>
      <div className="md:py-4">
        <div
          className="w-full h-screen bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${bgGradient})` }}
        >
          {/*------------------------- Title div ----------------- */}
          <div className="flex flex-col gap-6 py-8">
            <h1 className="text-center text-primary text-3xl md:text-4xl font-semibold ">
              Battery Tips
            </h1>
            <p className=" text-center text-xl">
              Know how to take care of your battery.
            </p>
          </div>
          {/* ------------------- div for icon cards ---------------- */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
            {/* ----------------- first card -------------------- */}
            <div className="flex flex-wrap justify-center items-center text-center bg-white w-56 h-56 md:w-64 md:h-64 p-6 rounded-full md:text-sm shadow-2xl text-xs">
              <img src={iconOne} alt="" />
              <p>How do i know that my battery needs replacement?</p>
            </div>
            {/* ----------------- second card -------------------- */}
            <div className="flex flex-wrap justify-center items-center text-center bg-white w-56 h-56 md:w-64 md:h-64 p-6 rounded-full md:text-sm shadow-2xl text-xs">
              <img src={iconTwo} alt="" />
              <p>Tips while replacing the battery or cleaning terminals</p>
            </div>
            {/* ----------------- third card -------------------- */}
            <div className="flex flex-wrap justify-center items-center text-center bg-white w-56 h-56 md:w-64 md:h-64 p-6 rounded-full md:text-sm shadow-2xl text-xs">
              <img src={iconThree} alt="" />
              <p>How to handle and used batteries with care</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BatteryTips;
