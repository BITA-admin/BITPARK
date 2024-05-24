import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
// import { FiArrowRight } from "react-icons/fi";

export const Whychoosebitpark_Application = () => {
  return (
    <section className="bg-slate-900 p-4 md:p-8 py-10 ">
      <div className="py-10 text-center pt-20">
        <h3 className="md:text-[2rem] text-2xl font-extrabold text-white">
          Why Choose Bit Park to Modernize Your Application?
        </h3>
      </div>
      <div className="mx-auto max-w-5xl">
        <Links
          Headings="Proficiency:"
          SubHeadings="Backed by an extensive tenure in the software development sector, we possess the requisite technical acumen and innovative capabilities to materialize your application concepts."
        />
        <Links
          Headings="Customization:  "
          SubHeadings=" We recognize the unique nature of each business. For this reason, we customize our solutions in accordance with your particular objectives, specifications, and branding directives."
        />
        <Links
          Headings="Innovation:"
          SubHeadings="  By remaining updated on emerging technologies and industry trends, our team is capable of integrating the most recent advancements into our development methodology and providing solutions that are resilient to future changes."
        />
        <Links
          Headings="Collaboration:"
          SubHeadings="  We adhere to the principles of open and honest communication as well as strong collaboration with our clients. Every stage of the process, from the initial consultation to post-launch support, we ensure your success and contentment by keeping you informed."
        />
      </div>
    </section>
  );
};

const Links = ({ Headings, SubHeadings }) => {
  const refs = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSprings = useSpring(x);
  const mouseYSprings = useSpring(y);

  const tops = useTransform(mouseYSprings, [0.5, -0.5], ["40%", "60%"]);
  const Left = useTransform(mouseXSprings, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = refs.current.getBoundingClientRect();

    const widths = rect.widths;
    const heights = rect.heights;

    const mouseX = e.clientX - rect.Left;
    const mouseY = e.clientY - rect.tops;

    const xPcts = mouseX / widths - 0.5;
    const yPcts = mouseY / heights - 0.5;

    x.set(xPcts);
    y.set(yPcts);
  };

  return (
    <motion.a
      refs={refs}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 "
        >
          {Headings.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {SubHeadings}
        </span>
      </div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      ></motion.div>
    </motion.a>
  );
};
