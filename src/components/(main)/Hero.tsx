import React from "react";
import Link from "next/link";
import Image from "next/image";
import Gradientbg from "../../../public/gradient-bg.png";
import Design from "../../../public/hero promo picture.png";

const Hero = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-betweem flex-col relative">
          <Image
            src={Gradientbg}
            alt="gradient background"
            className="h-full w-full object-cover absolute z-[-1] top-0"
          />
          <div className="flex-[1] lg:flex-[2] flex-center flex-col gap-5 text-center">
            <h1 className="text-4xl lg:text-6xl font-extrabold">
              The Visual Builder For <br /> your tech stack
            </h1>
            <p className="text-md md:text-lg font-medium">
              Plasmic is an open-source visual editing and content platform for
              building <br /> website and apps. Integrate with existing
              codabases. Ship incredibly fast.
            </p>
            <span className="px-7 py-3 bg-black rounded-3xl duration-200">
              <Link href="" className="text-md text-white font-semibold">
                Get Started for free
              </Link>
            </span>
          </div>
          <div className="flex-[1] flex-center relative p-5">
            <Image
              src={Design}
              alt="design"
              className="h-[90%] top-0 z-[10] object-cover"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
