import Contact_Us from "../../../assets/all-images/uiuxbanner.png";

const UiUxBanner = () => {
  return (
    <div className="relative flex h-screen">
      <img
        src={Contact_Us}
        alt="uiux"
        className="h-full w-full object-cover "
      />
      <section className=" p-2 text-center lg:text-left grid md:grid-cols-2 mx-auto gap-10 pt-44 md:pt-28 absolute top-20 left-10 max-w-full md:left-44 z-10">
        <div>
          <div className=" max-w-full  flex gap-4 items-start flex-col">
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-400 to-cyan-500 font-extrabold xl:text-3xl lg:text-xl tracking-wider py-10 lg:py-24  xl:py-10 text-xl">
              <span className="block w-full ">
                Unlock Exceptional Customer Experiences:
              </span>
              <br />
              <span className="text-[18px] text-gray-300 font-bold">
                Harness our Comprehensive UI/UX Services for Web and Mobile
                Apps. From start to finish, we're here to elevate your digital
                presence.
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center  gap-6">
            <a
              href="/contactus"
              className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-blueColor mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
            >
              <span className="ml-2">Launch Your Discussion Now </span>
            </a>
          </div>
        </div>
      </section>
      <div className="h-full w-full bg-slate-900 absolute top-0 opacity-65 "></div>
    </div>
  );
};

export default UiUxBanner;
