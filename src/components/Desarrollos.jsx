import r1 from '../assets/r5.jpg'
import r2 from '../assets/r2.jpeg'
import r3 from '../assets/r3.jpeg'
import r4 from '../assets/r4.jpg'
import cdm from '../assets/cdm.jpg'
import p2 from '../assets/Prototipo 2_SLP.png'
import Alia from '../assets/icono_icono_gris.png'


export default function Desarrollos() {
  return (
    <section className="container mx-auto mt-40">
        <div className="text-center">
            <span className="text-xs tracking-[0.2em] uppercase">Nuestro Trabajo</span>
            <h3 className="font-bold text-3xl mt-2">Últimos Desarrollos</h3>
        </div>
        <div className="mt-20 grid lg:grid-cols-3 gap-4">
            <div className='group relative'>
                <div className='h-80 overflow-hidden'>
                    <img src={r4} alt="" className='object-cover w-full h-full'/>
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000 text-center text-white'>
                    <span className='text-sm uppercase tracking-[0.2em] '>Próximamente</span>
                    <img src={Alia} alt="" className='opacity-75' />
                </div>
                <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <a href="/coming-soon-vm">
                        <h3 className='font-bold text-xl'>Alia Resindencial</h3>
                    </a>
                    <span className='text-xs'>San Luis Potosí, Mx</span>
                </div>
            </div>
            <div className='group relative'>
                <div className='h-80 overflow-hidden'>
                    <img src={cdm} alt="" className='object-cover w-full h-full'/>
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-75 lg:transition-opacity lg:duration-1000 text-center text-white'>
                    <span className='text-sm uppercase tracking-[0.2em]'></span>
                    <img src={Alia} alt="" />
                </div>
                <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <a href="/desarrollo-alia">
                        <h3 className='font-bold text-xl'>Alia Residencial</h3>
                    </a>
                    <span className='text-xs'>Querétaro, Mx</span>
                </div>
            </div>
            <div className='group relative'>
                <div className='h-80 overflow-hidden'>
                    <img src={r3} alt="" className='object-cover w-full h-full'/>
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-75 lg:transition-opacity lg:duration-1000 text-center text-white'>
                    <span className='text-sm uppercase tracking-[0.2em]'></span>
                    <img src={Alia} alt="" />
                </div>
                <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <a href="/desarrollo-lagos">
                        <h3 className='font-bold text-xl'>Casas Domum</h3>
                    </a>
                    <span className='text-xs'>San Luis Potosí, Mx</span>
                </div>
            </div>

            <div className='group relative'>
                <div className=' h-80 overflow-hidden'>
                    <img src={r2} alt="" className='object-cover w-full h-full' />
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-75 lg:transition-opacity lg:duration-1000 text-center text-white'>
                    <span className='text-sm uppercase tracking-[0.2em]'></span>
                    <img src={Alia} alt="" />
                </div>
                <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <a href="/desarrollo-lagos">
                        <h3 className='font-bold text-xl'>Casas Domum</h3>
                    </a>
                    <span className='text-xs'>San Luis Potosí, Mx</span>
                </div>
            </div>
            <div className='group relative'>
                <div className='h-80 overflow-hidden'>
                    <img src={r1} alt="" className='object-cover w-full h-full' />
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-75 lg:transition-opacity lg:duration-1000 text-center text-white'>
                    <span className='text-sm uppercase tracking-[0.2em]'></span>
                    <img src={Alia} alt="" />
                </div>
                <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <a href="/desarrollo-alia">
                        <h3 className='font-bold text-xl'>Alia Resindecial</h3>
                    </a>
                    <span className='text-xs'>Querétaro, Mx</span>
                </div>
            </div>
            <div className='group relative'>
                <div className='h-80 overflow-hidden'>
                    <img src={p2} alt="" className='object-cover w-full h-full' />
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-1000 text-center text-white'>
                    <span className='text-sm uppercase tracking-[0.2em]'>Próximamente</span>
                    <img src={Alia} alt="" className='opacity-75'/>
                </div>
                <div className="absolute bottom-10 left-0 bg-white py-2 pl-6 pr-12 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity">
                    <a href="/coming-soon-vm">
                        <h3 className='font-bold text-xl'>Alia Residencial</h3>
                    </a>
                    <span className='text-xs'>San Luis Potosí, Mx</span>
                </div>
            </div>
        </div>
        <div className='mt-16 text-center'>
            <a href="" className='border p-4 text-sm'>
                <span>Ve todos los proyectos</span> 
            </a>
        </div>
    </section>
  )
}
