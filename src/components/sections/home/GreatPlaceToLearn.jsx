import React from "react";
import { Fade } from "react-awesome-reveal";
import banner from "../../../assets/homepage/banners/greatPlaceBanner1.jpeg";
import oneIcon from "./../../../assets/homepage/ourProductsIcon/1Icon.png";
import ourDepartment from "../../../constants/ourDepartment";
function GreatPlaceToLearn() {
  console.log(ourDepartment);

  return (
    <>
      {/* ----------------------------------------------Great Place To Learn---------------------------------------- */}
      <div className="relative  before:absolute  md:before:w-full  md:before:h-full before:inset-0 md:before:bg-black before:opacity-50 before:z-10">
        <img
          src={banner}
          alt="Banner Image"
          className="absolute inset-0 w-full h-auto  md:w-full md:h-full  object-cover"
        />
        <div className="min-h-[500px] relative z-20 h-full max-w-xs md:max-w-4xl flex  justify-start md:items-center text-white md:mx-20 text- p-6 ">
          <h2 className="text-3xl md:text-8xl font-bold mb-6">
            Great Place to Work
          </h2>
        </div>
      </div>
      {/* ----------------------------------------------Great Place To Learn---------------------------------------- */}
      {/* ----------------------------------------------Explore Opportunities---------------------------------------- */}
      <div className="text-center">
        <h1 className="text-primary text-5xl font-semibold">
          Explore opportunities
        </h1>
        <p className="text-2xl md:max-w-8xl">
          Join a team-driven environment where every voice is heard, ideas are
          celebrated, and excellence is recognized. Elevate your career in a
          supportive and inclusive workplace.
        </p>
      </div>
      {/* ----------------------------------------------Explore Opportunities---------------------------------------- */}

      {/* -----------------------------------------------------new grid design---------------------------------------------------- */}

      <div className="my-8">
        <section className=" ">
          <div className="container px-6 py-8 mx-auto">
            <Fade direction="up" triggerOnce="true">
              <h2 className="text-4xl font-semibold text-center text-blue-800 capitalize">
                Our Departments
              </h2>
            </Fade>

            <div className="grid gap-8 mt-8 place-content-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-4">
              {ourDepartment.map((department) => {
                return (
                  <div className="rounded-full">
                    <div
                      className="flex flex-col justify-center content-center w-full max-w-xs text-center bg-gray-400 shadow-xl gap-y-4 transition-all duration-700 hover:scale-110 cursor-pointer rounded-full"
                      key={department.id}
                    >
                      <Fade direction="up" triggerOnce="true">
                        <img
                          className=" object-contain object-center  bg-gray-400 rounded-full "
                          src={department.imgUrl}
                          alt="avatar"
                        />
                      </Fade>
                    </div>
                    <Fade direction="up" triggerOnce="true">
                      <h3 className="text-lg font-normal text-black p-4 ">
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
