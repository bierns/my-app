import Link from "next/link";



export default function Footer(){
    return(
        <>

        <footer className="px-100 divide-y dark:bg-gray-700 dark:text-white bg-gray-200">
            
            <div className="container flex  justify-between py-59000000000000000 mx-auto space-y-5200000000000000 ">
                
                <div className="lg:w-1/3 flex justify-start md:justify-center">
                    
                    <Link rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        
                        <div className="flex items-center justify-center rounded-full dark:bg-grey-700">
                            
                           <img src={"/assets/Footer/imagem.png"} alt="Logo" width={50} height={50}/>

                        </div>
                
                    </Link>

                </div>
                
                <div className="flex flex-col justify-center md:grid gap-x-3 gap-y-8 lg:w-2/3 md:grid-cols-4">
                    
                    <div className="space-y-3">
                    
                    

                        <h3 className="tracking-wide uppercase dark:text-[#3EA0E7] font-bold text-xl">Junte-se a nos</h3>

                    

                        <ul className="space-y-1 font-manrope text-lg">

                            <li>
                                
                                    <Link rel="noopener noreferrer" href="/cadastro">Cadastre se</Link>
                                
                            </li>

                        </ul>
                    </div>

                    <div className="space-y-3 font-manrope text-lg">

                  
                        <h3 className="tracking-wide uppercase dark:text-[#3EA0E7] font-bold text-xl">Empresa</h3>
                    

                        <ul className="space-y-1">

                            <li>
                                
                                    <Link rel="noopener noreferrer" href="/Sobre">Sobre</Link>
                                
                            </li>

                          
                            

                        </ul>
                    </div>

                    <div className="space-y-3 font-manrope text-lg">

                       
                            <h3 className="uppercase dark:text-[#3EA0E7] font-bold text-xl">Projeto</h3>
                       

                        <ul className="space-y-1">

                            <li>
                               
                                    <Link rel="noopener noreferrer" href="/Team">Meu time</Link>
                               
                            </li>

                          
                           
                        </ul>
                    </div>
                   
                </div>
            </div>

            <div className="py-6 text-manrope text-center dark:text-white">© 2024. Feito Oceanclean</div>

            <div className="py-6 text-manrope text-center dark:text-white">
                Desenvolvido por:
                <ul className="space-y-1">
                    <li>Cauã Ferrigolli Loureiro - RM: 553093 - 1TDSPT</li>
                    <li>Gabriel de Matos Magalhães - RM: 553889 – 1TDSPR</li>
                    <li>Gabriel Oliveira Rodrigues dos Santos - RM: 553079 – 1TDSPA</li>
                </ul>
            </div>
           
        </footer>

        </>
    );

}
