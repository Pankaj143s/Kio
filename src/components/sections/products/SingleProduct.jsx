import React from "react";

import { Fade } from "react-awesome-reveal";
import { BsCheckAll } from "react-icons/bs";

const SingleProduct = ({ product }) => {
  return (
    <>
      <div className="font-poppins">
        <Fade direction="up" triggerOnce="true">
          <div className="relative w-full h-72  md:h-96 flex justify-center items-center bg-gradient-to-bl from-orange-300 to-orange-200">
            <img
              src={product?.bannerImage}
              className="  absolute object-cover w-full h-full opacity-50 mix-blend-normal"
            ></img>
            {/* 
            <div className="absolute flex flex-col justify-center items-center">
              <Fade direction="up" triggerOnce="true">
                <h3 className="text-center  text-3xl md:text-4xl font-semibold backdrop-blur-sm w-fit">
                  EMIKO- {product?.title}
                </h3>
              </Fade>
              <p className="w-3/4 text-center backdrop-blur-sm p-2">
                <Fade direction="up" triggerOnce="true">
                  {product?.description}
                </Fade>
              </p>
            </div> */}
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
                <h1>{battery.name}</h1>
                <Fade direction="up" triggerOnce="true">
                  <div className="grid grid-cols-3 ">
                    {battery?.batteries.map((battery, index) => {
                      return (
                        <img
                          key={index}
                          src={battery.image}
                          alt="profile-picture"
                        />
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
