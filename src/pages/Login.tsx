
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Router from "next/router";



import { signIn } from "next-auth/react";


export default function Login() {

    const [InformacoesFormulario, setInformacoesFormulario] = useState({
        email: '',
        senha: '',

    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInformacoesFormulario({
            ...InformacoesFormulario,
            [name]: value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(InformacoesFormulario.email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (InformacoesFormulario.senha.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        const { email, senha } = InformacoesFormulario;

        const result = await signIn("credentials", {
            redirect: false,
            email,
            senha,
        });

        if (result && result.error) {


            console.error(result.error);
        } else {


            Router.push("/ProtectedPageCadastro");
        }

        const dadosFormularioJson = JSON.stringify(InformacoesFormulario);

        localStorage.setItem('InformacoesFormulario', dadosFormularioJson);
    };


    return (

        <div className="flex min-h-[100vh] bg-gray-100 dark:bg-gray-700 ">


            <div className="flex justify-center items-center border w-full bg-white">

                <div className="w-full max-w-xl p-4 rounded-md sm:p-8 dark:bg-gray-500 dark:text-gray-800">


                    <form action="post" name="formLogin" id="formLogin" className="space-y-8" onSubmit={handleSubmit}>

                        <div className="space-y-4">

                            <div className="space-y-2">


                                <label htmlFor="email" className="block text-sm dark:text-white font-manrope">Email</label>


                                <input type="email" name="email" id="email" placeholder="seu-email@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" onChange={handleChange} required />

                            </div>

                            <div className="space-y-2">

                                <div className="flex justify-between">


                                    <label htmlFor="senha" className="text-sm dark:text-white font-manrope">Senha</label>



                                    <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-white">Esqueceu sua senha?</Link>


                                </div>

                                <input type="password" name="senha" id="senha" placeholder="******" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" onChange={handleChange} required />

                            </div>

                        </div>

                        <div className="flex justify-center">


                            <Link className="w-full px-8 py-3 font-sen text-2xl rounded-md bg-[#3EA0E7]  dark:bg-[#3EA0E7] text-white justify-center items-center" href="/ProtectedPageCadastro">Acessar</Link>


                        </div>

                    </form>


                    <div className="flex items-center w-full my-4">

                        <hr className="w-full dark:text-gray-600" />
                        <p className="px-3 dark:text-white">Ou</p>
                        <hr className="w-full dark:text-gray-600" />

                    </div>

                    <div className="my-6 space-y-4">

                        <button onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/ProtectedPage' })} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-[#3EA0E7]">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current dark:text-white text-[#3EA0E7]">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>


                            <p className="dark:text-white font-bold">Acesse com Google</p>


                        </button>


                    </div>
                </div>

            </div>

        </div>
    );
}