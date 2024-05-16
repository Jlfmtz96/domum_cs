import Contador from '../components/Contador'
import { DragCloseDrawerExample } from '../components/DragCloseDrawer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function ComingSoon() {
  return (
    <section>
        <Navbar />
        <div className='h-full md:h-screen bg-black md:overflow-hidden relative flex items-center justify-center'>
            <div className='absolute opacity-70 z-0 h-full w-full'>
                {/* <img src={Villa} alt=""  className='object-cover w-full h-full'/> */}
                <Hero />
            </div>
            <div className='text-white z-30 p-20 mt-12 md:mt-0'>
                <div className="text-center">
                    <span className='text-xs tracking-[0.2em] uppercase'>Alia Residencial</span>
                    <h3 className='font-bold text-5xl mt-2'>Se de los primeros en ser parte de este gran proyecto</h3>
                    <span className='text-xs tracking-[0.2em] uppercase'>Próximamente</span>

                </div>
                <div className='mt-12 md:mt-32'>
                    <Contador />
                </div>
                <div className='mt-28 text-center'>
                    <DragCloseDrawerExample />
                </div>
            </div>
        </div>

    </section>
  )
}
