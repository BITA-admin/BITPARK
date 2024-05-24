import {
  AnimatePresence,
  useMotionValue,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";

export const Servicenav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpe, setIsOpe] = useState(false);
  const [isOp, setIsOp] = useState(false);
  const [isO, setIsO] = useState(false);
  const [is, setIs] = useState(false);
  return (
    <section className="bg-slate-900 p-4 md:p-8 py-10">
      <div className="py-10 text-center">
        <h3 className="md:text-[2rem] text-2xl font-extrabold text-indigo-400">
          Our Mobile Application Development Services
        </h3>
      </div>
      <div className="mx-auto max-w-6xl">
        <div onClick={() => setIsOpen(true)}>
          <Link
            heading="Expertise:"
            subheading="Seasoned professionals in iOS, Android, and hybrid frameworks."
            //imgSrc="src/assets/all-images/Abt.jpg"
            //   href="#"
          />
        </div>
        <div onClick={() => setIsOpe(true)}>
          <Link
            heading="Custom Solutions:  "
            subheading="Tailored development for native, cross-platform, or progressive web apps."
            //imgSrc="src/assets/all-images/Abt.jpg"
            //   href="#"
          />
        </div>
        <div onClick={() => setIsOp(true)}>
          <Link
            heading="User-Centric Design:"
            subheading="  Intuitive interfaces for enhanced engagement and satisfaction."
            //imgSrc="src/assets/all-images/Abt.jpg"
            //   href="#"
          />
        </div>
        <div onClick={() => setIsO(true)}>
          <Link
            heading="Agile Development:"
            subheading="Flexible, transparent, and collaborative approach."
            //imgSrc="src/assets/all-images/Abt.jpg"
            //   href="#"
          />
        </div>
        <div onClick={() => setIs(true)}>
          <Link
            heading="Quality Assurance: "
            subheading="Rigorous testing for bug-free, optimized performance."
            //imgSrc="src/assets/all-images/Abt.jpg"
            //   href="#"
          />
        </div>

        <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <SpringModal_2 isOpe={isOpe} setIsOpe={setIsOpe} />
        <SpringModal_3 isOp={isOp} setIsOp={setIsOp} />
        <SpringModal_4 isO={isO} setIsO={setIsO} />
        <SpringModal_5 is={is} setIs={setIs} />
      </div>
    </section>
  );
};
const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-blueColor to-indigo-400 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-blueColor grid place-items-center mx-auto">
                <FiAlertCircle />
              </div> */}
              <h3 className="text-3xl font-bold text-center mb-2">
                Expertise:
              </h3>
              <p className="text-center mb-6">
                Seasoned professionals in iOS, Android, and hybrid frameworks.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-blueColor font-semibold w-full py-2 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const SpringModal_2 = ({ isOpe, setIsOpe }) => {
  return (
    <AnimatePresence>
      {isOpe && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpe(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-blueColor to-indigo-400 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-blueColor grid place-items-center mx-auto">
                <FiAlertCircle />
              </div> */}
              <h3 className="text-3xl font-bold text-center mb-2">
                Custom Solutions:
              </h3>
              <p className="text-center mb-6">
                Tailored development for native, cross-platform, or progressive
                web apps.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpe(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Go back
                </button>
                <button
                  onClick={() => setIsOpe(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-blueColor font-semibold w-full py-2 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const SpringModal_3 = ({ isOp, setIsOp }) => {
  return (
    <AnimatePresence>
      {isOp && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOp(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-blueColor to-indigo-400 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-blueColor grid place-items-center mx-auto">
                <FiAlertCircle />
              </div> */}
              <h3 className="text-3xl font-bold text-center mb-2">
                User-Centric Design:
              </h3>
              <p className="text-center mb-6">
                Intuitive interfaces for enhanced engagement and satisfaction.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOp(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Go back
                </button>
                <button
                  onClick={() => setIsOp(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-blueColor font-semibold w-full py-2 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const SpringModal_4 = ({ isO, setIsO }) => {
  return (
    <AnimatePresence>
      {isO && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsO(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-blueColor to-indigo-400 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-blueColor grid place-items-center mx-auto">
                <FiAlertCircle />
              </div> */}
              <h3 className="text-3xl font-bold text-center mb-2">
                Agile Development:
              </h3>
              <p className="text-center mb-6">
                Flexible, transparent, and collaborative approach.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsO(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Go back
                </button>
                <button
                  onClick={() => setIsO(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-blueColor font-semibold w-full py-2 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const SpringModal_5 = ({ is, setIs }) => {
  return (
    <AnimatePresence>
      {is && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIs(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-blueColor to-indigo-400 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-blueColor grid place-items-center mx-auto">
                <FiAlertCircle />
              </div> */}
              <h3 className="text-3xl font-bold text-center mb-2">
                Quality Assurance:
              </h3>
              <p className="text-center mb-6">
                Rigorous testing for bug-free, optimized performance.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIs(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Go back
                </button>
                <button
                  onClick={() => setIs(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-blueColor font-semibold w-full py-2 rounded"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const Link = ({ heading, subheading }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      //   href={href}
      ref={ref}
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
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      {/* <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        // src}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      /> */}

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
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
