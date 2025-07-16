import React, { useState } from 'react';

export function Hamburger() {

    const [open, setOpen] = useState(false);
    
    const openMenu = () => {
        setOpen(prev => !prev)
    }

    return (
        <section className='w-full md:hidden'>
            <div className='flex items-start justify-between px-2'> 
                <img src="src/assets/Logo.svg" alt="Logo WeEvent" className='pl-2'/>

                <div className='flex flex-col items-end'>
                    <button onClick={openMenu} aria-label="Abrir menu" className='py-2 -mr-8'>
                        <img src="src/assets/burger-solid_w.svg" alt="Menu" className='w-7 h-7' />
                    </button>
                </div>
            </div>

            { open && (
                <div className='bg-[#1E2665] flex justify-center text-white text-sm py-2 space-y-1 w-full ml-8 mt-1'>
                    <a href="#" className='block px-4'><img src="src/assets/Login.svg" alt="Login "/></a>
                    <a href="#" className='block px-4'><img src="src/assets/Favoritos.svg" alt="Seus Favoritos"/></a>
                    <a href="#" className='block px-4'><img src="src/assets/Linguagem.svg" alt="Mudar Linguagem"/></a>
                </div>
            )}   
        </section>
    )
}