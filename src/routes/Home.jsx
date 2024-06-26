import About from "../components/About";
import Arquitectos from "../components/Arquitectos";
import Blog from "../components/Blog";
import Contador from "../components/Contador";
import Desarrollos from "../components/Desarrollos";
import { DragCloseDrawerExample } from "../components/DragCloseDrawer";
import Especialidad from "../components/Especialidad";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Team from "../components/Team";


export default function Home() {
  return (
    <>
    <Navbar />
    {/* <Hero />
    <About />
    <Especialidad />
    <Desarrollos />
    <Arquitectos />
    <Team />
    <Blog />
    <Footer /> */}
    <div className='h-full md:h-screen bg-black md:overflow-hidden relative flex items-center justify-center'>
        <div className='absolute opacity-85 z-0 h-full w-full'>
            {/* <img src={Villa} alt=""  className='object-cover w-full h-full'/> */}
            <Hero />
        </div>
        <div className='text-white z-30 p-20 mt-12 md:mt-0'>
            <div className="text-center">
                <span className='text-xs tracking-[0.2em] uppercase'>Alia Residencial</span>
                <div className="max-w-6xl mx-auto text-center my-4">
                    <h3 className='font-bold text-5xl'>Sé de los primeros en conocer nuestro nuevo desarrollo en Querétaro</h3>
                </div>
                {/* <h3 className='font-bold text-5xl my-2'>No te pierdas la oportunidad de ser parte de algo único.  Sé de los primeros en conocer nuestro nuevo desarrollo en Querétaro</h3> */}
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
    </>
  )
}
