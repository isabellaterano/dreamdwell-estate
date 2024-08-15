import { useNavigate } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative grid min-h-screen w-full items-center bg-[url('/hero.jpg')] bg-cover bg-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 m-8 flex flex-col items-center justify-center text-center text-white">
        <h1 className="mb-8 text-3xl font-semibold italic tracking-wide md:text-5xl lg:text-6xl">
          Unlock Your
          <br />
          <span className="relative mt-8 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange-600">
            <span className="relative text-white">Dream</span>
          </span>{" "}
          Home Today
        </h1>
        <div className="text-sm font-semibold md:text-base lg:text-lg">
          DreamDwell is a cutting-edge real estate platform designed to turn
          your property dreams into reality.
          <br />
          Start your property journey today and let us help you find the home of
          your dreams.
        </div>
        <button
          className="mt-8 flex transform cursor-pointer items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold uppercase text-white transition-transform hover:scale-105 hover:bg-orange-700 lg:px-8 lg:py-4 lg:text-base"
          onClick={() => navigate("/search")}
        >
          Find Property
          <ArrowRight size={24} color="#ffeee5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
