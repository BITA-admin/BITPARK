import TestingValidation from "./ApplicationModernization_json/TestingValidation.json";
import Lottie from "lottie-react";
import MonitorOptimize from "./ApplicationModernization_json/MonitorOptimize.json";
import DevelopMigration from "./ApplicationModernization_json/DevelopMigration.json";
import ChooseCloud from "./ApplicationModernization_json/ChooseCloud.json";
import DataMigration from "./ApplicationModernization_json/DataMigration.json";
import FutureProofing from "./ApplicationModernization_json/FutureProofing.json";
import SuccessMetrics from "./ApplicationModernization_json/SuccessMetrics.json";
import CollaborationSupport from "./ApplicationModernization_json/CollaborationSupport.json";
import AgileDevelopment from "./ApplicationModernization_json/AgileDevelopment.json";

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
                <li className="flex mt-2">
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
                  <Lottie loop={true} animationData={AgileDevelopment} />
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
              <h2 className="text-4xl font-bold">
                Develop Migration Strategy:
              </h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Create a modernization strategy that aligns with corporate
                  goals.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Consider complexity, ROI, and criticality while prioritizing
                  tasks.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[35rem] lg:h-[29rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={DevelopMigration} />
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
              <h2 className="text-4xl font-bold">Choose Cloud Platform:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Choose cloud platforms based on workload and preferences.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Scalability, security, compliance, and cost-effectiveness are
                  important.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-80 lg:w-[26rem] lg:h-[26rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={ChooseCloud} />
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
              <h2 className="text-4xl font-bold">Data Migration:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Data and Workload movement: Enable smooth cloud movement of
                  data, apps, and infrastructure.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Data integrity, security, and low downtime are achieved with
                  technologies and best practices.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[28rem] lg:h-[29rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={DataMigration} />
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
              <h2 className="text-4xl font-bold">Agile Development:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Optimize and refactor applications and infrastructure for
                  cloud-native settings.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  For agility and scalability, use microservices,
                  containerization, and serverless computing.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[27rem] lg:h-[27rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={AgileDevelopment} />
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
              <h2 className="text-4xl font-bold">Testing and Validation :</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Validate and test thoroughly to ensure compatibility,
                  functionality, and performance.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Check cloud security, compliance, and regulations.
                </li>
              </ul>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[29rem] lg:h-[27rem]">
              <Lottie loop={true} animationData={TestingValidation} />
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-600 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Monitor and Optimize :</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  To optimize performance, use, and expenses, use monitoring and
                  analytics tools.
                </li>{" "}
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Continuously improve cloud resources, workload, and cost
                  efficiency and ROI.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 lg:w-[29rem] lg:h-[29rem] w-96 h-96">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={MonitorOptimize} />
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
              <h2 className="text-4xl font-bold">
                Collaboration and Support :
              </h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Encourage collaboration among development, operational, and
                  business stakeholders during modernization.
                </li>{" "}
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Continue training, support, and direction to guarantee success
                  and adoption.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 lg:w-[25rem] lg:h-[29rem] w-96 h-96">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={CollaborationSupport} />
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
              <h2 className="text-4xl font-bold">Success Metrics :</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Establish KPIs (Key Performance Indicators) to evaluate the
                  success of the modernization program.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Measure cost savings, performance, and business results.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 ">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={SuccessMetrics} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center  bg-gradient-to-b from-cyan-200 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Future-Proofing: </h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Track new technology and industry trends to adapt and evolve.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  To stay competitive in the digital age, invent and iterate.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[22rem] lg:h-[29rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={FutureProofing} />
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
