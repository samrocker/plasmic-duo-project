import React from "react";
import Image from "next/image";
import CompilienceImage from "../../../public/Compiliance-image.png";
import DomainCaptureImage from "../../../public/Domain-Capture-Image.png";
import FireGrainedImage from "../../../public/Fire-Grained-image.png";
import BranchingImage from "../../../public/Branching-Image.png";

const ScaleUp2 = () => {
  return (
    <section className="h-screen w-full bg-[#03020A] lg:rounded-b-3xl">
      <main className="max-w-[1380px] m-auto relative">
        <div className="h-screen w-full flex-center flex-col">
          <div className="h-full w-fulll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col px-3 gap-5 ">
            <div className="h-[450px] w-[350px] flex flex-col border-[1px] border-white/20 px-3 py-2 rounded-3xl">
              <div className="flex-[1.5] flex flex-col gap-5">
                <Image
                  src={CompilienceImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1.5] flex flex-col gap-5 px-5 py-2">
                <h1 className="text-white text-xl">SOC 2 Compliance</h1>
                <p className="test-md text-white/75">
                  Plasmic meets SOC 2 standards for <br /> secure handling of
                  sensitive <br /> information.
                </p>
              </div>
            </div>
            <div className="h-[450px] w-[350px] flex flex-col border-[1px] border-white/20 px-3 py-2 rounded-3xl">
              <div className="flex-[1.5] flex flex-col gap-5">
                <Image
                  src={DomainCaptureImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1.5] flex flex-col gap-5 px-5 py-2">
                <h1 className="text-white text-xl">SSO and Domain Capture</h1>
                <p className="test-md text-white/75">
                Available for for both Plasmic <br /> collaborators and end users of your <br /> application.
                </p>
              </div>
            </div>
            <div className="h-[450px] w-[350px] flex flex-col border-[1px] border-white/20 px-3 py-2 rounded-3xl">
              <div className="flex-[1.5] flex flex-col gap-5">
                <Image
                  src={FireGrainedImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1.5] flex flex-col gap-5 px-5 py-2">
                <h1 className="text-white text-xl">Fine-Grained Permissions</h1>
                <p className="test-md text-white/75">
                  Plasmic meets SOC 2 standards for <br /> secure handling of
                  sensitive <br /> information.
                </p>
              </div>
            </div>
            <div className="h-[450px] w-[350px] flex flex-col border-[1px] border-white/20 px-3 py-2 rounded-3xl">
              <div className="flex-[1.5] flex flex-col gap-5">
                <Image
                  src={CompilienceImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1.5] flex flex-col gap-5 px-5 py-2">
                <h1 className="text-white text-xl">SOC 2 Compliance</h1>
                <p className="test-md text-white/75">
                  Plasmic meets SOC 2 standards for <br /> secure handling of
                  sensitive <br /> information.
                </p>
              </div>
            </div>
            <div className="h-[450px] w-[350px] flex flex-col border-[1px] border-white/20 px-3 py-2 rounded-3xl">
              <div className="flex-[1.5] flex flex-col gap-5">
                <Image
                  src={CompilienceImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1.5] flex flex-col gap-5 px-5 py-2">
                <h1 className="text-white text-xl">SOC 2 Compliance</h1>
                <p className="test-md text-white/75">
                  Plasmic meets SOC 2 standards for <br /> secure handling of
                  sensitive <br /> information.
                </p>
              </div>
            </div>
            <div className="h-[450px] w-[350px] flex flex-col border-[1px] border-white/20 px-3 py-2 rounded-3xl">
              <div className="flex-[1.5] flex flex-col gap-5">
                <Image
                  src={CompilienceImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1.5] flex flex-col gap-5 px-5 py-2">
                <h1 className="text-white text-xl">SOC 2 Compliance</h1>
                <p className="test-md text-white/75">
                  Plasmic meets SOC 2 standards for <br /> secure handling of
                  sensitive <br /> information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ScaleUp2;
