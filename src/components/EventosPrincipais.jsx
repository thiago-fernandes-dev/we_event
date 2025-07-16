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


function CustomNavigation() {

    const swiper = useSwiper();
    return (
        <>
            <IconButton
                isCircular
                size="lg"
                variant="ghost"
                color="secondary"
                onClick={() => swiper.slidePrev()}
                className="dark !absolute left-2 top-1/2 z-10 -translate-y-1/2"
            >
                <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
            </IconButton>
            <IconButton
                isCircular
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

export function EventosPrincipais(){
    return (
        <section className="flex w-full flex-col lg:flex-row">
                <div className="hidden h-[38rem] lg:flex lg:w-1/2">
                    <a href="#" className="w-1/2"><img id="evento1-img" src="src/assets/event_main_1.png" alt="#" className="w-full h-full object-fill"/></a>
                    <a href="#" className="w-1/2"><img id="evento2-img" src="src/assets/event_main_2.png" alt="#" className="w-full h-full object-fill"/></a>
                </div>

                <div className="relative w-full lg:w-1/2 h-120 md:h-180 lg:h-[38rem]">
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
                        className="h-full w-full"
                    >
                        {[
                            "src/assets/event_main_carrosel_1.png",
                            "src/assets/event_main_carrosel_2.png",
                            "src/assets/event_main_carrosel_3.png",
                            "src/assets/BeeGees.jpeg",
                        ].map((img, index) => (
                            <SwiperSlide key={index} className="h-full w-full select-none">
                                <img
                                    src={img}
                                    alt={`image-${index}`}
                                    className="w-full h-full object-fill object-center"
                                />
                            </SwiperSlide>
                        ))}
                        <CustomNavigation />
                    </Swiper>
                </div>
        </section>
    )
}