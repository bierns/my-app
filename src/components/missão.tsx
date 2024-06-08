import Image from "next/image";
import Link from "next/link";





import { motion } from "framer-motion"

export default function DetailsCompany(){


    return(

        <section className="dark:bg-gray-700 dark:text-white bg-gray-200">

            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">

                <div className="flex items-center justify-center">

                <motion.div
                    initial={{opacity:0, y:200, scale:0.5}}
                    whileInView={{opacity:1, y:0, scale:1}}
                    exit={{opacity:0, y:0, scale:0.5}}
                    transition={{duration:0.5}}
                    >  
                
                    
                    <Image id="text12" tabIndex={11} src="/assets/Details/imagem.jpg" alt="Imagem" className="object-contain" width={500} height={400}/>
                
                </motion.div>

                </div>

                <div className="flex flex-col justify-center p-0 md:p-6 text-center rounded-sm lg:max-w-md xl:max-w-4xl lg:text-left">

                <motion.div
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:1, x:0}}
                exit={{opacity:0, x:-100}}
                transition={{duration:0.5}}
                > 
                        <h1 id="text13" tabIndex={12} className="text-2xl md:text-6xl font-bold leading-8 md:leading-none text-start mt-10 md:mt-0 ">Missão
                        </h1> 
                        <p id="text14" tabIndex={13} className="mt-6 mb-8 text-xl md:text-2xl text-manrope sm:mb-12 leading-8 md:leading-10 text-start">Nossa missão é desenvolver e implementar uma plataforma inovadora focada na redução da poluição dos oceanos. Através do monitoramento contínuo, coleta eficiente e reciclagem de resíduos, buscamos mitigar os impactos negativos causados ​​pela poluição marinha. Ao promover a conscientização e ação sustentável, pretendemos preservar a saúde dos ecossistemas marinhos e garantir um futuro mais limpo e saudável para as gerações presentes e futuras.

                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}