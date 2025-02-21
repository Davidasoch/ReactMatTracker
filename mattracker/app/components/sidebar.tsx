'use client'
import Link from 'next/link';
import { useState } from "react"



export const Sidebar = (isopen) => {
    const [isOpen, setIsOpen] = useState(isopen)

console.log(isOpen)

    return(
<div className="sidebar-container bg-gray-700 text-white fixed w-full h-full overflow-hidden justify-center  grid pt-[120px] left-0 z-10">
        <button className="absolute right-0 p-5">
        X
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/Proyectos"><p>About Us</p></Link>
          </li>
          <li>
            <Link href="/Material"><p>Services</p></Link>
          </li>
          <li>
            <Link href="/Vehiculos"><p>Contacts</p></Link>
          </li>
        </ul>
      </div>
    )
}