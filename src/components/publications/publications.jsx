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
import Accueil_Le_reve_et_le_defi from '../../assets/Publication/Le reve et le defi/Accueil_Le_reve_et_le_defi.jpg';
import Publication_ordi_3 from '../../assets/Publication/Publication_ordi_3.jpg';
import Publication_ordi from '../../assets/Publication/Publication_ordi.jpg';
import Publicationord2 from '../../assets/Publication/Publicationord2.jpg';
import Publicationord1 from '../../assets/Publication/Publicationord1.jpg';
import { Link } from 'react-router-dom';
import useWindowWidth from '../windowWidth';

export default function Publication () {

    // scroll to top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [indexOnScroll, setIndexOnScroll] = useState(0);
    const width = useWindowWidth();
    // snaped div 
    var publication  = document.getElementById('scrollSnap') ;


    // this state is set every time the indexOnScroll is updated 
    if (publication) {
        
        //update the scrollLeft of the div to show the next image
        // it take the offsetWidth and multiply it by the indexSroll 
        publication.style.scrollBehavior = 'smooth';
        publication.scrollLeft = publication.offsetWidth * indexOnScroll;
    
    }

    //function to update cicle div in the slider and index onscrolling the div 
    useEffect (() => {
        
        // it's take the width of the container and scroll it by the number of elements to scroll 
        const myFunction = () => {
            
            if (Number((((publication?.scrollLeft / publication?.offsetWidth)))) === 0 || Number(Number(((publication?.scrollLeft / publication?.offsetWidth)))) === 1 || Number(Number(((publication?.scrollLeft / publication?.offsetWidth)))) === 2 || Number(Number(((publication?.scrollLeft / publication?.offsetWidth)))) === 3 ){

                setIndexOnScroll(Number(Number(((publication?.scrollLeft / publication?.offsetWidth))).toFixed(0)))
            }
        } 
    
        publication?.addEventListener('scroll', myFunction);

        return () => publication?.removeEventListener ('scroll', myFunction)
    }, [indexOnScroll, publication?.scrollLeft]);

    // slide the images automaticaly
    useEffect(() => {

        const interval = setInterval(() => {
            
            setIndexOnScroll ( prev => prev === 3 ? 0 : prev + 1);

        }, 4000) ;

        return () => {
            clearInterval(interval);
        }
    }, [indexOnScroll]);

    const nextImage = () =>  {
        setIndexOnScroll ( prev => prev === 3 ? 0 : prev + 1);
    };

    const prevImage = () =>  {
        setIndexOnScroll ( prev => prev === 0 ? 3 : prev - 1);
    };

    return (
        <section className='w-full flex flex-col justify-center items-center'>
            
            {/* 1st part imageSlider  */}
            <section className={`w-full relative h-auto rounded-lg flex flex-col items-center justify-center`}>

                 {/* images to slideShow  */}
                <section id='scrollSnap' className=' publication  w-full duration-200 flex flex-row overflow-x-scroll ' style={{flex: '1 0 auto'}}>

                    <div className=' w-full flex relative duration-500' style={{ flex: 'inherit'}}>

                        <img loading='lazy' src={width <= 640 ? coover_phone_mamour : coover_ordi_mamour} alt='image' className=' duration-500 delay-150 '  />

                        <div className={`w-full absolute flex sm:justify-end justify-center items-center bottom-[60px] lg:bottom-[90px] text-center sm:right-[12%] duration-500 delay-150 `}>

                            <div className='sm:w-[40%] w-[80%] '>
                                <div className='w-full sm:items-end items-center sm:justify-end justify-center flex flex-col '>
                                    <img loading='lazy' src={titlemamour} alt='mamous' className='w-[40%] sm:items-end items-center' />
                                </div>

                                <p className='sm:text-[13px] text-[0.625rem] text-gray-300 sm:text-right text-center mt-2 font-interRegular'> Un amour Eternel. L&apos;amour d&apos;une mère est un cadeau inestimable, qui éclaire notre vie et nous rappelle l'importance de la compassion, et de la bienveillance. Mamour est une histoire sur le parcours d'une mère avec son son enfant.</p>

                                <div className='flex sm:flex-row flex-col gap-4 sm:justify-end justify-center items-center mt-2'>

                                    <div className='flex gap-2 items-center'>
                                        <p className='text-gray-100 text-[0.625rem]'> Drame | 2022</p> 
                                        <img loading='lazy' src={iconPhotoshop_2} alt="icon" className='h-5'/>
                                        <img loading='lazy' src={icon4} alt="icon" className='h-5'/>
                                    </div>
                                    <Link to={'/publication/mamour'} className='px-5 bg-gray-200 rounded-lg text-[0.875rem] font-interBold hover:bg-slate-400 duration-200'>Suivre</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex relative duration-500' style={{ flex: 'inherit'}} >
                        <img loading='lazy' src={width <= 640 ? defiTel : Accueil_Le_reve_et_le_defi} alt='image' className=' duration-500 delay-150 '  />

                        <div className={`w-full absolute flex sm:justify-end justify-center items-center sm:bottom-[60px] lg:bottom-[90px] bottom-[48px] text-center sm:right-[12%] duration-500 delay-150 `}>

                            <div className='sm:w-[40%] w-[80%] '>
                                <div className='w-full sm:items-end items-center sm:justify-end justify-center sm:flex flex-col hidden '>
                                    <img loading='lazy' src={titlele_reve_et_le_defi} alt='mamous' className='w-[50%] sm:items-end items-center' />
                                </div>

                                <p className='sm:text-[13px] text-[0.625rem] text-gray-300 sm:text-right text-center mt-2 font-interRegular sm:block hidden'> C&apos;est l&apos;histoire de milliers des jeunes qui ont cru et continuent à croire à leurs rêves. Qui se battent pour dépasser les obstacles et réalités de la vie. Qui malgré les tress et la dépression continent de se battre pour un avenir meilleur</p>

                                <div className='flex sm:flex-row flex-col gap-4 sm:justify-end justify-center items-center mt-2'>

                                    <div className='sm:flex  hidden gap-2 items-center '>
                                        <p className='text-gray-100 text-[0.625rem]'> Drame | 2022</p> 
                                        <img loading='lazy' src={iconPhotoshop_2} alt="icon" className='h-5'/>
                                        <img loading='lazy' src={icon4} alt="icon" className='h-5'/>
                                    </div>
                                    <Link to={'/publication/defi'} className='px-5 bg-gray-200 rounded-lg text-[0.875rem] font-interBold hover:bg-slate-400 duration-200'>Suivre</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' w-full flex relative duration-500' style={{ flex: 'inherit'}}>

                        <img loading='lazy' src={width <= 640 ? chuteTel : chute} alt='image' className=' duration-500 delay-150 '  />
                        <div className={`w-full absolute flex sm:justify-end justify-center items-center sm:bottom-[1.875rem] lg:bottom-[90px] md:bottom-[2.5rem] bottom-[48px] text-center sm:right-[12%] duration-500 delay-150 `}>

                            <div className='sm:w-[40%] w-[80%] '>

                                <div className='flex sm:flex-row flex-col gap-4 sm:justify-end justify-center items-center mt-2'>

                                    <div className='sm:flex  hidden gap-2 items-center '>
                                        <p className='text-gray-900 text-[0.625rem]'> Drame | 2022</p> 
                                        <img loading='lazy' src={iconPhotoshop} alt="icon" className='h-5'/>
                                        <img loading='lazy' src={icon4N} alt="icon" className='h-5'/>
                                    </div>
                                    <Link to={'/publication/chute'} className='px-5 bg-gray-700 text-gray-200 rounded-lg text-[0.875rem] font-interBold hover:bg-slate-400 duration-200'>Suivre</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' w-full flex relative duration-500 ' style={{ flex: 'inherit'}}>

                        <img loading='lazy' src={width <= 640 ? hautTel :Accueil_hautS} alt='image' className=' duration-500 delay-150 '  />
                        <div className={` w-full absolute flex sm:justify-start justify-center items-center lg:bottom-[90px] md:bottom-[2.5rem] sm:bottom-[1.875rem] bottom-[48px] sm:text-center sm:left-[8%] duration-500 delay-150 `} >

                            <div className='sm:w-[60%] md:w-[50%] lg:w-[40%] w-[80%] '>
                                
                                <p className='sm:text-[13px] text-[0.625rem] text-gray-50 sm:text-left text-center mt-2 font-interRegular hidden sm:block'> Pendant que les autres enfants du village hissaient leurs cerfs-volants, le petit Mukulu échouait à chaque fois à réaliser cet exploit. Il se trouvait face à un dilemme : abandonner ou puiser dans ses dernières forces. Haut est une histoire inspirante de ceux qui continuent d&apos;avancer malgré les échecs.</p>

                                <div className='flex sm:flex-row flex-col gap-4 sm:justify-start justify-center items-center mt-2'>

                                    <div className='sm:flex gap-2 items-center hidden'>
                                        <p className='text-gray-100 text-[0.625rem]'> Drame | 2022</p> 
                                        <img loading='lazy' src={iconPhotoshop_2} alt="icon" className='h-5'/>
                                        <img loading='lazy' src={icon4} alt="icon" className='h-5'/>
                                    </div>
                                    <Link to={'/publication/haut'} className='px-5 bg-gray-200 rounded-lg text-[0.875rem] font-interBold hover:bg-slate-400 duration-200'>Suivre</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </section>

                 {/* div to prev or next images  */}
                <div className='absolute flex items-center justify-between  w-full px-5'>
                    
                   <div className='md:w-[35px] md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] items-center justify-center rounded-full hover:bg-gray-300 duration-200 cursor-pointer pr-[4px] border border-blue-200 flex' onClick={prevImage}>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-blue-200 hover:text-gray-800 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </div>
                    
                    
                   <div className='md:w-[35px] md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] items-center justify-center rounded-full hover:bg-gray-300 duration-200 cursor-pointer pl-[4px] border border-blue-200 flex' onClick={nextImage}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-blue-200 hover:text-gray-800 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>

                </div>

                {/* circle div to show the image's number  */}
                <div className='absolute flex items-center justify-center sm:bottom-10 bottom-4  w-full px-5 gap-2'>

                    <div onClick={() => setIndexOnScroll(0)} className={`w-[0.625rem] h-[0.625rem] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${indexOnScroll === 0 ? 'bg-gray-400' : ''} duration-200 hover:cursor-pointer`}> </div>
                    <div onClick={() => setIndexOnScroll(1)} className={`w-[0.625rem] h-[0.625rem] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${indexOnScroll === 1 ? 'bg-gray-400' : ''} duration-200 hover:cursor-pointer`}> </div>
                    <div onClick={() => setIndexOnScroll(2)} className={`w-[0.625rem] h-[0.625rem] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${indexOnScroll === 2 ? 'bg-gray-400' : ''} duration-200 hover:cursor-pointer`}> </div>
                    <div onClick={() => setIndexOnScroll(3)} className={`w-[0.625rem] h-[0.625rem] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${indexOnScroll === 3? 'bg-gray-400' : ''} duration-200 hover:cursor-pointer`}> </div>
                </div>
            </section>
            
            {/* seconde party gallery */}
            <div className='w-full bg-bgRemporter1 py-20 flex flex-col gap-14'>
                <h1 className='font-interBold md:text-5xl text-3xl text-blue-100'> Découvrez nos <br/> histoires inspirantes</h1>

                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-3 px-2 sm:px-[10%] '>
                        
                        {/* chute */}
                        <section className={`w-full relative sm:h-auto rounded-lg flex flex-col items-center justify-center`}>

                            <div className='h-full w-full hover:backdrop-blur-sm duration-200 delay-150 relative'>
                                <Link to={'/publication/chute'}>
                                    <img loading='lazy' src={Publicationord1} alt='image' className='flex rounded-lg hover:scale-105 duration-150 hover:-translate-x-5 hover:-translate-y-2'/>
                                </Link>

                            </div>

                        </section>
                        
                        {/* Defi  */}
                        <section className='w-full relative sm:h-auto rounded-lg flex flex-col items-center justify-center'>

                            <div className='h-full w-full hover:backdrop-blur-sm duration-200 delay-150 relative'>
                                <Link to={'/publication/defi'}>
                                    <img loading='lazy' src={Publication_ordi} alt='image' className='flex rounded-lg hover:scale-105 duration-150 hover:-translate-x-5 hover:-translate-y-2'/>
                                </Link>

                            </div>
                        </section>

                        {/* Mamour  */}
                        <section className='w-full relative sm:h-auto rounded-lg flex flex-col items-center justify-center'>

                            <div className='h-full w-full hover:backdrop-blur-sm duration-200 delay-150 relative'>   
                                <Link to={'/publication/mamour'}>
                                
                                    <img loading='lazy' src={Publication_ordi_3} alt='image' className='flex rounded-lg hover:scale-105 duration-150 hover:-translate-x-5 hover:-translate-y-2'/>
                                </Link>     
            
                            </div>

                        </section>

                        {/* Haut  */}
                        <section className='w-full relative sm:h-auto rounded-lg flex flex-col items-center justify-center'>

                            <div className='h-full w-full hover:backdrop-blur-sm duration-200 delay-150 relative'>  
                                <Link to={'/publication/haut'}>
                                    <img loading='lazy' src={Publicationord2} alt='image' className='flex rounded-lg hover:scale-105 hover:-translate-x-5 hover:-translate-y-2 duration-150'/>
                                </Link>                              

                            </div>
                        </section>
                </div>
            </div>
        </section>
    );
}