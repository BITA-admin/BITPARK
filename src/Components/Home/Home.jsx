import { Helmet } from "react-helmet";
import Contact_Us from "../../assets/all-images/home-bg-img.png";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>BITPARK</title>

        <meta name="title" content="BITPARK" />
        <meta
          name="description"
          content="We are a custom software development company Providing quality and customized software solutions for the web and mobile Applications at an affordable price"
        />
        <meta name="keywords" content="custom software development services" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />

        <link rel="canonical" href="" />

        <meta property="og:title" content="bitpark" />
        <meta
          property="og:description"
          content="We are a custom software development company Providing quality and customized software solutions for the web and mobile Applications at an affordable price"
        />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
      </Helmet>
      <div className="relative flex h-screen">
        <img
          src={Contact_Us}
          alt="image"
          className="h-full w-full object-cover "
        />
        <section className=" p-2 text-center lg:text-left grid md:grid-cols-2 mx-auto gap-10 pt-44 md:pt-28 absolute top-20 left-10 max-w-full md:left-44 z-10">
          <div>
            <div className=" max-w-full  flex gap-4 items-start flex-col">
              <div className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-400 to-cyan-500 font-extrabold xl:text-3xl lg:text-xl tracking-wider py-10 lg:py-24  xl:py-10 text-xl">
                <span className="block w-full text-start">
                  <a href="https://www.youtube.com/">
                    Transforming ideas into innovation.
                  </a>
                </span>
                <span className="block w-full text-[18px] mt-8 text-start text-gray-300 font-bold">
                  Transforming ideas into innovation. Elevate your digital
                  journey with our expertise.
                </span>
              </div>
            </div>
            <div className="flex flex-wrap ">
              <button className="bg-blueColor hover:bg-white hover:text-blueColor py-2 px-9 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-white">
                <a href="https://www.youtube.com/">Get Started</a>{" "}
              </button>
            </div>
          </div>
        </section>
        <div className="h-full w-full bg-slate-900 absolute top-0 opacity-60 "></div>
      </div>
    </>
  );
};

export default Home;
