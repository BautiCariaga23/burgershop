import React from 'react'

export default function Card(props) {
  return (
    <div className='bg-white w-56 h-56 p-2 duration-150 rounded-lg 
    hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:cursor-pointer'>
        <h1 className='text-[#DFA641] text-center absolute w-56 pr-4'>{props.name}</h1>
        <div className='grid place-items-center pt-6'>
        <img src={props.img} className='h-48 p-2' loading='lazy'/>
        </div>
    </div>
  )
}
