import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Approach_uiux = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="md:text-[2rem] text-2xl font-extrabold text-blueColor">
          BIT PARK METHOD AND APPROACH
        </span>
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-3xl pb-10">
        <p className="text-center text-md font-semibold leading-8 text-slate-200  sm:leading-9">
          Collaborate with Bit Park Pvt. Ltd. to procure exceptional website
          design and development services that enhance your company's visibility
          on the web and stimulate expansion. Contact us immediately to discuss
          your project's specifications and allow us to materialize your vision.
        </p>
      </div>
      <HoriZontalScrollsCarousels />
    </div>
  );
};

const HoriZontalScrollsCarousels = () => {
  const TargetRefs = useRef(null);
  const { scrollYProgress } = useScroll({
    target: TargetRefs,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={TargetRefs} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((Cards) => {
            return <Cardd Cards={Cards} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Cardd = ({ Cards }) => {
  return (
    <div className="group relative lg:h-[650px] lg:w-[650px] w-[450px] h-[650px]  overflow-hidden bg-slate-700/50">
      <div
        style={{
          backgroundImage: `url(${Cards.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 opacity-55"
      ></div>
      <div className="absolute inset-0 z-50 grid place-content-center">
        <p className="bg-gradient-to-br from-black/50 to-white/0 p-8 mt-56 text-2xl font-black uppercase text-white text-center backdrop-blur-sm">
          {Cards.titles}
        </p>
        <p className="bg-gradient-to-br from-white/50 to-white/0 p-4  text-lg text-center  ml-0  text-black font-bold backdrop-blur-sm">
          {Cards.lines}
        </p>
      </div>
    </div>
  );
};

export default Approach_uiux;

const cards = [
  {
    url: "../../../src/assets/all-images/Research&Discovery-uiux.jpg",
    titles: "Research & Discovery ",

    lines:
      "Understand client needs, Examine target audience, Market and competition analysis, Plan and Strategize.",
  },
  {
    url: "../../../src/assets/all-images/Planning&Strategy-uiux.jpg",
    titles: "Planning&Strategy",
    lines:
      "Establish project objectives, Develop user stories and personas, Project roadmap and timeline.",
  },
  {
    url: "../../../src/assets/all-images/wireframe-uiux.jpg",
    titles: "Wireframing",
    lines:
      "Make low-fidelity wireframes, Plan a simple layout and structure, Prioritize function above aesthetics.",
  },
  {
    url: "../../../src/assets/all-images/Prototype-uiux.png",
    titles: "Prototyping",
    lines:
      "Create interactive prototypes, Add basic user testing functionality, Improve navigation and flows.",
  },
  {
    url: "../../../src/assets/all-images/vishuldesign-uiux.jpeg",
    titles: "Visual Design",
    lines:
      "Branding elements, Create realistic mockups, Prioritize aesthetics, typography, and color.",
  },
  {
    url: "../../../src/assets/all-images/usabilitytesting-uiux.jpeg",
    titles: "Usability Testing",
    lines:
      "Get user feedback, Finding problems and ways to improve, Design iterations based on customer feedback.",
  },
  {
    url: "../../../src/assets/all-images/uideliverablestodeveloper-uiux.png",
    titles: "UI Deliverables to Developer",
    lines:
      "Style guide, Mockups, Prototypes, Assets, Component Library, Responsive Design Guidelines, Documentation.",
  },
];
