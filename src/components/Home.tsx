"use client"


import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';





import FontSizeAdjusterContainer from '../components/FontSizeAdjuster';
import FontSizeDecreaserContainer from "./FontSizeDecreaserContainer";


import { motion } from "framer-motion"

export default function Home() {

    const [isFontUpEnabled, setIsFontUpEnabled] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem('isFontUpEnabled');
        console.log('Stored value:', storedValue);
        setIsFontUpEnabled(storedValue === 'true');
    }, []);

    const [isFontDownEnabled, setIsFontDownEnabled] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem('isFontDownEnabled');
        console.log('Stored value:', storedValue);
        setIsFontDownEnabled(storedValue === 'true');
    }, []);

    return (

        <section className="dark:bg-gray-700 dark:text-white">


            {isFontUpEnabled && <FontSizeAdjusterContainer />}

            {isFontDownEnabled && <FontSizeDecreaserContainer />}


            <div className="grid md:flex md:justify-center md:items-center min-h-[70vh] p-6 md:p-10">
                <motion.div
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                >


                    <img id="text11" tabIndex={10} src={'/assets/Home/image2.jpg'} alt="Imagem " className="w-[800px]"></img>


                </motion.div>






                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-10 justify-start items-start">



                    <h1 id="text8" tabIndex={7} className="text-4xl md:text-6xl font-bold leading-none text-right dark:text-white"> Oceanclean </h1>





                    <div>


                        <p id="text9" tabIndex={8} className="text-lx md:text-2xl font-manrope  dark:text-white leading-7 md:leading-10 text-left">É uma plataforma que visa reduzir a poluição dos oceanos por meio de monitoramento, coleta e reciclagem de resíduos
                        </p>



                    </div>

                    <div className="self-center md:self-center px-8 py-3 font-sen rounded bg-segunda dark:bg-[#3EA0E7] dark:text-gray-50 text-white hover:bg-primeira hover:text-[#3EA0E7]">


                        <Link className="text-xl" id="text10" tabIndex={9} href="/Usuario">Junte-se a nos</Link>
                    </div>
                </ motion.div >





            </div>

        </section>

    );

}

