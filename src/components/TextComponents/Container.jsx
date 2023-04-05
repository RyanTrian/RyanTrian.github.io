import React from "react";

export default function Container({ children }) {
  return (
    <div className="mt-3 bg-gray-50">
      <div className="max-w-2xl px-10 py-6 mx-auto">{children}</div>
    </div>
  );
}
