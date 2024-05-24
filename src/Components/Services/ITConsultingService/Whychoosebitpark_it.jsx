import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Whychoosebitpark_it = () => {
  return (
    <section className="bg-slate-900 p-4 md:p-8 py-10 ">
      <div className="py-10 text-center pt-20">
        <h3 className="md:text-[2rem] text-2xl font-extrabold text-white">
          Why Choose BIT PARK for IT Consultancy Services?
        </h3>
      </div>
      <div className="mx-auto max-w-5xl">
        <Links
          Headings="Customized IT consultancy:"
          SubHeadings="BIT PARK specializes in small business IT consultancy. Our solutions are tailored to small businesses' needs and challenges to maximize value and impact."
        />
        <Links
          Headings="Expertise and Experience:"
          SubHeadings="Our IT experts are industry veterans with years of experience. We consistently provide successful IT consulting services to small businesses in many industries."
        />
        <Links
          Headings="Personalized Approach: "
          SubHeadings="Our consulting services are customized since we know every small business is distinct. Our staff collaborates with you to understand your needs and adapt our solutions."
        />
        <Links
          Headings="Dedicated Assistance: "
          SubHeadings="BIT PARK provides excellent customer assistance. Our team is available for implementation, maintenance, and troubleshooting."
        />
        <Links
          Headings="Affordable Solutions: "
          SubHeadings="All small businesses should have access to professional IT consulting services. Our affordable solutions maximize value without breaking the wallet."
        />
        <Links
          Headings="Proven Results: "
          SubHeadings="Our record speaks for itself. BIT PARK's consulting services have helped many small businesses reach IT goals and overcome problems. You may trust us when you choose us."
        />
        <Links
          Headings="Client: "
          SubHeadings="satisfaction is our top priority. Our IT consulting services for small businesses aim to exceed your expectations. Your success is ours."
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

  const top = useTransform(mouseYSprings, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSprings, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rects = refs.current.getBoundingClientRect();

    const Widths = rects.Widths;
    const Heights = rects.Heights;

    const mouseX = e.clientX - rects.left;
    const mouseY = e.clientY - rects.top;

    const xPcts = mouseX / Widths - 0.5;
    const yPcts = mouseY / Heights - 0.5;

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
