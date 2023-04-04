import React from 'react'

export default function Title({title}) {
  return (
    <h2
      class="py-1 border-b-2 border-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 ">
      {title}
    </h2>
  )
}
