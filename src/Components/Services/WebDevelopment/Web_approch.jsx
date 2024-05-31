import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const It_approch = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-28 items-center  justify-center">
        <span className="md:text-[2rem] text-center text-2xl mt-7 font-extrabold text-blueColor">
          BIT PARK METHOD AND APPROACH
        </span>
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-3xl pb-10"></div>
      <KoriZontalScrollCarousels />
    </div>
  );
};

const KoriZontalScrollCarousels = () => {
  const targeTRefs = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targeTRefs,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targeTRefs} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cardss.map((Cards) => {
            return <Kard Cards={Cards} key={Cards.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Kard = ({ Cards }) => {
  return (
    <div className="group relative lg:h-[650px] lg:w-[650px] w-[450px] h-[650px]  overflow-hidden bg-slate-700/50">
      <div
        style={{
          backgroundImage: `url(${Cards.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          Opacity: "0.8",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 opacity-55"
      ></div>
      <div className="absolute inset-0 z-50 grid place-content-center">
        <p className="bg-gradient-to-br from-black/50 to-white/0 lg:p-8 mt-56 text-2xl font-black uppercase text-white text-center backdrop-blur-sm">
          {Cards.titles}
        </p>
        <p className="bg-gradient-to-br from-white/50 to-white/0 lg:p-4  text-lg text-center  ml-0  text-black font-bold backdrop-blur-sm">
          {Cards.lines}
        </p>
      </div>
    </div>
  );
};

export default It_approch;

const cardss = [
  {
    url: "src/assets/all-images/webs-planning.png",
    titles: "Planning",
    id: 1,
    lines:
      "Establish project objectives,Collect client feedback and study,Detail the project plan and timetable.",
  },
  {
    url: "src/assets/all-images/webs-design.png",
    titles: "Design:",
    id: 2,
    lines:
      "Use wireframes and mockups to envision website layout,Select colors, fonts, and images,Make designs responsive and user-friendly.",
  },
  {
    url: "src/assets/all-images/webs-development.png",
    titles: " The Development Process:",
    id: 3,
    lines:
      "Develop the website's front-end using HTML, CSS, and JavaScript.Back-end Development: Use PHP, Python, or Node,js to build server functions,Integrate databases to store and manage website data.",
  },
  {
    url: "src/assets/all-images/webs-testing&qa.png",
    titles: "Testing & QA:",
    id: 4,
    lines:
      "Test thoroughly to find and repair bugs,Maintain cross-browser responsiveness,Test usability to evaluate user experience.",
  },
  {
    url: "src/assets/all-images/webs-deployandlaunch.png",
    titles: "Deploy and Launch:",
    id: 5,
    lines:
      "Optimize code and assets for deployment,Select a hosting platform and configure servers,Finally deploy and test the website on the live server,Staff training on new technologies and processes,Facilitating adoption and use through change management.",
  },
  {
    url: "src/assets/all-images/webs-postlaunchmaintenance.png",
    titles: "Post-Launch Maintenance :",
    id: 6,
    lines:
      "Website security and performance require continual care and maintenance,To improve, track website metrics and user comments,Update and improve as needed.",
  },
];
