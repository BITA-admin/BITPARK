import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Whychoosebitpark_ITOutsourcing = () => {
  return (
    <section className="bg-slate-900 p-4 md:p-8 py-10 ">
      <div className="py-10 text-center pt-20">
        <h3 className="md:text-[2rem] text-2xl font-extrabold text-white">
          Why choose BIT PARK for IT Outsourcing?
        </h3>
      </div>
      <div className="mx-auto max-w-5xl">
        <Links
          Headings="Expertise:"
          SubHeadings="IT experts at BIT PARK are skilled in numerous areas. Our experts can customize software development, infrastructure management, and cybersecurity solutions."
        />
        <Links
          Headings="Cost-effectiveness: "
          SubHeadings="IT outsourcing to BIT PARK reduces operating costs. We offer high-quality services at low prices through our offshore development centres and streamlined processes to help you manage resources and focus on your business goals."
        />
        <Links
          Headings="Scalability: "
          SubHeadings="BIT PARK's services scale well. For startups aiming to expand quickly or existing organizations looking to streamline IT operations, we can scale our solutions to match your changing demands, ensuring you always have the support you need to succeed."
        />
        <Links
          Headings="Reliability: "
          SubHeadings="BIT PARK ensures the safety of IT outsourcing projects. We maintain stringent quality standards and delivery dates and emphasize reliability and openness to match your expectations."
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
  const Lefts = useTransform(mouseXSprings, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = refs.current.getBoundingClientRect();

    const widths = rect.widths;
    const heightt = rect.heightt;

    const mouseX = e.clientX - rect.Lefts;
    const mouseY = e.clientY - rect.tops;

    const xPct = mouseX / widths - 0.5;
    const yPct = mouseY / heightt - 0.5;

    x.set(xPct);
    y.set(yPct);
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
