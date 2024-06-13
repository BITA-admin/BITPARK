import { FaLaptopCode } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaMobileAlt } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { BsClipboardCheckFill } from "react-icons/bs";
import { PiUserListBold } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Our_Serivces = () => {
  useEffect(() => {
    // AOS.refresh();
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 850,
    });
  }, []);

  return (
    <div className="pb-32 flex flex-col items-center justify-center bg-slate-900">
      <h1
        data-aos="fade-down"
        className="p-[1.5rem] font-bold text-4xl tracking-tight text-blueColor text-center pb-32"
      >
        OUR SERIVCES
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-24 ">
        <div
          className="items-center rounded-3xl p-1 border-2 border-white border_glow;"
          data-aos="fade-down"
        >
          {/* <Link to="/webdevelopment"> */}
          <a href="/webdevelopment">
            <FaLaptopCode className="w-[200px] h-[150px] pt-8 text-blueColor text-center" />
            <h2 className="text-white text-center p-5 font-semibold ">
              Web <br />
              Development
            </h2>
          </a>
          {/* </Link> */}
        </div>

        <div
          className="items-center rounded-3xl p-1 border-2 border-white border_glow ;"
          data-aos="fade-down"
        >
          <a href="/mobileappdevelopment">
            <HiMiniComputerDesktop className="w-[200px] h-[150px] text-blueColor text-center" />
            <h2 className="text-white text-center p-3 font-semibold ">
              Mobile APP <br />
              Development
            </h2>
          </a>
        </div>

        <div
          className="items-center rounded-3xl p-1 border-2 border-white border_glow ;"
          data-aos="fade-down"
        >
          <a href="/applicationmodernization">
            <FaMobileAlt className="w-[200px] h-[150px] pt-7 text-blueColor text-center" />
            <h2 className="text-white text-center p-3 font-semibold ">
              Application <br /> Modernization.
            </h2>
          </a>
        </div>

        <div
          className="items-center rounded-3xl p-1 border-2 border-white border_glow ;"
          data-aos="fade-down"
        >
          <a href="/uiux">
            <MdWeb className="w-[200px] h-[150px]  text-blueColor text-center" />
            <h2 className="text-white text-center font-semibold ">
              UI/UX Design
            </h2>
          </a>
        </div>

        

        <div
          className="items-center rounded-3xl p-1 border-2 border-white border_glow ;"
          data-aos="fade-down"
        >
          <a href="/testingqa">
            <BsClipboardCheckFill className="w-[200px] h-[150px] pt-8 text-blueColor text-center" />
            <h2 className="text-white text-center p-5 font-semibold ">
              Testing and QA
            </h2>
          </a>
        </div>

        <div
          className="items-center rounded-3xl p-1 border-2 border-white border_glow ;"
          data-aos="fade-down"
        >
          <a href="/itconsultingservice">
            <PiUserListBold className="w-[200px] h-[150px] text-blueColor text-center" />
            <h2 className="text-white text-center p-5 font-semibold ">
              IT Consultancy
            </h2>
          </a>
        </div>
        <div
          className="items-center rounded-3xl p-1 border-2 border-white border_glow ;"
          data-aos="fade-down"
        >
          <a href="/itoutsourcing">
            <FaHandshake className="w-[200px] h-[155px] pt-12 text-blueColor text-center" />
            <h2 className="text-white text-center p-3 font-semibold ">
              IT Outsourcing
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Our_Serivces;
