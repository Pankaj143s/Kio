import React from "react";
import { Fade } from "react-awesome-reveal";
import banner from "../../../assets/homepage/banners/greatPlaceBanner1.jpeg";
import ourDepartment from "../../../constants/ourDepartment";
function GreatPlaceToLearn() {
  console.log(ourDepartment);

  return (
    <>
      {/* -------------------Great Place To LEarn New */}
      <div className="relative w-full h-72  md:h-96 flex justify-center items-center">
        <img
          src={banner}
          className="  absolute object-cover w-full h-full "
        ></img>

        <div className="absolute flex left-0 top-16 md:left-24 md:top-16 px-10 md:px-24 max-w-72 md:max-w-3xl ">
          <Fade direction="up" triggerOnce="true">
            <h3 className="  text-4xl md:text-7xl font-semibold  text-blue-950">
              Great Place to Work
            </h3>
          </Fade>
        </div>
      </div>
      {/* -------------------Great Place To LEarn New */}
      {/* -------------------------Explore Opportunities-------------------- */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-semibold text-center text-blue-800 ">
          Explore opportunities
        </h1>
        <p className="text-center md:px-24 text-lg py-2 px-4 font-poppins">
          Join a team-driven environment where every voice is heard, ideas are
          celebrated, and excellence is recognized. Elevate your career in a
          supportive and inclusive workplace.
        </p>
      </div>
      {/* ----------------------------------------------Explore Opportunities---------------------------------------- */}

      <div>
        <section className=" ">
          <div className="container px-6  mx-auto">
            <Fade direction="up" triggerOnce="true">
              <h2 className="text-4xl font-semibold text-center text-blue-800 capitalize">
                Our Departments
              </h2>
            </Fade>

            <div className="flex flex-wrap justify-center  items-center gap-6 md:gap-x-36 py-12">
              {ourDepartment.map((department) => {
                return (
                  <div className="flex flex-col justify-center items-center">
                    <div
                      key={department.id}
                      className="flex justify-center items-center gap- bg-blue-200 w-56 h-56 rounded-full"
                    >
                      <Fade direction="up" triggerOnce="true">
                        <img
                          className=" "
                          src={department.imgUrl}
                          alt="avatar"
                        />
                      </Fade>
                    </div>
                    <Fade direction="up" triggerOnce="true">
                      <h3 className="text-xl font-normal text-black p-4 text-center">
                        {department.name}
                      </h3>
                    </Fade>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* ----------------------------------------------Our Departments---------------------------------------- */}

      <div className="flex justify-center items-center ">
        <button className="bg-blue-200 rounded-full px-4 py-2 font-semibold">
          Join our career community
        </button>
      </div>
    </>
  );
}

export default GreatPlaceToLearn;
