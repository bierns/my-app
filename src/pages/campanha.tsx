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



                    <h1 id="text8" tabIndex={7} className="text-4xl md:text-6xl font-bold leading-none text-right dark:text-white"> Importância das Campanhas </h1>





                    <div>


                        <p id="text9" tabIndex={8} className="text-lx md:text-1x4 font-manrope  dark:text-white leading-7 md:leading-10 text-left">As campanhas desempenham um papel crucial na conscientização e mobilização da sociedade contra a poluição dos oceanos.<br></br> Elas são ferramentas poderosas para educar o público sobre os impactos devastadores da poluição marinha, inspirando ações individuais e coletivas.<br></br> Ao destacar a urgência e a gravidade do problema, as campanhas despertam o interesse e a preocupação das pessoas, incentivando mudanças de comportamento e hábitos em relação ao descarte de resíduos. Além disso,<br></br> as campanhas podem influenciar políticas governamentais e pressionar empresas a adotarem práticas mais sustentáveis. Ao unir comunidades, organizações e governos em torno de um objetivo comum, <br></br>as campanhas podem catalisar esforços conjuntos para enfrentar a poluição dos oceanos, promovendo assim a preservação dos ecossistemas marinhos e garantindo um futuro mais saudável para o planeta e suas espécies.
                        </p>



                    </div>


                </ motion.div >



                <motion.div
                    initial={{ opacity: 0, y: 200, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 0, scale: 0.5 }}
                    transition={{ duration: 0.5 }}
                >


                    <img id="text11" tabIndex={10} src={'/assets/Details/image2.jpg'} alt="Imagem " className="w-[800px]"></img>


                </motion.div>

            </div>

        </section>

    );

}

