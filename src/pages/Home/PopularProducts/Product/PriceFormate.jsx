
import React from 'react'
import { twMerge } from 'tailwind-merge'

function PriceFormate({amount,className}) {
    const formattedPrice = new Number(amount).toLocaleString("en-Us",{
        style:"currency",
        currency:"USD",
        minimumFractionDigits:2.
    })
  return (
    <span className={twMerge("font-medium",className)}>{formattedPrice}</span>
  )
}

export default PriceFormate