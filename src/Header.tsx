import TextScrambleComponent from "./components/Text";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{scale: 2, opacity: 0 }}
      whileInView={{scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "backInOut" }}
      className="relative flex flex-col items-center justify-center h-screen text-white"
    >
      <div className="flex text-5xl md:text-8xl font-medium font-sans ">
        AJ <p className="text-primary">BUMAGAT</p>
      </div>
      <div className="flex gap-2 text text-lg md:text-2xl font-primary">
        I AM WEB
        <TextScrambleComponent />
      </div>
      <a
        href="#About"
        className="animate-bounce absolute bottom-0 mb-8 border-2 py-6 px-2 rounded-full z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M9.75 3.5A2.75 2.75 0 0 0 7 6.25v5.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6.25a4.25 4.25 0 0 1 8.5 0v1a.75.75 0 0 1-1.5 0v-1A2.75 2.75 0 0 0 9.75 3.5Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </motion.div>
  );
};

export default Header;
