"use client"

import React, { Suspense, useContext, useState } from "react"
import "@/components/bg.css"
import Card from "../../components/Card"
import Loader from "../../components/loader/Loader"

export default function page() {

    const [category, setCategory] = useState(0)
    const categoriesTxt = [
        <div className='flex items-center'><svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zm82.9-96a16 16 0 1 0-32 0a16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32a16 16 0 1 0 0 32zM272 96a16 16 0 1 0-32 0a16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64v-16z"/>
            </svg>Burgers</div>,
            
        <div className='flex items-center'><svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29V23M1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15h15.03M1 17h15v2H1v-2Z"/>
            </svg>Combos</div>,

        <div className='flex items-center'><svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M15.72 2.22a.75.75 0 0 1 1.06 1.06L15.56 4.5h2.19c.317 0 .6.2.706.498l1.25 3.5A.75.75 0 0 1 19 9.5h-1.045l-1.587 10.05c-.21 1.465-1.46 2.45-2.97 2.45h-2.796c-1.51 0-2.76-.986-2.968-2.44L6.044 9.5H5a.75.75 0 0 1-.706-1.002l1.25-3.5A.75.75 0 0 1 6.25 4.5h7.188l2.282-2.28zM17.22 6H6.78l-.715 2h11.872l-.715-2z" fill="currentColor" fillRule="nonzero"/>
        </svg>Drinks</div>,

        <div className='flex items-center'><svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><mask id="IconifyId18ba57b47b052cdf31"><g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4"><path strokeLinejoin="round" d="M15.34 22.5L21 37l3 6l3-6l5.66-14.5"/><path d="M19 32h10"/><path fill="#fff" strokeLinejoin="round" d="M24 3c-6 0-8 6-8 6s-6 2-6 7s5 7 5 7s3.5-2 9-2s9 2 9 2s5-2 5-7s-6-7-6-7s-2-6-8-6Z"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#IconifyId18ba57b47b052cdf31)"/>
        </svg>Desserts</div>
    ]

    const categories = [
        "What do you want?",
        "Burgers",
        "Combos",
        "Drinks",
        "Desserts"
    ]

    const sections = [
        {
            items: [<Card name = "BURGERS" img = "https://i.pinimg.com/736x/99/8d/cd/998dcd02a17a13d84496a8b7fa555f42.jpg"/>,
            <Card name = "COMBOS" img ="https://freepngimg.com/download/burger/146885-king-burger-combo-free-transparent-image-hq.png"/>,
            <Card name = "DRINKS" img = "https://img.freepik.com/premium-photo/plastic-bottle-with-water_184700-156.jpg"/>,
            <Card name = "DESSERTS" img = "https://img.freepik.com/free-photo/milkshake-table_144627-27511.jpg"/>,
        ]
        },
        {
            items: [<Card name = "Bacon CheeseBurger" img = "https://i.pinimg.com/736x/99/8d/cd/998dcd02a17a13d84496a8b7fa555f42.jpg"/>,
            <Card name = "Bacon CheeseBurger" img = "https://i.pinimg.com/736x/99/8d/cd/998dcd02a17a13d84496a8b7fa555f42.jpg"/>,
            <Card name = "Bacon CheeseBurger" img = "https://i.pinimg.com/736x/99/8d/cd/998dcd02a17a13d84496a8b7fa555f42.jpg"/>,
            <Card name = "Bacon CheeseBurger" img = "https://i.pinimg.com/736x/99/8d/cd/998dcd02a17a13d84496a8b7fa555f42.jpg"/>,
        ]
        },
        {
            items: [<Card name = "COMBO Bacon CheeseBurger" img = "https://freepngimg.com/download/burger/146885-king-burger-combo-free-transparent-image-hq.png"/>,
            <Card name = "COMBO Bacon CheeseBurger" img = "https://freepngimg.com/download/burger/146885-king-burger-combo-free-transparent-image-hq.png"/>,
            <Card name = "COMBO Bacon CheeseBurger" img = "https://freepngimg.com/download/burger/146885-king-burger-combo-free-transparent-image-hq.png"/>,
            <Card name = "COMBO Bacon CheeseBurger" img = "https://freepngimg.com/download/burger/146885-king-burger-combo-free-transparent-image-hq.png"/>,
        ]
        },
        {
            items: [<Card name = "Coca Cola" img = "https://a-manger.com/cdn/shop/products/Gaseosa-Coca-Cola-500-Cc-COCA-COLA--------X500ML-1-3024.jpg?v=1632746390"/>,
            <Card name = "Pepsi" img = "https://freepngimg.com/thumb/pepsi/7-pepsi-bottle-png-image-download--thumb.png"/>,
            <Card name = "Sprite" img = "https://mayoristasoto.com/9657-medium_default/sprite-500ml.jpg"/>,
            <Card name = "Water" img = "https://img.freepik.com/premium-photo/plastic-bottle-with-water_184700-156.jpg"/>,
        ]
        },
        {
            items: [<Card name = "Ice cream" img = "https://atlas-content-cdn.pixelsquid.com/stock-images/ice-cream-cone-rvqOynE-600.jpg"/>,
            <Card name = "Sundae" img = "https://www.pnguniverse.com/wp-content/uploads/2020/10/Sundae.png"/>,
            <Card name = "Milkshake" img = "https://img.freepik.com/free-photo/milkshake-table_144627-27511.jpg"/>,
            <Card name = "Cake" img = "https://atlas-content-cdn.pixelsquid.com/stock-images/chocolate-cake-slice-o0LVr4D-600.jpg"/>,
        ]
        }
        
    ]

  return (
    <main className="h-screen w-full flex">
         <nav className='border-r-2 border-[#DFA641] bg-white grid place-items-center h-screen p-2 w-36 fixed'>
            <ul className='grid gap-9 text-[#DFA641]'>
                {categoriesTxt.map((e,i)=>{
                    return <li onClick={()=>{
                        setCategory(i+1);
                    }} className='rounded-lg bg-transparent p-2
                     hover:bg-[#894c0a] hover:text-white hover:cursor-pointer duration-150'>{e}</li>
                })}
            </ul>
        </nav>
        <div className="py-10 w-full ml-36">
            <h1 className='text-5xl text-center text-[#ae802e]'>{categories[category]}</h1>
            <Suspense fallback = {<Loader/>}>
            <div className="grid grid-cols-3 gap-9 place-items-center mt-10 pb-8">
                {sections[category].items.map((el)=>{
                    return <div>{el}</div>;
                })}
            </div>
            </Suspense>
        </div>
    </main>
  )
}