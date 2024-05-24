// import { motion } from "framer-motion";
// import { FiBatteryCharging, FiWifi } from "react-icons/fi";
// import logo from "../../../assets/all-images/bita-academy.png";
import Contact_Us from "../../../assets/all-images/Outsourcing_banner.jpg";

const ITOutsourcing_banner = () => {
  return (
    <div className="relative flex h-screen">
      <img
        src={Contact_Us}
        alt="image"
        className="h-full w-full object-cover "
      />
      <section className=" grid md:grid-cols-2 mx-auto gap-10 md:pt-28 pt-44 absolute top-20 left-12 max-w-full md:left-44 z-10">
        <div>
          <div className=" max-w-full  flex gap-4 items-start flex-col">
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-400 to-cyan-500 font-extrabold xl:text-3xl lg:text-xl tracking-wider py-10 lg:py-24  xl:py-10 text-xl">
              <span className="block w-full ">
                Your Ultimate Destination for Mobile Application Development
                Services
              </span>
              <br />
              <span className="text-[18px] text-gray-300 font-bold">
                We are trusted by the industry to deliver top-tier Native Apps
                to enterprise clients. Our full-stack mobility team has
                expertise in all mobile app development areas.
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center  gap-6">
            <a
              href="/contactus"
              class="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-blueColor mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
            >
              <span class="ml-2">Schedule a consultation</span>
            </a>
          </div>
        </div>
        {/* <div className=" place-content-center flex gap-4 items-center flex-col">
          <FloatingPhone />
        </div> */}
      </section>
      <div className="h-full w-full bg-slate-900 absolute top-0 opacity-75 "></div>
    </div>
  );
};

// const FloatingPhone = () => {
//   return (
//     <div
//       style={{
//         transformStyle: "preserve-3d",
//         transform: "rotateY(-30deg) rotateX(15deg)",
//       }}
//       className="rounded-[24px] bg-blueColor "
//     >
//       <motion.div
//         initial={{
//           transform: "translateZ(8px) translateY(-2px)",
//         }}
//         animate={{
//           transform: "translateZ(32px) translateY(-8px)",
//         }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "mirror",
//           duration: 2,
//           ease: "easeInOut",
//         }}
//         className="relative  h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
//       >
//         <HeaderBar />
//         <Screen />
//       </motion.div>
//     </div>
//   );
// };

// const HeaderBar = () => {
//   return (
//     <>
//       <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
//       <div className="absolute right-3 top-2 z-10 flex gap-2">
//         <FiWifi className="text-neutral-600" />
//         <FiBatteryCharging className="text-neutral-600" />
//       </div>
//     </>
//   );
// };

// const Screen = () => {
//   return (
//     <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-gray-200">
//       <div className="mx-auto mt-6 max-w-xl flex items-center justify-center ">
//         <a href="https://bitaacademy.com/" target="_blank" className="">
//           <img src={logo} alt="logo" className=" h-20 w-44 mb-16" />
//         </a>
//       </div>

//       <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-blueColor backdrop-blur">
//         Get Started
//       </button>

//       <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-blueColor" />
//     </div>
//   );
// };

export default ITOutsourcing_banner;
