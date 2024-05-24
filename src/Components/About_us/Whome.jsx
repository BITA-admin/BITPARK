import inquiry from "../../assets/all-images/Initiate an inquiry to us.jpg";
import Get_a_Proposal from "../../assets/all-images/Get_a_Proposal.png";
import Schedule_a_Preliminary_Call from "../../assets/all-images/Schedule_a_Preliminary_Call.png";
import Sign_a_Service_Contract from "../../assets/all-images/Sign_a_Service_Contract.png";

const Whome = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-24 lg:px-6">
        <div className=" space-y-5 md:mb-16 md:text-center">
          <h1 className=" text-3xl font-bold text-blueColor md:text-center md:text-4xl mb-5  tracking-tight">
            HOW TO COMMENCE OUR COLLABORATION
            {/* <span className="text-slate-900">COLLABORATION</span> */}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 p-4 max-w-[700px] place-items-center">
            <img
              src={inquiry}
              alt="logo"
              className=" w-48 h-48 hover:scale-110 cursor-pointer transition duration-500 ease-in-out"
            />

            <img
              src={Schedule_a_Preliminary_Call}
              alt="logo"
              className="w-48 h-48 hover:scale-110 cursor-pointer transition duration-500 ease-in-out"
            />
            <img
              src={Get_a_Proposal}
              alt="logo"
              className="w-48 h-48 hover:scale-110 cursor-pointer transition duration-500 ease-in-out"
            />
            <img
              src={Sign_a_Service_Contract}
              alt="logo"
              className="w-48 h-48 hover:scale-110 cursor-pointer transition duration-500 ease-in-out "
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 bg-gray-100 border border-blueColor border-t-0 border-l-0 rounded-br-xl        overflow-hidden  hover:shadow-xl  transition-all duration-200 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-md mb-6 text-blueColor">
                  Initiate an inquiry to us
                </h3>
                <p className="text-sm">
                  You have the option to contact us through various channels,
                  including phone calls, online chat, and email.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 bg-gray-100 border border-blueColor border-t-0 border-l-0 rounded-br-xl overflow-hidden  hover:shadow-xl  transition-all duration-200 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-md mb-6 text-blueColor">
                  Schedule a Preliminary Call
                </h3>
                <p className="text-sm">
                  We ask queries to identify ambiguous pain points and discover
                  additional opportunities to generate value for your success.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 bg-gray-100 border border-blueColor border-t-0 border-l-0 rounded-br-xl overflow-hidden  hover:shadow-xl  transition-all duration-200 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-md mb-6 text-blueColor">
                  Get a Proposal
                </h3>
                <p className="text-sm">
                  The proposal will provide a comprehensive outline of the
                  service, including the work scope, team composition, estimated
                  cost, project timeline, and deliverables.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 bg-gray-100 border border-blueColor border-t-0 border-l-0 rounded-br-xl overflow-hidden  hover:shadow-xl  transition-all duration-200 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-md mb-6 text-blueColor">
                  Sign a Service Contract
                </h3>
                <p className="text-sm">
                  We officially establish mutual rights and obligations. We also
                  sign a service level agreement (SLA) for ongoing services like
                  help desk or managed IT that outlines their scope and
                  efficiency criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whome;
