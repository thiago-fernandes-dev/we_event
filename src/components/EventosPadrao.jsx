import React, {Fragment} from "react";
import {EventosPrincipais} from "./EventosPrincipais.jsx";
import {ContainerCategorias} from "./ContainerCategorias.jsx";
import {NovosEventos} from "./NovosEventos.jsx";

export function EventosPadrao(){
    return(
        <>
            <EventosPrincipais />
            <ContainerCategorias />
            <NovosEventos />
        </>
    )
}