import L1 from '../assets/L-1.jpg'
import L2 from '../assets/L-2.jpg'
import L3 from '../assets/L-3.jpg'
import L4 from '../assets/L-4.jpg'
import L5 from '../assets/ALIA_E24A_R01_COMEDOR.jpg'


export default function GLagos() {
  return (
    <div className='grid lg:grid-cols-3 gap-6'>
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl'> <img src={L2} alt="" className='object-cover w-full h-full '/></div>
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl'><img src={L3} alt="" className='object-cover w-full h-full'/></div>
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl md:row-span-2'><img src={L5} alt="" className='object-cover w-full h-full'/></div>
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl md:col-span-2 md:row-span-2'><img src={L1} alt="" className='object-cover w-full h-full' /></div>
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl'><img src={L4} alt="" className='object-cover w-full h-full'/></div>
    </div>

    /* <div>
<img src="https://freebw.com/templates/tatee/images/post-10.jpg" alt="" />

</div>
<div className="mt-4 w-full h-[650px] overflow-hidden">
    <img src={L1} alt="" className='object-cover w-full h-full'/>
</div>
<div className="mt-4 w-full h-[650px] overflow-hidden">
    <img src={L2} alt="" className='object-cover w-full h-full'/>
</div>
<div className="mt-4 w-full h-[650px] overflow-hidden">
    <img src={L3} alt="" className='object-cover w-full h-full'/>
</div>
<div className="mt-4 w-full h-[650px] overflow-hidden">
    <img src={L4} alt="" className='object-cover w-full h-full'/>
</div> */
  )
}