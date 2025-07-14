import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

export function EventosPrincipais(){
    //let carousel = "placeholder";
    const praFrente = () =>{
        const carouselHTML = document.getElementById('controls-carousel');
        carouselHTML.next();
    };
    const praTras = () =>{
        let carouselHTML = document.getElementById('controls-carousel');
        carouselHTML.prev();
    };

    return (
        <section className="inline-flex w-full max-h-1/4 m-0">
            <div className="flex w-full m-0">
                <div className="hidden md:inline-flex w-1/2">
                    <a href="#" className="w-1/2"><img id="evento1-img" src="src/assets/event_main_1.png" alt="#" className="w-full h-full"/></a>
                    <a href="#" className="w-1/2"><img id="evento2-img" src="src/assets/event_main_2.png" alt="#" className="w-full h-full"/></a>
                </div>

                <Carousel id="controls-carousel"
                    transition={{duration: 2}}
                    className="rounded-xl w-full md:w-1/2 h-full overflow-clip "
                    prevArrow={() => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={() =>{
                                praTras();
                            }}
                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                    nextArrow={() => (
                        <IconButton
                            variant="text"
                            color="white"
                            size="lg"
                            onClick={() =>{
                                praFrente();
                            }}
                            className="!absolute top-2/4 !right-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </IconButton>
                    )}
                >
                    <img
                        src="src/assets/event_main_carrosel_1.png"
                        alt="image 1"
                        className=" absolute block object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                    <img
                        src="src/assets/event_main_carrosel_2.png"
                        alt="image 2"
                        className=" absolute block object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                    <img
                        src="src/assets/event_main_carrosel_3.png"
                        alt="image 3"
                        className=" absolute block object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                    <img
                        src="src/assets/BeeGees.jpeg"
                        alt="image 4"
                        className=" absolute block object-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                </Carousel>

            </div>
        </section>
    )
}