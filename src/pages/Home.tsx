import { Link } from "react-router-dom";
import dices from "../assets/dices.png";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
            <div className="">
              <img src={dices} alt="dices" />
            </div>
            <div className="">
              <div className="flex md:items-start items-center justify-center h-full flex-col">
                <div className="grid w-fit">
                  <h1 className="lg:text-7xl md:text-6xl text-5xl font-poppins font-bold my-8 ">
                    DICE GAME
                  </h1>
                  <div className="flex justify-end w-full">
                    <Link to={`/game`}>
                      <button
                        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                        type="button"
                      >
                        <div>Play Now</div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
