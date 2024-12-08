import { Typewriter } from "react-simple-typewriter";
import banner from "../../assets/banner/hero-img-shrl-2.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const HeroSection = () => {
    const {darkMode}= useContext(AuthContext)
  return (
    <section className="bg-[#cdd9e8]  md:py-2">
      <div className={`${darkMode && "text-black"} grid md:grid-cols-2 justify-between items-center xl:gap-8`}>
        <div className="mx-auto px-4 md:px-0 md:w-9/12 space-y-8 md:space-y-12">
          <h1></h1>
          <h1 className="font-bold text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl">
            <span className="text-[#626c8e] font-tangerine md:text-8xl">
              <Typewriter
                words={["Welcome to"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <br />
            Smart Healthcare and Research Ltd.
          </h1>
          <p className="md:text-2xl mt-24">
            <em>
              <strong>U</strong>
            </em>
            ncountable
            <em>
              <strong className="ml-2">T</strong>
            </em>
            ender
            <em>
              <strong className="ml-2">L</strong>
            </em>
            oving
            <em>
              <strong className="ml-2">C</strong>
            </em>
            are
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-8 justify-center items-center text-slate-600">
            {/* Card 1 */}
            <div className="text-center space-y-3 xl:mt-12 hidden">
              <i className="text-4xl fa-solid fa-list-check"></i>
              <h1 className="text-5xl md:text-7xl font-bold">15+</h1>
              <p className="font-semibold text-xl">Project Completed</p>
            </div>

            {/* Card 2 */}
            <div className="text-center space-y-3 xl:mt-12 hidden">
              <i className="text-4xl fa-solid fa-users"></i>
              <h1 className="text-5xl md:text-7xl font-bold">40+</h1>
              <p className="font-semibold text-xl">Staff Members</p>
            </div>
          </div>
        </div>
        <img
          className="w-full h-full"
          src={banner}
          alt="Smart Healthcare and Research Limited Hero Section"
        />
      </div>
    </section>
  );
};

export default HeroSection;
