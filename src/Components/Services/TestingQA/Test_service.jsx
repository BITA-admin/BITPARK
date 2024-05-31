import testingandqamenimg1 from "../../../assets/all-images/testingandqamenimg1.png";
import testingandqasimg1 from "../../../assets/all-images/testingqasimg2.png";

function Test_service() {
  return (
    <>
      <section>
        <div className=" bg-slate-900 relative">
          <div
            className="bg-no-repeat bg-cover flex flex-col lg:flex-row justify-around w-auto  items-center"
            style={{
              backgroundImage: "url(src/assets/all-images/tqasbgimg1.png)",
            }}
          >
            <img
              src={testingandqamenimg1}
              alt="image"
              className=" w-[100%] md:w-[50%] lg:w-[35%] border-b-4 border-b-white lg:border-none"
            />
            <p className="w-[90%] lg:w-[40%] py-9 text-[#fff] text-justify leading-8 text-lg font-sans">
              Get complete Testing and QA services from Bit Park Pvt Ltd, your
              trusted partner. We understand the importance of software
              application stability, performance, and security. We offer a
              variety of testing services to assist you in confidently marketing
              high-quality products. Our testing and QA services cover the
              entire development lifecycle, from design to deployment. Our
              skilled testers and QA engineers thoroughly test to find and fix
              issues before they affect your users.
            </p>
          </div>
        </div>
        <div className="bg-slate-900 py-[2%] flex  flex-col-reverse lg:flex-row justify-around items-center ">
          <div className=" w-[95%] lg:w-1/2 px-5 ">
            <h2 className="text-white text-center font-bold text-xl pb-9">
              API testing service
            </h2>
            <p className="text-white  text-justify leading-8 text-lg font-sans">
              Bit Park specializes in API testing services to ensure
              functionality and reliability. API testing validates software
              component connectivity and provides secure data sharing. Our API
              testing experience helps you find API inconsistencies and
              vulnerabilities to deliver robust and trustworthy solutions to
              your clients.
            </p>
            <p className="py-5 text-white  text-justify leading-8 text-lg font-sans">
              We offer functional, performance, security, and other API testing
              methods. We offer the tools and knowledge to ensure the
              reliability and performance of any RESTful, SOAP, or GraphQL API.
              You can trust Bit Park to test your APIs to the highest quality
              and reliability. Our precise and thorough testing results allow
              you to release software confidently and safely.
            </p>
          </div>
          <img
            src={testingandqasimg1}
            alt="image"
            className="object-contain w-[90%] md:w-[60%] lg:w-[45%] h-auto p-5 "
          />
        </div>
      </section>
    </>
  );
}

export default Test_service;
