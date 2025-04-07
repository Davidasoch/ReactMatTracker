'use client'
import Link from 'next/link';
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export const Navbar = () => {

  //we're using useState for the sidebar
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();
  
  useEffect(() => (isOpen ? setIsOpen(false) : void null), [pathname])

  return (
    <div className="sticky fixed w-full top-0">
      <nav className=" bg-[#0058a3] text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            MatTracker
          </Link>
          <div className="hidden md:flex">
            <Link href="/Proyectos" className="mx-2 hover:text-gray-300">
              Proyectos
            </Link>
            <Link href="/Vehiculos" className="mx-2 hover:text-gray-300">
              Vehiculos
            </Link>
            <Link href="/Material" className="mx-2 hover:text-gray-300">
              Material
            </Link>
            <Link href="/Registros" className="mx-2 hover:text-gray-300">
              Registros
            </Link>

          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => {
              setIsOpen(!isOpen);
            }}

            >
              Menu </button></div>

        </div>
      </nav>
      <nav>
        {isOpen &&
          <div className="sidebar-container bg-gray-700 text-white h-full fixed right-0">
            <ul className="sidebar-nav text-center leading-relaxed text-xl">
              <li>
                <Link href="/Proyectos" className="mx-2 hover:text-gray-300">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/Material" className="mx-2 hover:text-gray-300">
                  Material
                </Link>
              </li>
              <li>
                <Link href="/Vehiculos" className="mx-2 hover:text-gray-300">
                  Vehiculos
                </Link>
              </li>
              <li>
                <Link href="/Registros" className="mx-2 hover:text-gray-300">
                  Registros
                </Link>
              </li>
            </ul>
          </div>
        }
      </nav>
    </div>

  )
}