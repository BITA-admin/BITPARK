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
      <KorizontaLScrollCarousels />
    </div>
  );
};

const KorizontaLScrollCarousels = () => {
  const targeTRefs = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targeTRefs,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targeTRefs} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cardss.map((caRd) => {
            return <CarDs caRd={caRd} key={caRd.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const CarDs = ({ caRd }) => {
  return (
    <div className="group relative lg:h-[650px] lg:w-[650px] w-[450px] h-[650px]  overflow-hidden bg-slate-700/50">
      <div
        style={{
          backgroundImage: `url(${caRd.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          Opacity: "0.8",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 opacity-55"
      ></div>
      <div className="absolute inset-0 z-50 grid place-content-center">
        <p className="bg-gradient-to-br from-black/50 to-white/0 lg:p-8 mt-56 text-2xl font-black uppercase text-white text-center backdrop-blur-sm">
          {caRd.titles}
        </p>
        <p className="bg-gradient-to-br from-white/50 to-white/0 lg:p-4  text-lg text-center  ml-0  text-black font-bold backdrop-blur-sm">
          {caRd.lines}
        </p>
      </div>
    </div>
  );
};

export default It_approch;

const cardss = [
  {
    url: "src/assets/all-images/assessmentandanalysis-itcs.png",
    titles: "Assessment and Analysis",
    id: 1,
    lines:
      "Initial discussion of company goals and IT landscape,Comprehensive needs assessment to identify strengths, weaknesses, and improvement opportunities.",
  },
  {
    url: "src/assets/all-images/strategydevelopment-itcs.png",
    titles: "Strategy Development",
    id: 2,
    lines:
      "Customized IT strategies for business priorities,Detailed implementation and execution plans.",
  },
  {
    url: "src/assets/all-images/designingandplanningsolutions-itcs.png",
    titles: "Designing and Planning Solutions",
    id: 3,
    lines:
      "Solution architecture that meets technology and scalability needs,Specific implementation strategies with dates and resources.",
  },
  {
    url: "src/assets/all-images/theimplementationanddeployment-itcs.png",
    titles: "The implementation and deployment",
    id: 4,
    lines:
      "Top-notch execution using industry standards,Certified project management for on-time, on-budget delivery.",
  },
  {
    url: "src/assets/all-images/managetrainingandchange-itcs.png",
    titles: "Manage Training and Change",
    id: 5,
    lines:
      "Staff training on new technologies and processes,Facilitating adoption and use through change management.",
  },
  {
    url: "src/assets/all-images/supportandmonitoring-itcs.png",
    titles: "Support and Monitoring",
    id: 6,
    lines:
      "Ongoing support and maintenance,Monitor concerns before they escalate.",
  },
  {
    url: "src/assets/all-images/evaluateandoptimize-itcs.png",
    titles: "Evaluate and Optimize",
    id: 7,
    lines:
      "Regular performance evaluations,Continuous improvement maximizes corporate value.",
  },
];
