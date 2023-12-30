import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      initial={{ x: -100, y: 0, scale: 1, opacity: 0 }}
      animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "backInOut" }}
      className="hidden sm:block fixed top-10 left-9 md:left-11 text-xl text-white font-bold font-mono"
    >
      AJ<b className="font-black text-secondary text-3xl leading-3">.</b>
    </motion.div>
  );
};
