import { useState } from "react";
import GLagos from "./GLagos";
import PlantasLagos from "./PlantasLagos";
import Lagos3D from "./Lagos3D";
import Entorno from "./Entorno"
import Domum from '../assets/domum color.png'
import Terreno from '../assets/icono 160m2.png'
import Mts from '../assets/icono 231.29m2.png'


export default function ProjectLagos() {
    const [selectedMenu, setSelectedMenu] = useState("GLagos");

    const handleMenuClick = (menu) => {
      setSelectedMenu(menu);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <section className="mt-40">
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-4 gap-6 px-4 lg:px-0">
                <div className=" lg:col-span-3">
                {selectedMenu === "GLagos" ? ( <GLagos /> ) : ( selectedMenu === "PlantasLagos" ? ( <PlantasLagos /> ) : ( selectedMenu === "Lagos3D" ? ( <Lagos3D /> ) : ( <Entorno /> ) ))}

                </div>
                <div id="info" className=" p-10 border relative bg-white">
                    <div className="h-28">
                        <img src={Domum} alt="" className="w-full h-full object-cover"/>
                    </div>
                    <h3 className='font-bold text-4xl'>Domum Lagos</h3>
                    <div className="mt-10">
                        <p className="text-justify text-sm">Lorem ipsum dolor sit amet, consectetur adipis lot cing elit, sed doeiusmod tempor incididunt ut stit labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                    <div className="mt-10 mb-4 2xl:my-10">
                        <p className="mt-6 text-sm"><span className="font-bold text-base text-slate-700 uppercase mr-4">Fecha:</span> Mayo - 21 - 2018</p>
                        <p className="mt-6 text-sm"><span className="font-bold text-base text-slate-700 uppercase mr-4">Estatus:</span>Terminado</p>
                        <p className="mt-6 text-sm"><span className="font-bold text-base text-slate-700 uppercase mr-4">Diseño:</span>Artigas</p>
                        <p className="mt-6 text-sm"><span className="font-bold text-base text-slate-700 uppercase mr-4">Ubicación:</span>Los Lagos Residencial, 78421 San Luis Potosí, S.L.P, Mx</p>
                    </div>

                    <div className="grid grid-cols-2 mb-5">
                        <div className="p-4 w-16 h-16 flex space-x-4 items-end">
                            <img src={Terreno} alt="" className="w-full h-full"/>
                            <p className="text-nowrap">162 m<sup>2</sup></p>
                        </div>
                        <div className="p-4 w-16 h-16 flex space-x-4 items-end">
                            <img src={Mts} alt="" className="w-full h-full"/>
                            <p className="text-nowrap">231.29 m<sup>2</sup></p>
                        </div>
                    </div>
                    
                    <div id="menu" className="flex space-x-10 mt-20 border-t p-4 absolute bottom-0 left-0 w-full justify-center">
                        <button onClick={() => handleMenuClick("GLagos")} className={`hover:text-[#C91E7B] focus:outline-none relative group ${selectedMenu === "GLagos" ? "text-[#C91E7B]" : ""}`}>
                            <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-image"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><circle cx="10" cy="8" r="2"/><path d="m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17"/></svg>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                <span className="text-xs tracking-[0.2em] uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Galeria</span>
                            </div>
                        </button>
                        <button onClick={() => handleMenuClick("PlantasLagos")} className={`hover:text-[#C91E7B] focus:outline-none relative group ${selectedMenu === "PlantasLagos" ? "text-[#C91E7B]" : ""}`}>
                            <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                <span className="text-xs tracking-[0.2em] uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Plantas</span>
                            </div>
                        </button>
                        <button onClick={() => handleMenuClick("Lagos3D")} className={`hover:text-[#C91E7B] focus:outline-none relative group ${selectedMenu === "Lagos3D" ? "text-[#C91E7B]" : ""}`}>
                            <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-3d"><path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"/><path d="m15.194 13.707 3.814 1.86-1.86 3.814"/><path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"/></svg>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                <span className="text-xs tracking-[0.2em] uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Recorrido 360°</span>
                            </div>
                        </button>
                        <button onClick={() => handleMenuClick("Entorno")} className={`hover:text-[#C91E7B] focus:outline-none relative group ${selectedMenu === "Entorno" ? "text-[#C91E7B]" : ""}`}>
                            <div className="opacity-100 group-hover:opacity-0 transition-opacity duration-1000">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                <span className="text-xs tracking-[0.2em] uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Tu entorno</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
