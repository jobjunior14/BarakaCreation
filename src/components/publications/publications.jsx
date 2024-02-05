import { useState, useEffect } from 'react';
import coover_ordi_mamour from '../../assets/Publication/Mamour/coover_ordi_mamour.jpg';
import coover_phone_mamour from '../../assets/Publication/Mamour/coover_phone_mamour.jpg';
import defiTel from '../../assets/Publication/defiTel.jpg';
import chute from '../../assets/Publication/chute.jpg';
import chuteTel from '../../assets/Publication/chuteTel.jpg';
import hautTel from '../../assets/Publication/hautTel.jpg';
import titlemamour from '../../assets/Publication/titlemamour.png';
import iconPhotoshop_2 from '../../assets/Publication/iconPhotoshop_2.png';
import iconPhotoshop from '../../assets/Publication/iconPhotoshop.png';
import icon4 from '../../assets/Publication/icon4.png';
import icon4N from '../../assets/Publication/icon4N.png';
import Accueil_hautS from '../../assets/Publication/Haut/Accueil_hautS.jpg';
import titlele_reve_et_le_defi from '../../assets/Publication/titlele_reve_et_le_defi.png';
import Accueil_Le_reve_et_le_defi from '../../assets/Publication/Le reve et le defi/Accueil_Le_reve_et_le_defi.jpg'
import Publication_ordi_3 from '../../assets/Publication/Publication_ordi_3.jpg'
import Publication_ordi from '../../assets/Publication/Publication_ordi.jpg'
import Publicationord2 from '../../assets/Publication/Publicationord2.jpg'
import Publicationord1 from '../../assets/Publication/Publicationord1.jpg'
export default function Publication () {

    const [index, setIndex] = useState(0);

    // slide the images automaticaly
    useEffect(() => {

        const interval = setInterval(() => {
            
            setIndex ( prev => prev === 300 ? 0 : prev + 100);
        }, 6000) ;

        return () => {
            clearInterval(interval);
        }
    }, [index]);

    const nextImage = () =>  {
        setIndex ( prev => prev === 300 ? 0 : prev + 100);
    };

    const prevImage = () =>  {
        setIndex ( prev => prev === 0 ? 300 : prev - 100);
    };

    return (
        <section className='w-full flex flex-col justify-center items-center'>
            
            {/* 1st part imageSlider  */}
            <section className={`w-full relative h-auto rounded-lg flex flex-col items-center justify-center`}>

                 {/* images to slideShow  */}
                <div className='h-full w-full hover:backdrop-blur-sm duration-200 delay-150 flex overflow-hidden '>
                    {/* image pc  */}
                    <img src={coover_ordi_mamour} alt='image' className=' duration-1000 delay-150 hidden sm:flex  ' style={{transform: `translateX(${-index}%)`}} />
                    <img src={Accueil_Le_reve_et_le_defi} alt='image' className=' duration-1000 delay-150 hidden sm:flex ' style={{transform: `translateX(${-index}%)`}} />
                    <img src={chute} alt='image' className=' duration-1000 delay-150 hidden sm:flex ' style={{transform: `translateX(${-index}%)`}} />
                    <img src={Accueil_hautS} alt='image' className=' duration-1000 delay-150 hidden sm:flex ' style={{transform: `translateX(${-index}%)`}} />


                    {/* image phone  */}
                    <img src={coover_phone_mamour} alt='image' className=' duration-1000 delay-150 sm:hidden ' style={{transform: `translateX(${-index}%)`}} />
                    <img src={defiTel} alt='image' className=' duration-1000 delay-150 sm:hidden ' style={{transform: `translateX(${-index}%)`}} />
                    <img src={chuteTel} alt='image' className=' duration-1000 delay-150 sm:hidden ' style={{transform: `translateX(${-index}%)`}} />
                    <img src={hautTel} alt='image' className=' duration-1000 delay-150 sm:hidden ' style={{transform: `translateX(${-index}%)`}} />
                    
                    {/* button suivre sur l'image  */}
                    {/* image's text and button 'fist image mamour' */}
                    <div className='h-full w-full duration-200 delay-150 flex absolute overflow-hidden'> 
                        
                        {/* mamour texte  */}
                        <div className={`w-full absolute flex sm:justify-end justify-center items-center bottom-[60px] sm: text-center sm:right-[40px] duration-1000 delay-150 `} style={{transform: `translateX(${-index}%)`}}>

                            <div className='sm:w-[40%] w-[80%] '>
                                <div className='w-full sm:items-end items-center sm:justify-end justify-center flex flex-col '>
                                    <img src={titlemamour} alt='mamous' className='sm:h-[30px] h-[27px] sm:items-end items-center' />
                                </div>

                                <p className='sm:text-[13px] text-[10px] text-gray-300 sm:text-right text-center mt-2'> Un amour Eternel. L&apos;amour d&apos;une mère est un cadeau inestimable, qui éclaire notre vie et nous rappelle l'importance de la compassion, et de la bienveillance. Mamour est une histoire sur le parcours d'une mère avec son son enfant.</p>

                                <div className='flex sm:flex-row flex-col gap-4 sm:justify-end justify-center items-center mt-2'>

                                    <div className='flex gap-2 items-center'>
                                        <p className='text-gray-100 text-[10px]'> Drame | 2022</p> 
                                        <img src={iconPhotoshop_2} alt="icon" className='h-5'/>
                                        <img src={icon4} alt="icon" className='h-5'/>
                                    </div>
                                    <button className='px-5 bg-gray-200 rounded-lg text-[14px] font-bold hover:bg-slate-400 duration-200'>Suivre</button>
                                </div>
                            </div>
                        </div>
                        
                        {/* le defi text  */}
                        <div className={`w-full absolute flex sm:justify-end justify-center items-center sm:bottom-[60px] bottom-[48px] text-center sm:right-[40px] duration-1000 delay-150 `} style={{transform: `translateX(${-index + 100}%)`}}>

                            <div className='sm:w-[40%] w-[80%] '>
                                <div className='w-full sm:items-end items-center sm:justify-end justify-center sm:flex flex-col hidden '>
                                    <img src={titlele_reve_et_le_defi} alt='mamous' className='sm:h-[100px] md:h-[100px] lg:h-[150px] h-[100px] sm:items-end items-center' />
                                </div>

                                <p className='sm:text-[13px] text-[10px] text-gray-300 sm:text-right text-center mt-2 sm:block hidden'> Un amour Eternel. L&apos;amour d&apos;une mère est un cadeau inestimable, qui éclaire notre vie et nous rappelle l'importance de la compassion, et de la bienveillance. Mamour est une histoire sur le parcours d'une mère avec son son enfant.</p>

                                <div className='flex sm:flex-row flex-col gap-4 sm:justify-end justify-center items-center mt-2'>

                                    <div className='sm:flex  hidden gap-2 items-center '>
                                        <p className='text-gray-100 text-[10px]'> Drame | 2022</p> 
                                        <img src={iconPhotoshop_2} alt="icon" className='h-5'/>
                                        <img src={icon4} alt="icon" className='h-5'/>
                                    </div>
                                    <button className='px-5 bg-gray-200 rounded-lg text-[14px] font-bold hover:bg-slate-400 duration-200'>Suivre</button>
                                </div>
                            </div>
                        </div>

                        {/* apres la chute  */}
                        <div className={`w-full absolute flex sm:justify-end justify-center items-center sm:bottom-[30px] md:bottom-[40px] bottom-[48px] text-center sm:right-[40px] duration-1000 delay-150 `} style={{transform: `translateX(${-index + 200}%)`}}>

                            <div className='sm:w-[40%] w-[80%] '>

                                <div className='flex sm:flex-row flex-col gap-4 sm:justify-end justify-center items-center mt-2'>

                                    <div className='sm:flex  hidden gap-2 items-center '>
                                        <p className='text-gray-900 text-[10px]'> Drame | 2022</p> 
                                        <img src={iconPhotoshop} alt="icon" className='h-5'/>
                                        <img src={icon4N} alt="icon" className='h-5'/>
                                    </div>
                                    <button className='px-5 bg-gray-700 text-gray-200 rounded-lg text-[14px] font-bold hover:bg-slate-400 duration-200'>Suivre</button>
                                </div>
                            </div>
                        </div>

                        {/* Haut text  */}
                        <div className={`w-full absolute flex sm:justify-start justify-center items-center lg:bottom-[60px] md:bottom-[40px] sm:bottom-[30px] bottom-[48px] sm:text-center sm:left-[80px] duration-1000 delay-150 `} style={{transform: `translateX(${-index + 300}%)`}}>

                            <div className='sm:w-[60%] md:w-[50%] lg:w-[40%] w-[80%] '>
                                
                                <p className='sm:text-[13px] text-[10px] text-gray-50 sm:text-left text-center mt-2 hidden sm:block'> Un amour Eternel. L&apos;amour d&apos;une mère est un cadeau inestimable, qui éclaire notre vie et nous rappelle l'importance de la compassion, et de la bienveillance. Mamour est une histoire sur le parcours d'une mère avec son son enfant.</p>

                                <div className='flex sm:flex-row flex-col gap-4 sm:justify-start justify-center items-center mt-2'>

                                    <div className='sm:flex gap-2 items-center hidden'>
                                        <p className='text-gray-100 text-[10px]'> Drame | 2022</p> 
                                        <img src={iconPhotoshop_2} alt="icon" className='h-5'/>
                                        <img src={icon4} alt="icon" className='h-5'/>
                                    </div>
                                    <button className='px-5 bg-gray-200 rounded-lg text-[14px] font-bold hover:bg-slate-400 duration-200'>Suivre</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                 {/* div to prev or next images  */}
                <div className='absolute flex items-center justify-between  w-full px-5'>
                    
                   <div className='md:w-[35px] md:h-[35px] sm:w-[30px] sm:h-[30px] w-[25px] h-[25px] items-center justify-center rounded-full hover:bg-gray-300 duration-200 cursor-pointer pr-[4px] border border-blue-200 flex' onClick={prevImage}>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-blue-200 hover:text-gray-800 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </div>
                    
                    
                   <div className='md:w-[35px] md:h-[35px] sm:w-[30px] sm:h-[30px] w-[25px] h-[25px] items-center justify-center rounded-full hover:bg-gray-300 duration-200 cursor-pointer pl-[4px] border border-blue-200 flex' onClick={nextImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-blue-200 hover:text-gray-800 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>

                </div>

                {/* circle div to show the image's number  */}
                <div className='absolute flex items-center justify-center bottom-5  w-full px-5 gap-2'>

                    <div onClick={() => setIndex(0)} className={`w-[10px] h-[10px] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${index === 0 ? 'bg-gray-400' : ''} duration-300 delay-200 hover:cursor-pointer`}> </div>
                    <div onClick={() => setIndex(100)} className={`w-[10px] h-[10px] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${index === 100 ? 'bg-gray-400' : ''} duration-300 delay-200 hover:cursor-pointer`}> </div>
                    <div onClick={() => setIndex(200)} className={`w-[10px] h-[10px] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${index === 200 ? 'bg-gray-400' : ''} duration-300 delay-200 hover:cursor-pointer`}> </div>
                    <div onClick={() => setIndex(300)} className={`w-[10px] h-[10px] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${index === 300 ? 'bg-gray-400' : ''} duration-300 delay-200 hover:cursor-pointer`}> </div>
                </div>
            </section>
            
            {/* seconde party gallery */}
            <div className='w-full bg-bgRemporter1 pt-10 flex flex-col gap-14 pb-10'>
                <h1 className='font-bold md:text-5xl text-3xl text-blue-100'> Découvrez nos <br/> histoires inspirantes</h1>

                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-3 px-2 sm:px-[10%] '>
                        
                        {/* chute */}
                        <section className={`w-full relative sm:h-auto rounded-lg flex flex-col items-center justify-center`}>

                            <div className='h-full w-full hover:backdrop-blur-sm duration-200 delay-150 relative'>
                                <img src={Publicationord1} alt='image' className='flex rounded-lg hover:scale-105 duration-150 hover:-translate-x-5 hover:-translate-y-2'/>

                            </div>

                        </section>
                        
                        {/* mamour  */}
                        <section className='w-full relative sm:h-auto rounded-lg flex flex-col items-center justify-center'>

                            <div className='h-full w-full hover:backdrop-blur-sm duration-200 delay-150 relative'>        
                                <img src={Publication_ordi} alt='image' className='flex rounded-lg hover:scale-105 duration-150 hover:-translate-x-5 hover:-translate-y-2'/>

                            </div>

                        </section>

                        {/* design graphique  */}
                        <section className='w-full relative sm:h-auto rounded-lg flex flex-col items-center justify-center'>

                            <div className='h-full w-full hover:backdrop-blur-sm duration-200 delay-150 relative'>        
                                <img src={Publication_ordi_3} alt='image' className='flex rounded-lg hover:scale-105 duration-150 hover:-translate-x-5 hover:-translate-y-2'/>
            
                            </div>

                        </section>

                        {/* Haut  */}
                        <section className='w-full relative sm:h-auto rounded-lg flex flex-col items-center justify-center'>

                            <div className='h-full w-full hover:backdrop-blur-sm duration-200 delay-150 relative'>        
                                <img src={Publicationord2} alt='image' className='flex rounded-lg hover:scale-105 hover:-translate-x-5 hover:-translate-y-2 duration-150'/>

                            </div>
                        </section>
                </div>
            </div>
        </section>
    );
}