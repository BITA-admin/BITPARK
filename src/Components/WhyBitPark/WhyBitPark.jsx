import steam from "../../assets/all-videos/support-team.mp4";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhyBitPark = () => {
  useEffect(() => {
    AOS.refresh();
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 850,
    });
  }, []);
  return (
    <section className="relative ">
      {/* <div className="bg-slate-900  "> */}
      <div className="w-full">
        <video
          className="object-cover h-full w-full absolute -z-10 hidden lg:block"
          src={steam}
          autoPlay
          loop
          muted
        />

        <div className="why_bitpark lg:flex h-full ">
          <div className=" w-full min-[1180px]:w-4/6 pt-4 max-[1130px]:pt-14 min-[1180px]:pt-14 flex flex-col items-center bg-slate-900 ">
            <h1
              data-aos="fade-down"
              className="wbparkhead text-blueColor text-3xl font-bold mb-4 "
            >
              WHY BIT PARK
            </h1>
            <div className="pl-3 pr-7 ">
              <div className="mt-3  relative before:absolute before:top-0 before:left-36  before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                <div className=" why_bpark pl-24 mb-4 max-[1123px]:pb-[2rem] min-[1180px]:pb-[2rem] relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[138px] text-white">
                  <p data-aos="fade-right" className="absolute left-2  mr-0 ">
                    Experienced <br /> Team:{" "}
                  </p>
                  <p data-aos="fade-up" className="pl-20 md:text-justify  ">
                    BIT Park's experienced team navigates diverse industries,
                    providing customized software solutions, including custom
                    software development services, website design and
                    development services and Mobile Application Development
                    Services. Our skilled developers ensure your success.
                  </p>
                </div>
                <div className="why_bpark pl-24 mb-4 max-[1123px]:pb-[2rem] min-[1180px]:pb-[2rem] relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[138px] text-white">
                  <p data-aos="fade-right" className="absolute left-2   mr-0">
                    Client-Centric <br /> Approach:{" "}
                  </p>
                  <p data-aos="fade-up" className="pl-20 md:text-justify">
                    Trusted by various industries, BIT Park delivers tailored
                    consulting services, custom software development, website
                    design and development, and mobile application development
                    that address unique challenges and foster lasting client
                    partnerships.
                  </p>
                </div>
                <div className="why_bpark pl-24 mb-4 max-[1123px]:pb-[2rem] min-[1180px]:pb-[2rem] relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[138px] text-white">
                  <p data-aos="fade-right" className="absolute left-2   mr-0">
                    Expert Project <br />
                    Leadership:{" "}
                  </p>
                  <p data-aos="fade-up" className="pl-20 md:text-justify">
                    Our dedicated project leaders bring a wealth of experience,
                    ensuring seamless execution and on-time delivery of
                    successful, impactful IT projects such as custom software
                    development services, website design and development
                    services and mobile application development services.
                  </p>
                </div>
                <div className=" pl-24 mb-4 max-[1123px]:pb-[2rem] min-[1180px]:pb-[2rem] relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[138px] text-white">
                  <p data-aos="fade-right" className="absolute left-2   mr-0">
                    Innovation-driven <br /> Solutions:{" "}
                  </p>
                  <p data-aos="fade-up" className="pl-20 md:text-justify">
                    At BIT Park, we thrive on innovation, integrating
                    cutting-edge technologies to develop software solutions,
                    website design and development services and mobile
                    application development services that stand out in today's
                    dynamic business landscape.
                  </p>
                </div>
                <div className=" pl-24 mb-0 max-[1123px]:pb-[2rem] min-[1180px]:pb-[2rem] relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[138px] text-white">
                  <p data-aos="fade-right" className="absolute left-2  mr-0">
                    Proven Track <br /> Record:{" "}
                  </p>
                  <p data-aos="fade-up" className="pl-20 md:text-justify">
                    Celebrating a legacy of successful projects, BIT Park has
                    consistently exceeded client expectations, establishing a
                    reputation for reliability, quality, and customer
                    satisfaction in bespoke software development, website design
                    and development services and mobile application development
                    services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full max-[1024px]:pt-[4rem]  min-[1180px]:w-1/2 bg-slate-900 lg:bg-slate-900/20">
            <div className="  h-full flex   flex-col text-white  text-xl font-semibold  justify-center items-center ">
              <div>
                <p
                  data-aos="fade-up"
                  className="bg-blueColor/75 text-center py-3 px-2 mb-6 rounded"
                >
                  Experienced Team
                </p>
                <p
                  data-aos="fade-up"
                  className="bg-blueColor/75 text-center py-3 px-2 my-6 rounded"
                >
                  Client-Centric Approach
                </p>
                <p
                  data-aos="fade-up"
                  className="bg-blueColor/75 text-center py-3 px-2 my-6 rounded"
                >
                  Expert Project Leadership
                </p>
                <p
                  data-aos="fade-up"
                  className="bg-blueColor/75 text-center py-3 px-2 my-6 rounded"
                >
                  Innovation-driven Solutions
                </p>
                <p
                  data-aos="fade-up"
                  className="bg-blueColor/75 text-center py-3 px-2 my-6 rounded"
                >
                  Proven Track Record
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default WhyBitPark;
