import { useRef } from "react";
import { CircleComponent } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { HexagonSvgComponent } from "../components/HexagonSvg";
import { motion, useScroll, useTransform } from "framer-motion";
export const HeroSection = () => {
  const icosahedronRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: icosahedronRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const icosahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [30, -20]);
  return (
    <>
      <section className="py-24 md:py-52 overflow-x-clip">
        <div className="container">
          <p className=" uppercase font-extrabold text-center text-zinc-500 tracking-wider">
            Introducing Blockforge
          </p>
          <h1 className="font-heading font-black text-5xl text-center mt-4 md:text-6xl max-w-2xl lg:text-7xl mx-auto">
            The Future of Blockchain is Here
          </h1>
          <p className="text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto">
            Blockforge is Pioneering smart contract integrity with cutting edge
            data solutions.
          </p>
          <div className="flex justify-center mt-10 cursor-pointer">
            <CutCornerButton className=" cursor-pointer btn">
              Get Started
            </CutCornerButton>
          </div>
          <div className="flex justify-center mt-24">
            <div className="inline-flex  relative z-0">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <HexagonSvgComponent className="size-[1100px]" size={1100} />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <HexagonSvgComponent
                  className="size-[1800px]"
                  size={1800}
                  reverse
                  duration={60}
                />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleComponent
                  className="absolute left-[200px] -top-[900px]"
                  animate
                >
                  <motion.img
                    src="/assets/images/cube.png"
                    alt="cube3D Image"
                    className="size-[140px]"
                    ref={cubeRef}
                    style={{
                      rotate: cubeRotate,
                    }}
                  />
                </CircleComponent>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleComponent className="-left-[600px] -top-[80px] absolute">
                  <motion.img
                    src="/assets/images/torus.png"
                    alt="torus 3D Image"
                    className="size-[140px]"
                    ref={torusRef}
                    style={{
                      rotate: torusRotate,
                    }}
                  />
                </CircleComponent>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleComponent
                  className="top-[270px] left-[200px] absolute"
                  animate
                >
                  <motion.img
                    src="/assets/images/cuboid.png"
                    alt="cuboid 3D Image"
                    className="size-[140px]"
                    ref={cuboidRef}
                    style={{
                      rotate: cuboidRotate,
                    }}
                  />
                </CircleComponent>
              </div>
              <motion.div
                className="inline-flex"
                style={{
                  rotate: icosahedronRotate,
                }}
                ref={icosahedronRef}
              >
                <img
                  src="/assets/images/icosahedron.png"
                  alt=""
                  className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
                />
                <img
                  src="/assets/images/icosahedron.png"
                  alt="icosahedron3d Image"
                  className="w-[500px]"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex justify-between flex-col items-center mt-40 md:mt-80 gap-4">
            <div className="h-[40px] w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2">
              <motion.div
                animate={{
                  translateY: 12,
                  opacity: 0.2
                }}
                transition={{
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="h-3 w-1 bg-fuchsia-500 rounded-full ">

              </motion.div>
            </div>
            <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
              Scroll to Learn More
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
