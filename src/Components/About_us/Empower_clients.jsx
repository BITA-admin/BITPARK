import Idea from "../../assets/all-images/idea.png";
import Project from "../../assets/all-images/Project.png";
import Design from "../../assets/all-images/Design.png";
import Code from "../../assets/all-images/Code.png";
import Rest_API from "../../assets/all-images/Rest API.png";

const Empower_clients = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="text-center ">
        <h3 className="text-3xl sm:text-4xl  leading-normal font-bold tracking-tight text-slate-800 p-[1.5rem] mb-10">
          HOW WE EMPOWER{" "}
          <span className="text-blueColor font-bold tracking-tight">
            CLIENTS
          </span>
        </h3>
      </div>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-around">
        <div className=" w-[190px] grid gap-4 justify-items-center text-center mx-2 my-3 mt-8">
          <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-28 w-28 border-t-8 border-b-8 border-t-slate-700 border-b-blueColor"></div>
            <img
              src={Idea}
              alt="Ideate-EMPOWER CLIENTS"
              className="h-14 w-full object-cover object-top sm:h-42 md:h-14 lg:w-full lg:h-13 "
            />
          </div>

          <h3 className="md:text-[1.67rem] text-2xl font-semibold text-blueColor mt-4">
            Ideate
          </h3>
        </div>
        <div className="w-[190px] grid gap-4 justify-items-center text-center mx-2 my-3 mt-8">
          <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-28 w-28 border-t-8 border-b-8 border-t-slate-700 border-b-blueColor"></div>
            <img
              src={Project}
              alt=" Strategic Plan"
              className="h-14 w-full object-cover object-top sm:h-42 md:h-14 lg:w-full lg:h-13 "
            />
          </div>
          <h3 className="md:text-[1.67rem] text-2xl font-semibold text-blueColor mt-4">
            Strategic Plan
          </h3>
        </div>
        <div className="w-[190px] grid gap-4 justify-items-center text-center mx-2 my-3 mt-8">
          <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-28 w-28 border-t-8 border-b-8 border-t-slate-700 border-b-blueColor"></div>
            <img
              src={Design}
              alt="Design"
              className="h-14 w-full object-cover object-top sm:h-42 md:h-14 lg:w-full lg:h-13 "
            />
          </div>

          <h3 className="md:text-[1.67rem] text-2xl font-semibold text-blueColor mt-4">
            Design
          </h3>
        </div>
        <div className="w-[190px] grid gap-4 justify-items-center text-center mx-2 my-3 mt-8">
          <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-28 w-28 border-t-8 border-b-8 border-t-slate-700 border-b-blueColor"></div>
            <img
              src={Code}
              alt="Develop"
              className="h-14 w-full object-cover object-top sm:h-42 md:h-14 lg:w-full lg:h-13 "
            />
          </div>
          <h3 className="md:text-[1.67rem] text-2xl font-semibold text-blueColor mt-4">
            Develop
          </h3>
        </div>
        <div className="w-[190px] grid gap-4 justify-items-center text-center mx-2 my-3 mt-8">
          <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-28 w-28 border-t-8 border-b-8 border-t-slate-700 border-b-blueColor"></div>
            <img
              src={Rest_API}
              alt="Integrate"
              className="h-14 w-full object-cover object-top sm:h-42 md:h-14 lg:w-full lg:h-13 "
            />
          </div>
          <h3 className="md:text-[1.67rem] text-2xl font-semibold text-blueColor mt-4">
            Integrate
          </h3>
        </div>
        </div>
        <div className="text-center mt-8">
          <p className=" text-slate-600 text-base text-[15px] mx-auto max-w-5xl leading-normal font-semibold tracking-tight">
            As a leading custom application development company and IT
            consulting firm, BIT PARK provides our clients with cutting-edge
            software programming services for desktop, mobile, and web
            applications via extensive technological platforms. 
          </p>
          <p className=" text-slate-600 text-base text-[15px] mx-auto p-[1.5rem] max-w-5xl leading-normal font-semibold tracking-tight">
            With a 15-year track record as a trustworthy technology solutions
            partner for a wide range of mid-market and enterprise clients, we
            constantly deliver innovative solutions that utilize technology to
            address your most complex business difficulties and drive critical
            outcomes. Our unique application development services save
            significant time and money and cover the entire process, from
            ideation and strategic planning to design, development, and
            integration. By transforming your business difficulties into
            custom-designed enterprise software solutions, we ensure that they
            are powerful, visually appealing, and user-friendly. Trust us to
            make your vision a measurable, efficient reality.  
          </p>
        </div>
      </div>

    </div>
  );
};

export default Empower_clients;
