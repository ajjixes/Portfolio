import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        switch (id) {
          case "Header":
            setActiveSection(1);
            break;
          case "About":
            setActiveSection(2);
            break;
          case "Project":
            setActiveSection(3);
            break;
          case "Contact":
            setActiveSection(4);
            break;
          default:
            break;
        }
      }
    });
  };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    });

    const sections = document.querySelectorAll<HTMLElement>("section");
    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="z-40 fixed top-6 w-screen">
      <motion.div
        initial={{ x: 0, y: -100, scale: 1, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backInOut" }}
        className="backdrop-blur-md bg-soft/30 w-[200px] h-[50px] mx-auto rounded-2xl shadow-lg flex items-center justify-center gap-5 px-7"
      >
        <motion.div
          whileHover={{ scale: 1.4 }}
          whileTap={{
            scale: 1,
          }}
        >
          <a
            className={activeSection === 1 ? "text-primary" : "text-white"}
            href="#Header"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.4 }}
          whileTap={{
            scale: 1,
          }}
        >
          <a
            className={activeSection === 2 ? "text-primary" : "text-white"}
            href="#About"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                clipRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              />
            </svg>
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.4 }}
          whileTap={{
            scale: 1,
          }}
        >
          <a
            className={activeSection === 3 ? "text-primary" : "text-white"}
            href="#Project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" w-6 h-6"
            >
              <path
                clipRule="evenodd"
                d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15ZM9 12.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
              />
            </svg>
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.4 }}
          whileTap={{
            scale: 1,
          }}
        >
          <a
            className={activeSection === 4 ? "text-primary" : "text-white"}
            href="#Contact"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      <div className="hidden sm:block fixed top-10 right-9 md:right-11 text-xl text-white font-bold font-primary">
        {activeSection === 1 ? <small></small> : null}
        {activeSection === 2 ? <small>About</small> : null}
        {activeSection === 3 ? <small>Projects</small> : null}
        {activeSection === 4 ? <small>Contact</small> : null}
      </div>
    </div>
  );
};

export default Navbar;

// export default Navbar;
