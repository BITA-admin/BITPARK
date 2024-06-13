import Contact_us from "../../assets/all-images/contactpagebannerimg3.png";

const Sample = () => {
  return (
    <>
      <section className=" bg-[url('src/assets/all-images/email-6370595_1280.png')] bg-no-repeat bg-cover">
        <div className=" bg-slate-900/75 pt-[25%] lg:pt-[8%] flex flex-col lg:flex-row items-center justify-around">
          <div>
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-400 to-cyan-500 font-extrabold xl:text-4xl lg:text-3xl tracking-wider text-3xl">
              <span className="block w-full">Reach out for expert</span>
              software development <br />
              and IT consulting
            </div>
          </div>
          <img
            src={Contact_us}
            alt="Contact_Banner"
            className="w-[85%] pt-[8%] lg:pt-0 lg:w-[35%]"
          />
        </div>
      </section>
    </>
  );
};

export default Sample;
