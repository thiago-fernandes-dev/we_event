import React from "react";

export function ContainerRodape() {
    return (
        <section className="inline-flex w-full max-h-3/4 h-full grid-cols-2 object-center space-x-20 bg-[#1E2665]">
            <div className="w-1/4"></div>
            <img src="src/assets/Logo.svg" className="" alt="Logo WE EVENT"/>
            <div className="w-1/4 space-y-2 my-25">
                <h3 className="text-3xl text-white font-bold">Social Media</h3>
                <ul className="inline-flex space-x-10">
                    <li><a href="#"><img src="src/assets/Instagram.svg" alt="Instagram"/></a></li>
                    <li><a href="#"><img src="src/assets/Tiktok.svg" alt="Tik-tok"/></a></li>
                    <li><a href="#"><img src="src/assets/Linkedin.svg" alt="Linkedin"/></a></li>
                </ul>
            </div>
            <div className="w-1/4"></div>
        </section>
    )
}