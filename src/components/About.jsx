import P_Slp from '../assets/Prototipo 1_SLP.png'



export default function About() {
  return (
    <section className='container mx-auto mt-40'>
        <div className="lg:flex lg:space-x-12">
            <div className='lg:w-1/2'>
                <img src={P_Slp} alt="" />
            </div>
            <div className='lg:w-1/2 px-8 lg:px-0 mt-10'>
                <span className='text-xs tracking-[0.2em] uppercase'>Somos <h1 className="inline-flex">Casas Domum</h1></span>
                <h3 className='font-bold text-3xl mt-2'>Nuestros residenciales se inspiran en el reto de equilibrar funcionalidad y belleza.</h3>
                <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utins labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco cot laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vactil oluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className='mt-16'>
                    <a href="" className='border p-4 text-sm'>
                        <span>Contactanos</span> 
                    </a>
                </div>
                <div className='mt-16 grid grid-cols-2 gap-2 md:grid-cols-3'>
                    <div>
                        <span className='font-bold text-3xl'>10</span>
                        <p className=' uppercase tracking-[0.2em] text-sm'>Años de experiencia</p>
                    </div>
                    <div>
                        <span className='font-bold text-3xl'>100</span>
                        <p className=' uppercase tracking-[0.2em] text-sm'>Clientes Felices</p>
                    </div>
                    <div>
                        <span className='font-bold text-3xl'>3</span>
                        <p className=' uppercase tracking-[0.2em] text-sm'>Proyectos Completados</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
