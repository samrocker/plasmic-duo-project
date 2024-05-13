import React from "react";
import Image from "next/image";
import Design from "../../../public/Collaboration design.png";
import Deplayimage from "../../../public/Deploy-image.png";

const CollaborationImage = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-center">
            <Image src={Design} alt="" className=" w-full object-cover" />
          </div>
      </main>
    </section>
  );
};

export default CollaborationImage;
