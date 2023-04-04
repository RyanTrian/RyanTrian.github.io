import React from 'react'

export default function Paragraph({content}) {
  return (
    <div class="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700">
      {
        content.map((para) => (
          <p className='pt-4 leading-8'>{para}</p>
        ))
      }
    </div>
  )
}
