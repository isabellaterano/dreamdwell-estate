import { useNavigate } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="grid min-h-svh w-full items-center justify-end bg-[url('/hero.jpg')] bg-cover bg-center">
      <div className="m-8 flex flex-col items-center justify-center">
        <h1 className="mb-8 text-center text-3xl font-semibold italic tracking-wide text-slate-900 md:text-5xl">
          Unlock Your
          <br />
          <span className="relative inline-block  before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-orange-500">
            <span className="relative text-white">Dream</span>
          </span>{" "}
          Home Today
        </h1>
        <div className="text-sm font-semibold text-slate-800 md:text-base">
          DreamDwell is a cutting-edge real estate platform designed to turn
          your property dreams into reality. <br />
          Start your property journey today and let us help you find the home of
          your dreams.
        </div>
        <button
          className="mt-8 flex cursor-pointer items-center justify-center gap-2 rounded-md bg-orange-600 px-4 py-3 font-semibold uppercase text-white lg:px-8"
          onClick={() => navigate("/search")}
        >
          Find Property
          <CaretRight size={24} color="#ffeee5" weight="light" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
