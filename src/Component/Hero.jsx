import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[90vh] pb-20 w-full bg-gradient-to-tr from-orange-600 via-[#F8F1E7] to-[#F8F1E7] flex flex-col lg:flex-row px-6 lg:px-[8%] lg:pb-0">
      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/2">
        <div className="pt-16 lg:pt-[16%] text-center lg:text-left">
          <p className="text-lg lg:text-xl font-medium">Vendor</p>
          <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
            Onboarding & Compliance <br className="hidden lg:block" />{" "}
            Management
          </h1>

          <div className="py-6 flex justify-center lg:justify-start">
            <button className="bg-[#B92E1D] px-6 py-2 rounded-full text-white font-semibold text-lg cursor-pointer">
              Get Started
            </button>
          </div>
        </div>

        {/* WHO ARE WE */}
        <div className="hidden lg:block mt-[20%] text-white">
          <p className="text-xl font-semibold">Who are we</p>
          <p className="text-sm font-light pt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Architecto distinctio nobis libero neque sapiente <br />
            itaque?
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <div className="pt-0 lg:pt-[20%] text-center lg:text-left">
          <p className="text-sm font-light leading-relaxed">
            A unified platform for vendors to register, upload documents,{" "}
            <br className="hidden lg:block" />
            track progress, and stay compliant. Consequatur facere veniam{" "}
            <br className="hidden lg:block" />
            labore Consequatur facere aliquam quia ut nam veniam labore{" "}
            <br className="hidden lg:block" />
            quod praesentium expedita ullam, corporis ipsum?
          </p>
        </div>

        <div className="mt-10 lg:mt-[8%]">
          <div className="flex justify-around lg:justify-between text-sm lg:text-base font-medium">
            <p>Simple</p>
            <p>Secure</p>
            <p>Reliable</p>
          </div>

          <div className="h-[32vh] sm:h-[40vh] lg:h-[49vh] w-full flex justify-center pt-4">
            <img
              src="/hero.png"
              alt="Hero"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
