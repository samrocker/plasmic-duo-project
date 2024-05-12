import React from "react";
import Image from "next/image";
import elem1 from "../../../public/components-card-elem.png";
import elemrightimg from "../../../public/components-right-img.png";

const IntegrateCodebase = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-center flex-col">
          <div className="flex-[1] w-full flex-center flex-col gap-5">
            <span className="px-5 py-2 text-sm font-normal text-orange-500 border-orange-500 border-[1px] rounded-3xl">
              POWER
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-black text-center">
              Integrate with any <br /> codebase
            </h1>
            <p className="text-md md:text-lg font-medium text-center px-3">
              Unlike other no-code and low-code builders, Plasmic integrates
              with your existing <br className=" hidden lg:flex" />
              codebase, so you're never confined to a walled garden.
            </p>
          </div>
          <div className="flex-[2] w-full flex-between flex-col lg:flex-row">
            <div className="flex-[1] flex flex-col items-start justify-center gap-3">
              <Image
                src={elem1}
                alt=""
                height={50}
                width={50}
                className="object-cover"
              />
              <h1 className="text-black text-3xl font-bold">
                Build with your <br /> component
              </h1>
              <p className="text-black text-sm font-bold">
                Harness the flexibility to create apps that fit <br /> your
                exact requirements. Bring your data <br /> sources, React
                components, deployment <br /> environments, design system, and
                more.
              </p>
            </div>
            <div className="flex-[1] flex-end">
              <Image
                src={elemrightimg}
                alt=""
                className="h-full lg:h-[50%] object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default IntegrateCodebase;
