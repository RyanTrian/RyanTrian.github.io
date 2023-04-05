import React from "react";

export default function Heading({ heading }) {
  return (
    <h2 className="mt-4 py-2 border-b-2 border-gray-200 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-bold">
      {heading}
    </h2>
  );
}
