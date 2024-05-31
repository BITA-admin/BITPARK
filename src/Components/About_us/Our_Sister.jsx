import logo from "../../assets/all-images/bita-academy.png";

const Our_Sister = () => {
  return (
    <>
      <div className="bg-white ">
        <div className="mx-auto py-0 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden px-6 py-10 text-center sm:rounded-3xl sm:px-16">
            <h2 className="font-nudge-extrabold mb-10 mx-auto max-w-2xl text-2xl font-bold text-blueColor uppercase tracking-wide sm:text-3xl md:text-4xl">
              OUR SISTER <span className="text-slate-900">COMPANY</span>
            </h2>

            <div className="mx-auto mt-6 max-w-xl flex items-center justify-center ">
              <a href="https://bitaacademy.com/" target="_blank" className="">
                <img src={logo} alt="bita" className=" h-20 w-44" />
              </a>
            </div>

            <div className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden">
              <span className="!ml-2 font-bold italic text-blueColor">
                BITA IT TRAINING ACADEMY
              </span>
            </div>
            <div className="mt-12 flex items-center justify-center gap-x-6 ">
              <p className=" text-md  w-[42rem] font-semibold text-gray-600  tracking-tight">
                BIT Park Pvt Ltd extends its expertise in technology education
                through its sister company, BITA IT Academy. BITA IT Training
                Academy specializes in comprehensive software training and
                placement services, it empowers students and professionals with
                cutting-edge skills. Offering online and classroom sessions,
                corporate training, internships, and job support, BITA covers
                diverse domains like web development, software testing, software
                development, AI, Big Data, SAP, RPA and more, ensuring
                proficiency and success in the dynamic IT industry.
              </p>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[79rem] w-[92rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                // fill="#3a7ba5"
                fill="#0369a1"
                fillOpacity="0.7"
              ></circle>
              {/* <defs>
                <radialGradient id="8572">
                  <stop stop-color="#0369a1"></stop>
                  <stop offset="1" stop-color="#0369a1"></stop>
                </radialGradient>
              </defs> */}
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Our_Sister;
