"use client"
import React from 'react'
import { CartContextProvider } from './CartContext'

const CartContextWrapper = ({children}) => {
  return (
    <CartContextProvider>
        {children}
    </CartContextProvider>
  )
}

export default CartContextWrapper
