import React from "react";
import { ourProduct } from "../../../constants/ourProducts";

function OurProduct() {
  return (
    <>
      {/* -------------------------Our Products-------------------- */}

      <div>
        <h1 className="text-center">Our Product</h1>
        <h2 className="text-center">
          THE ULTIMATE POWER SOURCE FOR YOUR COMMERCIAL APPLICATIONS
        </h2>
        <div>
          <div className="flex p-8 flex-wrap justify-center items-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 md:gap-y-5 space-y-8 md:space-x-8">
            {ourProduct.map((product) => {
              return (
                <div
                  className="p-4 w-full md:w-1/4 lg:w-1/6  flex flex-col text-center items-center  hover:bg-blue-400 hover:delay-200 duration-1000 ease-out hover:text-white cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl"
                  key={product.id}
                >
                  <div className=" inline-flex items-center justify-center rounded-full  flex-shrink-0 ">
                    <img src={product.imgUrl} alt="" />
                  </div>
                  <div className="flex-grow">
                    <h2 className=" text-lg mb-3">{product.name}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* --------------------------------------------- */}
    </>
  );
}

export default OurProduct;
