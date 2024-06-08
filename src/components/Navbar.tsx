"use client"


import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";





export default function Navbar() {


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };


    return (

        <header className="p-4 dark:bg-gray-700 dark:text-white">

            <div className="container flex justify-between h-16 mx-auto">



                <Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">

                    <img src={'/assets/Navbar/imagem.png'} width={100} height={500} alt="Logo da Sales Force"></img>

                </Link>



                <ul className={`items-stretch lg:flex ${menuOpen ? 'block mobile-menu' : 'hidden'}`}>



                    <li className="flex">

                        <Link id="text6" tabIndex={5} rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-manrope">



                        </Link>

                    </li>

                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-bold">



                        <Link id="text2" tabIndex={1} rel="noopener noreferrer" href="/campanha" >Campanhas</Link>



                    </li>

                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-bold">



                        <Link id="text3" tabIndex={2} rel="noopener noreferrer" href="/Sobre">Sobre</Link>


                    </li>



                    <li className="flex items-center px-4 -mb-1 border-b-2 dark:text-[#FFFF] dark:border-[#FFFF] font-bold">



                        <Link id="text5" tabIndex={4} rel="noopener noreferrer" href="###">Serviços</Link>


                    </li>



                </ul>

                <div className="items-center flex-shrink-0 hidden lg:flex">





                    <Link id="text8" tabIndex={7} href="/Login"><button className="self-center px-4 py-3 font-sen rounded bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white text-xl hover:bg-primeira">Login  </button></Link>




                </div>


            </div>

        </header>

    );
}