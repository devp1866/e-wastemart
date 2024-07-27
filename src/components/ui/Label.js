"use client"
import React from 'react'

export default function Label({title, style}) {
  return (
    <div>
        <label class={`${style} block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>{title}</label>
    </div>
  )
}
