"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface PageAnimationProps {
  children: React.ReactNode;
}

const pageAnimation = {
  hidden: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function PageAnimation({ children }: PageAnimationProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="animate"
    >
      {children}
    </motion.div>
  );
}
