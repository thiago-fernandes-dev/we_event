import React from "react";

export function ContainerSobre() {
    return(
        <section className="flex w-full max-h-1/4 h-1/4 grid-cols-4 py-6 mt-10 space-x-33 bg-[#F0F0F0]">
            <div className="px-7 max-h-1/4 h-1/4">
                <h4 className="text-2xl">Sobre a WE EVENT</h4>
                <ul className="py-3">
                    <li><a href="#" className="text-[#1E2665]">Quem somos</a></li>
                    <li><a href="#" className="text-[#1E2665]">Termos e Condições Gerais</a></li>
                    <li><a href="#" className="text-[#1E2665]">WE EVENT no mundo</a></li>
                    <li><a href="#" className="text-[#1E2665]">Política de Privacidade</a></li>
                    <li><a href="#" className="text-[#1E2665]"> </a></li>
                </ul>
            </div>
            <div className=" max-h-1/4 h-1/4">
                <h4 className="text-2xl">Serviço ao cliente</h4>
                <ul className="py-3">
                    <li><a href="#" className="text-[#1E2665]">Atendimento ao Cliente</a></li>
                    <li><a href="#" className="text-[#1E2665]">Pontos de Venda e Retirada</a></li>
                    <li><a href="#" className="text-[#1E2665]">Formas de Pagamento</a></li>
                    <li><a href="#" className="text-[#1E2665]">Retirada de Ingressos por Terceiros</a></li>
                </ul>
            </div>
            <div className="max-h-1/4 h-1/4">
                <h4 className="text-2xl">Mais WE EVENT</h4>
                <ul className="py-3">
                    <li><a href="#" className="text-[#1E2665]">Newsletter</a></li>
                    <li><a href="#" className="text-[#1E2665]">Mapa do Site</a></li>
                    <li><a href="#" className="text-[#1E2665]">Definição de Privacidade</a></li>
                    <li><a href="#" className="text-[#1E2665]">Assuntos de Imprensa</a></li>
                </ul>
            </div>
            <div className="max-h-1/4 h-1/4">
                <h4 className="text-2xl">WE EVENT.PASS</h4>
                <ul className="py-3">
                    <li><a href="#" className="text-[#1E2665]">O que é</a></li>
                    <li><a href="#" className="text-[#1E2665]">Perguntas frequentes</a></li>
                    <li><a href="#" className="text-[#1E2665]">Ouvidoria</a></li>
                    <li><a href="#" className="text-[#1E2665]">Pergunte a um gerente</a></li>
                </ul>
            </div>
        </section>
    )
}