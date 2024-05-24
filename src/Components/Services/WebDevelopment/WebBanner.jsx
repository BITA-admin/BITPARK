// import Contact_Us from "../../assets/all-images/uiuxbanner.jpg";
// import Contact_Us from "../../assets/all-images/uiuxbanner.jpg";
import Contact_Us from "../../../assets/all-images/Web_banner.jpg";
//  default Application_banner;
export const WebBanner = () => {
  return (
    <div className="relative flex h-screen">
      <img
        src={Contact_Us}
        alt="image"
        className="h-full w-full object-cover "
      />
      <section className=" p-2 text-center lg:text-left flex justify-end mx-auto  pt-44 md:pt-28 absolute top-20 right-15 max-w-[35rem]  md:right-44 z-10">
        <div>
          <div className=" max-w-full  flex gap-4 items-start flex-col">
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-400 to-cyan-500 font-extrabold xl:text-3xl lg:text-xl tracking-wider py-10 lg:py-24  xl:py-10 text-xl">
              <span className="block w-full ">
                Elevate Your Online Presence with BIT PARK:
              </span>
              <br />
              <span className="text-[18px] text-gray-300 font-bold">
                Your Trusted Partner for On-Time, Reliable website design and
                development services
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center cursor-pointer gap-6">
            <a
              href="/contactus"
              className=" animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-blueColor mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
            >
              <span class="ml-2 ">Start the Conversation Today </span>
            </a>
          </div>
        </div>
      </section>
      <div className="h-full w-full bg-slate-900 absolute top-0 opacity-70 "></div>
    </div>
  );
};
