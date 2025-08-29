"use client";
import { IconButton } from "@material-tailwind/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css/autoplay';
import {useCarrier} from "./EventsContainer.jsx";


function CustomNavigation() {

    const swiper = useSwiper();
    return (
        <>
            <IconButton
                size="lg"
                variant="ghost"
                color="secondary"
                onClick={() => swiper.slidePrev()}
                className="dark !absolute left-2 top-1/2 z-10 -translate-y-1/2"
            >
                <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
            </IconButton>
            <IconButton
                size="lg"
                variant="ghost"
                color="secondary"
                onClick={() => swiper.slideNext()}
                className="dark !absolute right-2 top-1/2 z-10 -translate-y-1/2"
            >
                <NavArrowRight className="h-7 w-7 translate-x-px stroke-2" />

            </IconButton>

        </>

    );

}

function customPagination(_, className) {
    return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;
}

export function RefreshPrincipais(){
    const {images, names, addStrings, addImages} = useCarrier();

    return (
        <Fragment>
            <section className="inline-flex w-full max-h-1/4 m-0">
                <div className="flex w-full m-0">
                    <div className="inline-flex w-1/2">
                        <a href="#" className="w-1/2 object-cover"><img id="evento1-img" src={useCarrier.names['ids6']} alt="#" className="w-full h-full"/></a>
                        <a href="#" className="w-1/2 object-cover "><img id="evento2-img" src={useCarrier.names['ids7']} alt="#" className="w-full h-full"/></a>
                    </div>

                    <div className="max-w-[686px]">
                        <Swiper
                            pagination={{
                                enabled: true,
                                clickable: true,
                                dynamicBullets: true,
                                renderBullet: customPagination,
                            }}
                            modules={[Navigation, Pagination, Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            className="relative rounded-lg [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background">
                            {[
                                useCarrier.names['ids2'],
                                useCarrier.names['ids3'],
                                useCarrier.names['ids4'],
                                useCarrier.names['ids5'],
                            ].map((img, index) => (
                                <SwiperSlide key={index} className="select-none">
                                    <img
                                        src={img}
                                        alt={`image-${index}`}
                                        className="h-[28rem] w-full object-cover object-[100%0%]"
                                    />
                                </SwiperSlide>
                            ))}
                            <CustomNavigation />
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="flex bg-[#1E2665] w-full h-1/6 -mt-1.5">
                <div className="px-4 "></div>
                <ul className="w-full inline-flex pt-3 pb-3 text-white text-center align-middle content-stretch space-x-30">
                    <li><a href="#" className="text-left content-stretch">Shows internacionais</a></li>
                    <li><a href="#" className="text-left content-stretch">Shows nacionais</a></li>
                    <li><a href="#" className="text-left content-stretch">Teatro & Comédia</a></li>
                    <li><a href="#" className="text-left content-stretch">Infantil e Família</a></li>
                    <li><a href="#" className="text-center content-stretch">Esportes</a></li>
                    <li><a href="#" className="text-left content-stretch">Lazer e Turismo</a></li>
                    <li><a href="#" className="text-left content-stretch">Newsletter</a></li>
                </ul>
                <div className="px-4 "></div>
            </section>
            <section className="flex-wrap w-full max-h-9/10 h-full">
                <div className="w-full flex-wrap">
                    <h2 className=" text-3xl w-full py-6 px-6">Adicionados Recentemente</h2>
                </div>
                <div className="inline-flex grid-cols-4 w-full h1/3 space-x-40 px-10">
                    <div className="">
                        <div className="card-evento1">
                            <img className="img-evento1" src={useCarrier.names['ids0']} alt="Evento #"/>
                        </div>
                        <h4 className="text-xl">{useCarrier.names['_embedded']['events'][0]['name']}</h4>
                        <a href="#"><h5 className="text-blue-600 text-xl underline">Comprar</h5></a>
                    </div>
                    <div className="carrossel-novos_eventos2">
                        <div className="card-evento2">
                            <img className="img-evento2" src={useCarrier.names['ids1']} alt="Evento #"/>
                        </div>
                        <h4 className="text-2xl">{useCarrier.names['_embedded']['events'][1]['name']}</h4>
                        <a href="#"><h5 className="text-blue-600 text-xl underline">Comprar</h5></a>
                    </div>
                    <div className="carrossel-novos_eventos3">
                        <div className="card-evento3">
                            <img className="img-evento3" src={useCarrier.names['ids2']} alt="Evento #"/>
                        </div>
                        <h4 className="text-2xl">{useCarrier.names['_embedded']['events'][2]['name']}</h4>
                        <a href="#"><h5 className="text-blue-600 text-xl underline">Comprar</h5></a>
                    </div>
                    <div className="carrossel-novos_eventos4">
                        <div className="card-evento4">
                            <img className="img-evento4" src={useCarrier.names['ids8']} alt="Evento #"/>
                        </div>
                        <h4 className="text-2xl">{useCarrier.names['_embedded']['events'][8]['name']}</h4>
                        <a href="#"><h5 className="text-blue-600 text-xl underline">Comprar</h5></a>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}