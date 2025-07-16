import React from "react";
import {ContainerMenu} from "./ContainerMenu.jsx";
import {RefreshBody} from "./RefreshBody.jsx";

export function MainBody(){
    return(
        <main>
            <ContainerMenu />
            <RefreshBody />
        </main>
    )
}