import React, { useState } from "react";

import SignUp from "../components/sign-up/SignUp";
import SignIn from "../components/sign-in/SignIn";
import BackButton from "../components/BackButton/BackButton";
import LoginButton from "../components/LoginButton/LoginButton";
import { motion } from "framer-motion";
import MenuUpdated from "../components/Menu.js/MenuUpdated";

const Authentication = () => {
  return (
    <div className="bg-[#D9D9D9]">
      <BackButton />
      <LoginButton />
      <div className="top-1 absolute left-1 text-2xl"></div>
      <div className="top-1 absolute right-1 text-2xl"></div>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-screen w-screen flex gap-48 flex-row items-center justify-center">
            <SignUp />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Authentication;
