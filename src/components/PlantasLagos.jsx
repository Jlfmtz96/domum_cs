import { useState } from 'react';
import ModalImage from 'react-modal-image';

import PlantaB from '../assets/planta b.png'
import PlantaA from '../assets/planta A.png'

export default function PlantasLagos() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
    <h2 className='font-bold text-5xl'>Plantas</h2>
    <div className="md:flex mt-16 md:space-x-6">
        <div className="md:w-1/2">
            <div>
                <ModalImage
                    small={PlantaB}
                    large={PlantaB}
                    alt="Planta baja"
                    onClick={() => setIsOpen(true)}
                />

                {isOpen && (
                    <div onClick={() => setIsOpen(false)}>
                    {/* You can add additional styling or close button if needed */}
                    <img src={PlantaB} alt="Planta baja" />
                    </div>
                )}
            </div>
            <div>
                <div className="flex my-10 items-center justify-between">
                    <h3 className='font-bold text-2xl'>Planta Baja</h3>
                    <span className='border-b-2 w-1/2 2xl:w-3/4'></span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                    <div>🚗 Cochera</div>
                    <div>🛋 Sala</div>
                    <div>🍴 Comedor</div>
                    <div>🍳 Cocina</div>
                    <div>🛁 1 Baño</div>
                    <div>🚽 1/2 Baño</div>
                    <div>🛏 1 Recámara</div>
                    <div>🧺 Área de Servicio</div>
                    <div>🏡 Jardín</div>

                </div>
            </div>

        </div>
        <div className="md:w-1/2 mt-16 md:mt-0">
            <div>
                <ModalImage
                    small={PlantaA}
                    large={PlantaA}
                    alt="Planta alta"
                    onClick={() => setIsOpen(true)}
                />

                {isOpen && (
                    <div onClick={() => setIsOpen(false)}>
                    {/* You can add additional styling or close button if needed */}
                    <img src={PlantaA} alt="Planta alta" />
                    </div>
                )}
            </div>
            <div>
                <div className="flex my-10 items-center justify-between">
                    <h3 className='font-bold text-2xl'>Planta Alta</h3>
                    <span className='border-b-2 w-1/2 2xl:w-3/4'></span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                    <div>⬜ Balcón</div>
                    <div>🛏 2 Recámaras</div>
                    <div>🛁 2 Baños</div>
                    <div>📺 Área de TV</div>
                    <div>👗 vestidor</div>
                </div>
            </div>

        </div>
    </div>
    </section>
  )
}
