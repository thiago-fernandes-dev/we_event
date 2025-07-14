import React from "react";

export function ContainerCategorias(){
    return (
        <section className="bg-[#1E2665] w-full py-3 -mt-0.5">
            <div className="px-4 "></div>
            <ul className="flex flex-col md:flex-row md:flex-wrap justify-center gap-y-3 md:gap-x-6 text-white text-sm md:text-base text-center mt-1 mb-1 pt-1">
                <li><a href="#" className="block px-2">Shows internacionais</a></li>
                <li><a href="#" className="block px-2">Shows nacionais</a></li>
                <li><a href="#" className="block px-2">Teatro & Comédia</a></li>
                <li><a href="#" className="block px-2">Infantil e Família</a></li>
                <li><a href="#" className="block px-2">Esportes</a></li>
                <li><a href="#" className="block px-2">Lazer e Turismo</a></li>
                <li><a href="#" className="block px-2">Newsletter</a></li>
            </ul>
            <div className="px-4 "></div>
        </section>
    )
}