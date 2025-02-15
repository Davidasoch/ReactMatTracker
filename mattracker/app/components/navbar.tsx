'use client'
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react"

                       // <Image
                        //  className="color:green"
                        //  src=
                         // alt="Next.js logo"
                        //  width={60}
                        //  height={38}
                       //   priority
                      //  />

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <nav className=" bg-gray-700 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
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
                    <button onClick={()=>{
                        setIsOpen(!isOpen);
                    }}

                >        
                    </button></div>

            </div>

        </nav>
    )
}