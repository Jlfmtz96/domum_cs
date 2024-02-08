import Villa from '../assets/lagos.png'
import Contador from '../components/Contador'
import Navbar from '../components/Navbar'

export default function ComingSoon() {
  return (
    <section>
        <Navbar />
        <div className='h-full md:h-screen bg-black md:overflow-hidden relative flex items-center justify-center'>
            <div className='absolute opacity-25 z-0 h-full w-full'>
                <img src={Villa} alt=""  className='object-cover w-full h-full'/>
            </div>
            <div className='text-white z-30 p-20 mt-12 md:mt-0'>
                <div className="text-center">
                    <span className='text-xs tracking-[0.2em] uppercase'>Espéralo</span>
                    <h3 className='font-bold text-5xl mt-2'>Próximamente</h3>
                </div>
                <div className='mt-12 md:mt-32'>
                    <Contador />
                </div>
                <div className='mt-28 text-center'>
                    <a href="/" className='border p-4 text-sm'>
                        <span>Volver a la página de inicio</span> 
                    </a>
                </div>
            </div>
        </div>

    </section>
  )
}
