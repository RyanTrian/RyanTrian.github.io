import React from 'react'

export default function Image({src, width, height}) {
  return (
        <img
          src={src}
          alt="Profile Picture"
          width={width}
          height={height}
          layout="responsive"
          className="rounded-2xl"
        />
  );
}
