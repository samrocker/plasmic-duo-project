import React from "react";
import Image from "next/image";
import companyLogo1 from "../../../public/1.png";
import companyLogo2 from "../../../public/2.png";
import companyLogo3 from "../../../public/3.png";
import companyLogo4 from "../../../public/4.png";
import companyLogo5 from "../../../public/5.png";
import companyLogo6 from "../../../public/6.png";
import companyLogo7 from "../../../public/7.png";
import companyLogo8 from "../../../public/8.png";
import companyLogo9 from "../../../public/9.png";
import companyLogo10 from "../../../public/10.png";
import companyLogo11 from "../../../public/11.png";
import companyLogo12 from "../../../public/12.png";
import star from "../../../public/orange star.png";
import { CarouselPlugin } from "./CardAutoplay";

const TrustedCompanies = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-between flex-col">
          <div className="flex-[2] flex-center flex-col gap-3">
            <h1 className="text-xl text-black font-bold">
              Loved by teams around the world
            </h1>
            <div className="hidden md:flex-center flex-wrap px-5 lg:px-20">
              <Image
                src={companyLogo1}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
              <Image
                src={companyLogo2}
                alt="company Logo"
                height={90}
                width={90}
                className="object-cover"
              />
              <Image
                src={companyLogo3}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
              <Image
                src={companyLogo4}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
              <Image
                src={companyLogo5}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
              <Image
                src={companyLogo6}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
              <Image
                src={companyLogo7}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
              <Image
                src={companyLogo8}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
              <Image
                src={companyLogo9}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
              <Image
                src={companyLogo10}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
              <Image
                src={companyLogo11}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
              <Image
                src={companyLogo12}
                alt="company Logo"
                height={200}
                width={200}
                className="object-cover"
              />
            </div>
            <div className="w-full flex-center md:hidden">
              <CarouselPlugin />
            </div>
            <div className="flex-center gap-2">
              <h1 className="text-2xl font-extrabold">Orderful</h1>
              <Image
                src={star}
                alt="star"
                height={30}
                width={30}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-[1] flex-center flex-col px-2 text-center gap-5">
            <span className="px-5 py-3 border-2 border-blue-500 text-sm text-blue-700 font-bold rounded-3xl">
              HOW IT WORKS
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Building Experiences
            </h1>
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient-company">Blazingly fast</h1>
            <p className="text-lg font-medium">
              Get started with a growing library of ready made components and
              popular data and <br className="hidden lg:flex" />
              app integrations. Build custom experiences with interactions and
              dynamic values.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default TrustedCompanies;
