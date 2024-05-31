import { FaGrinStars } from "react-icons/fa";
import itconsultinggirlimg1 from "../../../assets/all-images/itconsultinggirlimg1.1.png";
import itconsultinggirlimg2 from "../../../assets/all-images/itconsultinggirlimg2.1.png";
import itconsultingsimg1 from "../../../assets/all-images/itc-img1.png";
import itconsultingsimg2 from "../../../assets/all-images/itc-img2.png";
import itconsultingsimg3 from "../../../assets/all-images/itc-img3.png";
import itconsultingsimg4 from "../../../assets/all-images/itc-img4.png";
import itconsultingsimg5 from "../../../assets/all-images/itc-img5.png";
import itconsultingsimg6 from "../../../assets/all-images/itc-img6.png";
import itconsultingsimg7 from "../../../assets/all-images/itc-img7.png";

function ItConsultingservices() {
  return (
    <>
      <section>
        {/* main div 1 */}
        <div className=" bg-slate-900 relative">
          <div
            className="bg-no-repeat bg-cover flex flex-col lg:flex-row justify-around w-auto  items-center"
            style={{
              backgroundImage: "url(src/assets/all-images/tqasbgimg1.png)",
            }}
          >
            <img
              src={itconsultinggirlimg1}
              alt="image"
              className=" hidden lg:block lg:w-[42%] border-b-4 border-b-white"
            />
            <img
              src={itconsultinggirlimg2}
              alt="image"
              className=" w-[80%] md:w-[40%] block lg:hidden border-b-4 border-b-white"
            />
            <div className="w-[90%] lg:w-[40%] py-9">
              <p className="flex items-center text-[#fff] text-justify leading-8 text-lg font-sans">
                <span className="text-3xl self-start mt-1 mr-4 ">
                  <FaGrinStars />
                </span>
                BIT PARK Pvt. Ltd. is the prime provider of IT consulting
                services for small businesses. BIT PARK Pvt. Ltd. is aware of
                small businesses' difficulties when navigating the intricate
                Information Technology landscape. For this reason, we provide
                specialized IT consulting services that are designed to satisfy
                the unique requirements of small businesses such as yours.
              </p>
              <p className="flex items-center text-[#fff] text-justify leading-8 text-lg font-sans">
                <span className="text-3xl self-start mt-1 mr-4">
                  <FaGrinStars />
                </span>
                Our committed group of IT consultants contributes a substantial
                amount of knowledge and proficiency, enabling you to harness the
                capabilities of technology to stimulate expansion and optimize
                the effectiveness of your business activities. To optimize
                digital presence, enhance cybersecurity measures, or streamline
                IT infrastructure, our IT consulting services for small
                businesses are specifically engineered to yield concrete
                outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* main div 2 */}
        <div>
          <h1 className="pt-9 text-center font-bold text-3xl text-[#008DDA]">
            Our IT Consulting Services
          </h1>
          <div className="py-[3%] px-3  mx-auto flex gap-[20px] max-[1300px]:justify-center flex-wrap max-w-[1330px]">
            <div className=" bg-[#fbfcff] w-[420px] flex  my-4 p-6 rounded-lg shadow-xl shadow-[#DDDDDD]">
              <img
                src={itconsultingsimg1}
                alt="img"
                className="w-[60px] self-start"
              />
              <div className="text-[#1E0342] pl-4">
                <span className="font-bold pb-2 block">
                  Strategic IT Planning and Consulting:
                </span>
                <p className="text-justify">
                  We help small firms build specialized IT plans linked with
                  their business objectives, ensuring that technology
                  investments promote growth and innovation.
                </p>
              </div>
            </div>
            <div className=" bg-[#fbfcff] w-[420px] flex  my-4 p-6 rounded-lg shadow-xl shadow-[#DDDDDD]">
              <img
                src={itconsultingsimg2}
                alt="img"
                className="w-[60px] self-start"
              />
              <div className="text-[#1E0342] pl-4">
                <span className="font-bold pb-2 block">
                  Infrastructure Assessment and Optimization:
                </span>
                <p className="text-justify">
                  Our team assesses the current IT infrastructure to find
                  inefficiencies, weaknesses, and areas for improvement. We then
                  recommend and offer implementation support to improve
                  infrastructure performance and scalability.
                </p>
              </div>
            </div>
            <div className=" bg-[#fbfcff] w-[420px] flex  my-4 p-6 rounded-lg shadow-xl shadow-[#DDDDDD]">
              <img
                src={itconsultingsimg3}
                alt="img"
                className="w-[60px] self-start"
              />
              <div className="text-[#1E0342] pl-4">
                <span className="font-bold pb-2 block">
                  Cloud Computing Consulting:
                </span>
                <p className="text-justify">
                  We help small businesses use cloud computing technology to
                  increase flexibility, scalability, and cost-efficiency. We
                  offer cloud strategy development, migration planning, vendor
                  selection, and continuous management to help you get the most
                  out of cloud adoption.
                </p>
              </div>
            </div>
            <div className=" bg-[#fbfcff] w-[420px] flex  my-4 p-6 rounded-lg shadow-xl shadow-[#DDDDDD]">
              <img
                src={itconsultingsimg4}
                alt="img"
                className="w-[60px] self-start"
              />
              <div className="text-[#1E0342] pl-4">
                <span className="font-bold pb-2 block">
                  Digital Transformation Consulting:
                </span>
                <p className="text-justify">
                  We assist small businesses in embracing digital transformation
                  by implementing innovative technology and updating their
                  operations. Implementing automation technologies, IoT
                  integration, data analytics, and AI-driven insights can help
                  boost productivity and competitiveness.
                </p>
              </div>
            </div>
            <div className=" bg-[#fbfcff] w-[420px] flex  my-4 p-6 rounded-lg shadow-xl shadow-[#DDDDDD]">
              <img
                src={itconsultingsimg5}
                alt="img"
                className="w-[60px] self-start"
              />
              <div className="text-[#1E0342] pl-4">
                <span className="font-bold pb-2 block">
                  Software Development Consulting:{" "}
                </span>
                <p className="text-justify">
                  Our professionals advise on unique software development
                  projects ranging from requirements analysis and design to
                  development, testing, and deployment. We ensure that software
                  solutions meet business objectives and provide significant
                  value to small enterprises.
                </p>
              </div>
            </div>
            <div className=" bg-[#fbfcff] w-[420px] flex  my-4 p-6 rounded-lg shadow-xl shadow-[#DDDDDD]">
              <img
                src={itconsultingsimg6}
                alt="img"
                className="w-[60px] self-start"
              />
              <div className="text-[#1E0342] pl-4">
                <span className="font-bold pb-2 block">
                  IT Project Management:
                </span>
                <p className="text-justify">
                  We provide project management services to small organizations,
                  ensuring the timely and cost-effective execution of IT
                  initiatives. Our qualified project managers oversee planning,
                  resource allocation, risk management, and communication to
                  complete projects.
                </p>
              </div>
            </div>
            <div className=" bg-[#fbfcff] w-[420px] flex  my-4 p-6 rounded-lg shadow-xl shadow-[#DDDDDD]">
              <img
                src={itconsultingsimg7}
                alt="img"
                className="w-[60px] self-start"
              />
              <div className="text-[#1E0342] pl-4">
                <span className="font-bold pb-2 block">
                  IT Training and Education:
                </span>
                <p className="text-justify">
                  We provide training programs and workshops to help small
                  business personnel gain the knowledge and skills they need to
                  use IT resources and tools properly. This covers cutting-edge
                  technology-based cybersecurity awareness training, software
                  application training, and IT best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ItConsultingservices;
