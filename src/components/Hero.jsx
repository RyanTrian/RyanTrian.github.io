import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I'm Minh Truong
            </h2>
            <div className="typewriter mt-10 text-base leading-6 text-gray-500 sm:mt-8 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              <span className="text"></span>
            </div>
          </div>
          <div className="mt-4 flex-shrink-0 md:mt-0 md:ml-6">
            <img className="h-56 w-56 rounded-full object-cover object-center md:h-72 md:w-72" src="https://user-images.githubusercontent.com/82792300/228434187-e4c589ca-aa70-43a0-8bad-65498a2cd1e3.JPG" alt="Photo of Minh Truong" />
          </div>
        </div>
      </div>
    </section>
  )
}