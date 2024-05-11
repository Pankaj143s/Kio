import React from "react";
import { ourProduct } from "../../../constants/ourProducts";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function OurProduct() {
  return (
    <>
      {/* -------------------------Our Products-------------------- */}

      <div className="py-8">
        <h1 className="text-center text-2xl sm:text-4xl  font-semibold text-primary">
          Our Product
        </h1>
        <h2 className="text-center text-xl py-4  px-2">
          THE ULTIMATE POWER SOURCE FOR YOUR COMMERCIAL APPLICATIONS
        </h2>
        <div>
          <div className="flex p-8 flex-wrap justify-center items-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 md:gap-y-5 space-y-8 md:space-x-8">
            {ourProduct.map((product) => {
              return (
                <div
                  className="p-4 w-full md:w-1/3 lg:w-1/4  flex flex-col text-center items-center hover:bg-black hover:delay-200 duration-1000 ease-out hover:text-white cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  key={product.id}
                >
                  <Link to={`/products/${product.id - 1}`}>
                    <div className=" inline-flex items-center justify-center rounded-full  flex-shrink-0">
                      <Fade direction="up" triggerOnce="true">
                        <img src={product.imgUrl} alt="" />
                      </Fade>
                    </div>
                    <div className="flex-grow">
                      <Fade direction="up" triggerOnce="true">
                        <h2 className=" text-lg mb-3">{product.name}</h2>
                      </Fade>
                    </div>
                  </Link>
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
