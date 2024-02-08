
export default function Blog() {
  return (
    <section className="container mx-auto mt-40">
        <div className="text-center">
            <span className="text-xs tracking-[0.2em] uppercase">Del Blog</span>
            <h3 className="font-bold text-3xl mt-2">Últimas novedades</h3>
        </div>
        <div className="mt-20 grid lg:grid-cols-2 gap-12">
            <div>
                <div className="lg:h-96 overflow-hidden">
                    <a href="" className="inline-block overflow-hidden transform transition-transform duration-1000 hover:scale-110">
                        <img src="https://comebi.mx/wp-content/uploads/2022/01/footer-comebi.png" alt="" />
                    </a>
                </div>
                <div className="mt-6">
                    <a href="">
                        <h3 className="text-lg font-bold uppercase">ENTREGA DE VIVIENDA</h3>
                    </a>
                    <div className="mt-2"><span className="text-xs tracking-[0.2em] text-slate-500">31 - Enero - 2024</span></div>
                    <p className=" text-justify mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidis idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ercaus itation ullamco laboris nisi ut aliquip . . .</p>
                </div>
            </div>
            <div>
                <div className="lg:h-96 overflow-hidden">
                    <a href="" className="inline-block overflow-hidden transform transition-transform duration-1000 hover:scale-110">
                        <img src="https://comebi.mx/wp-content/uploads/2022/02/Recomendados.jpg" alt="" />
                    </a>
                </div>
                <div className="mt-6">
                    <a href="">
                        <h3 className="text-lg font-bold uppercase">Programa de referidos</h3>
                    </a>
                    <div className="mt-2"><span className="text-xs tracking-[0.2em] text-slate-500">31 - Enero - 2024</span></div>
                    <p className=" text-justify mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidis idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ercaus itation ullamco laboris nisi ut aliquip . . .</p>
                </div>
            </div>
        </div>
        <div className='mt-16 text-center'>
            <a href="" className='border p-4 text-sm'>
                <span>Ver más</span> 
            </a>
        </div>
    </section>
  )
}
