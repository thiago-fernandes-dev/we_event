import React from "react";

export function NovosEventos(){
    return (
        <section className="flex-wrap w-full max-h-9/10 h-full">
            <div className="w-full flex-wrap">
                <h2 className=" text-3xl w-full py-6 px-6">Adicionados Recentemente</h2>
            </div>
            <div className="inline-flex grid-cols-4 w-full h1/3 space-x-40 px-10">
                <div className="">
                    <div className="card-evento1">
                        <img className="img-evento1" src="src/assets/card1.webp" alt="Evento #"/>
                    </div>
                    <h4 className="text-2xl">Monters de Rock</h4>
                    <a href="#"><h5 className="text-blue-600 text-xl underline">Comprar</h5></a>
                </div>
                <div className="carrossel-novos_eventos2">
                    <div className="card-evento2">
                        <img className="img-evento2" src="src/assets/card2.webp" alt="Evento #"/>
                    </div>
                    <h4 className="text-2xl">Bocceli in Concert</h4>
                    <a href="#"><h5 className="text-blue-600 text-xl underline">Comprar</h5></a>
                </div>
                <div className="carrossel-novos_eventos3">
                    <div className="card-evento3">
                        <img className="img-evento3" src="src/assets/card5.webp" alt="Evento #"/>
                    </div>
                    <h4 className="text-2xl">Monsters Kiss</h4>
                    <a href="#"><h5 className="text-blue-600 text-xl underline">Comprar</h5></a>
                </div>
                <div className="carrossel-novos_eventos4">
                    <div className="card-evento4">
                        <img className="img-evento4" src="src/assets/card4.webp" alt="Evento #"/>
                    </div>
                    <h4 className="text-2xl">Monsters Ozzy</h4>
                    <a href="#"><h5 className="text-blue-600 text-xl underline">Comprar</h5></a>
                </div>
            </div>
        </section>

    )
}