import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/Logo.svg";
import Eventos from "../assets/Eventos.svg";
import Login from "../assets/Login.svg";
import Favoritos from "../assets/Favoritos.svg";
import Linguagem from "../assets/Linguagem.svg";

 export function ContainerMenu(){
    const [cidade, setCidade] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cidade.trim()) return;
        navigate(`/eventos?cidade=${encodeURIComponent(cidade)}`);
    };

    return (
        <section className="bg-[#1E2665]">
            <div className="w-full py-3"></div>
            <div className="inline-flex space-x-10 w-full">
                <div className="w-1/28"></div>
                <img id="wewent-img" src={Logo} alt="Logo WE EVENT"/>
                <a href="#" id="todos-eventos-link"><img id="eventos-img" src={Eventos} alt="Todos os Eventos"/></a>

                <form onSubmit={handleSubmit} className="w-1/3">
                    <div className="flex w-full">
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown" value={cidade}
                            onChange={(e) => setCidade(e.target.value)} className="block p-2.5 w-full z-20 text-base rounded-2xl py-4 text-gray-900 bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400  " placeholder="Buscar eventos" required/>
                            <button type="submit" className="absolute top-0 end-0 p-5 text-sm font-medium h-full text-gray-400 bg-white rounded-2xl  hover:bg-gray-50 focus:ring-1 focus:outline-none  ">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                <a href="" className="content-center"><img src={Login} alt="Login "/></a>
                <a href="" className="content-center"><img src={Favoritos} alt="Seus Favoritos"/></a>
                <a href="" className="content-center"><img src={Linguagem} alt="Mudar Linguagem"/></a>
                <div className="w-1/28"></div>
            </div>
            <div className="w-full py-3"></div>
        </section>
    )
}
