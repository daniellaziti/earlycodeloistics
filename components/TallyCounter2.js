"use client"
import React, { useState } from "react"

export function TallyCount () {
    const [count,setCount] = React.useState(0)
    const [number,setNumber] = React.useState(0)



    return (
        <div className="bg-blue-500 p-2">
            <blockquote className="p-4 bg-gray-700 text-center text-4xl text-white">
                <span>{count}+{number}</span>
            </blockquote>
      
            <div className="bg-white grid grid-cols-2 p-8 gap-6">
            <button
            onClick={() => setCount(count +1)}
            className="p-4 bg-black text-2xl text-center text-white"
            >+</button>
            <button
            onClick={() => setNumber(number +1)}
            className="p-4 bg-black text-2xl text-center text-white"
            >+</button>
            <button 
            onClick={() => setCount(count) + setNumber (number)}
            className="p-4 bg-gray-700 text-center text-4xl text-white">
            =</button>
            </div>
            
        </div>
    )
}