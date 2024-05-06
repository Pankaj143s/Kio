import React from "react";

import kioIntro from "../../../assets/homepage/Slider/kio-intro.mp4";

export default function BannerVideo() {
  return (
    <div>
      <video src={kioIntro} autoPlay loop></video>
    </div>
  );
}
