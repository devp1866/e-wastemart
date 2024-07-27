import React from 'react'
import Container from './Container'

const DivWrapper = ({ children, title, className }) => {
    return (
        <Container>
            <div className={`flex justify-center items-center mt-2 mb-8 flex-col gap-8 ${className}`}>
                <div>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <div className="w-40 border mx-auto my-2 border-primary-600"></div>
                </div>
                {children}
            </div>
        </Container>
    )
}

export default DivWrapper