import React from "react";

export function ContainerCategorias(){
    return (
        <section className="flex bg-[#1E2665] w-full h-1/6 -mt-1.5">
            <div className="px-4 "></div>
            <ul className="w-full inline-flex pt-3 pb-3 text-white text-center align-middle content-stretch space-x-30">
                <li><a href="#" className="text-left content-stretch">Shows internacionais</a></li>
                <li><a href="#" className="text-left content-stretch">Shows nacionais</a></li>
                <li><a href="#" className="text-left content-stretch">Teatro & Comédia</a></li>
                <li><a href="#" className="text-left content-stretch">Infantil e Família</a></li>
                <li><a href="#" className="text-center content-stretch">Esportes</a></li>
                <li><a href="#" className="text-left content-stretch">Lazer e Turismo</a></li>
                <li><a href="#" className="text-left content-stretch">Newsletter</a></li>
            </ul>
            <div className="px-4 "></div>
        </section>
    )
}