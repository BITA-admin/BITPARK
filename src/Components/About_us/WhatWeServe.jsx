import { PiUserListBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { BsClipboardCheckFill } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhatWeServe = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 1000,
    });
  }, []);

  return (
    <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 ">
      <div className="flex flex-col self-center basis-1/2 ">
        {/* <div className="text-center"> */}
        <h3
          data-aos="fade-right"
          className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-slate-900 "
        >
          WHAT WE <span className="text-blueColor">SERVE</span>
        </h3>
        {/* </div> */}
      </div>
      <div className="mx-auto mt-8 grid max-w-xl  w-full ">
        <div
          data-aos="fade-down"
          className=" p-5 rounded-lg shadow-lg border border-gray-300"
        >
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span className="text-lg flex ">
                <div className="hidden sm:flex p-2 rounded-full bg-blueColor text-white border-4 border-white text-xl font-semibold">
                  <PiUserListBold className="w-[20px] h-[20px] text-white " />
                </div>
                <span className="ml-2 mt-2">IT Consultancy</span>
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>

            <ul className="p-4 space-y-2  group-open:animate-fadeIn mt-3 text-neutral-600 text-md">
              <li className="list-disc">
                <span className="font-semibold">Project Management:</span>{" "}
                Manage IT projects from start to finish, meeting deadlines and
                budgets.
              </li>
              <li className="list-disc">
                <span className="font-semibold">Training and Support:</span>{" "}
                Provide training to staff on new technologies
              </li>
              <li className="list-disc">
                Digitalization of business workflows.
              </li>
            </ul>
          </details>
        </div>
        <div
          data-aos="fade-down"
          className=" p-5 rounded-lg shadow-lg border border-gray-300 my-5"
        >
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span className="text-lg flex ">
                <div className="hidden sm:flex p-2 rounded-full bg-blueColor text-white border-4 border-white text-xl font-semibold">
                  <IoSettingsSharp className="w-[20px] h-[20px] text-white " />
                </div>
                <span className="ml-2 mt-2">Software Development</span>
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <ul className="p-4 space-y-2  text-gray-700 text-md">
              <li className="list-disc">
                Web and mobile application design, development, and support for
                enterprise software
              </li>
              <li className="list-disc">
                Management of software product design, development, and support
              </li>
            </ul>
          </details>
        </div>
        <div
          data-aos="fade-down"
          className=" p-5 rounded-lg shadow-lg border border-gray-300"
        >
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span className="text-lg flex ">
                <div className="hidden sm:flex p-2 rounded-full bg-blueColor text-white border-4 border-white text-xl font-semibold">
                  <BsClipboardCheckFill className="w-[20px] h-[20px] text-white " />
                </div>
                <span className="ml-2 mt-2">Testing and QA</span>
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <ul className="p-4 space-y-2  text-gray-700 text-md">
              <li className="list-disc">
                Web, mobile, and desktop apps include complete functional,
                integration, performance, usability, and security testing.
              </li>
              <li className="list-disc">
                API Testing: Verifying the functionality, reliability, and
                security of application programming interfaces (APIs).
              </li>
            </ul>
          </details>
        </div>
        <div
          data-aos="fade-down"
          className=" p-5 rounded-lg shadow-lg border border-gray-300 my-5"
        >
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              <span className="text-lg flex ">
                <div className="hidden sm:flex p-2 rounded-full bg-blueColor text-white border-4 border-white text-xl font-semibold">
                  <FaMobileAlt className="w-[20px] h-[20px] text-white " />
                </div>
                <span className="ml-2 mt-2">Application Services</span>
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <ul className="p-4 space-y-2  text-gray-700 text-md">
              <li className="list-disc">
                Management of newly implemented applications, including
                development, integration, and continual assistance.
              </li>
              <li className="list-disc">
                Profitability enhancement and operational cost reduction are
                outcomes of business application modernization.
              </li>
              <li className="list-disc">
                Maintenance and support for applications.
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default WhatWeServe;
