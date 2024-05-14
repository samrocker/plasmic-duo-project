import React from "react";

const Collaboration = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-between flex-col">
          <div className="flex-[1] w-full flex flex-col items-start justify-center px-3 gap-5">
            <span className="px-5 py-2 rounded-3xl border-purple-500 border-[1px] text-purple-600">
              Collaboration
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="text-gradient-company">Bridge The gap</span>{" "}
              <br /> between teams
            </h1>
            <p className="text-lg lg:text-2xl font-medium">
              Plasmic makes the development process more collaborative, so
              everyone can build <br className="hidden md:flex" />
              better experiences together.
            </p>
          </div>
          <div className="flex-[1] w-full flex-col lg:flex-row flex-between">
            <div className="flex-[1] flex flex-col gap-5 items-start justify-center">
              <h1 className="text-4xl lg:text-4xl font-bold">
                Empower <br />{" "}
                <span className="text-gradient-company">non-developers</span>
              </h1>
              <p className="text-sm lg:text-lg font-medium">
                Empower marketing, content, design, and product <br /> teams to
                build and publish. Developers can register <br /> custom
                components as building blocks that other <br /> team members can
                use.
              </p>
            </div>
            <div className="flex-[1] flex flex-col gap-5 items-start justify-center">
              <h1 className="text-4xl lg:text-4xl font-bold">
                Collaborate <br />{" "}
                <span className="text-gradient-company">effortlessly</span>
              </h1>
              <p className="text-sm lg:text-lg font-medium">
                Go from silos and endless backlogs to streamlined <br />{" "}
                workflows between development and business <br /> teams. Let
                everyone focus on what they do best <br /> with branching and
                multiplayer mode.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Collaboration;
