import React from "react";

const services = () => {
  return (
    <div className="flex flex-col justify-center m-32">
      <p className="text-[#FFAB00] font-bold my-2">Services</p>
      <p className="text-6xl w-7/12 my-2 tracking-wide">
        At <span className="text-[#124AF4]">NAXA</span>, we work on ideas;{" "}
        <span className="text-[#124AF4]">ideas</span> that can provide{" "}
        <span>simple solutions</span> to
        <span className="text-[#124AF4]"> complex problems.</span>
      </p>
      <p className="text-xl w-7/12 my-2 text-[#333132] font-bold">
        We work as a team to generate, explore, build and validate ideas. We
        also contextualize innovations around the world to find the best fitting
        solutions to local problems.
      </p>
    </div>
  );
};

export default services;
