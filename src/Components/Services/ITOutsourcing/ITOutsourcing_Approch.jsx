import Lottie from "lottie-react";

import AssessYourNeeds from "../ITOutsourcing/outsourcing_json/AssessYourNeeds.json";
import AssessCapabilities from "../ITOutsourcing/outsourcing_json/AssessCapabilities.json";
import Communication from "../ITOutsourcing/outsourcing_json/EstablishCommunicationChannels.json";
import MonitorPerformance from "../ITOutsourcing/outsourcing_json/MonitorPerformance.json";
import CreateTransitionPlan from "../ITOutsourcing/outsourcing_json/CreateTransitionPlan.json";
import AdjustNeeded from "../ITOutsourcing/outsourcing_json/AdjustNeeded.json";
import MaintainRelationship from "../ITOutsourcing/outsourcing_json/MaintainRelationship.json";
import MeasureResults from "../ITOutsourcing/outsourcing_json/MeasureResults.json";

import defineobjective_itos from "../../../assets/all-images/defineobjective-itos.png";
import Itos_rpp from "../../../assets/all-images/Itos_rpp.png";

import { TiTickOutline } from "react-icons/ti";

const ITOutsourcing_Approch = () => {
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
              <h2 className="text-4xl font-bold">Assess Your Needs:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Determine which IT operations may be outsourced.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Assess your Infrastructure, resources, and goals to find
                  outsourcing opportunities.
                </li>
              </ul>
            </div>
            <div>
              <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
                <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[27rem] lg:h-[25rem]">
                  <Lottie loop={true} animationData={AssessYourNeeds} />
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
              <h2 className="text-4xl font-bold">Define Objectives: </h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Set outsourcing goals and expectations.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  If you want to cut costs, get specialized help, or boost
                  efficiency, match your goals with your business plan.
                </li>
              </ul>
            </div>
            <div>
              {/* <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[29rem] lg:h-[29rem]"> */}
              <div className="transition-all duration-300 ease-in-out hover:scale-105 mt-10 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                <img src={defineobjective_itos} alt="Define Objectives" />
              </div>
              {/* </div> */}
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
                Research Potential Providers:{" "}
              </h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Thoroughly investigate potential providers.{" "}
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Consider reputation, experience, competence, and cost. Find
                  industry-proven providers.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[28rem] lg:h-[27rem]  ">
                <img src={Itos_rpp} alt=" Research Potential Providers" />
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
              <h2 className="text-4xl font-bold">Assess Capabilities: </h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Assess each provider's capabilities and services.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Find a service that can fulfil your needs and solve your
                  problems.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[27rem] lg:h-[29rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={AssessCapabilities} />
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
              <h2 className="text-4xl font-bold">
                Establish Communication Channels:
              </h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Communicate with your outsourcing partner.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  To promote teamwork and alignment, set expectations, check in
                  regularly, and communicate openly.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[29rem] lg:h-[27rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={Communication} />
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
              <h2 className="text-4xl font-bold">Create a Transition Plan: </h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Create a detailed plan to transfer duties to the outsourced
                  partner smoothly.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Clearly define deadlines, milestones, and responsibilities for
                  a smooth transition.
                </li>
              </ul>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
              <Lottie loop={true} animationData={CreateTransitionPlan} />
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-500 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Monitor Performance: </h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Make sure your outsourcing partner is meeting your needs and
                  adding value.
                </li>{" "}
                <li className="flex mt-2">Set KPIs and track progress.</li>
                <span className="text-purple-900 text-[25px] ">
                  <TiTickOutline />
                </span>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 lg:w-[25rem] lg:h-[29rem] w-96 h-96">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={MonitorPerformance} />
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
              <h2 className="text-4xl font-bold">Adjust as Needed:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Adjust your outsourcing strategy based on business needs and
                  stakeholder feedback.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Maximizing outsourcing benefits requires flexibility and
                  agility.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 ">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={AdjustNeeded} />
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
                Maintain a Good Relationship:
              </h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Work well with your outsourcing partner.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Build a successful collaboration on trust, honesty, and
                  respect.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[29rem] lg:h-[29rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={MaintainRelationship} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-600 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Measure Results:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Assess how outsourcing affects your corporate goals.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Assess outsourcing's ROI and whether it helped you reach your
                  aims.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[29rem] lg:h-[29rem]">
                <div className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                  <Lottie loop={true} animationData={MeasureResults} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITOutsourcing_Approch;
