import React from "react";

export function ContainerMenu(){
    return (
        <section className="container-menu">
            <div className="espaco-linha-menu-start"></div>
            <img id="wewent-img" src="./assets/icons/Logo.svg" alt="Logo WE EVENT"/>
            <a href="#" id="todos-eventos-link"><img id="eventos-img" src="./assets/icons/Eventos.svg"
                                                     alt="Todos os Eventos"/></a>
            <div id="pesquisar" className="barra-pesquisa">
                <input type="text" placeholder="Buscar artistas e eventos" className="input-pesquisa"/>
                <button className="botao-pesquisar"><img src="./assets/icons/Search.svg" alt="Pesquisar"/></button>
            </div>
            <div className="funcionalidades">
                <ul className="funcionalidades-list">
                    <li><a href=""><img src="./assets/icons/Login.svg" alt="Login"/></a></li>
                    <li><a href=""><img src="./assets/icons/Favoritos.svg" alt="Seus Favoritos"/></a></li>
                    <li><a href=""><img src="./assets/icons/Linguagem.svg" alt="Mudar Linguagem"/></a></li>
                </ul>
            </div>
        </section>
    )
}