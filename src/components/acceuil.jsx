import accueil_ok from '../assets/Accueil/accueil_ok.jpg';
import accueil_phone from '../assets/Accueil/accueil_phone.jpg';
// import AccueilDesign_gr from '../assets/Accueil/AccueilDesign_gr.jpg';
import Accueildesigngr1 from '../assets/Accueil/Accueildesigngr1.jpg';
import Accueildesigngr2 from '../assets/Accueil/Accueildesigngr2.jpg';
export default function Acceuil () {
    return (

        <div className="flex w-full gap-0 flex-col justify-center items-center first-letter bg-contain bg-no-repeat bg-fixed " >
            
            <div className='-mb-5' >
                <img src={accueil_ok} className='hidden sm:block' alt='Baraka image' />
                <img src={accueil_phone} className='block sm:hidden' alt='Baraka image' />
            </div>

            <div className='w-full bg-black flex flex-col text-center relative'>
                <h2 className=' text-blue-100 font-semibold md:text-2xl text-xl  lg:text-3xl bg-opacity-10'>Ce que nous faisons</h2>
                
                <div className='ml-[25%] w-[200px] sm:w-[250px] sm:absolute  items-center flex flex-col gap-3 sm:gap-5 sm:left-[35%] md:left-[38%] lg:left-[40%] top-[32%] '>
                    <h3 className='text-gray-100 text-center text-2xl md:text-4xl lg:text-6xl font-bold'>Innover</h3>
                    <p className='text-center text-xs sm:text-base text-gray-100 font-normal'>Nous apportons des solutions innovantes, originales et efficaces en communication visuelle</p>
                    <div className=' rounded-full sm:p-2 p-1 border border-gray-100 flex relative w-[70%] pl-5 sm:pl-7 hover:bg-myBlue duration-200'> 
                        <p className='text-gray-200 sm:text-sm text-xs'> Nos réalisations </p>
                        <div className='w-5 h-5 sm:w-7 sm:h-7 rounded-full justify-center items-center pl-[3px] border border-gray-100 flex absolute left-[83%] top-[2px] sm:left-[80%] sm:top-[4px] '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-100">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <img src={Accueildesigngr2} className='h-[200px] lg:h-[470px] md:h-[370px] sm:h-[250px] ' alt='design 1'/>
                    <img src={Accueildesigngr1} className='h-[200px] lg:h-[470px] md:h-[370px] sm:h-[250px] ' alt='design 2'/>
                </div>
            </div>
            
        </div>
    )
}