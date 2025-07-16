import React from "react";
import { useCarrier } from "./EventsContainer.jsx";
import {useNavigate} from "react-router-dom";

export function ContainerMenu(){
    const {images, names, addStrings, addImages} = useCarrier();
    const navigate = useNavigate();
    console.log(names);
    console.log(images);

    async function getAPIData(event){
        event.preventDefault()
        let texto = document.getElementById('search-dropdown');
        let busca = texto.value;
        texto.value = "";
        //const response = await fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=nYvNppFddmYCde75HwHboWYAhgA68k2F&keyword=S%C3%A3o%20Paulo&locale=*",{
        const response = await fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=1vA55IAi84MprM2iCENhfYOJsgN266rW&keyword="+busca+"&locale=*",{
            //const response = await fetch("https://app.ticketmaster.com/discovery/v2/events/ZFIMVHtnMZ177xfF/images.json?apikey=nYvNppFddmYCde75HwHboWYAhgA68k2F",{
            type: "GET",
            async:true,
            dataType: "json",
            HTTP: 1.1,
            Host: "app.ticketmaster.com",
        });
        if(response){
            let newData = await response.json();
            console.log(newData);
            useCarrier.names = newData;
            let temp = useCarrier.names['_embedded']['events'];
            for(let n = 0; n < temp.length; n++){
                let briefResponse = await fetch("https://app.ticketmaster.com/discovery/v2/events/"+temp[n]['id']+"/images.json?apikey=1vA55IAi84MprM2iCENhfYOJsgN266rW", {
                    type: "GET",
                    async: true,
                    dataType: "json",
                    HTTP: 1.1,
                    Host: "app.ticketmaster.com",
                });
                let newImages = await briefResponse.json();
                useCarrier.names["ids"+n] = newImages['images'][3]['url']
                setTimeout(() => {
                }, 1000);
            }

            //const imageResponse = await fetch("https://app.ticketmaster.com/discovery/v2/events/ZFIMVHtnMZ177xfF/images.json?apikey=nYvNppFddmYCde75HwHboWYAhgA68k2F");

            //let newImages = await imageResponse.json();
            //console.log(newImages);
            //useCarrier.images = newImages;
            //console.log(useCarrier.images['images'][0]['url']);
            //console.log(useCarrier.names['_embedded']['events'][0]['name']+"o id: "+useCarrier.names['_embedded']['events'][0]['id']);
            console.log(useCarrier.names["ids0"]);
            navigate('/novos');
        }
    }

    return (
        <section className="bg-[#1E2665]">
            <div className="w-full py-3"></div>
            <div className="inline-flex space-x-10 w-full">
                <div className="w-1/28"></div>
                <img id="wewent-img" src="src/assets/Logo.svg" alt="Logo WE EVENT"/>
                <a href="#" id="todos-eventos-link"><img id="eventos-img" src="src/assets/Eventos.svg" alt="Todos os Eventos"/></a>

                <form className="w-1/3" onSubmit={getAPIData}>
                    <div className="flex w-full">
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-base rounded-2xl py-4 text-gray-900 bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400  " placeholder="Buscar eventos" required/>
                            <button type="submit" className="absolute top-0 end-0 p-5 text-sm font-medium h-full text-gray-400 bg-white rounded-2xl  hover:bg-gray-50 focus:ring-1 focus:outline-none  ">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                <a href="" className="content-center"><img src="src/assets/Login.svg" alt="Login "/></a>
                <a href="" className="content-center"><img src="src/assets/Favoritos.svg" alt="Seus Favoritos"/></a>
                <a href="" className="content-center"><img src="src/assets/Linguagem.svg" alt="Mudar Linguagem"/></a>
                <div className="w-1/28"></div>
            </div>
            <div className="w-full py-3"></div>
        </section>
    )
}