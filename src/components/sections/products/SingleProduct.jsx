import React from "react";

import { Fade } from "react-awesome-reveal";
import { BsCheckAll } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test from "../../../assets/product-page/Automotive/Ranges Of Batteries/details/temp.png";
import kioLogo from "../../../assets/product-page/kioLogo3.png";
// import BatteryCircle from "./BatteryCircle";
// import kioBannerLogoText from "../../../assets/product-page/kioBannerLogoText.png";

const SingleProduct = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false
    
  };
  let isArray = false;

  return (
    <>
      <div className="font-poppins">
        <Fade direction="up" triggerOnce="true">
          <div className="relative w-full h-72  md:h-screen flex justify-center items-center ">
            <img
              src={product?.bannerImage}
              className="  absolute object-cover w-full h-full opacity-70 mix-blend-normal"
            ></img>
            {/* -----------------------Kio Logo And Product Page Headings Over Banner Image-------- */}
            <div className="absolute top-0 right-0 flex justify-center items-center px-6  md:px-4">
              <img
                src={kioLogo}
                alt=""
                className="w-2/4 h-2/4 md:w-full md:h-full pt-2 md:pt-24"
              />
              <h1 className="font-bold text-lg md:text-5xl whitespace-nowrap md:pt-36 pt-10  italic bg-gradient-to-r from-blue-600 via-blue-800 to-blue-500 inline-block text-transparent bg-clip-text">
                Automotive Batteries
              </h1>
            </div>
            {/* -----------------------Kio Logo And Product Page Headings Over Banner Image Ends-------- */}
          </div>
        </Fade>
        <div className="flex flex-col justify-center content-center px-4 md:px-28">
          <Fade direction="up" triggerOnce="true">
            <h2 className="text-left md:text-center py-8 text-3xl md:text-4xl font-semibold text-primary">
              {product?.tagline}
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <p className=" text-left text-lg md:text-xl md:text-center">
              {product?.desc}
            </p>
          </Fade>
        </div>
        <div className="flex flex-col md:flex-row bg-[#E8F4FB] to-white justify-evenly items-center my-16 ">
          <div className="flex justify-center">
            <Fade
              direction="up"
              triggerOnce="true"
              className="flex justify-center"
            >
              <img
                src={product?.featureSectionImage}
                alt={product?.title}
                className="w-3/4 md:w-96"
              />
            </Fade>
          </div>
          <div className="py-4 flex flex-col gap-y-3  md:justify-center  ">
            <Fade direction="up" triggerOnce="true">
              <h3 className=" font-semibold text-primary text-3xl text-left md:text-4xl underline underline-offset-8 decoration-primary py-1 ">
                FEATURES
              </h3>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <ul className="px-4 md:px-8 list-none">
                {product?.features?.map((feature) => {
                  return (
                    <div className="flex">
                      <BsCheckAll size={30} />
                      <li key={feature?.id}>{feature?.title}</li>
                    </div>
                  );
                })}
              </ul>
            </Fade>
          </div>
        </div>

        {
          (isArray = Array.isArray(product?.slider) ? (
            <div className="w-full py-4">
              {/* Slider */}
              <Slider {...settings}>
                {product?.slider?.map((sliderImage) => {
                  return (
                    <div className="">
                      <img src={sliderImage} alt="slider-image" className="w-full" />
                    </div>
                  );
                })}
              </Slider>
            </div>
          ) : (
            <div className="w-full  md:p-8 ">
              {/* Banner Image */}
              <img src={product?.slider} alt="slider" />
            </div>
          ))
        }

        {/* ------------------------------------------------------------------------------------------------------- */}
        <Fade direction="up" triggerOnce="true">
          <h1 className=" text-4xl font-semibold py-8 px-4 text-center">
            RANGES OF <span className="text-primary">BATTERIES</span>
          </h1>
        </Fade>
        <div className="flex flex-col md:flex-row gap-2 md:flex-wrap justify-center md:justify-around items-center bg-clip-border rounded-xl md:w-full my-12">
          {product?.rangesOfBatteries?.map((battery) => {
            return (
              <div>
                <h1 className="text-primary text-center text-3xl">
                  {battery.name}
                </h1>
                <Fade direction="up" triggerOnce="true">
                  <div className="grid md:grid-cols-3  gap-8 ">
                    {battery?.batteries.map((battery, index) => {
                      return (
                        <div class="flip-card">
                          <div class="flip-card-inner">
                            <div class="flip-card-front">
                              <div className="  flex flex-col items-center justify-evenly  rounded-full w-96 h-96  font-semibold border-4 shadow-lg shadow-sky-800 border-blue-200 bg-gradient-to-b from-blue-50 border-b-sky-800  to-blue-200">
                                <img
                                  src={battery.image}
                                  alt={battery.name}
                                  className="s "
                                />
                                <p className="text-3xl  text-blue-800 bg-blue-400 rounded-full p-2 w-36 text-center  ">
                                  {battery?.info?.capacity}
                                </p>
                              </div>
                            </div>
                            <div class="flip-card-back">
                              <div className="  flex flex-col items-center justify-center gap-2 p-4 rounded-full w-96 h-96 font-semibold border-4 shadow-lg shadow-sky-800 border-blue-200 bg-gradient-to-b from-blue-50 border-b-sky-800  to-blue-200">
                                <p className="text-xl">
                                  Flat Plate Technology Battery
                                </p>
                                <p className="text-xl">
                                  <span className="">Size: </span>
                                  {battery?.info?.size}
                                </p>
                                <p className="text-4xl  text-blue-800 bg-blue-400 rounded-full p-4">
                                  {battery.name}
                                </p>
                                <div className="flex gap-4 text-xl">
                                  <div className="flex flex-col justify-center items-center ">
                                    <p className="">Capacity</p>
                                    <p> {battery?.info?.capacity}</p>
                                  </div>
                                  <div className="flex flex-col justify-center items-center">
                                    <p className="">Warranty</p>
                                    <p> {battery?.info?.warranty}</p>
                                  </div>
                                  <div className="flex flex-col justify-center items-center">
                                    <p className="">Weight</p>
                                    <p>{battery?.info?.weight}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        //  { <---------------------Old Flip Code ----------------------->}
                        // <div className="group [perspective:1000px]">
                        //   <div className="relative w-[321px] h-[321px] rounded-full  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] font-semibold border-4 shadow-lg shadow-sky-800 border-blue-200 bg-gradient-to-b from-blue-50 border-b-sky-800  to-blue-200">
                        //     <BatteryCircle battery={battery} />
                        //     <div className="absolute inset-0 w-[321px] h-[321px] rounded-full   text-center bg-blue-200 [transform:rotateY(180deg)] [backface-visibility:hidden]  shadow-lg shadow-sky-800 border-blue-200 bg-gradient-to-b from-blue-50 border-b-sky-800  to-blue-200">
                        //       <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        //         <p className="">
                        //           Flat Plate Technology Battery
                        //         </p>
                        //         <p className="text-lg">
                        //           <span className="">Size: </span>
                        //           305(L)*173(W)*225(H)
                        //         </p>
                        //         <p className="text-4xl  text-blue-800 bg-blue-400 rounded-full p-4">
                        //           KPT50
                        //         </p>
                        //         <div className="flex gap-4 text-xl">
                        //           <div className="flex flex-col justify-center items-center ">
                        //             <p className="">Capacity</p>
                        //             <p>50Ah</p>
                        //           </div>
                        //           <div className="flex flex-col justify-center items-center">
                        //             <p className="">Warranty</p>
                        //             <p>36M</p>
                        //           </div>
                        //           <div className="flex flex-col justify-center items-center">
                        //             <p className="">Weight</p>
                        //             <p>14Kg</p>
                        //           </div>
                        //         </div>
                        //       </div>
                        //     </div>
                        //   </div>
                        // </div>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
        {/* --------------------------------------------------------------------------------------------------------- */}
        <div className="flex flex-col gap-y-20">
          <div className="md:h-full bg-[#E8F4FB]  flex flex-col justify-center items-center">
            <div className="py-4">
              <Fade direction="up" triggerOnce="true">
                <h3 className=" text-primary  text-3xl md:text-6xl font-bold">
                  APPLICATION
                </h3>
              </Fade>
            </div>
            <div className="flex justify-center flex-wrap">
              <>
                {product?.applicationDetails?.map((app, index) => {
                  return (
                    <Fade direction="up" triggerOnce="true">
                      <div
                        className="flex  p-2 rounded-full bg-white m-4 "
                        key={(app, index)}
                      >
                        <img
                          src={app.img}
                          alt=""
                          className="p-4"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        ></img>
                      </div>
                    </Fade>
                  );
                })}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
