import requiermentanalysis_tandqa from "../../../assets/all-images/requiermentanalysis-tandqa.png";
import testingplan_tandqa from "../../../assets/all-images/newtestingplan-tandqa.png";
import environmentsetup_tandqa from "../../../assets/all-images/newenvironmentsetup-tandqa.png";
import testcasedesign_tandqa from "../../../assets/all-images/testcasedesign-tandqa.png";
import testexecution_tandqa from "../../../assets/all-images/newtestexecution-tandqa.png";
import resultanalysis_tandqa from "../../../assets/all-images/resultanalysis-tandqa.png";
import regressiontesting_tandqa from "../../../assets/all-images/newregressiontesting-tandqa.png";
import performancetesting_tandqa from "../../../assets/all-images/newperformancetesting-tandqa.png";
import securitytesting_tandqa from "../../../assets/all-images/securitytesting-tandqa.png";
import documentation_tandqa from "../../../assets/all-images/documentation-tandqa-Photoroom.png-Photoroom.png";
import feedbackanditeration_tandqa from "../../../assets/all-images/feedbackanditeration-tandqa-Photoroom.png-Photoroom.png";
import FinalValidation_tandqa from "../../../assets/all-images/FinalValidation_tandqa-Photoroom.png-Photoroom.png";

import { TiTickOutline } from "react-icons/ti";

const Test_approch = () => {
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
              <h2 className="text-4xl font-bold">Requirement Analysis:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Understand API purpose and functioning.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Determine inputs, outputs, and errors.
                </li>
              </ul>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
              <img src={requiermentanalysis_tandqa} />
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-200 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Test Planning:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  To plan a test, define objectives, scope, and strategies.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Determine use case test scenarios and data sets.
                </li>
              </ul>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
              <img src={testingplan_tandqa} />
            </div>
          </div>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Environment Setup :</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>{" "}
                  Set up testing environments, including servers and databases.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Set up testing frameworks and tools.
                </li>
              </ul>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[30rem] lg:h-[27rem] lg:pt-10">
              <img src={environmentsetup_tandqa} />
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-300 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Test Case Design :</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Design test scenarios for functional, performance, and
                  security factors.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Where applicable, write automated test scripts.
                </li>
              </ul>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
              <img src={testcasedesign_tandqa} />
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-500 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Test Execution :</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Execute test cases as per the test plan.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Track API answers, logs, and performance.
                </li>
              </ul>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[28rem] lg:h-[27rem] lg:pt-10">
              <img src={testexecution_tandqa} />
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-400 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Result Analysis :</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Analyze test findings to identify discrepancies or failures.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Determine reasons and document faults for fixing.
                </li>
              </ul>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
              <img src={resultanalysis_tandqa} />
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-600 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Regression Testing:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Verify repairs and updates by rerunning test cases.
                </li>{" "}
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Maintain functionality after changes.
                </li>
              </ul>
            </div>
            <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
              <img src={regressiontesting_tandqa} />
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-500 to-gray-200 text-black">
          <h1 className="text-3xl font-bold text-center pt-5  text-indigo-900  px-4 pb-10">
            BIT PARK METHOD AND APPROACH
          </h1>
          <div className="md:grid-cols-2 grid items-center w-full  lg:w-10/12  mx-auto overflow-x-hidden md:pb-14 lg:pb-24 p-5 ">
            <div>
              <h2 className="text-4xl font-bold">Performance Testing:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  It involves load, stress, and endurance tests to evaluate
                  performance under different conditions.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Measure throughput, response times, and resource use.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
                <img src={performancetesting_tandqa} />
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
              <h2 className="text-4xl font-bold">Security Testing:</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Identify and address vulnerabilities, including injection
                  attacks and data disclosure.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Maintain security standards and best practices.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
                <img src={securitytesting_tandqa} />
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
              <h2 className="text-4xl font-bold">Documentation :</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Create test reports detailing coverage, results, and
                  discoveries.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Make notes on test cases, techniques, and suggestions.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
                <img src={documentation_tandqa} />
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
              <h2 className="text-4xl font-bold">Feedback and Iteration :</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Consider stakeholder comments and integrate suggestions for
                  improvement.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Improve testing efficiency and efficacy by iterating.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
                <img src={feedbackanditeration_tandqa} />
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
              <h2 className="text-4xl font-bold">Final Validation :</h2>
              <ul className="p-6 space-y-2">
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Conduct final validation to ensure the API meets all
                  functional and non-functional requirements.
                </li>
                <li className="flex mt-2">
                  <span className="text-purple-900 text-[25px] ">
                    <TiTickOutline />
                  </span>
                  Before launching the API, get stakeholder approval.
                </li>
              </ul>
            </div>
            <div>
              <div className="transition-all duration-300 ease-in-out hover:scale-105   lg:pb-0 w-96 h-96 lg:w-[26rem] lg:h-[27rem]">
                <img src={FinalValidation_tandqa} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Test_approch;
