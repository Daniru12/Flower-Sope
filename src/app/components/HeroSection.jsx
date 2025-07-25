"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen pb-0 mb-0 overflow-hidden bg-pink-200">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400"></div>
      <video
        className="absolute inset-0 z-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: "blur(3px)", transform: "scale(1.1)" }}
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-white z-5 bg-opacity-40"></div>

      <div className="relative z-10 w-full max-w-6xl px-4 pt-20 mx-auto">
        <div className="flex flex-col items-center pt-20 -mt-48">
          <div className="relative flex items-center justify-center w-full">
            <div
              className={`text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-widest bg-gradient-to-br from-[#CF0B63] via-[#5a0429] to-black bg-clip-text text-transparent flex items-center justify-center transform transition-all duration-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="mx-2 transition-transform duration-300 cursor-default ">F</span>
              <span className="mx-2 transition-transform duration-300 cursor-default ">L</span>
              <span className="mx-2 transition-transform duration-300 cursor-default ">O</span>
              <div className="flex items-center justify-center mx-1 transition-transform duration-300 hover:scale-110 hover:rotate-12">
                <Image
                  src="/flower.png"
                  alt="White tulip flower"
                  className="object-cover w-full h-screen"
                />
              </div>
              <div className="flex">
                <span className="ml-0 mr-1 transition-transform duration-300 cursor-default ">W</span>
                <span className="mx-0 transition-transform duration-300 cursor-default ">E</span>
                <span className="ml-0 mr-2 transition-transform duration-300 cursor-default ">R</span>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-end w-full -mt-64 transform transition-all duration-1000 delay-500 ${
              isLoaded ? "translate-x-0 opacity-100 translate-y-0" : "translate-x-8 opacity-0 translate-y-8"
            }`}
          >
            <div className="w-1/3 text-left">
              <div className={`w-32 mb-4 border-t border-black transform transition-all duration-1000 delay-700 ${
                isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}></div>
              <p className={`mb-6 text-lg leading-relaxed text-black font-bold transform transition-all duration-1000 delay-900 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}>
                Welcome to <span className="font-semibold text-pink-800">Bloom Haven</span> – where fresh, hand-picked flowers meet elegant design. Explore our stunning bouquets, seasonal arrangements and special offers.
              </p>
              <button className={`px-8 py-3 font-semibold text-black bg-white rounded-full hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`} style={{ transitionDelay: '1100ms' }}>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}