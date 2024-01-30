import accueil_ok from '../assets/Accueil/accueil_ok.jpg';
import accueil_phone from '../assets/Accueil/accueil_phone.jpg';
import Accueildesigngr1 from '../assets/Accueil/Accueildesigngr1.jpg';
import Accueildesigngr2 from '../assets/Accueil/Accueildesigngr2.jpg';
import accueil_accompagnons from '../assets/Accueil/accueil_accompagnons.jpg';
export default function Acceuil () {
    return (

        <div className="flex w-full gap-0 flex-col justify-center items-center first-letter bg-contain bg-no-repeat bg-fixed " >
            {/* first part "Principal picture" */}
            <div className='-mb-5' >
                <img src={accueil_ok} className='hidden sm:block' alt='Baraka image' />
                <img src={accueil_phone} className='block sm:hidden' alt='Baraka image' />
            </div>

            {/* seconde part "C'que nous faisons" */}
            <div className='w-full bg-black flex flex-col text-center '>

                <div className=' w-full justify-center items-center text-center flex flex-col sm:absolute left-4 ml-2'>

                    <h2 className=' text-blue-200 font-semibold md:text-2xl text-xl  lg:text-3xl bg-opacity-10 '>Ce que nous faisons</h2>

                    <div className=' w-[200px]  sm:w-[250px]  items-center flex flex-col gap-y-3 sm:gap-y-5 mt-[25px] sm:mt-[40px] md:mt-[100px] lg:mt-[120px]'>
                        <h3 className=' text-blue-100 text-center text-3xl md:text-4xl lg:text-6xl font-bold'>Innover</h3>
                        <p className='text-center text-xs sm:text-base text-gray-200 font-normal'>Nous apportons des solutions innovantes, originales et efficaces en communication visuelle</p>
                        <div className=' rounded-full p-1 border border-blue-200 flex relative w-[60%] pl-7 hover:bg-gray-500 duration-200'> 
                            <p className='text-gray-300 text-[8px] sm:text-xs mb-px'> Nos réalisations </p>
                            <div className='w-[16px] h-[16px] sm:w-5 sm:h-5 rounded-full justify-center items-center pl-[3px] border border-blue-200 flex absolute left-[83%] top-[2px] sm:left-[85%] sm:top-[2px] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-gray-100">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className='flex justify-between mt-4 sm:mt-7'>
                    <img src={Accueildesigngr2} className='h-[170px] lg:h-[470px] md:h-[340px] sm:h-[250px] ' alt='design 1'/>
                    <img src={Accueildesigngr1} className='h-[170px] lg:h-[470px] md:h-[340px] sm:h-[250px] ' alt='design 2'/>
                </div>
            </div>
            
            {/* third part "accompagnement" */}
            <div className='w-full bg-white flex flex-col text-center justify-center relative pt-5 -pb-2'>

                <div className=' w-full justify-center items-center text-center flex flex-col left-4 ml-2'>
                    <div className=' w-[200px]  sm:w-[280px]  items-center flex flex-col gap-y-2 sm:gap-y-5 '>
                        <h3 className=' text-black text-center text-3xl md:text-4xl lg:text-6xl font-bold'>Accompagner</h3>
                        <p className='text-center text-xs sm:text-base text-gray-800 font-normal'>De la stratégie à la mise en œuvre, nous aidons les entreprises à créer une image de marque forte et durable</p>
                        <div className=' rounded-full p-1 border bg-slate-500 flex relative w-[60%] sm:pl-9 pl-7 hover:bg-myBlue duration-200'> 
                            <p className='text-white text-[8px] sm:text-xs mb-px'>Voir nos services </p>
                            <div className='w-[16px] h-[16px] sm:w-5 sm:h-5 rounded-full justify-center items-center pl-[3px] border border-blue-200 flex absolute left-[83%] top-[2px] sm:left-[85%] sm:top-[2px] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-gray-100">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className='h-[95%] w-[80%] sm:h-[80%] sm:w-[65%] ml-[10%] sm:ml-[18%]  '>
                    <img src={accueil_accompagnons} className='' alt='image accompagnement'/>
                </div>

                
            </div>
        </div>
    )
}