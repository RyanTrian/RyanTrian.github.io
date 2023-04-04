import React from 'react'

export default function Container({children}) {
  return (
    <div class="mt-3 bg-gray-50">
            <div class="max-w-2xl px-10 py-6 mx-auto">
              {children}
            </div>
    </div>
  )
}
