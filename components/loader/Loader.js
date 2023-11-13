import React from 'react'
import "./style.css"
export default function Loader() {
  return (
    <div className='grid h-screen place-items-center'>
    <div class="container">
    <div class="cube"><div class="cube__inner"></div></div>
    <div class="cube"><div class="cube__inner"></div></div>
    <div class="cube"><div class="cube__inner"></div></div>
  </div>
  </div>
  )
}
