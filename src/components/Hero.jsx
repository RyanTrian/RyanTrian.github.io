import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import Wave from "./Wave";

export default function Hero() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      stringsElement: "#typed-strings",
      typeSpeed: 50,
      backSpeed: 30,
      // loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex-1 min-w-0 md:mr-6 text-center md:text-left">
          <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
            Hi, I'm Minh Truong
          </h2>
          <div
            id="typed-strings"
            className="hidden"
          >
            <p>I'm a software engineer</p>
            <p>I'm a web developer</p>
            <p>Welcome to my website! 👋</p>
          </div>
          <div className="typewriter mt-10 text-2xl leading-6 text-gray-500 sm:mt-8 sm:text-3xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-4xl lg:mx-0">
            <span ref={typedTextRef} className="text"></span>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0 flex justify-center items-center">
          <img
            className="h-56 w-56 rounded-full object-cover object-center md:h-72 md:w-72"
            src="https://user-images.githubusercontent.com/82792300/228434187-e4c589ca-aa70-43a0-8bad-65498a2cd1e3.JPG"
            alt="Photo of Minh Truong"
          />
        </div>
      </div>

      <Wave />
      
    </section>
  );
}
