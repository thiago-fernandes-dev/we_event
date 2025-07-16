export function NovosEventos() {
    return (
        <section className="w-full h-full py-6">
            <div className="w-full">
                <h2 className="text-2xl w-full py-6 px-6">Adicionados Recentemente</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 gap-10">
                {[ 
                    { img: "src/assets/card1.webp", title: "Monters de Rock" },
                    { img: "src/assets/card2.webp", title: "Bocceli in Concert" },
                    { img: "src/assets/card5.webp", title: "Monsters Kiss" },
                    { img: "src/assets/card4.webp", title: "Monsters Ozzy" }
                ].map((evento, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="w-full h-98 lg:h-70 xl:h-98 overflow-hidden rounded-sm">
                            <img
                                src={evento.img}
                                alt={evento.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h4 className="text-2xl mt-4">{evento.title}</h4>
                        <a href="#"><h5 className="text-blue-600 text-xl underline">Comprar</h5></a>
                    </div>
                ))}
            </div>
        </section>
    );
}