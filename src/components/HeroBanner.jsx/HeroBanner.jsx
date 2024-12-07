import { Typewriter } from "react-simple-typewriter";
import banner from "../../assets/banner/hero-img-shrl-2.png";

const HeroBanner = () => {
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img
            src={banner}
            className="max-w-sm rounded-lg shadow-2xl bg-white w-full "
          />
        </div>
        <div className="flex-1">
          <h1 className="text-8xl font-bold font-tangerine">
            <Typewriter
              words={["welcome to"]}
              cursor
              loop
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </h1>
          <p className="py-6 text-4xl font-bold">
            Smart Healthcare and Research Ltd.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
