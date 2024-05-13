import React from "react";
import Image from "next/image";
import ScaleUpBG from '../../../public/ScaleUp-bg.png'
import RightArrow from '../../../public/arrow-right-wide-line.png'
import CompilienceImage from "../../../public/Compiliance-image.png"
import DomainCaptureImage from "../../../public/Domain-Capture-Image.png"
import FireGrainedImage from "../../../public/Fire-Grained-image.png"
import BranchingImage from "../../../public/Branching-Image.png"

const ScaleUp = () => {
  return (
    <section className="h-screen w-full bg-[#03020A] rounded-t-3xl">
      <main className="max-w-[1380px] m-auto relative">
        <Image src={ScaleUpBG} alt="" className="h-full w-full object-cover absolute top-0 z-10"/>
        <div className="h-screen w-full flex-center lg:flex-between flex-col relative">
          <div className="flex-[1] lg:h-full w-full flex-center flex-col gap-5 absolute top-12 z-20">
            <span className="px-5 py-2 border-white border-[1px] rounded-3xl text-white">
              SCALE UP
            </span>
            <h1 className="text-4xl lg:text-7xl text-white font-bold">
              Scale without limits
            </h1>
            <p className="text-lg lg:text-xl text-white/75 text-center">
              Manage enterprise-level growth with ease. Scale up and maintain
              control, even as your <br /> application grows and evolves.
            </p>
            <button className="px-5 py-3
             border-[1px] border-white flex-between gap-2 text-white rounded-3xl">
            Get started 
            <Image src={RightArrow} alt="" className="object-cover"/>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ScaleUp;
