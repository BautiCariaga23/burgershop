import React, { Suspense } from 'react'

export default function Card(props) {

  return (
    <div onClick={()=>{

    }} className='bg-white w-56 h-64 p-2 duration-150 rounded-lg 
    hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:cursor-pointer'>
        <h1 className='text-[#DFA641] text-center absolute w-56 pr-4'>{props.name}</h1>
        <div className='grid place-items-center pt-6'>

        
        <img src={props.img} alt={props.name} className='h-48 py-2 pr-4 justify-center'/>


        <div className='flex w-56'>
        <h2 className='text-[#DFA641] text-left w-56 pr-4'>{props.price}</h2>
        <button className='bg-green-500 text-sm rounded-lg p-2'>Add to order</button>
        </div>
        </div>
    </div>
  )
}
