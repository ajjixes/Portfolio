import About from "./About";
import Header from "./Header";
import Project from "./Project";
import Navbar from "./components/Navbar";
import { Logo } from "./components/Logo";
import "./index.css";
import { ContactUs } from "./Contact";

function App() {
  return (
    <div className="relative select-none scroll-smooth bg-hard custom-main-scroll overflow-hidden">
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
