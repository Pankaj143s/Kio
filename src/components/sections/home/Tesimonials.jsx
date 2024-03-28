import React from "react";

function Tesimonials() {
  return (
    <>
      {/* new code ---------------------------------------------------------- */}
      <div>
        <h2 class="text-4xl font-bold text-primary text-center py-4">
          Trust in our Expertise, Experience, and Dedication.
        </h2>
        {/* Testimonial cards div  */}

        <div className="flex flex-col sm:flex-col md:flex-row gap-4 px-4">
          {/* -------------------First Testimonial   --------------------- */}

          <div class="flex flex-col bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full md:max-w-xs hover:border-indigo-600 mx-auto ">
            <div>
              {" "}
              <p class="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
                KIO is a reliable and customer-centric brand, providing
                high-quality products and excellent
              </p>
            </div>
            <div class="flex items-center gap-5">
              <img
                src="https://pagedone.io/asset/uploads/1704349534.png"
                alt="Emily image"
              />
              <div class="grid gap-1">
                <h5 class="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600">
                  Mr. Rahul Periplyani
                </h5>
                <span class="text-sm leading-6 text-gray-500">
                  {" "}
                  Distributor{" "}
                </span>
              </div>
            </div>
          </div>
          {/* -------------------Second Testimonial--------------------- */}
          <div class=" bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full md:max-w-xs hover:border-indigo-600 mx-auto ">
            <p class="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
              Kio products consistently exceed expectations, ensuring customer
              loyalty .
            </p>
            <div class="flex items-center gap-5">
              <img
                src="https://pagedone.io/asset/uploads/1704349534.png"
                alt="Emily image"
              />
              <div class="grid gap-1">
                <h5 class="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600">
                  Mr. Aman, Kolhapur.
                </h5>
                <span class="text-sm leading-6 text-gray-500">
                  {" "}
                  Distributor
                </span>
              </div>
            </div>
          </div>
          {/* -------------------Third Testimonial--------------------- */}
          <div class=" bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full md:max-w-xs hover:border-indigo-600 mx-auto ">
            <p class="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
              KIO's automotive batteries guarantee top notch performance and
              longevity.
            </p>
            <div class="flex items-center gap-5">
              <img
                src="https://pagedone.io/asset/uploads/1704349534.png"
                alt="Emily image"
              />
              <div class="grid gap-1">
                <h5 class="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600">
                  Mr. Sumit Patkar, Ratnagiri.
                </h5>
                <span class="text-sm leading-6 text-gray-500"> </span>
              </div>
            </div>
          </div>
          {/* -------------------Fourth Testimonial--------------------- */}
          <div class=" bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full  md:max-w-xs hover:border-indigo-600 mx-auto ">
            <p class="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
              KIO's inverter battery has been a dependable power solution for my
              home.
            </p>
            <div class="flex items-center gap-5">
              <img
                src="https://pagedone.io/asset/uploads/1704349534.png"
                alt="Emily image"
              />
              <div class="grid gap-1">
                <h5 class="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600">
                  Mr. M. Mayank, Pune.
                </h5>
                <span class="text-sm leading-6 text-gray-500"> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new code end ---------------------------------------------------------- */}
    </>
  );
}

export default Tesimonials;
