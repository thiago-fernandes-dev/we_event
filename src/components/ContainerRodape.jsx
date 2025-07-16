import React from "react";

export function ContainerRodape() {
    return (
        <section className="w-full bg-[#1E2665] py-10 px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-evenly max-w-6xl mx-auto space-y-8 lg:space-y-0">

                <div className="flex justify-center lg:justify-start">
                    <img src="src/assets/Logo.svg" className="h-16" alt="Logo WE EVENT" />
                </div>

                <div className="flex flex-col items-center lg:items-end">
                    <h3 className="text-2xl text-white font-bold mb-4">Social Media</h3>
                    <ul className="flex space-x-6">
                        <li><a href="#"><img src="src/assets/Instagram.svg" alt="Instagram" className="h-6" /></a></li>
                        <li><a href="#"><img src="src/assets/TikTok.svg" alt="TikTok" className="h-6" /></a></li>
                        <li><a href="#"><img src="src/assets/Linkedin.svg" alt="LinkedIn" className="h-6" /></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
