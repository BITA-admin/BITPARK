import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Whychoosebitpark = () => {
  return (
    <section className="bg-slate-900 p-4 md:p-8 py-10">
      <div className="py-10 text-center">
        <h3 className="md:text-[2rem] text-2xl font-extrabold text-white">
          Why Choose Bit Park for Mobile Application Development Services?
        </h3>
      </div>
      <div className="mx-auto max-w-5xl">
        <Links
          Headings="Expertise:"
          SubHeadings="Seasoned professionals in iOS, Android, and hybrid frameworks."
        />
        <Links
          Headings="Custom Solutions:"
          SubHeadings="Tailored development for native, cross-platform, or progressive web apps."
        />
        <Links
          Headings="User-Centric Design:"
          SubHeadings="  Intuitive interfaces for enhanced engagement and satisfaction."
        />
        <Links
          Headings="Agile Development:"
          SubHeadings="Flexible, transparent, and collaborative approach."
        />
        <Links
          Headings="Quality Assurance: "
          SubHeadings="Rigorous testing for bug-free, optimized performance."
        />
      </div>
    </section>
  );
};

const Links = ({ Headings, SubHeadings }) => {
  const refs = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const tops = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const lefts = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const Rects = refs.current.getBoundingClientRect();

    const widths = Rects.widths;
    const heightt = Rects.heightt;

    const mouseX = e.clientX - Rects.lefts;
    const mouseY = e.clientY - Rects.tops;

    const xPcts = mouseX / widths - 0.5;
    const yPcts = mouseY / heightt - 0.5;

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
            delayChildren: 0.25,
            staggerChildren: 0.075,
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
