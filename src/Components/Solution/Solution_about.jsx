import React from "react";

const Solution_about = () => {
  return (
    <div className="">
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl ">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            src="../../../src/assets/all-images/business-concept-with-wood-blocks.jpg"
            // src="https://picsum.photos/id/1018/2000"
            alt="Background Image"
            className="h-full w-full object-cover"
          />
          {/* <img src="../../../src/assets/all-images/standard-quality-control-concept-m.jpg" alt="Winding mountain road" className="h-full w-full object-cover" > */}
        </div>

        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-32 xl:ml-12">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-blueColor lg:text-4xl">
              BIT PARK Pvt. Ltd.
            </h2>
            <p className="mt-4">
              BIT PARK Pvt. Ltd. is committed to fostering excellence and
              innovation in the software development industry. We take great
              pride in our steadfast dedication to quality, dependability, and
              customer contentment, as evidenced by our long history of
              providing innovative solutions to enterprises spanning diverse
              sectors.
            </p>

            {/* <div className="mt-8">
              <a
                href="#"
                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                Read More
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution_about;
