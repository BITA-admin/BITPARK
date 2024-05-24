import Abt from "../../assets/all-images/Abt1.jpg";

const About_bit = () => {
  return (
    <div className="relative bg-white overflow-hidden mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 -z-50"
            fill="white"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-bold text-blueColor sm:text-3xl md:text-4xl text-center">
                BIT PARK - IT COMPANY
              </h2>
              <p className="font-semibold text-center text-slate-600  tracking-tight">
                Welcome to BIT Park Pvt. Ltd., a beacon of innovation in the
                global tech landscape. We are a trailblazing software
                development company committed to transforming ideas into robust
                digital solutions. With a dedicated team of experts, we harness
                cutting-edge technologies to drive excellence and elevate
                businesses to new heights. Our unwavering commitment to client
                success matches our passion for creating impactful software. At
                BIT Park, we don't just develop software; we craft experiences
                that resonate. Join us on a journey of limitless possibilities
                where innovation meets expertise together.
              </p>
              <p className="font-semibold text-center py-5 text-slate-600  tracking-tight">
                Our unwavering trust was earned by its dedication to excellence.
                BIT PARK has established a commendable standing for its reliable
                and proficient approach to providing clients with customized,
                cutting-edge solutions. Clients consistently entrust BIT PARK to
                deliver state-of-the-art software development, guaranteeing
                positive outcomes and everlasting collaborations. Whether you're
                in need of website design and development services, custom
                software development services, or mobile application development
                services, BIT PARK is your trusted partner for turning your
                vision into reality.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          src={Abt}
          alt="image"
          className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
        />
      </div>
    </div>
  );
};

export default About_bit;
