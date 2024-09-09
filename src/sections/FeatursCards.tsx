import { twMerge } from "tailwind-merge";
import { CardComponent } from "../components/Cards";

export const FeaturesCardsSection = () => {
  const cardData = [
    {
      images: "/assets/images/pill.png",
      title: " Revolutionary Blockchain API",
      description:
        " Efoortlessly integrate and manage blockchain data with our cutting-edge Api designed for seamless connectivity",
      color: "fuchsia",
    },
    {
      images: "/assets/images/cuboid.png",
      title: "Decentralized Data Solutions",
      description:
        "Empower your applications with decentralized data solutions, ensuring security and transparency at every step.",
      color: "lime",
    },
    {
      images: "/assets/images/cone.png",
      title: "Next-Gen Contracts",
      description:
        "Unlock the potential of next-gen contracts with our robust and scalable API, tailored for modern blockchain needs.",
      color: "cyan",
    },
    {
      images: "/assets/images/icosahedron.png",
      title: "Seamless Blockchain Integrartion",
      description:
        "Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.",
      color: "violet",
    },
  ];
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl">
          Discover the Future of Blockchain with Blockforge
        </h2>
        <div className="mt-36 flex lg:mt-48">
          <div className="flex flex-none gap-8">
            {cardData.map(({ images, title, description, color }) => (
              <CardComponent  key={title} className="max-w-xs md:max-w-md" color={color}> 
                <div className="flex justify-center -mt-28">
                  <div className="inline-flex relative">
                    <div className="absolute h-[16px] w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30 transition duration-300 "></div>
                    <img
                      src={images}
                      alt="pill image"
                      className="size-40 group-hover:-translate-y-6 transition duration-300"
                    />
                  </div>
                </div>
                <h3 className="font-heading font-black text-3xl mt-12">
                  {title}
                </h3>
                <p className="text-lg text-zinc-400 mt-4">{description}</p>

             
              </CardComponent>
             
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }) => (
              <div
                key={title}
                className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
