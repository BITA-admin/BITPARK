import React from "react";
import webimg1 from "../../../../src/assets/all-images/webserviceimg1.png";
import websimg1 from "../../../../src/assets/all-images/websimg1.jpeg";
import websimg2 from "../../../../src/assets/all-images/websimg2.jpeg";
import websimg4 from "../../../../src/assets/all-images/websimg4.jpeg";
import websimg5 from "../../../../src/assets/all-images/websimg5.jpeg";
import websimg6 from "../../../../src/assets/all-images/websimg6.jpeg";

function WebServices() {
  return (
    <>
      <section>
        <div className="websection bg-[#efefef]">
          <div
            className="bg-no-repeat bg-cover flex flex-col lg:flex-row justify-around w-auto py-[5%] items-center"
            style={{
              backgroundImage: "url(../../src/assets/all-images/webbgimg1.png)",
            }}
          >
            <img
              src={webimg1}
              alt="website_design"
              className="object-contain w-[90%] md:w-[50%] lg:w-[35%] h-auto rounded-2xl"
            />
            <p className="w-[90%] lg:w-[40%]  text-[#474747] text-justify leading-8 text-lg font-sans">
              Greetings, and we appreciate your interest in BIT PARK PVT LTD. We
              are delighted to serve as your comprehensive provider of
              exceptional website design and development services, tailored to
              precisely fulfill your needs. On the basis of our unwavering
              commitment to dependability and excellence, we have specialized in
              consistently delivering state-of-the-art websites within the
              designated timeframe. These websites have been updated with the
              most recent technologies that have become mandatory to ensure your
              online success.
            </p>
          </div>
          <div className="bg-slate-900">
            <h1 className=" text-center font-semibold text-2xl py-12 text-white">
              Our Web Development Services
            </h1>
            <div className="flex justify-evenly items-center flex-wrap ">
              <div className="group w-[340px] shadow-xl mx-7 my-9 relative  border_glows">
                <img
                  src={websimg1}
                  alt="custom_web_development"
                  className="rounded-xl w-[100%] h-[350px] object-cover"
                />
                <div className=" rounded-b-xl absolute -bottom-6 w-full bg-white transition-all group-hover:bottom-0 group-hover:bg-white/95 duration-300">
                  <h3 className=" relative font-semibold text-large  text-center py-5  border-t-4  border-t-rose-600 ">
                    Custom Web Development
                  </h3>
                  <span className="rounded-xl absolute top-14 left-[105px]  w-0 h-1 bg-blue-400 transition-all delay-150 duration-500 group-hover:w-32"></span>
                  <p className="p-3 text-justify hidden text group-hover:block">
                    We specialize in providing custom web development services
                    to create bespoke web applications that are fully
                    functional, scalable, and user-friendly. Our expertise
                    caters to a wide spectrum of solutions, spanning from simple
                    enterprise-level websites to those tailored for small
                    businesses.
                  </p>
                </div>
              </div>
              <div className="group w-[340px] shadow-xl  mx-7 my-9 relative">
                <img
                  src={websimg6}
                  alt="e_commerce_development"
                  className="rounded-xl w-[100%] h-[350px] object-cover"
                />
                <div className=" rounded-b-xl absolute -bottom-6 w-full bg-white transition-all group-hover:bottom-0 group-hover:bg-white/95 duration-300">
                  <h3 className=" relative font-semibold text-large  text-center py-5  border-t-4  border-t-rose-600 ">
                    E-commerce Development
                  </h3>
                  <span className="rounded-xl absolute top-14 left-[105px]  w-0 h-1 bg-blue-400 transition-all delay-150 duration-500 group-hover:w-32"></span>
                  <p className="p-3 text-justify hidden text group-hover:block">
                    Confidently launch your online store with our comprehensive
                    website design and development services! Our e-commerce
                    development solutions are crafted to maximize your online
                    presence and ensure your consumers enjoy a seamless shopping
                    experience, ultimately boosting your sales.
                  </p>
                </div>
              </div>
              <div className="group w-[340px] shadow-xl mx-7 my-9 relative">
                <img
                  src={websimg5}
                  alt="responsive_design"
                  className="rounded-xl w-[100%] h-[350px] object-cover"
                />
                <div className=" rounded-b-xl absolute -bottom-6 w-full bg-white transition-all group-hover:bottom-0 group-hover:bg-white/95 duration-300">
                  <h3 className=" relative font-semibold text-large  text-center py-5  border-t-4  border-t-rose-600 ">
                    Responsive Design
                  </h3>
                  <span className="rounded-xl absolute top-14 left-[105px]  w-0 h-1 bg-blue-400 transition-all delay-150 duration-500 group-hover:w-32"></span>
                  <p className="p-3 text-justify hidden text group-hover:block">
                    In the mobile-centric world of today, it is essential to
                    have a responsive website. By ensuring that your website
                    appears and operates flawlessly on all devices, including
                    smartphones, tablets, and desktop computers, our team
                    increases user engagement and satisfaction. Our website
                    design and development services are tailored to create
                    responsive and user-friendly interfaces, optimizing your
                    online presence across various platforms.
                  </p>
                </div>
              </div>
              <div className="group w-[340px] shadow-xl mx-7 my-9 relative">
                <img
                  src={websimg4}
                  alt="content_managemen_systems"
                  className="rounded-xl w-[100%] h-[350px] object-cover"
                />
                <div className=" rounded-b-xl absolute -bottom-6 w-full bg-white transition-all group-hover:bottom-0 group-hover:bg-white/95 duration-300">
                  <h3 className=" relative font-semibold text-large  text-center py-5  border-t-4  border-t-rose-600 ">
                    Content Management Systems (CMS)
                  </h3>
                  <span className="rounded-xl absolute top-14 left-[105px]  w-0 h-1 bg-blue-400 transition-all delay-150 duration-500 group-hover:w-32"></span>
                  <p className="p-3 text-justify hidden text group-hover:block">
                    Our CMS solutions will grant you authority over the content
                    of your website. We provide you with intuitive platforms
                    such as WordPress, Joomla, and Drupal, which enable you to
                    effortlessly administer and modify your website.
                  </p>
                </div>
              </div>
              <div className="group w-[340px] shadow-xl mx-7 my-9 relative ">
                <img
                  src={websimg2}
                  alt="website_support_and_maintenance"
                  className="rounded-xl w-[100%] h-[350px] object-cover"
                />
                <div className=" rounded-b-xl absolute -bottom-6 w-full bg-white transition-all group-hover:bottom-0 group-hover:bg-white/95 duration-300">
                  <h3 className=" relative font-semibold text-large  text-center py-5  border-t-4  border-t-rose-600 ">
                    Website Support and Maintenance
                  </h3>
                  <span className="rounded-xl absolute top-14 left-[105px]  w-0 h-1 bg-blue-400 transition-all delay-150 duration-500 group-hover:w-32"></span>
                  <p className="p-3 text-justify hidden text group-hover:block">
                    Ongoing service is required to ensure the security and
                    optimal performance of your website. We provide
                    comprehensive support and maintenance services, including
                    website design and development services, to guarantee that
                    your website is always secure, current, and operating
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebServices;
