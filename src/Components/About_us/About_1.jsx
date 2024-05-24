import heroVid from "../../assets/all-videos/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-50"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-4xl font-bold">ABOUT BIT PARK</h1>
        <p className="py-2 text-4xl font-bold">
          <span className="text-blueColor font-bold">Your goals </span> are our
          priority
        </p>
        <p className="text-xl py-4 font-semibold ">
          Building software solutions with a human touch.
        </p>
      </div>
    </div>
  );
};

export default Hero;
