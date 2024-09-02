import { CircleComponent } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { HexagonSvgComponent } from "../components/HexagonSvg";

export const HeroSection = () => {
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
          <div className="flex justify-center mt-10">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
          <div className="flex justify-center mt-24">
            <div className="inline-flex  relative z-0">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <HexagonSvgComponent className="size-[1100px]" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <HexagonSvgComponent className="size-[1800px]" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <CircleComponent className="absolute left-[200px] -top-[900px]" >
                  <img
                    src="/assets/images/cube.png"
                    alt="cube3D Image"
                    className="size-[140px]"
                  />
              </CircleComponent>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
             <CircleComponent className="-left-[600px] -top-[80px] absolute">
                  <img
                    src="/assets/images/torus.png"
                    alt="torus 3D Image"
                    className="size-[140px]"
                  />
                </CircleComponent>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
             <CircleComponent className="top-[270px] left-[200px] absolute">
                  <img
                    src="/assets/images/cuboid.png"
                    alt="cuboid 3D Image"
                    className="size-[140px]"
                  />
                </CircleComponent>
              </div>
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
            </div>
          </div>
          <div className="flex justify-between flex-col items-center mt-40 md:mt-80 gap-4">
            <div className="h-[40px] w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2">
             <div className="h-3 w-1 bg-fuchsia-500 rounded-full "></div>   
            </div>
            <p className="uppercase text-zinc-500 font-extrabold tracking-wider">Scroll to Learn More</p>
          </div>
        </div>
      </section>
    </>
  );
};
