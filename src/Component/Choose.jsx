import React from "react";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Choose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div className="px-[8%] py-12 md:px-[14%] md:py-8 bg-[#F8F1E7]">
      <motion.div
      >
        <div className="mb-10">
        <p className="text-xl font-medium text-center py-2 w-48 border border-[#D9D9D9] rounded-lg ">
          Why Choose Us?
        </p>
        {/* <h1 className="text-3xl md:text-6xl font-bold py-4 md:py-8">
          As a Brand and <br />
          Strategic Company
        </h1> */}
      </div>
      </motion.div>

      <div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center border-[#39383869] border-t-[1px] py-[35px]">
            <div className="text-2xl md:text-3xl font-semibold ">
              FAST APPROVAL CYCLE
            </div>
            <div className="text-md md:text-xl text-gray-600">
              our system ensures quick and smooth approvals.
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center border-[#39383869] border-t-[1px] py-[35px]">
            <div className="text-2xl md:text-3xl font-semibold  ">
              USER FRIENDLY
            </div>
            <div className=" text-md md:text-xl text-gray-600">
              No confusion, no complexity — everything is simple.
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center border-[#39383869] border-t-[1px] py-[35px]">
            <div className="text-2xl md:text-3xl font-semibold  ">
              AUTOMATED VALIDATION
            </div>
            <div className="text-md md:text-xl text-gray-600">
              Automatically checks your documents for completeness and accuracy.
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center border-[#39383869] border-t-[1px] py-[35px]">
            <div className="text-2xl md:text-3xl font-semibold ">
              SECURE
            </div>
            <div className="text-md md:text-xl text-gray-600">
              100% secure document handling.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Choose;
