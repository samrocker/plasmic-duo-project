import React from "react";
import Image from "next/image";
import CustomUIicon from "../../../public/custom-Ui-Icon.png";
import CustomUiimg from "../../../public/Custom-UIs-right-img.png"
import Figmaicon from "../../../public/Figma-Icon.png";
import Figmaimg from "../../../public/Figma left-img.png"

const Experience2 = () => {
  return (
    <section className="h-screen w-full bg-[#060218] rounded-b-3xl">
      <main className="max-w-[1380px] m-auto relative">
        <div className="h-screen w-full flex-between flex-col">
          <div className="flex-[1] w-full flex-between flex-col lg:flex-row">
            <div className="h-full flex-[1] flex-col flex gap-5 items-start justify-center px-3">
              <Image src={CustomUIicon} alt="" height={50} width={50} />
              <h1 className="text-white text-2xl lg:text-4xl font-medium">
                Create <br /> Completely <br /> <span className="text-gradient-hero">custom UIs</span>
              </h1>
              <p className="text-md font-medium text-white/75">Create unique, custom UIs with arbitrary <br /> layouts and styling that can be tailored to <br /> your specific needs and requirements.</p>
            </div>
            <div className="h-full flex-[1] flex-end">
                <Image src={CustomUiimg} alt="" className="w-[60%] lg:w-[90%] object-cover"/>
            </div>
          </div>
          <div className="flex-[1] w-full flex-between flex-col lg:flex-row">
          <div className="h-full flex-[1] flex-start">
                <Image src={Figmaimg} alt="" className="w-[60%] lg:w-[90%] object-cover rounded-3xl"/>
            </div>
            <div className="h-full flex-[1] flex-col flex gap-5 items-end justify-center px-3">
              <Image src={Figmaicon} alt="" height={50} width={50} />
              <h1 className="text-white text-2xl lg:text-4xl font-medium text-right">
              Import with <br /> <span className="text-gradient-hero">Figma</span>
              </h1>
              <p className="text-md font-medium text-white/75 text-right">Create unique, custom UIs with arbitrary <br /> layouts and styling that can be tailored to <br /> your specific needs and requirements.</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Experience2;
