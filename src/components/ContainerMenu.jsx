import React from "react";
import { Hamburger } from "./Hamburger";

export function ContainerMenu(){
    return (
        <section className="bg-[#1E2665]">
            <div className="w-full py-1 md:py-3"></div>
            <div className="flex-row md:inline-flex space-x-10 w-full">
                <div className="w-1/28"></div>
                <img id="wewent-img" src="src/assets/Logo.svg" alt="Logo WE EVENT" className="hidden md:inline"/>
                <div className="md:hidden">
                    <Hamburger/>
                </div>
                
                <a href="#" id="todos-eventos-link " className="hidden md:inline "><img id="eventos-img" src="src/assets/Eventos.svg" alt="Todos os Eventos"/></a>

                <form className="block md:inline w-full md:w-1/3 px-2 pt-1 md:p-0">
                    <div className="flex w-full">
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-base rounded-2xl py-4 text-gray-900 bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400  " placeholder="Buscar eventos" required/>
                            <button type="submit" className="absolute top-0 end-0 p-5 text-sm font-medium h-full text-gray-400 bg-white rounded-2xl  hover:bg-gray-50 focus:ring-1 focus:outline-none  ">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                <a href="" className="hidden md:inline content-center"><img src="src/assets/Login.svg" alt="Login "/></a>
                <a href="" className="hidden lg:inline content-center"><img src="src/assets/Favoritos.svg" alt="Seus Favoritos"/></a>
                <a href="" className="hidden lg:inline content-center"><img src="src/assets/Linguagem.svg" alt="Mudar Linguagem"/></a>
                <div className="w-1/28"></div>
            </div>
            <div className="w-full py-1 md:py-3"></div>
        </section>
    )
}