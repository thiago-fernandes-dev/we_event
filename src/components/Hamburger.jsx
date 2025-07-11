import React from 'react';

export function Hamburger() {
    return (
        <section>
            <a href="javascript:void(0);" className="hidden" /*onClick="hamMenu()"*/>
                <img src="src/assets/burger-solid_w.svg"  alt="hamburg"/>
            </a>
            <div id="hamburger-menu" className="hidden">
                <a href="#">A+</a>
                <a href="#">A-</a>
                <a href="#">Contraste</a>
                <a href="#">Busca[1]</a>
                <a href="#">Conteúdo[2]</a>
                <a href="#">Rodapé[3]</a>
                <a href="#">Acessibilidade</a>
            </div>
        </section>
    )
}