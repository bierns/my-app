import Link from "next/link";


export default function AboutForms() {

    return (
        <section className="p-4 lg:p-8 dark:bg-gray-700 dark:text-white bg-gray-200">

            <div className="font-bold text-4xl md:text-5xl mt-20 mb-20 text-start md:text-center p-6 md:p-0">
                <h1>Importância das ongs</h1>

            </div>

            <div className="container mx-auto space-y-12">

                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">

                    <div className="flex justify-center items-center">

                        <img src="/assets/Details/imagem3.jpg" alt="Imagem " width={400} />

                    </div>

                    <div className="flex flex-col justify-center flex-1 p-6 ">


                        <p className="my-6 font-manrope leading-8 text-xl">As Organizações Não Governamentais ONGs são peças-chave na batalha contra a poluição dos oceanos. Elas desempenham um papel fundamental na sensibilização e educação do público sobre os impactos negativos da poluição marinha. Além disso, as ONGs realizam pesquisas e monitoramentos para entender melhor a extensão do problema e identificar suas fontes. Através de campanhas de limpeza costeira e projetos de remoção de resíduos, elas têm um impacto direto na redução da poluição nos oceanos.</p>



                    </div>
                </div>
            </div>
        </section>
    );
}
