import "./css/Project.css";

import youcliq from "./images/project/YouCliQ.png";
import doctorDashboard from "./images/project/DoctorDashboard.png";
import patientModule from "./images/project/PatientModule.png";
import patientDashboard from "./images/project/PatientDashboard.png";
import appointment from "./images/project/Appointment.png";
import grocery from "./images/project/Grocery.png";
import apartment from "./images/project/BuyHouse.png";
import apartment2 from "./images/project/BuyHouse2nd.png";
import apartment3 from "./images/project/BuyHouse3rd.png";
import apartment4 from "./images/project/BuyHouse4th.png";
import procurement from "./images/project/Procurement.png";
import procurementC from "./images/project/procurmentC.png";
import portfolio from "./images/project/Portfolio.png";
import { motion } from "framer-motion";
import { useState } from "react";

const listProject = [
  {
    id: 1,
    path: [
      youcliq,
      doctorDashboard,
      patientDashboard,
      patientModule,
      appointment,
    ],
    name: "YouCliQ",
    role: "Full-stack Developer - UI Designer",
    type: "Website",
    description:
      "YouCliQ is an innovative appointment management system designed to streamline the process of scheduling appointments for patients across various clinics and specialties. The primary objective of this project was to create a user-friendly platform where patients can easily schedule appointments while providing doctors with effective clinic management tools.",
    language: ["Laravel", "Bootstrap", "CSS", "MySQL", "Figma"],
  },
  {
    id: 2,
    path: [grocery],
    name: "FoodMart",
    role: "UI Designer",
    type: "Website",
    description:
      "FoodMart is a cutting-edge user interface designed to facilitate the seamless delivery of fresh groceries directly to users' homes. The primary goal of this project was to create a user-friendly platform that offers a diverse range of fresh food options and a hassle-free ordering experience.",
    language: ["Figma"],
  },
  {
    id: 3,
    path: [apartment, apartment2, apartment3, apartment4],
    name: "HomePro",
    role: "UI Designer",
    type: "Website",
    description:
      "HomePro is a user interface designed specifically for promoting house sales, providing users with a seamless experience in browsing and filtering available properties based on their location and preferences. The primary aim was to create an intuitive platform that facilitates easy navigation and discovery of diverse houses for potential buyers.",
    language: ["Figma"],
  },
  {
    id: 4,
    path: [procurement, procurementC],
    name: "USL Procurement",
    role: "Full-stack Developer",
    type: "Website / Window Forms App",
    description:
      "The USL Procurement System is a specialized platform designed to empower teachers in managing their purchasing activities for goods and services efficiently. The primary objective of this system is to facilitate a streamlined process for teachers to procure necessary resources while effectively managing their spending",
    language: ["Laravel", "Bootstrap", "CSS", "MySQL", "C#"],
  },
  {
    id: 5,
    path: [portfolio],
    name: "Portfolio",
    role: "Front-end Developer",
    type: "Website",
    description:
      "My portfolio is a collection showcasing my expertise in web development and design. It's a testament to my dedication, creativity, and problem-solving abilities.",
    language: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const Project = () => {
  const [activeLink, setActiveLink] = useState(listProject[0].name);

  const handleLinkClick = (name: string) => {
    setActiveLink(name);
  };

  return (
    <div className="relative block xl:flex h-auto xl:h-screen items-center justify-center">
      <motion.div
        initial={{scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backInOut" }}
        className="hidden xl:block absolute left-7"
      >
        <div className="flex flex-col items-center gap-5 bg-soft w-[50px] py-7 rounded-xl">
          {listProject.map((projectID, index) => (
            <motion.div
              whileHover={{ scale: 1.4 }}
              whileTap={{
                scale: 1,
              }}
              key={index}
            >
              <a
                href={`#${projectID.name}`}
                onClick={() => handleLinkClick(projectID.name)}
                className={`text-3xl ${
                  activeLink === projectID.name ? "text-primary" : "text-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" w-5 h-5"
                >
                  <path
                    clipRule="evenodd"
                    d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15ZM9 12.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Desktop */}
      <div className="hidden xl:block">
        {listProject.map((projects, index) => (
          <div
            id={projects.name}
            key={index}
            className={`relative flex flex-col gap-5 lg:gap-0 lg:flex-row  items-center justify-center h-auto lg:h-screen my-20 lg:my-0 mx-4 lg:mx-0 ${
              activeLink === projects.name ? "" : "hidden"
            }`}
          >
            <div className="relative w-full lg:w-[800px] px-14 h-auto lg:h-screen overflow-hidden">
              <div className="hidden lg:block absolute top-0 bg-gradient-to-b from-hard min-w-full h-[100px] z-10"></div>
              <div className="hidden lg:block absolute bottom-0 bg-gradient-to-t from-hard min-w-full h-[100px] z-10"></div>
              {/* mobile size */}
              <div className="block lg:hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "backInOut" }}
                  key={index}
                  className="flex items-center"
                >
                  <img
                    className="rounded-xl shadow-md"
                    src={projects.path[0]}
                    alt=""
                  />
                </motion.div>
              </div>
              {/* desktop size */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut" }}
                className="snap-y snap-mandatory duration-100 hidden lg:block h-full  overflow-x-hidden custom-scrollbar"
              >
                {projects.path.map((image, i) => (
                  <div
                    key={i}
                    className="snap-always snap-center  md:h-screen flex items-center"
                  >
                    <img
                      className="xl:h-[500px] rounded-xl shadow-md my-10 ms-auto"
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="w-full lg:w-[400px] px-4 lg:px-0">
              <motion.h1
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut" }}
                className="mb-4 text-xl text-white font-bold font-mono"
              >
                {projects.type}
              </motion.h1>
              <motion.div
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.2 }}
                className="font-primary font-black text-white text-4xl xl:text-7xl"
              >
                {projects.name}
              </motion.div>
              <motion.div
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.3 }}
                className="font-primary text-white lg:text-lg my-4 italic"
              >
                {projects.role}
              </motion.div>
              <motion.p
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
                className="font-primary text-white text-xs lg:text-sm"
              >
                {projects.description}
              </motion.p>
              <motion.div
                initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.5 }}
                className="flex gap-3 text-white mt-5 flex-wrap"
              >
                {projects.language.map((lang, l) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "backInOut",
                    }}
                    key={l}
                    className="font-primary w-[120px] text-center py-2 backdrop-blur-md bg-white/10 rounded-md"
                  >
                    {lang}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="block xl:hidden">
        {listProject.map((projects, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-5 lg:gap-0 lg:flex-row  items-center justify-center h-auto lg:h-screen my-20 lg:my-0 mx-4 lg:mx-0"
          >
            <div className="relative w-full lg:w-[800px] px-14 h-auto lg:h-screen overflow-hidden">
              <div className="hidden lg:block absolute top-0 bg-gradient-to-b from-hard min-w-full h-[100px] z-10"></div>
              <div className="hidden lg:block absolute bottom-0 bg-gradient-to-t from-hard min-w-full h-[100px] z-10"></div>
              {/* mobile size */}
              <div className="block lg:hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "backInOut" }}
                  key={index}
                  className="flex items-center"
                >
                  <img
                    className="rounded-xl shadow-md"
                    src={projects.path[0]}
                    alt=""
                  />
                </motion.div>
              </div>
              {/* desktop size */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut" }}
                className="snap-y snap-mandatory duration-100 hidden lg:block h-full  overflow-x-hidden custom-scrollbar"
              >
                {projects.path.map((image, i) => (
                  <div
                    key={i}
                    className="snap-always snap-center  md:h-screen flex items-center"
                  >
                    <img
                      className="xl:h-[500px] rounded-xl shadow-md my-10 ms-auto"
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="w-full lg:w-[400px] px-4 lg:px-0">
              <motion.h1
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut" }}
                className="mb-4 text-xl text-white font-bold font-mono"
              >
                {projects.type}
              </motion.h1>
              <motion.div
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.2 }}
                className="font-primary font-black text-white text-4xl xl:text-7xl"
              >
                {projects.name}
              </motion.div>
              <motion.div
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.3 }}
                className="font-primary text-white lg:text-lg my-4 italic"
              >
                {projects.role}
              </motion.div>
              <motion.p
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
                className="font-primary text-white text-xs lg:text-sm"
              >
                {projects.description}
              </motion.p>
              <motion.div
                initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.5 }}
                className="flex gap-3 text-white mt-5 flex-wrap"
              >
                {projects.language.map((lang, l) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "backInOut",
                    }}
                    key={l}
                    className="font-primary w-[120px] text-center py-2 backdrop-blur-md bg-white/10 rounded-md"
                  >
                    {lang}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
