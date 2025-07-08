import React from "react";
import { Carousel } from 'flowbite';
import {document} from "postcss";

export function EventosPrincipais(){
    let carousel = "placeholder"
    const praFrente = () =>{
        const carouselHTML = document.getElementById('animation-carousel');

        const items = [
            {
                position: 0,
                el: document.getElementById('carousel-item-1'),
            },
            {
                position: 1,
                el: document.getElementById('carousel-item-2'),
            },
            {
                position: 2,
                el: document.getElementById('carousel-item-3'),
            },
            {
                position: 3,
                el: document.getElementById('carousel-item-4'),
            },
        ];

        const options = {
            defaultPosition: 1,
            interval: 2000,

        };

        const instanceOptions = {
            id: 'animation-carousel',
            override: false
        };
        if(carousel === "placeholder"){
            carousel = new Carousel(carouselHTML, items, options,instanceOptions);
            console.log("criou novo carousel");
        }
        carousel.next();
    }
    const praTras = () =>{
        let carouselHTML = document.getElementById('animation-carousel');

        const items = [
            {
                position: 0,
                el: document.getElementById('carousel-item-1'),
            },
            {
                position: 1,
                el: document.getElementById('carousel-item-2'),
            },
            {
                position: 2,
                el: document.getElementById('carousel-item-3'),
            },
            {
                position: 3,
                el: document.getElementById('carousel-item-4'),
            },
        ];

        const options = {
            defaultPosition: 1,
            interval: 2000,

        };

        const instanceOptions = {
            id: 'animation-carousel',
            override: false
        };
        if(carousel === "placeholder"){
            carousel = new Carousel(carouselHTML, items,options, instanceOptions);
            console.log("criou novo carousel");
        }
        carousel.prev();
    }

    return (
        <section className="inline-flex w-full max-h-1/4">
            <div className="flex w-full">
                <div className="inline-flex w-1/2">
                    <a href="#" className="w-1/2"><img id="evento1-img" src="src/assets/event_main_1.png" alt="#" className="w-full h-full"/></a>
                    <a href="#" className="w-1/2"><img id="evento2-img" src="src/assets/event_main_2.png" alt="#" className="w-full h-full"/></a>
                </div>

                <div id="animation-carousel" className="relative w-1/2" data-carousel="slide">
                    <div className="relative h-full overflow-clip rounded-lg md:h-full">
                        <div id="carousel-item-1" className=" object-cover w-full   duration-200 ease-linear" data-carousel-item>
                            <img src="src/assets/event_main_carrosel_1.png" className="  object-cover w-full h-full" alt="..."/>
                        </div>
                        <div id="carousel-item-2" className=" object-cover w-full  duration-200 ease-linear" data-carousel-item>
                            <img src="src/assets/event_main_carrosel_2.png" className=" object-cover   w-full h-full " alt="..."/>
                        </div>
                        <div id="carousel-item-3" className="object-cover w-full  duration-200 ease-linear" data-carousel-item="active">
                            <img src="src/assets/event_main_carrosel_3.png" className="  object-cover w-full h-full " alt="..."/>
                        </div>
                        <div id="carousel-item-4" className=" object-cover w-full duration-200 ease-linear" data-carousel-item>
                            <img src="src/assets/BeeGees.jpeg" className="object-cover  w-full h-full " alt="..."/>
                        </div>
                    </div>
                    <button onClick={() => {
                        praTras();
                    }} id="carousel-anterior" type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button onClick={() => {
                        praFrente();
                    }} id="carousel-proximo" type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>
        </section>
    )
}