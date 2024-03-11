"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const CartCount = () => {
    const cartItem = useSelector((store)=>store.cart)
  return (
    <span>
        {cartItem.length}
    </span>
  )
}

export default CartCount