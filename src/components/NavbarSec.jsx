import { useState } from 'react';

import Logo from '../assets/domum color.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
      // Agregar la clase al cerrar el menú
      document.querySelector('.menu-overlay').classList.add('menu-overlay-cierre');
  
      // Eliminar la clase después de que finalice la animación (puedes ajustar el tiempo)
      setTimeout(() => {
        document.querySelector('.menu-overlay').classList.remove('menu-overlay-cierre');
        setIsMenuOpen(false);
      }, 500); // Ajusta el tiempo según la duración de tu animación
    };

  return (
    <div>
        <header className='py-6 px-10 fixed top-0 w-full justify-between z-40 text-white bg-white opacity-90'>
            <div className="container mx-auto flex items-center">
                <div className="flex flex-grow basis-0">
                    <a href="/">
                        <img src={ Logo } alt="" className='w-36'/>
                        {/* <h1 className='text-3xl font-bold'>Domum</h1> */}
                    </a>
                </div>

                <nav className="flex flex-grow basis-0 justify-end">
                  <button className={`border-[1px] p-1 text-black`} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify">
                      <line x1="3" x2="21" y1="6" y2="6"/>
                      <line x1="3" x2="21" y1="12" y2="12"/>
                      <line x1="3" x2="21" y1="18" y2="18"/>
                    </svg>
                  </button>

                  {isMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 cursor-pointer" onClick={closeMenu}></div>
                  )}

                  {isMenuOpen && (
                    <div className={`fixed top-0 right-0 flex flex-col h-screen pl-16 pr-20 pt-6 bg-white text-black ${isMenuOpen ? 'menu-overlay' : 'menu-overlay-cierre'}`}>
                      {/* Aquí agregarías el contenido del menú */}
                      <button onClick={closeMenu} className='flex justify-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
                      <nav className='mt-12 text-3xl'>
                        <ul className="[&>li>a]:text-current [&>li>a]:font-bold [&>li>a]:block [&>li>a]:pr-32 [&>li>a]:py-4">
                            <li><a href="/about" className='hover:text-[#C91E7B]'>Nosotros</a></li>
                            <li><a href="/desarrollos" className='hover:text-[#C91E7B]'>Desarrollos</a></li>
                            <li><a href="#" className='hover:text-[#C91E7B]'>Blog</a></li>
                            <li><a href="#" className='hover:text-[#C91E7B]'>Contacto</a></li>
                        </ul>
                      </nav>

                      <div className="flex space-x-8 mt-40">
                        <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/></svg>
                        </a>
                        <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg>
                        </a>
                        <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/tu.casa.comebi/" target="_blank"  rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>
                        <a href="https://es-la.facebook.com/COMEBI.MX/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C91E7B]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                      </div>
                    </div>
                  )}
                </nav>
            </div>
        </header>
    </div>
  )
}
