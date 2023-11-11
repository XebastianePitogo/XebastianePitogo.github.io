import React from "react";
import { motion } from "framer-motion";


const LeftPart = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x:30 },
    show: { opacity: 1, x:0, transition:{type: 'spring'} },
  };
  return (
    <div className="relative md:mt-0 mt-16">
      <motion.div
        className="space-y-5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="box"/>
        <motion.p variants={item} className="Name">
          Xebastiane Cameron G. Pitogo
        </motion.p>
        <motion.p variants={item} className="pink-text-gradient">
          I am
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LeftPart;