import React from "react";
import {ContainerMenu} from "./ContainerMenu.jsx";
import {EventosPrincipais} from "./EventosPrincipais.jsx";
import {ContainerCategorias} from "./ContainerCategorias.jsx";

export function MainBody(){
    return(
        <main className="m-0 p-0 py-0">
            <ContainerMenu />
            <EventosPrincipais />
            <ContainerCategorias />
        </main>
    )
}