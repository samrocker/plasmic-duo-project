import React from "react";
import Deplayimage from "../../../public/Deploy-image.png";
import Image from "next/image";

const Deploy = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-center flex-col lg:flex-row">
          <div className="flex-[1] flex flex-col gap-5 items-start justify-center px-3">
            <span className="px-5 py-2 rounded-3xl border-purple-500 border-[1px] text-purple-600">
              HOW IT WORKS
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Deploy <br /> <span className="text-gradient-company">anywhere</span>
            </h1>
            <p className="text-md lg:text-lg font-medium">
              Deploy to your choice of hosting infrastructure, so you can
              <br className="hidden lg:flex" /> maintain control and easily
              scale your app.
            </p>
          </div>
          <div className="flex-[2] lg:flex-[1] flex-center">
            <Image
              src={Deplayimage}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Deploy;
