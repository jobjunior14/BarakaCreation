import campagne from '../../../assets/Services/Design graphique/campagne.jpg';
import campagne_plan_comm_2 from '../../../assets/Services/Design graphique/campagne_plan_comm_2.png';
import campagne_conception from '../../../assets/Services/Design graphique/campagne_conception.png';
import campagne_digital_title from '../../../assets/Services/Design graphique/campagne_digital_title.png';
import campagne_digital_1 from '../../../assets/Services/Design graphique/campagne_digital_1.png';

import { Link } from 'react-router-dom';
export default function CampagneDeComm () {

    return (
        <main>

            {/* welcom image and texte  */}
            <section className="w-full flex flex-col justify-center bg-white">

                <div className='w-full pt-[6%] sm:pt-[3%] flex flex-col gap-4 z-40'>
                    <h1 className='text-gray-700 text-[30px] sm:text-[40px] md:text-[44px] lg:text-[54px] font-bold leading-8 sm:leading-[40px] md:leading-[44px] lg:leading-[56px]'>Camapagne de <br /> Communication</h1>
                    <div className=' flex justify-center items-center gap-2 flex-col  w-full  '>
                        
                        <Link to='../' className=" duration-200  text-gray-100 text-[12px] sm:text-[14px] md:text-[16px] px-1 pb-[1.5px] rounded-full bg-blue-500 hover:text-blue-500 hover:bg-bgIdVisuel border-blue-500 border">Interessé</Link>
                        
                        <Link to={'../'} className=" text-blue-500 text-[12px] sm:text-[14px] md:text-[16px] flex "> Notre Logofolio <span className="flex items-center justify-center "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-14 7.5 7.5-7.5 7.5" /></svg></span></Link>
                    </div>
                </div>

                <div className=' justify-center items-center flex -mt-[13%] sm:-mt-[8%] md:-mt-[5%] '>
                    <div className='w-full sm:w-[60%] md:w-[40%] lg:w-[35%]'>

                        <img src={campagne} alt="campagne"/>
                    </div>
                </div>
            </section>

            <section className=' bg-bgCertifier w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 md:gap-7 px-[4%] sm:px-[5%] md:px-[10%] lg:px-[15%] pt-9'>
                
                {/* first paragraph  */}
                <div className='px-[5%] md:px-0 w-[70%] md:w-[80%]'>
                    <p className='text-left font-[500] text-gray-100 text-[14px] sm:text-[15px] md:text-[17px] leading-5  sm:w-[75%] md:w-full'>
                        <span className='text-blue-100 md:text-gray-100'>

                            Vous avez une cause que vous souhaiteiez
                            poter à l&apos;attention du grand public ? 
                        </span>
                        <br  className='md:hidden'/>
                        <br className='md:hidden' />
                         Nous créons votre campagne du biefing au
                        lancement. La clé du succès est un visuel
                        percutant qui transmet votre message de
                        manière claire et concise
                    </p>
                </div>

                {/* second paragraph  */}
                
                <div className='px-[5%] w-[70%]'>
                    <p className='text-left font-[500] text-blue-100 text-[14px] sm:text-[15px] md:text-[17px] leading-5  sm:w-[75%] md:w-[70%] lg:w-[65%] '>
                        Nous vous proposons une large gamme de solutions, de l&apos;élaboration du plan de communication aux conceptions.
                    </p>
                </div>

                {/* plan & stategie  */}
                <div className='w-full bg-gradient-to-b from-slate-200 from-5% to-white pt-[25%] md:pt-[23%] rounded-lg flex flex-col gap-5'>
                    <div className=' justify-start items-start flex flex-col gap-2 w-full px-[15%]'>
                        <h3 className='text-left text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-bold leading-7 text-gray-800'>Plan & <br /> strategies de <br /> communication</h3>
                        <button className=" text-blue-500 text-[12px] sm:text-[15px] md:text-[16px] flex items-center "> Voir plus <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></button>
                    </div>
                    
                    <div className=' md:flex md:justify-start md:w-[70%]'>

                        <img src={campagne_plan_comm_2} alt="campagne_plan_comm_2" />
                    </div>
                </div>

                {/* conception graphique */}
                <div className='w-full bg-gradient-to-t from-blue-500 to-blue-300 pt-[23%] md:pt-[20%] rounded-lg flex flex-col gap-5'>
                    <div className=' justify-start items-start flex flex-col gap-2 w-full px-[15%]'>
                        <h3 className='text-left text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-bold leading-7 md:leading-8 text-gray-100'>Conception <br />graphique des <br />supports</h3>
                        <button className=" text-blue-100 text-[12px] sm:text-[15px] md:text-[16px] flex items-center "> Voir plus <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></button>
                    </div>

                    <div className='w-full flex justify-center items-center pb-5'>

                        <div className='w-[48%] flex justify-center items-center'>

                            <img src={campagne_conception} alt="campagne_conception" />
                        </div>
                    </div>
                </div>

                {/* communication digital */}
                <div className='w-full bg-black pt-[15%] md:py-[5%] rounded-lg flex flex-col md:flex-row gap-[60px] md:col-span-2 col-end-2 justify-center items-center'>

                    <div className=' justify-center items-center md:justify-start md:items-start flex flex-col gap-0 w-full'>
                        <h3 className='text-left text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-7 text-gray-100 md:px-[83px]'>Communication</h3>
                        <div className='w-full px-[83px]'>
                            <img src={campagne_digital_title} alt=''/>
                        </div>
                        <button className=" text-blue-400 text-[12px] sm:text-[15px] md:text-[16px] flex items-center  md:px-[83px]"> Voir plus <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></button>
                    </div>

                    <div className='w-full flex justify-center items-center pb-5 md:pb-0'>

                        <div className='w-[80%] flex justify-center items-center'>

                            <img src={campagne_digital_1} alt="campagne_digital_1" />
                        </div>
                    </div>
                </div>
              

                
            </section>

        </main>
    )
}