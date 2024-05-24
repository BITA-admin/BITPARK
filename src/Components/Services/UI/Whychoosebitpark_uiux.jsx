import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Whychoosebitpark_uiux = () => {
  return (
    <section className="bg-slate-900 p-4 md:p-8 py-10 ">
      <div className="py-10 text-center pt-20">
        <h3 className="md:text-[2rem] text-2xl font-extrabold text-white">
          Why Choose BIT Park for UX/UI Services?
        </h3>
      </div>
      <div className="mx-auto max-w-5xl">
        <Links
          Headings="Expertise:"
          SubHeadings="Our years of experience ensure your digital products stand out."
        />
        <Links
          Headings="Individualized Solutions:"
          SubHeadings="We know every client is different. Our solutions are tailored to your brand and users."
        />
        <Links
          Headings="Innovation: "
          SubHeadings="  We use cutting-edge tools and methods to produce user-friendly designs."
        />
        <Links
          Headings="Collaboration:"
          SubHeadings=" Your input counts. We collaborate with you to accomplish your idea throughout the process."
        />
        <Links
          Headings="Client-Centric Approach:  "
          SubHeadings="The BIT PARK team collaborates closely with clients to understand their vision and goals, resulting in personalized and acceptable outcomes."
        />
        <Links
          Headings="Results-focused: "
          SubHeadings="We prioritize your success. We measure results to boost growth and user happiness."
        />
        <Links
          Headings="Quality Assurance:  "
          SubHeadings="Thorough testing assures faultless performance across all platforms and a smooth user experience. We go above and beyond to satisfy customers and develop long-term relationships."
        />
      </div>
    </section>
  );
};

const Links = ({ Headings, SubHeadings }) => {
  const Ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSprings = useSpring(x);
  const MouseYSpring = useSpring(y);

  const tops = useTransform(MouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const lefts = useTransform(mouseXSprings, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rects = Ref.current.getBoundingClientRect();

    const Width = rects.Width;
    const heightt = rects.heightt;

    const mouseXx = e.clientX - rects.lefts;
    const mouseYy = e.clientY - rects.tops;

    const xPcts = mouseXx / Width - 0.5;
    const yPcts = mouseYy / heightt - 0.5;

    x.set(xPcts);
    y.set(yPcts);
  };

  return (
    <motion.a
      Ref={Ref}
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
