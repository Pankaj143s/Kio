import React from "react";
import GreatPlaceToLearn from "../components/sections/home/GreatPlaceToLearn";
import OurProduct from "../components/sections/home/OurProduct";
import SimpleSlider from "../components/sections/home/SimpleSlider";
import Tesimonials from "../components/sections/home/Tesimonials";
import WhyChooseKio from "../components/sections/home/WhyChooseKio";
import BatteryTips from "../components/sections/home/BatteryTips";
import WorkCulture from "../components/sections/home/WorkCulture";
import Blogs from "../components/sections/home/Blogs";

function Home() {
  return (
    <>
      <SimpleSlider />
      <OurProduct />
      <WhyChooseKio />
      <BatteryTips />
      <Tesimonials />
      <GreatPlaceToLearn />
      <Blogs />
      <WorkCulture />
    </>
  );
}

export default Home;
