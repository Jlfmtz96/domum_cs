import { useState, useEffect } from "react";

export default function Contador() {
    const targetDate = new Date("2024-12-31T23:59:59").getTime(); // Establece la fecha objetivo
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    function calculateTimeRemaining() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;
    
        if (timeRemaining <= 0) {
          // Si el tiempo restante es negativo o cero, el contador ha terminado
          return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
        }
    
        // Calcula días, horas, minutos y segundos restantes
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
        return {
          days,
          hours,
          minutes,
          seconds,
        };
      }
    
      useEffect(() => {
        const interval = setInterval(() => {
          setTimeRemaining(calculateTimeRemaining());
        }, 1000);
    
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    
      }, []); // El segundo parámetro [] indica que este efecto se ejecuta solo una vez al montar el componente

  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
        <div className="p-8 2xl:py-12 2xl:px-8 relative">
            <div id='numero' className="text-5xl 2xl:text-7xl font-bold">{timeRemaining.days}</div>
            <div id='dias' className="uppercase text-xl mt-2 tracking-widest">Días</div>

              {/* Borde en esquinas opuestas */}
            <div className="absolute top-0 left-0 border-l-2 border-t-2 h-20 w-20 2xl:h-28 2xl:w-28"></div>
            <div className="absolute bottom-0 right-0 border-r-2 border-b-2 h-20 w-20 2xl:h-28 2xl:w-28"></div>
        </div>
        <div className="p-8 2xl:py-12 2xl:px-8 relative">
            <div id='numero' className="text-5xl 2xl:text-7xl font-bold">{timeRemaining.hours}</div>
            <div id='Horas' className="uppercase text-xl mt-2 tracking-widest">Horas</div>

            {/* Borde en esquinas opuestas */}
            <div className="absolute top-0 left-0 border-l-2 border-t-2 h-20 w-20 2xl:h-28 2xl:w-28"></div>
            <div className="absolute bottom-0 right-0 border-r-2 border-b-2 h-20 w-20 2xl:h-28 2xl:w-28"></div>
        </div>
        <div className="p-8 2xl:py-12 2xl:px-8 relative">
            <div id='numero' className="text-5xl 2xl:text-7xl font-bold">{timeRemaining.minutes}</div>
            <div id='Minutos' className="uppercase text-xl mt-2 tracking-widest">Minutos</div>

            {/* Borde en esquinas opuestas */}
            <div className="absolute top-0 left-0 border-l-2 border-t-2 h-20 w-20 2xl:h-28 2xl:w-28"></div>
            <div className="absolute bottom-0 right-0 border-r-2 border-b-2 h-20 w-20 2xl:h-28 2xl:w-28"></div>
        </div>
        <div className="p-8 2xl:py-12 2xl:px-8 relative">
            <div id='numero' className="text-5xl 2xl:text-7xl font-bold">{timeRemaining.seconds}</div>
            <div id='Segundos' className="uppercase text-xl mt-2 tracking-widest">Segundos</div>

            {/* Borde en esquinas opuestas */}
            <div className="absolute top-0 left-0 border-l-2 border-t-2 h-20 w-20 2xl:h-28 2xl:w-28"></div>
            <div className="absolute bottom-0 right-0 border-r-2 border-b-2 h-20 w-20 2xl:h-28 2xl:w-28"></div>
        </div>
    </div>
  )
}
