import L5 from '../assets/ALIA_E24A_R01_COMEDOR.jpg'
import r6 from '../assets/r6.jpeg'
import r7 from '../assets/r7.jpeg'
import r1 from '../assets/r1.jpeg'
import r8 from '../assets/r8.jpg'


export default function GAlia() {
  return (
    <div className='grid lg:grid-cols-3 gap-6'>
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl'> <img src={r1} alt="" className='object-cover w-full h-full '/></div>
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl'><img src={r6} alt="" className='object-cover w-full h-full'/></div>
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl md:row-span-2'><img src={L5} alt="" className='object-cover w-full h-full'/></div>
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl md:col-span-2 md:row-span-2'><img src={r7} alt="" className='object-cover w-full h-full' /></div>
        <div className='hover:transform hover:scale-110 transition-transform duration-300 ease-in-out hover:shadow-xl'><img src={r8} alt="" className='object-cover w-full h-full'/></div>
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