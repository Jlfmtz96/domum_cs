
export default function Entorno() {
  return (
    <section>
        <h2 className='font-bold text-5xl'>Conoce tu entorno</h2>
        <div className="w-full h-[450px] lg:h-[650px] mt-20">
            <iframe loading="lazy" src="https://residencialloslagos.com.mx/mapbox/mapbox.html" className="w-full h-full"></iframe>
        </div>
    </section>
  )
}
