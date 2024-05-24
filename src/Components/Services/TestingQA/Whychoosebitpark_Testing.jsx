import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Whychoosebitpark_Testing = () => {
  return (
    <section className="bg-slate-900 p-4 md:p-8 py-10 ">
      <div className="py-10 text-center pt-20">
        <h3 className="md:text-[2rem] text-2xl font-extrabold text-white">
          Why choose BIT PARK for Testing and QA service?
        </h3>
      </div>
      <div className="mx-auto max-w-5xl">
        <Links
          Headings="Expertise and Experience: "
          SubHeadings="Bit Park employs experienced software testers and quality assurance professionals. Our experts have successfully tested and ensured the quality of various software applications, including [specific examples of successful projects]. This deep understanding of testing techniques, equipment, and best practices allows us to consistently deliver high-quality results."
        />
        <Links
          Headings="Comprehensive Testing Solutions: "
          SubHeadings="We offer functional, performance, security, and other testing services for various needs. Bit Park tests APIs, mobile, and online apps."
        />
        <Links
          Headings="Focus on Quality"
          SubHeadings=" Bit Park values excellence in everything we do. We help clients build reliable, performant software. Our rigorous testing methods find and fix bugs early in the development lifecycle, reducing costly issues."
        />
        <Links
          Headings="Customized Approach"
          SubHeadings=" At Bit Park, we understand that every project is unique. That's why we take a personalized approach to testing and QA. We work closely with our clients to understand their specific objectives and tailor our testing methods to ensure the best possible outcomes for their projects."
        />
        <Links
          Headings="Timely Delivery"
          SubHeadings="At Bit Park, we recognize the importance of meeting deadlines and delivering outcomes. We are committed to helping our clients achieve their business goals, and that includes completing testing projects on schedule. You can rely on us to deliver your projects on time, every time."
        />
        <Links
          Headings="Cost Effective Solution:"
          SubHeadings="Our testing and QA services are not only affordable but also provide significant value. By identifying and fixing issues early in the development lifecycle, we help you avoid costly rework and ensure the quality of your software. Additionally, our workflow optimization strategies can help you streamline your development process, further reducing costs and boosting quality."
        />
      </div>
    </section>
  );
};

const Links = ({ Headings, SubHeadings }) => {
  const refs = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const MouseXSprings = useSpring(x);
  const MouseYSprings = useSpring(y);

  const tops = useTransform(MouseYSprings, [0.5, -0.5], ["40%", "60%"]);
  const Leftt = useTransform(MouseXSprings, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMoves = (e) => {
    const rects = refs.current.getBoundingClientRect();

    const Width = rects.Width;
    const heightt = rects.heightt;

    const mouseX = e.clientX - rects.Leftt;
    const mouseY = e.clientY - rects.tops;

    const xPcts = mouseX / Width - 0.5;
    const yPcts = mouseY / heightt - 0.5;

    x.set(xPcts);
    y.set(yPcts);
  };

  return (
    <motion.a
      refs={refs}
      onMouseMove={handleMouseMoves}
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
