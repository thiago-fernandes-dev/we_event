import React from "react";

export function LinhasAcessibilidade(){
    return (
        <div>
            <div className="w-full py-3" ></div>
            <div className="flex space-x-1" >
                <div className="w-1/8" ></div>
                <button  className="bg-white hover:bg-gray-100 text-black-600  py-0.5 px-1  rounded ">A-</button>
                <button  className="bg-white hover:bg-gray-100 text-black-600  py-0.5 px-1  rounded ">A+</button>
                <button  className="bg-white hover:bg-gray-100 text-black-600  py-0.5 px-1  rounded ">Contraste</button>
                <div className="w-5/6" ></div>
                <nav className="inline-flex space-x-1">
                    <ul className="inline-flex space-x-3">
                        <li><a href="#" className="bg-white hover:bg-gray-100 text-black-600  py-0.5 px-1  rounded">Busca[1]</a></li>
                        <li><a href="#" className="bg-white hover:bg-gray-100 text-black-600  py-0.5 px-1  rounded">Conteúdo[2]</a></li>
                        <li><a href="#" className="bg-white hover:bg-gray-100 text-black-600  py-0.5 px-1  rounded">Rodapé[3]</a></li>
                        <li><a href="#" className="bg-white hover:bg-gray-100 text-black-600  py-0.5 px-1  rounded">Acessibilidade</a></li>
                    </ul>
                </nav>
                <div className="w-1/8" ></div>
            </div>
            <div className="w-full py-3" ></div>
        </div>
    )
}