import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Whychoosebitpark_web = () => {
  return (
    <section className="bg-slate-900 p-4 md:p-8 py-10 ">
      <div className="py-10 text-center pt-20">
        <h3 className="md:text-[2rem] text-2xl font-extrabold text-white">
          Why Choose Bit Park for Web Development Services?
        </h3>
      </div>
      <div className="mx-auto max-w-5xl">
        <Links
          Headings="Expertise:"
          SubHeadings="Our team consists of competent developers with considerable experience in a variety of technologies and frameworks, delivering high-quality solutions adapted to your needs."
        />
        <Links
          Headings="Comprehensive  Web Development Solutions:  "
          SubHeadings="BIT PARK PVT LTD provides a wide range of web development services to fulfill a variety of requirements."
        />
        <Links
          Headings="Commitment to Quality and Reliability:"
          SubHeadings=" The company prioritizes delivering high-quality websites consistently and on time, ensuring client satisfaction."
        />
        <Links
          Headings="Utilization of Latest Technologies:"
          SubHeadings=" BIT PARK uses cutting-edge technologies to produce new and effective web solutions, putting clients ahead of the digital curve."
        />
        <Links
          Headings="Client-Centric Approach:  "
          SubHeadings="The BIT PARK team collaborates closely with clients to understand their vision and goals, resulting in personalized and acceptable outcomes."
        />
        <Links
          Headings="Support for Businesses of Every Size:  "
          SubHeadings="Whether you're a startup or a well-established business, BIT PARK can help you develop or improve your internet presence at any stage of the process."
        />
      </div>
    </section>
  );
};

const Links = ({ Headings, SubHeadings }) => {
  const Refs = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const tops = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const Left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rects = Refs.current.getBoundingClientRect();

    const Width = rects.Width;
    const heightt = rects.heightt;

    const mouseXx = e.clientX - rects.Left;
    const mouseYy = e.clientY - rects.tops;

    const xPcts = mouseXx / Width - 0.5;
    const yPcts = mouseYy / heightt - 0.5;

    x.set(xPcts);
    y.set(yPcts);
  };

  return (
    <motion.a
      Refs={Refs}
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
