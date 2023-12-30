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

const images = [
  {
    id: 1,
    path: [
      youcliq,
      doctorDashboard,
      patientDashboard,
      patientModule,
      appointment,
    ],
  },
  {
    id: 2,
    path: [grocery],
  },
  {
    id: 3,
    path: [apartment, apartment2, apartment3, apartment4],
  },
  {
    id: 4,
    path: [procurement, procurementC],
  },
  {
    id: 5,
    path: [portfolio],
  },
];
const images2 = [
  {
    id: 1,
    path: [youcliq],
  },
  {
    id: 2,
    path: [grocery],
  },
  {
    id: 3,
    path: [apartment],
  },
  {
    id: 4,
    path: [procurement],
  },
  {
    id: 5,
    path: [portfolio],
  },
];
const projects = [
  {
    id: 1,
    name: "YouCliQ",
    role: "Full-stack Developer - UI Designer",
    type: "Website",
    description:
      "YouCliQ is an innovative appointment management system designed to streamline the process of scheduling appointments for patients across various clinics and specialties. The primary objective of this project was to create a user-friendly platform where patients can easily schedule appointments while providing doctors with effective clinic management tools.",
  },
  {
    id: 2,
    name: "FoodMart",
    role: "UI Designer",
    type: "Website",
    description:
      "FoodMart is a cutting-edge user interface designed to facilitate the seamless delivery of fresh groceries directly to users' homes. The primary goal of this project was to create a user-friendly platform that offers a diverse range of fresh food options and a hassle-free ordering experience.",
  },
  {
    id: 3,
    name: "HomePro",
    role: "UI Designer",
    type: "Website",
    description:
      "HomePro is a user interface designed specifically for promoting house sales, providing users with a seamless experience in browsing and filtering available properties based on their location and preferences. The primary aim was to create an intuitive platform that facilitates easy navigation and discovery of diverse houses for potential buyers.",
  },
  {
    id: 4,
    name: "USL Procurement",
    role: "Full-stack Developer",
    type: "Website / Window Forms App",
    description:
      "The USL Procurement System is a specialized platform designed to empower teachers in managing their purchasing activities for goods and services efficiently. The primary objective of this system is to facilitate a streamlined process for teachers to procure necessary resources while effectively managing their spending",
  },
  {
    id: 5,
    name: "Portfolio",
    role: "Full-stack Developer",
    type: "Website",
    description:
      "My portfolio is a collection showcasing my expertise in web development and design. It's a testament to my dedication, creativity, and problem-solving abilities.",
  },
];
const programmingLan = [
  { id: 1, language: ["Laravel", "Bootstrap", "CSS", "MySQL", "Figma"] },
  { id: 2, language: ["Figma"] },
  { id: 3, language: ["Figma"] },
  { id: 4, language: ["Laravel", "Bootstrap", "CSS", "MySQL", "C#"] },
  { id: 5, language: ["React","TypeScript", "Tailwind CSS"] },
];

const Project = () => {
  return (
    <div>
      {projects.map((project) => {
        const projectImages =
          images.find((img) => img.id === project.id)?.path || [];
        const projectImages2 =
          images2.find((img) => img.id === project.id)?.path || [];
        const languages =
          programmingLan.find((item) => item.id === project.id)?.language || [];

        return (
          <div
            key={project.id}
            className="flex flex-col gap-5 lg:gap-0 lg:flex-row  items-center justify-center h-auto lg:h-screen my-20 lg:my-0 mx-4 lg:mx-0"
          >
            <div className="relative w-full lg:w-[800px] px-14 h-auto lg:h-screen overflow-hidden">
              <div className="hidden lg:block absolute top-0 bg-gradient-to-b from-hard min-w-full h-[100px] z-10"></div>
              <div className="hidden lg:block absolute bottom-0 bg-gradient-to-t from-hard min-w-full h-[100px] z-10"></div>
              {/* mobile size */}
              <div className="block lg:hidden">
                {projectImages2.map((image2, index) => (
                  <motion.div
                    initial={{ x: -100, y: 0, scale: 1, opacity: 0 }}
                    whileInView={{
                      x: 0,
                      y: 0,
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{ duration: 0.8, ease: "backInOut" }}
                    key={index}
                    className="flex items-center"
                  >
                    <img className="rounded-xl shadow-md" src={image2} alt="" />
                  </motion.div>
                ))}
              </div>
              {/* desktop size */}
              <div className="hidden lg:block h-full  overflow-x-hidden custom-scrollbar">
                {projectImages.map((image, index) => (
                  <motion.div
                    initial={{ x: -100, y: 0, scale: 1, rotate: 0, opacity: 0 }}
                    whileInView={{
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                      opacity: 1,
                    }}
                    transition={{ duration: 1 }}
                    key={index}
                    className="md:h-screen flex items-center"
                  >
                    <img
                      className="rounded-xl shadow-md my-10 ms-auto"
                      src={image}
                      alt=""
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[400px] px-4 lg:px-0">
              <motion.h1
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut" }}
                className="mb-4 text-xl text-white font-bold font-mono"
              >
                {project.type}
              </motion.h1>
              <motion.div
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.2 }}
                className="font-primary font-black text-white text-4xl xl:text-7xl"
              >
                {project.name}
              </motion.div>
              <motion.div
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.3 }}
                className="font-primary text-white lg:text-lg my-4 italic"
              >
                {project.role}
              </motion.div>
              <motion.p
                initial={{ x: 100, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.4 }}
                className="font-primary text-white text-xs lg:text-sm"
              >
                {project.description}
              </motion.p>
              <motion.div
                initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backInOut", delay: 0.5 }}
                className="flex gap-3 text-white mt-5 flex-wrap"
              >
                {languages.map((lang, index) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "backInOut",
                    }}
                    key={index}
                    className="font-primary w-[120px] text-center py-2 backdrop-blur-md bg-white/10 rounded-md"
                  >
                    {lang}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
