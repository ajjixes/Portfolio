import youcliq from "./images/project/YouCliQ.png";
import grocery from "./images/project/Grocery.png";
import bgGrocery from "./images/project/bgGrocery.png";
import bgApartment from "./images/project/bgApartment.png"
import apartment from "./images/project/BuyHouse.png"

function Project() {
  const bgGro = {
    backgroundImage: `url(${bgGrocery})`,
  };
  const bgApart = { 
    backgroundImage: `url(${bgApartment})`,
  }
  return (
    <div>
      <div className="flex gap-6 items-center justify-center h-screen">
        <div className="w-[550px]">
          <img className="rounded-xl shadow-md" src={youcliq} alt="" />
        </div>
        <div className="w-[400px]">
          <div className="font-primary font-black text-white text-7xl">
            YouCliQ
          </div>
          <div className="font-primary text-white text-lg my-4">Website</div>
          <p className="font-primary text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum
            ea natus nostrum possimus non, a quod beatae iure suscipit quidem.
            Assumenda quaerat dicta repellat molestiae iste fugit doloribus
            facilis.
          </p>
          <div className="flex gap-3 text-white mt-5">
            <div className="font-primary w-[120px] text-center py-2 backdrop-blur-md bg-white/10 rounded-md">
              Laravel
            </div>
            <div className="font-primary w-[120px] text-center py-2 backdrop-blur-md bg-white/10 rounded-md">
              Bootstrap
            </div>
            <div className="font-primary w-[120px] text-center py-2 backdrop-blur-md bg-white/10 rounded-md">
              CSS
            </div>
          </div>
          <div className="flex gap-3 text-white mt-3">
            <div className="font-primary w-[120px] text-center py-2 backdrop-blur-md bg-white/10 rounded-md">
              MySQL
            </div>
            <div className="font-primary w-[120px] text-center py-2 backdrop-blur-md bg-white/10 rounded-md">
              Figma
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex gap-6 items-center justify-center h-screen bg-no-repeat bg-cover"
        // style={bgGro}
      >
        <div className="w-[550px]">
          <img className="rounded-xl" src={grocery} alt="" />
        </div>
        <div className="w-[400px]">
          <div className="font-primary font-black text-white text-7xl">
            FoodMart
          </div>
          <div className="font-primary text-white text-lg my-4">Website</div>
          <p className="font-primary text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum
            ea natus nostrum possimus non, a quod beatae iure suscipit quidem.
            Assumenda quaerat dicta repellat molestiae iste fugit doloribus
            facilis.
          </p>
          <div className="flex gap-3 text-white mt-5">
            <div className="font-primary w-[120px] text-center py-2 backdrop-blur-md bg-white/10 rounded-md">
              Figma
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex gap-6 items-center justify-center h-screen bg-no-repeat bg-cover"
        // style={bgApart}
      >
        <div className="w-[550px]">
          <img className="rounded-xl shadow-md" src={apartment} alt="" />
        </div>
        <div className="w-[400px]">
          <div className="font-primary font-black text-white text-7xl">
          HomePro
          </div>
          <div className="font-primary text-white text-lg my-4">Website</div>
          <p className="font-primary text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsum
            ea natus nostrum possimus non, a quod beatae iure suscipit quidem.
            Assumenda quaerat dicta repellat molestiae iste fugit doloribus
            facilis.
          </p>
          <div className="flex gap-3 text-white mt-5">
            <div className="font-primary w-[120px] text-center py-2 backdrop-blur-md bg-white/10 rounded-md">
              Figma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
