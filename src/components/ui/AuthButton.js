"use client"
import React from 'react'
import Image from "next/image";

const AuthButton = ({title, src, onClick}) => {
  return (
    <div className="text-xs bg-white border border-gray-300 w-[48%] text-black rounded-lg shadow-md font-semibold ">
        <button onClick={onClick} className="flex gap-3 items-center py-2 px-4 ">
            <Image 
              src={src}
              width={25}
              height={25}
             />
            {title}
        </button>
    </div>
  )
}

export default AuthButton