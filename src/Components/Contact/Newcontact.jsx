import Contact_Us from "../../assets/all-images/NewContact.jpg";
// import Contact_us from "../../assets/all-images/Contact_us_12.png";
import {
  //   IoCall,
  //   IoMail,
  //   IoLocationSharp,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation);

const Newcontact = () => {
  return (
    <div className="relative">
      <div className=" flex h-[120svh] lg:h-screen">
        <img
          src={Contact_Us}
          alt="image"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute lg:top-[28%] top-[5%]  w-3/5 left-20  md:left-56 z-10">
          <div className="mb-12 w-full  shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6">
            {" "}
            <div className="flex items-start">
              <div className="srink-0">
                <div className="inline-block rounded-full bg-white p-2.5 h-[50px] w-[50px] text-primary">
                  <lord-icon
                    src="https://cdn.lordicon.com/surcxhka.json"
                    stroke="bold"
                    strokeWidth="10"
                    trigger="loop"
                    delay="1500"
                    colors="primary:#121331,secondary:#8930e8"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                </div>
              </div>
              <div className="ml-6 ">
                <p className="mb-2 text-xl font-extrabold text-blueColor ">
                  Address
                </p>
                <p className="text-md text-white  font-medium">
                  5/48, Valluvar Salai,
                  <br /> Ramapuram,
                  <br /> Chennai 600 089.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 ">
            <div className="flex items-start">
              <div className="srink-0">
                <div className="inline-block rounded-full bg-white p-2.5 h-[50px] w-[50px] text-primary">
                  <lord-icon
                    src="https://cdn.lordicon.com/rsvfayfn.json"
                    trigger="loop"
                    delay="1500"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                </div>
              </div>

              <div className="ml-6 ">
                <p className="mb-2 text-xl font-extrabold text-blueColor ">
                  Phone
                </p>
                <p className="text-md text-white font-semibold">
                  <a href="tel: Phone: +91 9566004616"> +91 9566004616</a>
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 ">
            <div className="flex items-start">
              <div className="srink-0">
                <div className="inline-block rounded-full bg-white p-2.5 h-[50px] w-[50px] text-primary">
                  <lord-icon
                    src="https://cdn.lordicon.com/nzixoeyk.json"
                    trigger="loop"
                    delay="1500"
                    style={{ width: "30px", height: "30px" }}
                  ></lord-icon>
                </div>
              </div>
              <div className="ml-6 ">
                <p className="mb-2 text-xl font-extrabold text-blueColor ">
                  Email
                </p>
                <p className="text-md text-white font-semibold">
                  info@bitpark.com Ramapuram
                </p>
              </div>
            </div>
          </div>

          <div className="text-textColor  flex  md:justify-start space-x-4 lg:ml-24 ml-16 text-2xl">
            <a
              className="text-white hover:text-blueColor   transform hover:scale-150
                             transition-all duration-150 ease-in-out"
              href="https://www.instagram.com/bitahelpdesk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <IoLogoInstagram />
            </a>
            <a
              className="text-white hover:text-blueColor   transform hover:scale-150
                             transition-all duration-150 ease-in-out"
              href="https://www.linkedin.com/company/11236773/admin/feed/posts/"
            >
              <IoLogoLinkedin />
            </a>
            <a
              className="text-white hover:text-blueColor   transform hover:scale-150
                             transition-all duration-150 ease-in-out"
              href="https://twitter.com/Bitaaacademy"
            >
              <IoLogoTwitter />
            </a>
            <a
              className="text-white hover:text-blueColor   transform hover:scale-150
                             transition-all duration-150 ease-in-out"
              href="https://www.youtube.com/channel/UC01fbEKhsxSRx-Sycvc4HWw"
            >
              <IoLogoYoutube />
            </a>
            <a
              className="text-white hover:text-blueColor    transform hover:scale-150
                             transition-all duration-150 ease-in-out"
              href="https://www.facebook.com/BitaAcademy/"
            >
              <IoLogoFacebook />
            </a>
          </div>
        </div>
        <div className="absolute lg:top-[14%] lg:right-48 xl:w-2/6 w-[90%]   top-[48%]  md:py-10  z-10  ml-5">
          {/* <img src={Contact_us} alt="Contact_Banner" className="" /> */}
          <form className="mb-12 w-full shrink-0 grow-0 basis-auto  border_glow p-5 rounded-lg">
            <div className="mb-3 w-full">
              <label
                className="block font-extrabold mb-[2px] text-blueColor"
                htmlFor="exampleInput90"
              >
                Name
              </label>
              <input
                type="text"
                className="px-2 py-2 border w-full outline-none rounded-md"
                placeholder="Name"
              />
            </div>

            <div className="mb-3 w-full ">
              <label
                className="block font-extrabold mb-[2px] text-blueColor"
                htmlFor="exampleInput90"
              >
                Phone
              </label>
              <input
                type="tel"
                className="px-2 py-2 border w-full outline-none rounded-md"
                placeholder="Number"
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="block font-extrabold mb-[2px] text-blueColor"
                htmlFor="exampleInput90"
              >
                Email
              </label>
              <input
                type="email"
                className="px-2 py-2 border w-full outline-none rounded-md"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="block font-extrabold mb-[2px] text-blueColor"
                htmlFor="exampleInput90"
              >
                Message
              </label>
              <textarea
                className="px-2 py-8 border rounded-[5px] w-full outline-none"
                name=""
                id=""
              ></textarea>
            </div>

            <button
              type="button"
              className="mb-6 inline-block w-full rounded bg-blueColor px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-blueColor hover:text-slate-900"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="h-full w-full bg-slate-900 absolute top-0 opacity-80 "></div>
    </div>
  );
};

export default Newcontact;
