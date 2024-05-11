import React, { useEffect, useRef } from "react";

import kioIntro from "../../../assets/homepage/Slider/kio-intro.mp4";

export default function BannerVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src={kioIntro}
        autoPlay
        muted
        loop
        preload="auto"
      ></video>
    </div>
  );
}
