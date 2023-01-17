import React from "react";
import "./Hero.css";
import datapath from "../../public/assets/img/company-logo/datapath";
export default function Hero() {
  return (
    <div className=" relative -z-10">
      <div className="container mx-auto items-center grid grid-cols-1 md:grid-cols-3  md:px-8">
        <div
          id="image-hero"
          className="md:col-start-3 md:row-start-1 md:col-span-1"
        >
          <img
            src="/assets/img/hero/image-hero-mobile.png"
            alt=""
            className="object-cover md:hidden"
          />
          <img
            src="/assets/img/hero/image-hero-desktop.png"
            alt=""
            className="object-cover hidden md:inline-block"
          />
        </div>
        <div className="flex flex-col md:items-start items-center md:col-start-1 md:row-start-1  md:self-center md:col-span-2 md:mx-auto md:min-w-fit">
          <h1 className="text-center mt-5 md:text-start">Make Remote Work</h1>
          <p className="text-center w-[85%] max-w-lg mt-5 md:text-start">
            Get your team in sync. no matter your location. Streamline
            processes, create team rituals, and watch productivity soar
          </p>
          <button className="bg-almost-black text-almost-white px-4 py-2 rounded-lg mt-7 hover:bg-almost-white hover:text-almost-black border-2 border-almost-black transition-all duration-300 hover:shadow-[0_0_10px_4px_rgba(0,0,0,0.4)]">
            Learn More
          </button>
          <div
            id="logo-container"
            className="flex justify-evenly md:justify-between md:w-[60%] w-full mt-12"
          >
            {datapath.map((el) => {
              return (
                <img
                  src={`/assets/img/company-logo/${el}`}
                  alt=""
                  className="w-14 h-6 object-fill"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
