import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Helmet } from "react-helmet";

const COLORs = ["#3a7ba6", "#1E67C5", "#CE74CF", "#DD435C"];

export const About_banner = () => {
  const colors = useMotionValue(COLORs[0]);

  useEffect(() => {
    animate(colors, COLORs, {
      ease: "easeInOut",
      duration: 11,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${colors})`;
  const borders = useMotionTemplate`1px solid ${colors}`;
  const boxShadows = useMotionTemplate`0px 4px 24px ${colors}`;

  return (
    <>
      <Helmet>
        <title>About us</title>

        <meta name="title" content="About us" />
        <meta
          name="description"
          content="Our custom software development company offers high-quality and customized software solutions for both web and mobile applications at a reasonable price."
        />
        <meta name="keywords" content="custom software development services" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="bitpark" />

        <link rel="canonical" href="https://bitpark.co.in/aboutus" />

        <meta property="og:title" content="About us" />
        <meta
          property="og:description"
          content="Our custom software development company offers high-quality and customized software solutions for both web and mobile applications at a reasonable price."
        />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="225" />
        <meta property="og:image:height" content="225" />
        <meta property="og:url" content="https://bitpark.co.in/aboutus" />
        <meta property="og:site_name" content="https://bitpark.co.in/" />
      </Helmet>
      <motion.section
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="relative  flex flex-col items-center ">
          <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight ">
            Your goals are our priority
          </h1>
          <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
            Building software solutions with a human touch.
          </p>
        </div>

        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2450} factor={4} fade speed={3} />
          </Canvas>
        </div>
      </motion.section>
    </>
  );
};
