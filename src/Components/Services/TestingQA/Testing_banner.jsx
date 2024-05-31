import Contact_Us from "../../../assets/all-images/testing_banner.png";

const Testing_banner = () => {
  return (
    <div className="relative flex h-screen">
      <img
        src={Contact_Us}
        alt="Testing and QA"
        className="h-full w-full object-cover "
      />
      <section className=" grid md:grid-cols-2 mx-auto gap-10 md:pt-28 pt-44 absolute top-20 left-12 max-w-full md:left-44 z-10">
        <div>
          <div className=" max-w-full  flex gap-4 items-start flex-col">
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-400 to-cyan-500 font-extrabold xl:text-3xl lg:text-xl tracking-wider py-10 lg:py-24  xl:py-10 text-xl">
              <span className="block w-full ">
                Your Ultimate Destination for Mobile Application Development
                Services
              </span>
              <br />
              <span className="text-[18px] text-gray-300 font-bold">
                We are trusted by the industry to deliver top-tier Native Apps
                to enterprise clients. Our full-stack mobility team has
                expertise in all mobile app development areas.
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center  gap-6">
            <a
              href="/contactus"
              className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-blueColor mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
            >
              <span className="ml-2">Schedule a consultation</span>
            </a>
          </div>
        </div>
        {/* <div className=" place-content-center flex gap-4 items-center flex-col">
          <FloatingPhone />
        </div> */}
      </section>
      <div className="h-full w-full bg-slate-900 absolute top-0 opacity-80 "></div>
    </div>
  );
};

export default Testing_banner;
