import Contact_Us from "../../assets/all-images/email-6370595_1280.jpg";
import Contact_us from "../../assets/all-images/Contact_us_12.png";

const Sample = () => {
  return (
    <div>
      <div className="relative flex h-screen">
        <img
          src={Contact_Us}
          alt="image"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute top-1/2 left-20 max-w-full md:left-44 z-10">
          <div className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-400 to-cyan-500 font-extrabold xl:text-4xl lg:text-3xl tracking-wider py-44 lg:py-24  xl:py-4 text-3xl">
            <span className="block w-full">Reach out for expert</span>
            software development <br />
            and IT consulting
          </div>
        </div>
        <div className="absolute lg:top-[23%] right-20 max-w-full top-32 md:py-10 md:top-10 lg:right-28 opacity-90 z-10 ">
          <img src={Contact_us} alt="Contact_Banner" className="" />
        </div>
      </div>
      <div className="h-full w-full bg-slate-900 absolute top-0 opacity-75 "></div>
    </div>
  );
};

export default Sample;
