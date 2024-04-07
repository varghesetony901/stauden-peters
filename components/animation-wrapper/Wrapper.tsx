"use client";
import { motion } from "framer-motion";

import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
