import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Lottie from "lottie-react";
import nonit from "./Non-it1.json";
import software from "./Software.json";

const Serve = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="w-full ">
        <h2 className="my-6 text-2xl tracking-tight font-bold text-blueColor sm:text-3xl md:text-4xl text-center">
          WHOM WE SERVE
        </h2>
        <div className="items-center w-full md:w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:pt-12 lg:pt-24 xl:pt-14">
          <div className="pr-2 md:mb-0 py-8 md:py-0  text-center">
            <h1 className="text-3xl font-semibold text-blueColor xl:text-4xl lg:text-3xl ">
              Non - IT Enterprises
            </h1>
            <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5  ">
              Specializes in developing creative software solutions for non-IT
              businesses, providing them with the latest technologies to improve
              productivity and promote growth.
            </p>
          </div>

          <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <div
              className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto  sm:pb-12 lg:pb-0"
              style={{ width: "450px", height: "488px" }}
            >
              <Lottie loop={true} animationData={nonit} />
            </div>
          </div>
        </div>

        <div className="items-center  w-full md:w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:pb-12 lg:pb-24 xl:pb-14">
          <div className=" overflow-hidden">
            <div
              className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-5 lg:pb-0"
              style={{ width: "500px", height: "450px" }}
            >
              <Lottie loop={true} animationData={software} />
            </div>
          </div>

          <div className="pr-2 md:mb-5 py-5 md:py-0 text-center">
            <h1 className="text-3xl font-semibold text-blueColor xl:text-4xl lg:text-3xl">
              Software Product Companies
            </h1>
            <p className="py-4 pb-10 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
              Strategic software development partner committed to providing
              extraordinary solutions for software product firms while assuring
              market relevance and client happiness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Serve;
