// import lottie from "lottie-web";
// import { defineElement } from "@lordicon/element";

// // define "lord-icon" custom element with default properties
// defineElement(lottie.loadAnimation);

// const Sample_3 = () => {
// return (
// <div>
// {
/* <div>
        <lord-icon
          src="https://cdn.lordicon.com/rsvfayfn.json"
          trigger="loop"
          delay="1500"
          // colors="primary:blueColor,secondary:#ee66aa"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/nzixoeyk.json"
          trigger="loop"
          delay="1500"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
        <lord-icon
          src="https://cdn.lordicon.com/cjhlqtae.json"
          trigger="loop"
          delay="1500"
          colors="primary:#66a1ee,secondary:#545454"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>
      </div> */
// }
// </div>
// );
// };

// export default Sample_3;

// import Lottie from "lottie-react";
// import nonit from "./Contact.json";
// import lottie from "lottie-web";
// import { defineElement } from "@lordicon/element";

// // define "lord-icon" custom element with default properties
// defineElement(lottie.loadAnimation);
// const Contact_us = () => {
//   return (
//     <div>
//       <div>
//         <div className="grid gap-4 justify-items-center text-center md:flex-1">
//           <h3 className="md:text-[1.67rem] text-2xl font-semibold text-blueColor">
//             CONNECT WITH US
//           </h3>

//           <div className="text-center  max-w-5xl ">
//             <p className=" text-slate-600 text-base text-[15px]  p-[1.5rem]  leading-normal font-semibold tracking-tight">
//               We're here to help in any way we can, and we're committed to
//               finding creative solutions that fit your specific needs. Our team
//               of experts is ready to address any queries you may have, whether
//               they're related to software development, IT strategy, project
//               timelines, or any other aspect of our services. Your success is
//               our priority, and we are here to provide the guidance and support
//               you need.
//             </p>
//           </div>
//         </div>
//       </div>

//       <section className="mb-32">
//         <div className="relative h-[450px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.6360252251063!2d80.18322717547134!3d13.030528741090466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260d454408c93%3A0xf439976d9ab8a2f2!2sBITA%20IT%20Academy!5e0!3m2!1sen!2sin!4v1694772895127!5m2!1sen!2sin"
//             width="100%"
//             height="480"
//             // style="border:0;"
//             // allowfullscreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//         <div className="container px-6 md:px-12">
//           <div className="block  rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 xl:-mt-[140px] xl:backdrop-blur-[30px] border border-gray-300">
//             <div className="flex flex-wrap ">
//               <div className=" w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
//                 <form className="mb-12  w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0   lg:px-6">
//                   <div className="mb-3 w-full">
//                     <label
//                       className="block font-medium mb-[2px] text-blueColor"
//                       htmlFor="exampleInput90"
//                     >
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       className="px-2 py-2 border w-full outline-none rounded-md"
//                       id="exampleInput90"
//                       placeholder="Name"
//                     />
//                   </div>

//                   <div className="mb-3 w-full">
//                     <label
//                       className="block font-medium mb-[2px] text-blueColor"
//                       htmlFor="exampleInput90"
//                     >
//                       Phone
//                     </label>
//                     <input
//                       type="number"
//                       className="px-2 py-2 border w-full outline-none rounded-md"
//                       id="exampleInput90"
//                       placeholder="Phone"
//                     />
//                   </div>

//                   <div className="mb-3 w-full">
//                     <label
//                       className="block font-medium mb-[2px] text-blueColor"
//                       htmlFor="exampleInput90"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="px-2 py-2 border w-full outline-none rounded-md"
//                       id="exampleInput90"
//                       placeholder="Enter your email address"
//                     />
//                   </div>

//                   <div className="mb-3 w-full">
//                     <label
//                       className="block font-medium mb-[2px] text-blueColor"
//                       htmlFor="exampleInput90"
//                     >
//                       Message
//                     </label>
//                     <textarea
//                       className="px-2 py-2 border rounded-[5px] w-full outline-none"
//                       placeholder="Message Here..."
//                       name=""
//                       id=""
//                     ></textarea>
//                   </div>

//                   <button
//                     type="button"
//                     title="Press"
//                     className="mb-6 inline-block w-full rounded bg-blueColor px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
//                   >
//                     Send
//                   </button>
//                 </form>
//               </div>
//               <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 py-10 lg:py-0">
//                 <div className="flex flex-wrap">
//                   <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
//                     <div className="flex items-start">
//                       <div className="shrink-0">
//                         <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
//                           {/* <svg
//                             // xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="2"
//                             stroke="black"
//                             className="h-6 w-6"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
//                             />
//                           </svg> */}
//                           <lord-icon
//                             src="https://cdn.lordicon.com/nzixoeyk.json"
//                             trigger="loop"
//                             delay="1500"
//                             // colors="primary:#66a1ee,secondary:#545454"
//                             style={{ width: "30px", height: "30px" }}
//                           ></lord-icon>
//                         </div>
//                       </div>
//                       <div className="ml-6 grow">
//                         <p className="mb-2 font-bold ">Technical support</p>
//                         <p className="text-sm text-neutral-800">
//                           info@bitaacademy.com
//                         </p>
//                         <p className="text-sm text-neutral-800">
//                           +91 99403 24626
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
//                     <div className="flex items-start">
//                       <div className="srink-0">
//                         <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
//                           {/* <svg
//                             // xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="2"
//                             stroke="black"
//                             className="w-7 h-7"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
//                             />
//                           </svg> */}
//                           <lord-icon
//                             src="https://cdn.lordicon.com/surcxhka.json"
//                             stroke="bold"
//                             strokeWidth="10"
//                             trigger="loop"
//                             delay="1500"
//                             colors="primary:#121331,secondary:#8930e8"
//                             style={{ width: "30px", height: "30px" }}
//                           ></lord-icon>
//                         </div>
//                       </div>
//                       <div className="ml-6 ">
//                         <p className="mb-2 font-bold ">Address</p>
//                         <p className="text-sm text-neutral-800">
//                           Ramapuram, <br />
//                           Chennai - 600089. <br />
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
//                     <div className="align-start flex">
//                       <div className="bg-gray-50 p-4">
//                         <p className="md:text-2xl">Social links</p>
//                         <ul className="ml-3">
//                           <li className="my-4">
//                             <a
//                               href="https://www.youtube.com/channel/UC01fbEKhsxSRx-Sycvc4HWw"
//                               aria-label="YouTube"
//                               target="_blank"
//                               rel="noopener"
//                               className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:translate-x-2 hover:no-underline"
//                             >
//                               <svg
//                                 // xmlns="http://www.w3.org/2000/svg"
//                                 // viewBox="0 0 512.08 512.08"
//                                 viewBox="0 0 576 512"
//                                 width="20"
//                                 height="20"
//                               >
//                                 <path
//                                   // fill="currentColor"
//                                   fill="#CD201F"
//                                   d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
//                                 ></path>
//                                 {/* <path
//                                   d="M255.942 5.361C113.905 6.046-.683 121.746.003 263.783c.531 109.928 70.871 207.365 175.043 242.473 12.8 2.368 17.44-5.568 17.44-12.384 0-6.112-.192-22.4-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464a67.906 67.906 0 00-28.384-37.6c-23.264-16 1.76-15.616 1.76-15.616a53.858 53.858 0 0139.2 26.496c14.379 26.38 47.421 36.109 73.801 21.73.233-.127.464-.255.695-.386a54.848 54.848 0 0116.256-34.368c-56.832-6.496-116.48-28.512-116.48-127.008a99.488 99.488 0 0126.24-68.96 92.802 92.802 0 012.56-68.032s21.504-6.912 70.4 26.336a242.167 242.167 0 01128.224 0c48.864-33.248 70.4-26.336 70.4-26.336a92.802 92.802 0 012.56 68.032 99.422 99.422 0 0126.016 68.96c0 98.72-59.84 120.448-116.864 126.816a61.503 61.503 0 0117.376 47.616c0 34.336-.32 62.048-.32 70.4 0 6.88 4.608 14.88 17.6 12.352 134.53-45.57 206.647-191.57 161.076-326.101C462.822 76.144 365.622 6.009 255.942 5.361z"
//                                   fill="#5c6bc0"
//                                 ></path>
//                                 <path d="M184.262 506.705a40.434 40.434 0 01-7.072-.672C42.868 462.36-30.617 318.066 13.056 183.744S201.022-24.063 335.344 19.61s207.808 187.966 164.135 322.288c-25.09 77.168-85.313 137.851-162.288 163.527a31.359 31.359 0 01-27.712-4.96 28 28 0 01-9.888-21.76v-13.472c0-12.384.224-31.072.224-52.544a41.249 41.249 0 00-10.752-32.448c-6.697-5.765-7.453-15.867-1.688-22.564a16.001 16.001 0 0110.392-5.468c49.504-5.504 95.328-21.76 95.328-102.816a77.186 77.186 0 00-20.48-53.76 16 16 0 01-3.008-16.832 67.937 67.937 0 00.896-41.6 131.391 131.391 0 00-45.408 21.888 15.617 15.617 0 01-13.28 2.176 214.393 214.393 0 00-55.872-7.552 211.21 211.21 0 00-55.712 7.52 15.682 15.682 0 01-13.344-2.272 127.24 127.24 0 00-45.504-21.76 68.096 68.096 0 00.96 41.6 16 16 0 01-3.008 16.8 77.504 77.504 0 00-20.512 53.792c0 81.024 45.728 97.376 95.136 103.04 8.778 1.014 15.072 8.952 14.058 17.73a16.002 16.002 0 01-5.322 10.174 35.2 35.2 0 00-9.952 22.4 16 16 0 01-9.28 12.352 73.984 73.984 0 01-57.44 3.2 64 64 0 0046.688 3.808 16.224 16.224 0 0113.408 3.2c3.77 3.01 5.98 7.56 6.016 12.384l.352 41.024c.306 15.16-11.735 27.699-26.895 28.005-.444.009-.887.007-1.33-.005zm71.68-469.344c-124.1.37-224.403 101.273-224.033 225.373.282 94.478 59.632 178.689 148.513 210.723v-17.216c-34.359 5.788-68.015-13.527-80.352-46.112a49.407 49.407 0 00-18.528-25.6c-6.816-4.48-21.984-14.88-17.184-30.016 3.2-9.6 11.52-14.688 26.272-14.88a67.199 67.199 0 0150.592 33.088c7.461 15.614 25.846 22.648 41.824 16a84.051 84.051 0 012.624-8.32c-39.456-8.416-98.72-34.592-98.72-131.008a108.48 108.48 0 0122.656-68.032 107.617 107.617 0 015.536-66.048 16.001 16.001 0 019.984-9.376c6.176-2.016 29.216-5.952 73.6 22.592a243.688 243.688 0 01114.464 0c44.512-28.544 67.488-24.512 73.6-22.592a15.998 15.998 0 019.952 9.344 107.394 107.394 0 015.44 65.984 108.32 108.32 0 0122.752 68.128c0 96.416-59.296 122.496-98.816 130.848a92.123 92.123 0 015.536 32.448c0 21.568 0 40.32-.224 52.768v7.872c116.714-42.072 177.223-170.794 135.151-287.507C434.555 96.977 350.382 37.651 255.942 37.361z"></path> */}
//                               </svg>
//                               <span className="ml-2">YouTube</span>
//                             </a>
//                           </li>
//                           <li className="my-4">
//                             <a
//                               href="https://www.instagram.com/bitahelpdesk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
//                               aria-label="INSTAGRAM"
//                               target="_blank"
//                               rel="noopener"
//                               className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:translate-x-2 hover:no-underline"
//                             >
//                               <svg
//                                 height="20"
//                                 viewBox="0 0 24 24"
//                                 width="20"
//                                 // xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <linearGradient
//                                   id="instagram_svg__a"
//                                   gradientTransform="matrix(0 -1.982 -1.844 0 -2.292 23.869)"
//                                   gradientUnits="userSpaceOnUse"
//                                   x1="0.947"
//                                   x2="11.036"
//                                   y1="-2.332"
//                                   y2="-13.176"
//                                 >
//                                   <stop offset="0" stopColor="#fd5"></stop>
//                                   <stop offset="0.5" stopColor="#ff543e"></stop>
//                                   <stop offset="1" stopColor="#c837ab"></stop>
//                                 </linearGradient>
//                                 <path
//                                   d="M12.004.5c-6.055 0-7.213-.158-8.727.597C1.883 1.791.882 3.104.628 4.863.55 5.4.528 5.51.523 8.258c-.02 10.161-.154 10.92.576 12.434a4.838 4.838 0 003.134 2.566c1.093.282 1.82.242 7.747.242 4.968 0 6.513.089 7.802-.244a4.811 4.811 0 003.134-2.571c.736-1.522.563-2.598.563-8.692 0-5.836.197-7.135-.575-8.709a4.567 4.567 0 00-.982-1.349C20.194.281 18.136.505 15.741.5h-3.737z"
//                                   fill="url(#instagram_svg__a)"
//                                 ></path>
//                                 <path
//                                   d="M12 17.537c-3.053 0-5.537-2.484-5.537-5.537S8.947 6.463 12 6.463 17.537 8.947 17.537 12 15.053 17.537 12 17.537zM18.359 6.514a.874.874 0 11.002-1.748.874.874 0 01-.002 1.748z"
//                                   fill="#fff"
//                                 ></path>
//                                 <circle
//                                   cx="12"
//                                   cy="12"
//                                   fill="none"
//                                   r="3.5"
//                                 ></circle>
//                                 <path d="M4.75 24h14.5A4.756 4.756 0 0024 19.25V4.75A4.756 4.756 0 0019.25 0H4.75A4.756 4.756 0 000 4.75v14.5A4.756 4.756 0 004.75 24zM1.5 4.75A3.254 3.254 0 014.75 1.5h14.5a3.254 3.254 0 013.25 3.25v14.5a3.254 3.254 0 01-3.25 3.25H4.75a3.254 3.254 0 01-3.25-3.25z"></path>
//                                 <path d="M12 18.13c3.38 0 6.13-2.75 6.13-6.13S15.38 5.87 12 5.87 5.87 8.62 5.87 12s2.75 6.13 6.13 6.13zm0-10.76c2.553 0 4.63 2.077 4.63 4.63s-2.077 4.63-4.63 4.63S7.37 14.553 7.37 12 9.447 7.37 12 7.37zM18.358 7.362c.986 0 1.729-.74 1.729-1.721 0-1.023-.782-1.721-1.728-1.721-.986 0-1.729.74-1.729 1.721 0 1.021.778 1.721 1.728 1.721zm.177-1.886c.316.279-.405.618-.405.166 0-.27.367-.2.405-.166z"></path>
//                               </svg>
//                               <span className="ml-2">Instagram</span>
//                             </a>
//                           </li>
//                           <li className="my-4">
//                             <a
//                               href="https://www.linkedin.com/company/11236773/admin/feed/posts/"
//                               aria-label="LINKEDIN"
//                               target="_blank"
//                               rel="noopener"
//                               className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:translate-x-2 hover:no-underline"
//                             >
//                               <svg
//                                 // xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 512 512"
//                                 width="20"
//                                 height="20"
//                               >
//                                 <path
//                                   d="M469.779 503.983H42.221c-18.891 0-34.205-15.314-34.205-34.205V42.221c0-18.891 15.314-34.205 34.205-34.205h427.557c18.891 0 34.205 15.314 34.205 34.205v427.557c0 18.891-15.314 34.205-34.204 34.205z"
//                                   fill="#3cafe6"
//                                 ></path>
//                                 <path
//                                   d="M42.221 452.676V8.017c-18.891 0-34.205 15.314-34.205 34.205v427.557c0 18.891 15.314 34.205 34.205 34.205h427.557c18.891 0 34.205-15.314 34.205-34.205H59.324c-9.446 0-17.103-7.657-17.103-17.103z"
//                                   fill="#1c9ad6"
//                                 ></path>
//                                 <path
//                                   fill="#fff"
//                                   d="M84.977 196.142h68.409v230.881H84.977z"
//                                 ></path>
//                                 <path
//                                   fill="#e5e5e5"
//                                   d="M84.977 196.142h25.653v230.881H84.977z"
//                                 ></path>
//                                 <path
//                                   d="M350.063 196.142c-17.102 0-58.076 2.494-76.96 42.756v-42.756h-68.409v230.881h68.409V315.858c0-25.653 21.644-42.756 42.756-42.756 23.613 0 42.756 17.102 42.756 42.756V427.023h68.409V264.551c-.001-37.781-38.837-68.409-76.961-68.409z"
//                                   fill="#fff"
//                                 ></path>
//                                 <g fill="#e5e5e5">
//                                   <path d="M204.693 196.142h25.653v230.881h-25.653zM384.267 315.858c0-25.653-19.143-42.756-42.756-42.756-4.154 0-8.326.671-12.351 1.93 17.098 5.139 29.453 20.219 29.453 40.825V427.022h25.653V315.858z"></path>
//                                 </g>
//                                 <circle
//                                   cx="119.182"
//                                   cy="119.182"
//                                   r="34.205"
//                                   fill="#fff"
//                                 ></circle>
//                                 <path
//                                   d="M136.284 136.284c-18.891 0-34.205-15.314-34.205-34.205a34.07 34.07 0 013.03-14.072c-11.869 5.367-20.133 17.301-20.133 31.174 0 18.891 15.314 34.205 34.205 34.205 13.873 0 25.807-8.264 31.174-20.133a34.046 34.046 0 01-14.071 3.031z"
//                                   fill="#e5e5e5"
//                                 ></path>
//                                 <path d="M503.983 92.994A8.017 8.017 0 00512 84.977V42.221C512 18.941 493.059 0 469.779 0H42.221C18.941 0 0 18.941 0 42.221v427.557C0 493.059 18.941 512 42.221 512h427.557c23.28 0 42.221-18.941 42.221-42.221V119.182c0-4.427-3.588-8.017-8.017-8.017s-8.017 3.589-8.017 8.017v350.597c0 14.44-11.747 26.188-26.188 26.188H42.221c-14.44 0-26.188-11.748-26.188-26.188V42.221c0-14.44 11.748-26.188 26.188-26.188h427.557c14.441 0 26.188 11.748 26.188 26.188v42.756a8.017 8.017 0 008.017 8.017z"></path>
//                                 <path d="M153.386 238.898a8.017 8.017 0 008.017-8.017v-34.739a8.017 8.017 0 00-8.017-8.017H84.977a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V266.154a8.017 8.017 0 00-16.034 0v152.852H92.994V204.159h52.376v26.722a8.017 8.017 0 008.016 8.017zM358.614 435.04h68.409a8.017 8.017 0 008.017-8.017V264.551c0-20.236-9.586-39.579-26.99-54.465-16.319-13.955-37.454-21.96-57.987-21.96-33.891 0-55.359 11.268-68.944 25.151v-17.134a8.017 8.017 0 00-8.017-8.017h-68.409a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V315.858c0-21.457 18.032-34.739 34.739-34.739 20.129 0 34.739 14.61 34.739 34.739v111.165a8.017 8.017 0 008.017 8.017zm-42.756-169.954c-24.418 0-50.772 19.412-50.772 50.772v103.148H212.71V204.159h52.376v34.739c0 3.656 2.573 6.926 6.125 7.789 3.66.888 7.55-.973 9.15-4.385 11.871-25.31 35.323-38.143 69.703-38.143 32.545 0 68.944 25.828 68.944 60.392v154.455H366.63V315.858c0-28.946-21.827-50.772-50.772-50.772zM119.182 76.96c-23.281 0-42.221 18.941-42.221 42.221s18.941 42.221 42.221 42.221 42.221-18.941 42.221-42.221-18.941-42.221-42.221-42.221zm0 68.41c-14.44 0-26.188-11.748-26.188-26.188s11.748-26.188 26.188-26.188 26.188 11.748 26.188 26.188-11.749 26.188-26.188 26.188z"></path>
//                               </svg>
//                               <span className="ml-2">LinkedIn</span>
//                             </a>
//                           </li>
//                           <li className="my-4">
//                             <a
//                               href="https://twitter.com/Bitaaacademy"
//                               aria-label="Titter"
//                               target="_blank"
//                               rel="noopener"
//                               className="w-min flex items-center  bg-white px-1 py-1 rounded-md text-black transition hover:translate-x-2 hover:no-underline"
//                             >
//                               <svg
//                                 // xmlns="http://www.w3.org/2000/svg"
//                                 width="20"
//                                 height="20"
//                                 viewBox="0 0 24 24"
//                                 // viewBox="0 0 512 512"
//                                 fill="#6e87f5"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="h-5 w-5"
//                               >
//                                 <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
//                               </svg>
//                               {/* <svg viewBox="0 0 512 512" width="20" height="20">
//                                 <path
//                                   d="M414 10H98c-48.601 0-88 39.399-88 88v316c0 48.601 39.399 88 88 88h158V305.5h-59v-71.006h59v-52.008c0-33.259 15.455-84.938 84.206-84.938h74.517v69.66h-56.742c-7.639 0-17.982 3.59-17.982 19.316v47.521h75.172L407.98 305.5H340V502h74c48.601 0 88-39.399 88-88V98c0-48.601-39.399-88-88-88z"
//                                   fill="#6e87f5"
//                                 ></path>
//                                 <path d="M256 395.493c-5.523 0-10-4.477-10-10v-.08-.04-.04c0-5.523 4.477-10 10-10s10 4.477 10 10v.16c0 5.523-4.477 10-10 10z"></path>
//                                 <path d="M414 512h-74c-5.523 0-10-4.477-10-10V305.5c0-5.523 4.477-10 10-10h58.937l5.178-51.455H340c-5.523 0-10-4.477-10-10v-47.521c0-21.638 15.073-29.316 27.981-29.316h46.742v-49.66h-64.517c-66.976 0-74.207 52.406-74.207 74.938v52.007c0 5.523-4.477 10-10 10h-49V295.5h49c5.523 0 10 4.477 10 10V344c0 5.523-4.477 10-10 10s-10-4.477-10-10v-28.5h-49c-5.523 0-10-4.477-10-10v-71.006c0-5.523 4.477-10 10-10h49v-42.007c0-13.38 2.37-39.076 18.243-60.834 11.349-15.558 33.741-34.104 75.964-34.104h74.517c5.523 0 10 4.477 10 10v69.66c0 5.523-4.477 10-10 10h-56.742c-5.818 0-7.981 2.525-7.981 9.316v37.521h65.172a10.002 10.002 0 019.95 11.001l-7.191 71.455a10 10 0 01-9.95 8.999H350V492h64c43.009 0 78-34.991 78-78V98c0-43.009-34.991-78-78-78H98c-43.009 0-78 34.991-78 78v316c0 43.009 34.991 78 78 78h148v-67.5c0-5.523 4.477-10 10-10s10 4.477 10 10V502c0 5.523-4.477 10-10 10H98c-54.038 0-98-43.962-98-98V98C0 43.962 43.962 0 98 0h316c54.038 0 98 43.962 98 98v316c0 54.038-43.962 98-98 98z"></path>
//                                 <path d="M58 206c-5.523 0-10-4.477-10-10v-83.5c0-5.523 4.477-10 10-10s10 4.477 10 10V196c0 5.523-4.477 10-10 10zM58 249.5c-5.523 0-10-4.477-10-10v-.118c0-5.523 4.477-10 10-10s10 4.477 10 10v.118c0 5.523-4.477 10-10 10z"></path>
//                               </svg> */}
//                               <span className="ml-2">Twitter</span>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
//                     <div className="align-start flex">
//                       <div className="shrink-0">
//                         <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
//                           {/* <svg
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="black"
//                             className="w-6 h-6"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
//                             />
//                           </svg> */}
//                           <lord-icon
//                             src="https://cdn.lordicon.com/rsvfayfn.json"
//                             trigger="loop"
//                             delay="1500"
//                             // colors="primary:blueColor,secondary:#ee66aa"
//                             style={{ width: "30px", height: "30px" }}
//                           ></lord-icon>
//                         </div>
//                       </div>

//                       <div className="ml-6 grow">
//                         <p className="mb-2 font-bold ">Mobile</p>
//                         <p className="text-neutral-800"> +91 95660 04616</p>
//                       </div>
//                     </div>
//                     <div className=" overflow-hidden md:p-10 lg:p-0 sm:pb-0 ">
//                       <div
//                         className="transition-all  duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
//                         style={{}}
//                       >
//                         <Lottie
//                           loop={true}
//                           animationData={nonit}
//                           className=" h-32  w-auto p-0 pr-[5rem] cursor-pointer"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact_us;
