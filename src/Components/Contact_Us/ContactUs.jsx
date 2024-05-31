import Lottie from "lottie-react";
import nonit from "./Contact.json";

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

// import React, { useState } from "react";
import emailjs from "emailjs-com";
import { message } from "antd";

defineElement(lottie.loadAnimation);

import {
  IoLogoLinkedin,
  // IoLogoFacebook,
  // IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

const Contact_us = () => {
  return (
    <div className="w-full  place-content-center">
      <EncryptButton />
    </div>
  );
};

const TARGET_TEXT = "Send";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 100;

const CHARS = "....";

const EncryptButton = () => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

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
    <div>
      <div>
        <div className="grid gap-4 justify-items-center text-center md:flex-1 py-9">
          <h3 className="md:text-[1.8rem] text-2xl font-bold text-blueColor">
            CONNECT WITH US
          </h3>

          <div className="text-center  max-w-5xl ">
            <p className=" text-gray-600 text-base text-[15px]  p-[1.5rem] leading-normal font-semibold tracking-tight">
              We're here to help in any way we can, and we're committed to
              finding creative solutions that fit your specific needs. Our team
              of experts is ready to address any queries you may have, whether
              they're related to software development, IT strategy, project
              timelines, or any other aspect of our services. Your success is
              our priority, and we are here to provide the guidance and support
              you need.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-32">
        <div className="relative h-[450px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.6360252251063!2d80.18322717547134!3d13.030528741090466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d454408c93%3A0xf439976d9ab8a2f2!2sBITA%20IT%20Academy!5e0!3m2!1sen!2sin!4v1694772895127!5m2!1sen!2sin"
            width="100%"
            height="480"
            // allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="container px-6 md:px-12">
          <div className="block  rounded-lg bg-[hsla(0,0%,100%)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 xl:-mt-[140px] xl:backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap ">
              <div className=" w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form
                  onSubmit={handleSubmit}
                  className="mb-12  w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0   lg:px-6"
                >
                  <div className="mb-3 w-full ">
                    <label
                      className="block font-semibold mb-[2px] text-blueColor "
                      htmlFor="exampleInput90"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="px-2 py-2 border w-full outline-none rounded-md"
                      id="exampleInput90"
                      placeholder="Name"
                      name="user_name"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 w-full">
                    <label
                      className="block font-semibold mb-[2px] text-blueColor"
                      htmlFor="exampleInput90"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="px-2 py-2 border w-full outline-none rounded-md"
                      id="exampleInput90"
                      placeholder="Phone"
                      name="user_phone"
                      pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                      value={formData.user_phone}
                      title="Please enter a valid phone number"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 w-full">
                    <label
                      className="block font-semibold mb-[2px] text-blueColor"
                      htmlFor="exampleInput90"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="px-2 py-2 border w-full outline-none rounded-md"
                      id="exampleInput90"
                      required
                      placeholder="Email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 w-full">
                    <label
                      className="block font-semibold mb-[2px] text-blueColor"
                      htmlFor="exampleInput90"
                    >
                      Message
                    </label>
                    <textarea
                      className="px-2 py-2 border rounded-[5px] w-full outline-none"
                      placeholder="Message Here..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* <button
                    type="button"
                    title="Press"
                    className="mb-6 inline-block w-full rounded bg-blueColor px-6 py-2.5 font-semibold uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
                  >
                    Send
                  </button> */}

                  <motion.button
                    whileHover={{
                      scale: 1.025,
                    }}
                    whileTap={{
                      scale: 0.975,
                    }}
                    onMouseEnter={scramble}
                    onMouseLeave={stopScramble}
                    className="group w-full  relative overflow-hidden rounded-lg border-[1px] border-slate-500 bg-blueColor px-4 py-2 font-mono font-semibold uppercase text-slate-300 transition-colors hover:text-indigo-300"
                  >
                    <div className="relative z-10  flex items-center justify-center gap-3 text-white">
                      <FiLock />
                      <span className="">{text}</span>
                    </div>
                    <motion.span
                      initial={{
                        y: "100%",
                      }}
                      animate={{
                        y: "-100%",
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 1,
                        ease: "linear",
                      }}
                      className=" w-fullduration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </motion.button>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 py-10 lg:py-0">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                          <lord-icon
                            src="https://cdn.lordicon.com/nzixoeyk.json"
                            trigger="loop"
                            delay="1500"
                            style={{ width: "30px", height: "30px" }}
                          ></lord-icon>
                        </div>
                      </div>
                      <div className="ml-6 grow font-semibold">
                        <p className="mb-2 font-bold ">Technical support</p>
                        <p className="text-sm text-neutral-800">
                          info@bitaacademy.com
                        </p>
                        <p className="text-sm text-neutral-800">
                          <a href="tel:+91 99403 24626">+91 99403 24626</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
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
                        <p className="mb-2 font-bold ">Address</p>
                        <p className="text-sm text-neutral-800 font-semibold">
                          Ramapuram, <br />
                          Chennai - 600089. <br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="bg-gray-50 p-4">
                        <p className="md:text-[1.4rem] font-bold">
                          Social links
                        </p>
                        <ul className="ml-3">
                          <li className="my-4">
                            <a
                              aria-label="Instagram"
                              target="_blank"
                              rel="noopener"
                              className="w-min flex items-center  bg-white px-1 py-1 rounded-md    transition hover:translate-x-2 hover:no-underline"
                              href="https://www.instagram.com/bitahelpdesk/"
                            >
                              <AiFillInstagram className="text-2xl text-blueColor" />
                              <span className="ml-2 font-semibold">
                                Instagram
                              </span>
                            </a>
                          </li>
                          <li className="my-4">
                            <a
                              aria-label="Linkedin"
                              target="_blank"
                              rel="noopener"
                              className="w-min flex items-center  bg-white px-1 py-1 rounded-md    transition hover:translate-x-2 hover:no-underline"
                              href="https://www.linkedin.com/company/bita-it-training-academy/"
                            >
                              <IoLogoLinkedin className="text-2xl text-blueColor" />

                              <span className="ml-2 font-semibold">
                                Linkedin
                              </span>
                            </a>
                          </li>
                          <li className="my-4">
                            <a
                              aria-label="Twitter"
                              target="_blank"
                              rel="noopener"
                              className="w-min flex items-center  bg-white px-1 py-1 rounded-md    transition hover:translate-x-2 hover:no-underline"
                              href="https://twitter.com/Bitaaacademy"
                            >
                              <IoLogoTwitter className="text-2xl text-blueColor" />

                              <span className="ml-2 font-semibold">
                                Twitter
                              </span>
                            </a>
                          </li>
                          <li className="my-4">
                            <a
                              aria-label="Youtube"
                              target="_blank"
                              rel="noopener"
                              className="w-min flex items-center  bg-white px-1 py-1 rounded-md    transition hover:translate-x-2 hover:no-underline"
                              href="https://www.youtube.com/channel/UC01fbEKhsxSRx-Sycvc4HWw"
                            >
                              <IoLogoYoutube className="text-2xl text-blueColor" />

                              <span className="ml-2 font-semibold">
                                Youtube
                              </span>
                            </a>
                          </li>
                          {/* <li className="my-4">
                            <a
                              aria-label="Facebook"
                              target="_blank"
                              rel="noopener"
                              className="w-min flex items-center  bg-white px-1 py-1 rounded-md    transition hover:translate-x-2 hover:no-underline"
                             href="https://www.facebook.com/BitaAcademy/"
                            >
                              <IoLogoFacebook className="text-2xl text-blueColor" />

                              <span className="ml-2 font-semibold">
                                Facebook
                              </span>
                            </a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                          <lord-icon
                            src="https://cdn.lordicon.com/rsvfayfn.json"
                            trigger="loop"
                            delay="1500"
                            style={{ width: "30px", height: "30px" }}
                          ></lord-icon>
                        </div>
                      </div>

                      <div className="ml-6 grow font-semibold">
                        <p className="mb-2 font-bold ">Mobile</p>
                        <p className="text-neutral-800">
                          <a href="tel:+91 95660 04616">+91 95660 04616</a>
                        </p>
                      </div>
                    </div>
                    <div className=" overflow-hidden md:p-10 lg:p-0 sm:pb-0 mt-5 ">
                      <div className="transition-all  duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0">
                        <a href="tel:+91 99403 24626">
                          <Lottie
                            loop={true}
                            animationData={nonit}
                            className=" h-32  w-auto p-0 pr-[5rem] cursor-pointer"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact_us;
