import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import techimg1 from "../../assets/all-images/technology_Programming-languages.png";
import techimg2 from "../../assets/all-images/technology-Frame.png";
import techimg3 from "../../assets/all-images/teehnology_database-Tools.png";
import techimg4 from "../../assets/all-images/technology-testing.png";

function Technologies() {
  return (
    <>
      <section>
        <div className=" bg-[url('../src/assets/all-images/technologybgimg2.jpg')] bg-no-repeat bg-cover h-screen w-auto">
          <div className="h-screen bg-black/75 flex flex-col justify-center items-center">
            <div className="">
              <h1 className="text-white px-4 text-2xl lg:text-5xl font-bold ">
                Tech Mastery Redefined
              </h1>
              <p className=" text-white px-4 lg:text-center py-[3%] text-md">
                Bespoke Solutions Driven by the Latest and Most Varied
                Technologies
              </p>
            </div>
          </div>
        </div>

        {/* maindiv 2 */}
        <div>
          <div>
            <h1 className="pt-9 pb-5 text-center font-bold text-3xl text-slate-700 tracking-[15px]">
              TECH TOOLS
            </h1>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper w-[95vw]  rounded-2xl my-7 shadow-slate-900 shadow-md "
          >
            <SwiperSlide>
              <div className="relative">
                <img src={techimg1} alt="languagestools" />
                <div className="w-[45%] p-4 rounded-lg absolute top-10 max-[900px]:top-4 max-[890px]:top-22 left-8 max-[900px]:left-4">
                  <h1 className="text-white font-bold text-2xl max-[890px]:text-lg tracking-[12px] max-[890px]:tracking-[5px] uppercase py-2">
                    Languages
                  </h1>
                  <p className="text-white leading-6 max-[890px]:hidden text-justify">
                    At BIT Park, we are satisfied with our deep expertise in
                    software development, which includes a wide range of
                    computer languages. Our team is proficient in various
                    languages, including Python, Java, JavaScript, C++, and
                    others, allowing us to fulfil our client's different needs
                    and preferences. Whether we're creating sturdy programs,
                    dynamic websites, or sophisticated algorithms, we adjust our
                    approach to each project's individual needs. With our
                    expertise in many languages, we can provide diverse
                    solutions that meet and surpass client expectations,
                    delivering excellence in software development.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={techimg2} alt="frameworktools" />
                <div className="w-[45%] p-4 rounded-lg absolute top-14 max-[900px]:top-4 max-[890px]:top-22 left-8 max-[900px]:left-4">
                  <h1 className="text-white font-bold text-2xl max-[890px]:text-lg tracking-[12px] max-[890px]:tracking-[5px] uppercase py-2">
                    Framework{" "}
                  </h1>
                  <p className="text-white leading-6 max-[890px]:hidden text-justify">
                    BIT PARK specializes in delivering projects with precision
                    and innovation, using cutting-edge frameworks adapted to
                    unique needs. Our experience rests in smoothly integrating
                    the most recent tools and technologies into every project,
                    assuring peak performance and scalability. We create
                    solutions that exceed clients' expectations in web
                    development, mobile apps, or backend systems. Trust us to
                    expertly traverse the complicated terrain of frameworks,
                    ensuring that your project stands out for its efficiency and
                    effectiveness in today's fast-paced technology environment.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={techimg3} alt="databasetools" />
                <div className="w-[45%] p-4 rounded-lg absolute top-10 max-[900px]:top-4 max-[890px]:top-22 left-8 max-[900px]:left-4">
                  <h1 className="text-white font-bold text-2xl max-[890px]:text-lg tracking-[12px] max-[890px]:tracking-[5px] uppercase py-2">
                    Database
                  </h1>
                  <p className="text-white leading-6 max-[890px]:hidden text-justify">
                    At BIT PARK, we specialize in database solutions, providing
                    projects with precision and efficiency suited to specific
                    requirements. Our experience covers various database
                    technologies, ensuring each project runs smoothly and
                    reliably. Whether relational databases like MySQL and
                    PostgreSQL, NoSQL databases like MongoDB and Cassandra, or
                    customized solutions like Amazon DynamoDB, we know how to
                    use the correct tools for the job. Trust us to design and
                    execute robust database designs that connect smoothly with
                    your applications, assuring scalability, security, and data
                    integrity throughout development.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={techimg4} alt="testingtools" />
                <div className="w-[45%] p-4 rounded-lg absolute top-8 max-[900px]:top-4 max-[890px]:top-22 left-8 max-[900px]:left-4">
                  <h1 className="text-white font-bold text-2xl max-[890px]:text-lg tracking-[12px] max-[890px]:tracking-[5px] uppercase py-2">
                    Testing{" "}
                  </h1>
                  <p className="text-white leading-6 max-[890px]:hidden text-justify">
                    At BIT PARK, we are masters of quality assurance, ensuring
                    flawless project delivery through meticulous testing
                    methodologies. Our expertise encompasses many testing tools
                    tailored to meet specific project requirements. Whether it's
                    unit, integration, functional, or performance testing, we
                    harness the right tools for the job, ensuring the highest
                    standards of quality and reliability. From Selenium
                    WebDriver for comprehensive web testing to Apache JMeter for
                    robust performance evaluation, we employ cutting-edge
                    technologies to guarantee every project's seamless
                    functionality and security. Trust us to elevate your
                    software's quality, driving success through rigorous testing
                    practices.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Technologies;
