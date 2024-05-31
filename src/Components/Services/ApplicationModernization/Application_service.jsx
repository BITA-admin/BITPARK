import appmonitermenimg1 from "../../../assets/all-images/itconsultinggirlimg2.1.png";
import appmonitersimg1 from "../../../assets/all-images/app-monitersimg1.png";
import appmonitersimg2 from "../../../assets/all-images/app-monitersimg2.png";
import appmonitersimg3 from "../../../assets/all-images/app-monitersimg5.png";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Application_service() {
  return (
    <>
      <section>
        <div
          className=""
          style={{
            backgroundImage: "url(src/assets/all-images/app-moniterbgimg1.png)",
          }}
        >
          <div className=" relative flex flex-col lg:flex-row justify-around w-auto  items-center bg-black/60">
            <img
              src={appmonitermenimg1}
              alt="image"
              className=" w-[100%] md:w-[55%] lg:w-[25%] border-b-4 border-b-white lg:border-none"
            />
            <p className="w-[90%] lg:w-[40%] text-white text-justify leading-8 text-lg py-9 font-sans">
              Bit Park Pvt. Ltd. is designated as the preferred collaborator for
              Application Modernization solutions. Businesses that wish to
              prosper in the digital environment must ensure they remain one
              step ahead of the trajectory, given the rapid evolution of
              technology. Our extensive array of services includes custom mobile
              app development and custom web development services, with the
              intention of providing your organization with cutting-edge,
              scalable, and user-focused resolutions.
            </p>
          </div>
        </div>
        <div className=" bg-slate-900">
          <div className="px-4 py-8">
            <div className=" my-4 flex flex-col lg:flex-row justify-around items-center ">
              <img
                src={appmonitersimg1}
                alt="image"
                className="object-contain w-[90%] md:w-[50%] lg:w-[40%] h-auto p-5 "
              />
              <div className=" w-[95%] lg:w-1/2 ">
                <h2 className="text-white text-center font-bold text-xl pb-9">
                  Custom Mobile Application Services
                </h2>
                <p className="text-white  text-justify leading-8 text-lg font-sans">
                  We at Bit Park recognize the critical importance that mobile
                  applications hold in the interconnected world of today. Our
                  seasoned development staff specializes in creating We at Bit
                  Park recognize the critical importance that mobile
                  applications hold in the interconnected world of today. Our
                  seasoned development staff specializes in creating custom
                  mobile applications that are specifically designed to meet the
                  distinct needs of your organization. We deliver comprehensive,
                  intuitive, and feature-rich mobile experiences by leveraging
                  cutting-edge technologies, regardless of whether you require a
                  native iOS, Android, or cross-platform solution. We provide
                  comprehensive guidance throughout the entire development
                  process, from concept ideation to app deployment, to guarantee
                  smooth integration and outstanding performance across all
                  devices. that are specifically designed to meet the distinct
                  needs of your organization. We deliver comprehensive,
                  intuitive, and feature-rich mobile experiences by leveraging
                  cutting-edge technologies, regardless of whether you require a
                  native iOS, Android, or cross-platform solution. We provide
                  comprehensive guidance throughout the entire development
                  process, from concept ideation to app deployment, to guarantee
                  smooth integration and outstanding performance across all
                  devices.
                </p>
              </div>
            </div>
            <div className=" my-4 flex  flex-col-reverse lg:flex-row justify-around items-center ">
              <div className=" w-[95%] lg:w-1/2 ">
                <h2 className="text-white text-center font-bold text-xl pb-9">
                  Custom Web Application Services
                </h2>
                <p className="text-white  text-justify leading-8 text-lg font-sans">
                  Web-based applications are critical to contemporary business
                  operations in this age of digital transformation. Bit Park is
                  a leader in the development of bespoke web applications,
                  offering custom web development services that increase
                  engagement, optimize operations, and boost productivity.
                  Whether your objective is to develop a brand-new solution or
                  redesign an existing web application, our team utilizes
                  cutting-edge frameworks and tools to produce visually
                  appealing, scalable, and responsive web experiences. We
                  implement enterprise portals and e-commerce platforms in
                  accordance with industry standards to guarantee that your web
                  application distinguishes itself in the fiercely competitive
                  digital environment.
                </p>
              </div>
              <img
                src={appmonitersimg2}
                alt="image"
                className="object-contain w-[90%] md:w-[50%] lg:w-[40%] h-auto p-5 "
              />
            </div>
            <div className=" my-2 flex flex-col lg:flex-row justify-around items-center ">
              <img
                src={appmonitersimg3}
                alt="image"
                className="object-contain w-[90%] md:w-[50%] lg:w-[40%] h-auto p-5 "
              />
              <div className=" w-[95%] lg:w-1/2 ">
                <h2 className="text-white text-center font-bold text-xl pb-9">
                  Cloud Migration Service
                </h2>
                <p className="text-white  text-justify leading-8 text-lg font-sans">
                  Bit Park Pvt. Ltd. is the go-to provider of Cloud Migration
                  services that are specifically designed to accommodate the
                  changing requirements of your organization. In the
                  contemporary digital environment characterized by swift
                  transformations, organizations that desire scalability,
                  flexibility, and cost-efficiency are compelled to migrate to
                  the cloud. Bit Park specializes in providing secure and
                  seamless cloud migration solutions that are specifically
                  engineered to drive increased efficiency, innovation, and
                  success for your organization.
                </p>
                <ul className=" pl-5 text-white">
                  <li className=" flex items-center py-5">
                    <span className="self-start pr-3 text-3xl">
                      <AiOutlineCheckCircle />
                    </span>{" "}
                    Our area of expertise is the migration of a wide range of
                    applications to the cloud, including web applications,
                    enterprise applications, databases, and legacy systems.
                  </li>
                  <li className="flex items-center">
                    <span className="self-start pr-3 text-3xl">
                      <AiOutlineCheckCircle />
                    </span>{" "}
                    Our area of expertise is the migration of a wide range of
                    applications Our area of expertise is the migration of a
                    wide range of applications In order to refactor, rehost, or
                    rebuild applications for optimal performance, scalability,
                    and cost-effectiveness in the cloud environment, our group
                    utilizes industry-leading methodologies and tools.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Application_service;
