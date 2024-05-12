import React from "react";

const Experience = () => {
  return (
    <section className="h-screen w-full bg-[#0D0D12] rounded-t-3xl">
      <main className="max-w-[1380px] m-auto">
        <div className="h-scree w-full flex-between flex-col">
          <div className="flex-[1] flex-center flex-col gap-5 py-10">
            <span className="text-white px-5 py-2 rounded-3xl border-[1px] border-white">
              DESIGN
            </span>
            <h1 className="text-white text-5xl text-center font-bold">
              Design experiences <br /> your users will love
            </h1>
            <p className="text-sm text-white text-center opacity-75">
              Design custom UIs with responsive layouts and styling that set
              <br /> you apart and delight your users.
            </p>
          </div>
          <div className="flex-[1] flex-center flex-col gap-5"></div>
        </div>
      </main>
    </section>
  );
};

export default Experience;
