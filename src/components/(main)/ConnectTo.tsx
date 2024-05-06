import React from "react";
import Link from "next/link";
import Image from "next/image";
import ConnectTobg from "../../../public/ConnectTo-bg.png";
import Model from "../../../public/ConnectTo-3d-model.png";
import Arrow from "../../../public/arrow-right-line.png";
import Diagram from '../../../public/Connect diagram.png'

const ConnectTo = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-between flex-col relative">
          <Image
            src={ConnectTobg}
            alt="Gradient-bg"
            className="h-full w-full object-cover absolute z-[-1]"
          />
          <div className="h-full w-full flex-center">
            <div className="h-[70%] w-[85%] flex-between bg-white shadow-lg">
              <div className="h-full flex-[1] flex flex-col gap-5 items-start justify-center px-5">
                <Image
                  src={Model}
                  alt="model"
                  height={50}
                  width={50}
                  className="object-cover"
                />
                <h1 className="text-4xl font-medium">Connect to</h1>
                <p className="text-lg font-medium">
                  popular data sources like Airtable, <br /> PostgreSQL and
                  Shopify with built-in connectors, or <br /> connect to any GraphQL or
                  REST API endpoint.
                </p>
                <span className="px-7 py-2 border-2 flex border-blue-500 text-blue-700 font-medium rounded-3xl gap-2">
                    See All Integrations <Image src={Arrow} height={20} width={20} alt="arrow"/>
                </span>
              </div>
              <div className="h-full flex-[1] flex-center">
                <Image src={Diagram} alt="diagram" className="h-full w-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ConnectTo;
