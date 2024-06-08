"use client"

import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';


import FontSizeAdjusterContainer from '../components/FontSizeAdjuster';


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




            <div className="grid md:flex md:justify-center md:items-center min-h-[70vh] p-6 md:p-10">

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-10 justify-start items-start">




                    <h1 id="text8" tabIndex={7} className="text-4xl md:text-6xl font-bold leading-none text-left dark:text-white"> Oceanclean: Reduzindo a Poluição dos Oceanos para um Futuro Sustentável
                    </h1>





                    <div>


                        <p id="text9" tabIndex={8} className="text-lx md:text-2xl font-manrope dark:text-white leading-7 md:leading-10">Bem-vindo à Oceanclean, uma plataforma dedicada à redução da poluição dos oceanos por meio de monitoramento, coleta e reciclagem de resíduos. Nosso compromisso é com a preservação dos ecossistemas marinhos e a promoção de um futuro mais limpo e saudável para as gerações presentes e futuras.
                            Na Oceanclean, acreditamos que todos têm um papel a desempenhar na proteção dos oceanos. Trabalhamos em estreita colaboração com governos, organizações não governamentais, empresas e comunidades locais para implementar soluções eficazes de redução da poluição marinha.


                        </p>



                    </div>


                </ motion.div >


                <motion.div
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                >





                </motion.div>



            </div>

        </section>

    );

}

