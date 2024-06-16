import Contact_Us from "../../assets/all-images/NewContact.png";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { message } from "antd";

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
  // mailjs

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearFormFields = () => {
    setFormData({
      user_name: "",
      user_email: "",
      user_phone: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1eb5elh", // Replace with your EmailJS service ID
        "template_5m2y84s", // Replace with your EmailJS template ID
        formData,
        "YxP4X05UHXB7tHCur" // Replace with your EmailJS user ID
      )
      .then((res) => {
        message.success("Email sent successfully", res);
        clearFormFields();
        setTimeout(() => {
          message.destroy();
        }, 3000);
      })
      .catch((err) => {
        message.error("Try again...!!!", err);
        setTimeout(() => {
          message.destroy();
        }, 3000);
      });
  };

  return (
    <>
    <section>
      <div className=" bg-[url('../src/assets/all-images/NewContact.png')] bg-cover bg-no-repeat">
        <div className="bg-slate-900/80 py-[8%] flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="w-[400px] mt-12 ">
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
        <div className="lg:w-[420px] w-[90%]">
          <form
            onSubmit={handleSubmit}
            className="w-full shrink-0 grow-0 basis-auto  border_glow p-5 rounded-lg"
          >
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
                name="user_name"
                required
                value={formData.user_name}
                onChange={handleChange}
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
                name="user_phone"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                placeholder="Phone"
                value={formData.user_phone}
                title="Please enter a valid phone number"
                onChange={handleChange}
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
                required
                placeholder="Email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
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
                placeholder="Message Here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="mb-6 inline-block w-full rounded bg-blueColor px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-blueColor hover:text-slate-900"
            >
              Send
            </button>
          </form>
        </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Newcontact;
