import React from "react";
import blogs from "../assets/history/blogsLogo.jpg";


import career from "../assets/history/careerLogo.jpg";


import faq from "../assets/history/faqLogo.jpg";


import watch from "../assets/history/oldWatch1.jpg";


import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const Timeline = () => {
  return (
    <>
      <Fade direction="up" triggerOnce="true">
        {" "}
        <div className="font-poppins relative w-full h-96 flex justify-center items-center  bg-gradient-to-r from-orange-200 to-orange-50">
          <img
            src={watch}
            className=" opacity-40 absolute object-cover w-full h-full"
          ></img>
          <div className="absolute flex flex-col justify-center items-center text-center px-2">
            <Fade direction="up" triggerOnce="true">
              <h3 className="font-bold   text-4xl py-2">
                EMIKO SUCCESS THROUGH THE YEARS
              </h3>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <p className="text-xl md:text-2xl">
                Tracing the Evolution of Emiko Batteries: Powering Progress
                through Time
              </p>
            </Fade>
          </div>
        </div>
      </Fade>

      <Fade>
        {" "}
        <h3 className="text-center text-4xl font-bold text-blue-800 pt-8">
          Our Journey
        </h3>
      </Fade>
      {/* <!-- component --> */}
      {/* --------------------------------------------------------Timeline--------------------------------------------------- */}
      <div className="flex justify-center items-center px-2">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-black">
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-gray-300 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <Fade direction="up" triggerOnce="true">
                <h3 className="font-semibold text-lg mb-1">2022</h3>
                <p className="leading-tight text-justify">
                  Launched the longest-range GC2 lithium-ion golf car battery
                  Introduced a 48V GC2 lithium-ion battery to the golf industry
                  Launched the 24V/36V lithium-ion battery line.
                </p>
              </Fade>
            </div>

            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
            <div className="bg-gray-300 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <Fade direction="up" triggerOnce="true">
                <h3 className="font-semibold text-lg mb-1">2018</h3>
                {/* <h3 className="font-semibold text-base mb-1">
                  Chikali Plant, Pune
                </h3> */}
                <p className="leading-tight text-justify">
                  Acquired by C&D Technologies, a portfolio company of KPS
                  Capital Partners.
                </p>
              </Fade>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-gray-300 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <Fade direction="up" triggerOnce="true">
                <h3 className="font-semibold text-lg mb-1">2013</h3>
                <p className="leading-tight text-justify">
                  Launched two new deep-cycle 8V batteries: Traveler™ 8V, the
                  longest-life battery and Ranger 160™, the longest-range
                  battery. Received Frost & Sullivan 2013 “Innovative
                  Enterprise” award. Received Genie’s “Outstanding Performance”
                  award for 2012. Received 2012 “Application Solar Project of
                  the Year” award for a solar-powered rural street lighting
                  project in Dubai, U.A.E. Received investment from Charlesbank
                  Capital Partners.
                </p>
              </Fade>
            </div>

            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
            <div className="bg-gray-300 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <Fade direction="up" triggerOnce="true">
                <h3 className="font-semibold text-lg mb-1">2012</h3>
                {/* <h3 className="font-semibold text-base mb-1">
                  Chikali Plant, Pune
                </h3> */}
                <p className="leading-tight text-justify">
                  Selected as one of the "most admired companies" by readers of
                  Golf Course Industry magazine, as well as a company they can
                  trust to provide reliable products and support.
                </p>
              </Fade>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-gray-300 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <Fade direction="up" triggerOnce="true">
                <h3 className="font-semibold text-lg mb-1">2011</h3>

                <p className="leading-tight text-justify">
                  Received highest in sustained capacity and total ampere hour
                  performance rankings for Trojan’s T-875 flooded batteries from
                  independent third-party. Launched industrial line of
                  deep-cycle flooded batteries for renewable energy
                  applications. Added U1-AGM and 22-AGM products to the
                  deep-cycle AGM line.
                </p>
              </Fade>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-800 shadow"></div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------TielineEnded--------------------------------------------------- */}
      {/* More about emiko battery div */}
      <div className="mt-4">
        <section className="bg-gray-300 ">
          <div className="container px-6 py-8 mx-auto">
            <Fade direction="up" triggerOnce="true">
              {" "}
              <h2 className="text-2xl font-bold text-center text-blue-800 capitalize lg:text-6xl py-4">
                More about EMIKO Battery
              </h2>
            </Fade>

            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              <div className="w-full  text-center">
                <Fade direction="up" triggerOnce="true">
                  <img
                    className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                    src={blogs}
                    alt="avatar"
                  />{" "}
                </Fade>

                <div className="mt-2">
                  <Fade direction="up" triggerOnce="true">
                    <h3 className="text-lg font-medium text-black ">
                      Blogs and Articles
                    </h3>
                  </Fade>
                </div>
              </div>

              <div className="w-full text-center">
                <Link to="/carrers">
                  <Fade direction="up" triggerOnce="true">
                    <img
                      className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                      src={career}
                      alt="avatar"
                    />
                  </Fade>

                  <div className="mt-2">
                    <Fade direction="up" triggerOnce="true">
                      <h3 className="text-lg font-medium text-black ">
                        Careers
                      </h3>
                    </Fade>
                  </div>
                </Link>
              </div>

              <div className="w-full  text-center">
                <Link to="/faq">
                  <Fade direction="up" triggerOnce="true">
                    <img
                      className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                      src={faq}
                      alt="avatar"
                    />
                  </Fade>

                  <div className="mt-2">
                    <Fade direction="up" triggerOnce="true">
                      <h3 className="text-lg font-medium text-black ">FAQ</h3>
                    </Fade>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Timeline;
