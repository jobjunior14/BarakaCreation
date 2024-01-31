import moii_2 from '../assets/A propos/moii_2.jpg';
import moii_phone from  '../assets/A propos/moii_phone.jpg';
import iconeprofession from '../assets/A propos/iconeprofession.png';
import iconeetude from '../assets/A propos/iconeetude.png';
import icone_experience_1 from '../assets/A propos/icone_experience_1.png';
export default function Apropos () {
    return (
        <div className="w-full md:bg-slate-100 bg-bgApropos md:pb-0">

            {/* Baraka's summary  1st part*/}
            <div className=" w-full flex flex-col sm:flex-row justify-center text-center md:pt-5">
                
                {/* pc's picture  */}
                <div className=' hidden md:flex justify-center place-items-end px-6 bg-bgFormation  md:w-[40%]  '>
                    <img src={moii_2} alt='moi' className='h-auto'/>
                </div>

                <div className='md:w-[50%] md:mt-9'>

                    <div className='w-full bg-bgApropos md:bg-bgFormation flex flex-col justify-center  gap-y-5 md:gap-y-2 py-7 px-8'>
                            
                        <h1 className='text-5xl md:text-3xl md:text-left text-gray-100 md:text-gray-700 font-bold '>Hello ! </h1>
                        
                        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start'>
                            <div className='w-[70%] md:w-[100%] '>
                                <p className='text-gray-200 md:text-left md:text-gray-700 text-[11px] font-normal text-center '>Je suis Baraka LURHAKWA, un artiste communicateur visuel. <br/>Je suis passionné par la production d&apos;œuvres artistiques innovantes et j&apos;accompagne les entreprises dans la réussite de leurs objectifs dans lesecteur de la communication</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* phone's image */}
                    <div className='bg-bgApropos flex justify-center items-center px-6 md:hidden'>
                        <img src={moii_phone} className='h-auto' alt='moi phone'/>
                    </div>
                    
                    {/* proffession */}
                    <div>
                        <div className='bg-bgFormation text-left p-8 md:py-0 w-full '>

                            <div className='flex items-start'>
                                <div className='flex justify-center items-center'>
                                    <img src={iconeprofession} className='h-6  mr-1' alt='iconeprofession'/>
                                    <h1 className=' mr-1 font-bold text-gray-700 text-[16px] flex'> Profession </h1>
                                </div>
                            </div>
                            <div className='h-px w-full bg-gray-600 mt-1'></div>
                        </div>

                        <div className='px-8 bg-bgFormation '> 
                            <div className='text-left grid grid-cols-2 gap-y-5 gap-x-2'>
                                <div>
                                    <h3 className='font-bold text-[15px] text-gray-800'> Comminicateur </h3>
                                    <p className='text-[10px]'>Conseiller en communication</p>
                                </div>
                                <div>
                                    <h3 className='font-bold text-[15px] text-gray-800'> Graphiste </h3>
                                    <p className='text-[10px]'>Spécialiste d&apos;identité visuelle</p>
                                </div>
                                <div>
                                    <h3 className='font-bold text-[15px] text-gray-800'> Directeur artistique </h3>
                                    <p className='text-[10px]'>D&apos;animation | de campagne | Comm</p>
                                </div>
                                <div>
                                    <h3 className='font-bold text-[15px] text-gray-800'> Illustrateur </h3>
                                    <p className='text-[10px]'>3 fois Lauréat</p>
                                </div>
                            </div>
                            <div className='h-px w-full bg-gray-600 mt-1'></div>
                        </div>

                        <div className='px-8 flex gap-3 text-left pt-3 bg-bgFormation'>
                            <div className='flex justify-center items-center'>
                                <img src={icone_experience_1} className='h-6 mr-1' alt='iconeprofession'/>
                                <h1 className=' mr-1 font-bold text-gray-700 text-[11px] flex'>  ans d&apos;expérience professionnelle </h1>
                            </div>

                            <div className='flex justify-center items-center'>
                                <img src={iconeetude} className='h-6 mr-1' alt='iconeprofession'/> 
                                <h1 className=' mr-1 font-bold text-gray-700 text-[11px] flex'> Académie de Beaux-arts Kinshasa </h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}