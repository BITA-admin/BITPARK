import React from "react";
import contactteam from "../../assets/all-images/422-Send-Mail (5).png";
import "./Contact.css";
import {
  IoCall,
  IoMail,
  IoLocationSharp,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
// import { AiFillInstagram } from "react-icons/ai";

function Contact() {
  return (
    <>
      <section className="contact_form  w-full">
        <div className="contact_bg">
          <h3 className="text-textColor text-3xl font-bold md:w-3/4 mx-auto py-9 text-center">
            Are you upfor an action? The way out is here? Hey,
            <br /> how about we have a chat?
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div
              className=" w-full md:w-1/2"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <form className="bg-blueColor/10 my-5 mx-auto w-11/12 md:w-8/12 p-7 space-y-8 rounded-2xl  border_glow_contact">
                <div className=" ">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-4 py-2 rounded outline-1 w-full"
                  />
                </div>
                <div className=" ">
                  <input
                    type="text"
                    placeholder="Number"
                    className=" px-4 py-2 rounded outline-1 w-full"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    placeholder="Email"
                    className=" px-4 py-2 rounded outline-1 w-full "
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message Here..."
                    name="message"
                    rows={4}
                    className=" w-full rounded px-4 py-2 mt-2 "
                  />
                </div>
                <div>
                  <button className="text-center bg-blueColor font-semibold w-full py-2 rounded text-textColor">
                    SEND
                  </button>
                </div>
              </form>
            </div>
            <div className="home_contactform  ps-12 m-0 w-full md:w-1/2 mt-12 md:mt-12   ">
              {/* <MdContactMail className='text-white w-full h-full'/> */}
              <div className="">
                <img
                  src={contactteam}
                  alt="image"
                  className="w-10/12 m-0 p-0 h-[510px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="lg:py-10  shadow-inner">
            <div className="text-textColor flex justify-around items-center flex-wrap  text-lg">
              <div className="flex space-x-2 p-3 lg:p-0">
                <IoCall className="  bg-blueColor text-textColor p-1 rounded-full size-7 hover:text-blueColor hover:bg-white duration-500" />
                <span>
                  <a href="tel:+91 99403 24626">+91 99403 24626</a>
                </span>
              </div>
              <div className="flex space-x-2 p-3 lg:p-0">
                <IoMail className="bg-blueColor text-textColor p-1 rounded-full size-7 hover:text-blueColor hover:bg-white duration-500" />
                <span>info@bitpark.com</span>
              </div>
              <div className="flex space-x-2 p-3 lg:p-0">
                <IoLocationSharp className="bg-blueColor text-textColor p-1 rounded-full size-7 hover:text-blueColor hover:bg-white duration-500" />
                <span>Ramapuram, Chennai - 600089</span>
              </div>

              <div className="text-textColor  flex  md:justify-start space-x-4 text-2xl">
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
          </div>
        </div>
      </section>
      {/* <div className="flex  w-full ">
        <div className="px-6 h-96 lg:h-100% w-full ">
          <div style={{ width: "100%", height: "100%" }}>
            <iframe
              title="Python Updated - 2021"
              frameborder="0"
              allowfullscreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              width="100%"
              height="100%"
              // src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&amp;mute=0&amp;controls=0&"
              // src="https://youtu.be/MudQJc55eVY?si=FVKazW5hRys56_yv"
              // src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              src="https://www.youtube.com/embed/videoseries?list=PLnvjMsEoePHeU7SJpb5El5Rhca3FZKEnn"
              // id="widget2"
              // https://www.youtube.com/embed/videoseries?list=PLnvjMsEoePHeU7SJpb5El5Rhca3FZKEnn
            ></iframe>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Contact;
