import React from "react";
import GreatPlaceToLearn from "../components/sections/home/GreatPlaceToLearn";
import OurProduct from "../components/sections/home/OurProduct";
import SimpleSlider from "../components/sections/home/SimpleSlider";
import Tesimonials from "../components/sections/home/Tesimonials";
import WhyChooseKio from "../components/sections/home/WhyChooseKio";
import BatteryTips from "../components/sections/home/BatteryTips";

function Home() {
  return (
    <>
      <SimpleSlider />
      <OurProduct />
      <WhyChooseKio />
      <BatteryTips />
      <Tesimonials />
      <GreatPlaceToLearn />
    </>
  );
}

export default Home;
