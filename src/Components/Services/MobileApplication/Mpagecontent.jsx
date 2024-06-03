import mdimg2 from "../../../assets/all-images/md-dm02.png";

const Mpagecontent = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover flex flex-col lg:flex-row justify-around w-auto py-[5%] items-center"
        style={{
          backgroundImage: "url(../../src/assets/all-images/md_bg_svg01.jpg)",
        }}
      >
        <img
          src={mdimg2}
          alt="smartphone_usage"
          className="object-contain w-[90%] md:w-[50%] lg:w-[35%] h-auto rounded-2xl"
        />
        <p className="w-[90%] lg:w-[40%]  text-[#4F4A45] text-justify leading-8 text-lg font-sans">
          At Bit Park Pvt Ltd, we recognize the importance of a mobile presence
          in today's digital landscape. With the exponential surge in smartphone
          usage, having a powerful and user-friendly mobile application is no
          longer a luxury, but rather a requirement for organizations in all
          industries. Whether you're a startup trying to make an impression or
          an established company looking to improve client interaction, our
          mobile application development services are tailored to your specific
          needs and will catapult your company to new heights.
        </p>
      </div>
    </div>
  );
};

export default Mpagecontent;
