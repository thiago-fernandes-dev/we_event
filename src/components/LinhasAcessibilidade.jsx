import React from "react";
import { useNavigate } from "react-router-dom"

export function LinhasAcessibilidade(){
    const navigate = useNavigate();

    return (
        <div>
            <div className="w-full py-3" ></div>
            <div className="flex space-x-1" >
                <div className="w-1/8" ></div>
                <button  className="bg-white hover:bg-gray-100 text-black-600  py-0.5 px-1  rounded ">A-</button>
                <button  className="bg-white hover:bg-gray-100 text-black-600  py-0.5 px-1  rounded ">A+</button>
                <button  className="bg-white hover:bg-gray-100 text-black-600  py-0.5 px-1  rounded ">Contraste</button>
                <div className="w-5/6" ></div>
                <nav className="inline-flex space-x-3">
                    <button onClick={() =>{
                        const pageLogin = document.getElementById('login-botao-entrar');
                        if(pageLogin){
                            navigate('/');
                        }else{
                            navigate('/login');
                        }
                    }} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                        Entrar
                    </button>
                    <button onClick={() =>{
                        navigate('/cadastro');
                    }} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
                        Criar
                    </button>
                </nav>
                <div className="w-1/8"></div>
            </div>
            <div className="w-full py-3"></div>
        </div>
    )
}