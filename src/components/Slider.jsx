// Slider.js
import { useState, useEffect } from 'react';
import './styles.css'
//import Lagos from "../assets/lagos.png";
import Sl1 from "../assets/24A_CDM_R08_CASA_C-1.jpg"
import Cdm from "../assets/cdm.jpg"
import Villa from "../assets/24A_S5_CDM_R01_vista_1.jpg"
import R8 from '../assets/r8.jpg'
import R4 from '../assets/r4.jpg'


const images = [
    {
        /* url: 'https://freebw.com/templates/tatee/images/slide-02.jpg', */
        imagen: Cdm,
        url: '/desarrollo-lagos',
        title: 'Casas Domum',
        location: 'San Luis Potosí, México'
    },
    {
        /* url: 'https://freebw.com/templates/tatee/images/slide-06.jpg', */
        imagen: Sl1,
        url: '/desarrollo-lagos',
        title: 'Alia Residencial',
        location: 'Querétaro, México'
    },
    {
        /* url: 'https://freebw.com/templates/tatee/images/slide-07.jpg', */
        imagen: Villa,
        url: '/coming-soon-vm',
        title: 'Alia Residencial',
        location: 'San Luis Potosí, México'
    },
    {
      /* url: 'https://freebw.com/templates/tatee/images/slide-02.jpg', */
      imagen: R8,
      url: '/desarrollo-lagos',
      title: 'Casas Domum',
      location: 'San Luis Potosí, México'
  },
  {
      /* url: 'https://freebw.com/templates/tatee/images/slide-06.jpg', */
      imagen: R4,
      url: '/desarrollo-lagos',
      title: 'Alia Residencial',
      location: 'Querétaro, México'
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetTimer, setResetTimer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setResetTimer(false); // Restablecer el temporizador

      // Aplicar animaciones una vez antes del cambio de imagen
      document.querySelector('h2').classList.add('animate-h2');
      document.querySelector('h4').classList.add('animate-h4');
      document.querySelector('.slide-link').classList.add('animate-slide-link');

      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

      // Eliminar clases de animación después de que la animación se complete
      setTimeout(() => {
        document.querySelector('h2').classList.remove('animate-h2');
        document.querySelector('h4').classList.remove('animate-h4');
        document.querySelector('.slide-link').classList.remove('animate-slide-link');
        //document.querySelector('.slide-link').classList.remove('animate-slide-link');
      }, 2000); // Ajusta el tiempo según la duración de tu animación
    }, 10000); // Cambia la imagen cada 3 segundos (ajusta según tus necesidades)

    return () => {
      clearInterval(interval);
    } 
  }, [resetTimer]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
    setResetTimer(true); // Reiniciar el temporizador al hacer clic en un botón
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute z-10 inset-0 bg-neutral-900 bg-[size:20px_20px] opacity-35 blur-[100px]"></div>
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-[10000ms] ease-in-out transform ${
            index === currentIndex ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
          }`}
          style={{
            backgroundImage: `url(${imageUrl.imagen})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
      ))}
        {/* <div className="absolute z-30 md:left-20 2xl:left-44 top-1/2 transform -translate-y-1/2 text-white p-4">
          <h2 className="text-4xl md:text-5xl font-bold">{images[currentIndex].title}</h2>
          <h4 className='mt-6 lg:ml-52 tracking-[0.3em] uppercase'>{images[currentIndex].location}</h4>
          <div className='mt-12 lg:ml-52 slide-link'>
            <a href={images[currentIndex].url} className='border p-4 text-sm hover:border-[#C91E7B] hover:border-2'>
              <span>Ver desarrollo</span> 
            </a>
          </div>
        </div> */}

        <div className="px-8 absolute z-30 bottom-10 grid grid-cols-5 w-full items-center justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              className={`text-white px-4 py-2 col-span-1 ${
                currentIndex === index ? 'active-button' : ''
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
    </div>
  );
};

export default Slider;
