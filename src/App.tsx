import About from "./About";
import Header from "./Header";
import Project from "./Project";
import Navbar from "./components/Navbar";
import { Logo } from "./components/Logo";
import "./index.css";
import { ContactUs } from "./Contact";
import { motion } from "framer-motion";
function App() {
  return (
    <div className="relative select-none scroll-smooth bg-hard custom-main-scroll overflow-hidden">
      {/* <div className=" absolute top-[1000px] -left-[50px] w-[200px] h-[200px] bg-primary/40 rounded-full blur-3xl z-20"></div>
      <div className=" absolute top-[2000px] -right-[50px] w-[330px] h-[330px] bg-primary/30 rounded-full blur-3xl z-20"></div>
      <div className=" absolute top-[100px] left-0 w-[250px] h-[250px] bg-primary rounded-full blur-3xl z-20"></div> */}
      {/* <div className=" absolute -top-[100px] left-[900px] w-[250px] h-[250px] bg-secondary rounded-full blur-3xl z-20"></div> */}
      
      <Logo />

      <Navbar />
      <section id="Header">
        <Header />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Project"></section>
      <section id="Project">
        <Project />
      </section>
      <section id="Contact">
        <ContactUs />
      </section>
    </div>
  );
}

export default App;
