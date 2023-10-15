"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressComponent() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar backdrop-blur"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
