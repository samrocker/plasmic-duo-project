import React from "react";
import Image from "next/image";
import designbg from '../../../public/Design-experience-bg.png'

const Experience = () => {
  return (
    <section className="h-screen w-full bg-[#060218] rounded-t-3xl">
      <main className="max-w-[1380px] m-auto relative">
      <Image src={designbg} alt="" className="w-full absolute top-0"/>
        <div className="h-scree w-full flex-between flex-col relative">
          <div className="h-screen w-full flex-start flex-col gap-5 absolute top-0 py-5 md:py-20">
            <span className="text-white px-5 py-2 rounded-3xl border-[1px] border-white">
              DESIGN
            </span>
            <h1 className="text-white text-3xl lg:text-7xl text-center font-bold">
              Design experiences <br /> your users will <span className="text-gradient-hero">love</span>
            </h1>
            <p className="text-sm lg:text-xl text-white text-center opacity-75">
              Design custom UIs with responsive layouts and styling that set
              <br /> you apart and delight your users.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Experience;
