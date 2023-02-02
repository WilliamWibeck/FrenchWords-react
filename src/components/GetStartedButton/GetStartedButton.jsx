import { MotionConfig } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GetStartedButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="h-72">
        <Link
          to="/menu"
          className="bg-[#FBFBF1] p-4 h-[100%] shadow-md text-xl font-semibold hover:scale-105 transition ease-in-out duration-100"
        >
          Get Started!
        </Link>
      </div>
    </motion.div>
  );
};

export default GetStartedButton;
