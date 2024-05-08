import React from "react";
import Image from "next/image";
import elem1 from "../../../public/components-card-elem.png";
import elem2 from "../../../public/exsisting-app-card-elem.png";

const IntegrateCodebase = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-center flex-col gap-5">
          <span className="px-5 py-2 text-sm font-normal text-orange-500 border-orange-500 border-[1px] rounded-3xl">
            POWER
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-black text-center">
            Integrate with any <br /> codebase
          </h1>
          <p className="text-md md:text-lg font-medium text-center px-3">
            Unlike other no-code and low-code builders, Plasmic integrates with
            your existing <br className=" hidden lg:flex" />
            codebase, so you're never confined to a walled garden.
          </p>
          
        </div>
      </main>
    </section>
  );
};

export default IntegrateCodebase;
