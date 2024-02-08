
export default function Especialidad() {
  return (
    <section className="px-6 py-16 lg:p-16 mt-40 relative h-full w-full bg-neutral-900">
        <div className="absolute inset-0 bg-[#C91E7B] bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <div className="lg:flex justify-center lg:space-x-36 relative">
            <div className="lg:mt-16">
                <span className="text-white text-xs tracking-[0.2em] uppercase">Lo que nos distingue</span>
                <h3 className="text-white font-bold text-3xl mt-2">Nuestra especialidad</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-10 lg:gap-4 mt-6 lg:mt-0">
                <div className="flex flex-col items-center justify-center bg-slate-100 p-4 lg:w-60 lg:h-60">
                    <img src="https://freebw.com/templates/tatee/images/icon/service-01.png" alt="" />
                    <p className="font-bold text-xl uppercase mt-4">Arquitectura</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-100 p-4 lg:w-60 lg:h-60">
                    <img src="https://freebw.com/templates/tatee/images/icon/service-02.png" alt="" />
                    <p className="font-bold text-xl uppercase mt-4">Interior</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-100 p-4 lg:w-60 lg:h-60">
                    <img src="https://freebw.com/templates/tatee/images/icon/service-03.png" alt="" />
                    <p className="font-bold text-xl uppercase mt-4">Planeación</p>
                </div>
            </div>
        </div>
    </section>
  )
}
