import { CutCornerButton } from "../components/CutCornerButton";
import { HexagonSvgComponent } from "../components/HexagonSvg";
import { CircleComponent } from "../components/Circle";
export const CallToActionSection = () => {
  return (
    <section className="py-60 overflow-hidden">
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <HexagonSvgComponent className="size-[700px] " />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <HexagonSvgComponent className="size-[1100px] " />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleComponent className="absolute left-0 -top-[400px]">
            <img src="/assets/images/cuboid.png" alt="Cuboid image" className="size-[140px]" />
          </CircleComponent>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleComponent className="absolute -left-[600px] -top-[70px]">
            <img src="/assets/images/cylinder.png" alt="cylinder image" className="size-[140px]" />
          </CircleComponent>
          </div>
          <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="text-xl text-zinc-400 text-center mt-8 max-w-sm mx-auto lg:text-2xl">
            Start building using blockchain technology, with blockforge.
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};
