import development from "../images/service/bgPrograming.svg";
import design from "../images/service/design.svg";
import database from "../images/service/database.svg";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="relative mx-auto gap-2 grid grid-cols- md:grid-cols-3 w-11/12 lg:w-[920px]"
    >
      <div className="relative flex flex-col h-[170px] bg-soft rounded-2xl p-4 group hover:bg-white text-white hover:text-black ease-in-out duration-700">
        <div className="absolute right-1 hidden group-hover:block  ">
          <img className="w-[130px]" src={development} alt="" />
        </div>
        <div className="font-primary font-medium text-4xl opacity-20">01</div>
        <div className="mt-auto font-primary text-md font-medium italic">
          Web Development
        </div>
        <small className="font-primary">
          Front-End / Backend / Responsive Web
        </small>
      </div>
      <div className="relative flex flex-col h-[170px] bg-soft rounded-2xl p-4 group hover:bg-white text-white hover:text-black ease-in-out duration-700">
        <div className="absolute right-1 hidden group-hover:block  ">
          <img className="w-[130px]" src={design} alt="" />
        </div>
        <div className="font-primary font-medium text-4xl opacity-20">02</div>
        <div className="mt-auto font-primary text-md font-medium italic">
          Design
        </div>
        <small className="font-primary">
          UI/UX & Web/Mobile Design & Graphic Design
        </small>
      </div>
      <div className="relative flex flex-col h-[170px] bg-soft rounded-2xl p-4 group hover:bg-white text-white hover:text-black ease-in-out duration-700">
        <div className="absolute right-1 hidden group-hover:block  ">
          <img className="w-[130px]" src={database} alt="" />
        </div>
        <div className="font-primary font-medium text-4xl opacity-20">03</div>
        <div className="mt-auto font-primary text-md font-medium italic">
          Database Development
        </div>
        <small className="font-primary">for MySQL</small>
      </div>
    </motion.div>
  );
};

export default Services;
