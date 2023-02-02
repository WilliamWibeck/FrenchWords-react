import { MotionConfig } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const GetStartedButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="">
        <Link to="/menu" className="">
          <div class="flex flex-col justify-center items-center w-full  bg-[#D9D9D9]">
            <button
              class="relative text-center h-20 w-60 transition-all duration-500
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all
            before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50
            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
            after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100 after:rounded-lg"
            >
              <span
                class="relative text-white text-2xl uppercase font-medium
            "
              >
                Get started
              </span>
            </button>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default GetStartedButton;
