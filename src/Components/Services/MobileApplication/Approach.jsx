import Deployment from "../../../assets/all-images/Deployment.png";
import Lottie from "lottie-react";
import requirments from "../MobileApplication/MobileApplication_json/callgathering.json";
import Planing from "../MobileApplication/MobileApplication_json/Planing.json";
import Requirment from "../MobileApplication/MobileApplication_json/Requirment.json";
import Development from "../MobileApplication/MobileApplication_json/Development.json";
import Testing from "../MobileApplication/MobileApplication_json/Testing.json";
import Lanching from "../MobileApplication/MobileApplication_json/Lanching.json";
import update from "../MobileApplication/MobileApplication_json/Update_1.json";
import Optimizing from "../MobileApplication/MobileApplication_json/Optimizing.json";

import { TiTickOutline } from "react-icons/ti";

const Approach = () => {
  return (
    <div>
      {" "}
      <div className="relative  ">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-300 to-gray-200">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Requirements gathering:</h2>
              <ul className="p-6 space-y-2">
                <li className=" mt-2 flex">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Know client needs and business goals.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Define app scope, features, and functions.
                </li>
              </ul>
            </div>
            <div>
              <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
                <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[29rem] lg:h-[25rem]">
                  <Lottie loop={true} animationData={requirments} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-200 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Planning and Analysis:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Create user flows, wireframes, and prototypes.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Define the tech stack and development method.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Research the market and competitors.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[29rem] lg:h-[29rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={Planing} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Design:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Design UI/UX for user needs.
                </li>

                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Design visuals, layouts, and interactive elements.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Maintain device compatibility, usability, and accessibility.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[29rem] lg:h-[22rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={Requirment} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-300 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Development:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Write platform-specific code (iOS, Android, cross-platform).
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Provide functionality, APIs, and database administration.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Code and develop according to best practices.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[27rem] lg:h-[29rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={Development} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-500 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Testing:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Make sure all features work by functional testing.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Test usability to evaluate user experience.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Check compatibility, performance, security, and
                  device-specific features.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Fix issues found during testing.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[29rem] lg:h-[27rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={Testing} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-400 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Deployment:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Prepare the app for app store release.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Add descriptions, images, and promotions to app store
                  listings.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Comply with app store submission policies.
                </li>
              </ul>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
              <img src={Deployment} alt="Deployment" />
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-600 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Launch and Distribution:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Publish the app in app stores.
                </li>{" "}
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Promote the app using social media, email, and press releases.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Track app performance and user feedback after launch.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 lg:w-[25rem] lg:h-[29rem] w-96 h-96">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={Lanching} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-500 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Maintenance and support:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Respond to user feedback and issue complaints with ongoing
                  support.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Update and add features based on user wants and market trends.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Assess app speed, security, and analytics for improvements.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 ">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={update} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-700 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Optimizing and Iterating:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Analyze user data and feedback for optimization opportunities.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Update the app based on user behavior and business needs.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  To keep the app competitive and relevant, keep up with new
                  technology and industry trends.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[29rem] lg:h-[29rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={Optimizing} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
