import Artigas from '../assets/Artigas_Logo.svg'


export default function Arquitectos() {
  return (
    <section className="px-6 py-16 lg:p-16 mt-40 relative h-full w-full bg-neutral-900">
        <div className="absolute inset-0 bg-[#C91E7B] bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <div className="flex justify-center">
            <div className="grid md:grid-cols-3 relative">
                <div className="lg:mt-16">
                    <span className="text-white text-xs tracking-[0.2em] uppercase">Diseños Impresionantes</span>
                    <h3 className="text-white font-bold text-3xl mt-2 uppercase">Firmas Destacadas</h3>
                </div>
                <div className="md:grid lg:col-span-2 md:grid-cols-3 md:gap-10 lg:gap-4 mt-6 md:mt-0">
                    <div className="hidden md:flex p-4 lg:w-60 lg:h-60">
                       
                    </div>
                    <div className="p-4 w-52 lg:w-60 lg:h-60">
                        <img src={Artigas} alt="" className='' />
                    </div>
                    <div className="hidden md:flex p-4 lg:w-60 lg:h-60">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
