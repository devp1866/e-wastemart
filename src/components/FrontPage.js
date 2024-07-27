import React from 'react'

const FrontPage = () => {
  return (
    <>
      <div className='w-full blur-lg absolute z-10 h-screen'>
        <div className='fixed w-[24rem] h-72 bg-violet-500 opacity-90 bottom-[20%] right-[10%] rounded-3xl blur-3xl'></div>
        <div className='fixed w-[24rem] h-72 bg-pink-500 opacity-90 top-[20%] left-[10%] rounded-3xl blur-3xl'></div>
      </div>
      <div className="h-screen flex  flex-col gap-8 justify-center items-center z-40">
        <h1 className='text-[3rem] z-50 font-bold'>
          Welcome to the E-WasteMart
        </h1>
        <p className='w-2/3 font-semibold text-center z-50'>Welcome to E-wastemart, your one-stop online marketplace for managing and disposing of electronic waste responsibly. Our platform is designed to connect individuals and businesses who want to recycle their electronic devices with certified e-waste recyclers, ensuring a sustainable and environmentally-friendly solution.</p>
      </div>
    </>
  )
}

export default FrontPage