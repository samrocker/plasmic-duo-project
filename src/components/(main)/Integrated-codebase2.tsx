import React from "react";
import Image from "next/image";
import appImg from "../../../public/existing-app-left-imgpng.png";
import elem2 from "../../../public/exsisting-app-card-elem.png";

const IntegratedCodebase2 = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-center">
          <div className="h-[50%] w-full flex-between flex-col-reverse lg:flex-row">
            <div className="flex-[1] flex-start">
              <Image
                src={appImg}
                alt=""
                className="h-full lg:h-full object-cover"
              />
            </div>
            <div className="flex-[1] flex flex-col items-end justify-center px-3 gap-3">
              <Image
                src={elem2}
                alt=""
                height={50}
                width={50}
                className="object-cover"
              />
              <h1 className="text-black text-3xl font-bold text-right">
                Build within <br /> <span className="text-gradient-integrate">existing apps</span>
              </h1>
              <p className="text-black text-sm font-bold text-right">
                Instead of iframes, Plasmic lets you build <br /> pages that
                integrate seamlessly within your <br /> current applications.
                Leverage your existing <br /> components and code for better{" "}
                <br /> performance and more cohesive user <br /> experiences.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default IntegratedCodebase2;
