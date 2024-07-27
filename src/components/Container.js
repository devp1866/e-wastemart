import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1280px] mx-auto w-full px-6'>
        {children}
    </div>
  )
}

export default Container