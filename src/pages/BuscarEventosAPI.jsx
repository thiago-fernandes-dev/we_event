// src/components/NovosEventos.jsx (para os cards fixos)
import React from "react";

export function BuscarEventosAPI(){ // Este é o componente com os cards fixos
    return (
        <section className="flex w-full max-h-9/10 h-9/10">
            <h2 className=" text-3xl w-full py-6 px-6">Adicionados Recentemente</h2>
            <div className="inline-flex grid-cols-4 w-full h1/3">
                <div className="">
                    <div className="card-evento1">
                        <img className="img-evento1" src="./assets/img/card1.webp" alt="Evento #"/>
                    </div>
                    <h4 className="nome-evento">Monters de Rock</h4>
                    <a href="#"><h5 className="comprar">Comprar</h5></a>
                </div>
                <div className="carrossel-novos_eventos2">
                    <div className="card-evento2">
                        <img className="img-evento2" src="./assets/img/card2.webp" alt="Evento #"/>
                    </div>
                    <h4 className="nome-evento">Bocceli in Concert</h4>
                    <a href="#"><h5 className="comprar">Comprar</h5></a>
                </div>
                <div className="carrossel-novos_eventos3">
                    <div className="card-evento3">
                        <img className="img-evento3" src="./assets/img/card5.webp" alt="Evento #"/>
                    </div>
                    <h4 className="nome-evento">Monsters Kiss</h4>
                    <a href="#"><h5 className="comprar">Comprar</h5></a>
                </div>
                <div className="carrossel-novos_eventos4">
                    <div className="card-evento4">
                        <img className="img-evento4" src="./assets/img/card4.webp" alt="Evento #"/>
                    </div>
                    <h4 className="nome-evento">Monsters Ozzy</h4>
                    <a href="#"><h5 className="comprar">Comprar</h5></a>
                </div>
            </div>
        </section>
    )
}