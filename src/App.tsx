import About from "./About";
import Header from "./Header";
import Project from "./Project";
import Navbar from "./components/Navbar";
// import MyImage from "./images/aj.png";

function App() {
  return (
    <div className="scroll-smooth bg-hard">
      <h1 className="hidden sm:block fixed top-10 left-9 md:left-11 text-xl text-white font-bold font-mono">
        AJ<b className="font-black text-secondary text-3xl leading-3">.</b>
      </h1>

      {/* <img className="fixed top-8 right-7 w-[50px] h-[50px] rounded-full" src={MyImage} alt="" /> */}
      <Navbar />
      <Header />
      <About />
      <Project />
    </div>
  );
}

export default App;
