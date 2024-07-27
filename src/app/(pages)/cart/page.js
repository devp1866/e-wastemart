"use client";
import Container from '@/components/Container'
import Payment from '@/components/Payment'
import React from 'react'
import { useSession } from 'next-auth/react'

const Cart = () => {
    const {data: session} = useSession();
    console.log(session);
  return (
    <Container>
    <h1 className='text-3xl text-center mt-16 font-bold'>Cart</h1>
    <div className='flex mt-8 gap-4'>
        <div className='w-1/2'>
            <div className='flex gap-4 px-8 py-4 rounded-lg shadow-md'>
            <div>
                <h1 className='font-semibold'>Omen Transcend 14</h1>
                <p>Best laptop under 80,000</p>
                <p>Price: $100</p>
                <p>Quantity: 1</p>
                <button className='bg-red-500 px-2 py-1 text-white'>Remove</button>
            </div>
            </div>
            
        </div>
        <div className='w-1/4'>
            <h1 className='font-semibold'>Cart Summary</h1>
            <p>Subtotal: $200</p>
            <p>Shipping: $10</p>
            <p>Total: $210</p>
            <div className=''>
                <Payment existingName={session?.user?.name} existingEmail={session?.user?.email} existingAmount={200} />
            </div>
        </div>
    </div>
    </Container>
  )
}

export default Cart