import React from "react";

const Services = () => {
  const services = [
    {
      num: "01",
      name: "Vendor Registration & Onboarding",
      des: "A simple, guided process for vendors to register, complete forms, and get approved.",
    },
    {
      num: "02",
      name: "Document Collection & Verification",
      des: "Upload any required documents and get them reviewed automatically or manually.",
    },
    {
      num: "03",
      name: "Real-Time Progress Tracking",
      des: "See how far you are in the approval cycle with color-coded status.",
    },
     {
      num: "04",
      name: "Messaging & Support Inbox",
      des: "A built-in communication system for vendors and admins.",
    },
    {
      num: "05",
      name: "Deadline & Reminder Notifications",
      des: "Email + in-app notifications for deadlines, approvals, and rejections.",
    },
    {
      num: "06",
      name: "Automated Validation & Vendor Profile Builder",
      des: "Smart questionnaire that builds a complete vendor profile.",
    }
  ];
  return (
    <div className="bg-gradient-to-br from-orange-600 via-[#F8F1E7] to-[#F8F1E7] py-[8%] px-[4%]">
      <div className="h-[9] bg-[#1C1C1C] py-[4%] px-[8%] rounded-lg">
        <div>
          <h1 className="text-4xl mt-8 text-center lg:text-6xl lg:text-start lg:mt-0 font-light text-white ">Services We Offer</h1>
        </div>

        <div className="flex gap-16 py-20 flex-wrap justify-center">

          {services.map((service) => (
            <div className="h-64 w-60 bg-[#3b3939] text-white px-6 py-5 rounded-xl text-center relative hover:scale-105 duration-300 transition-all">
              <div className="absolute top-0 right-0 text-7xl font-bold text-[#B92E1D] opacity-20 leading-none">
                {
                  service.num
                }
              </div>
              <div className="z-10 relative">
                <p className="text-xl font-medium">
                  {service.name}
                </p>
                <p className=" font-light pt-8">
                 {
                  service.des
                 }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
