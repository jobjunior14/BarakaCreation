import accueil_ok from '../assets/Accueil/accueil_ok.jpg';
import accueil_phone from '../assets/Accueil/accueil_phone.jpg';
import Accueildesigngr1 from '../assets/Accueil/Accueildesigngr1.jpg';
import Accueildesigngr2 from '../assets/Accueil/Accueildesigngr2.jpg';
import accueil_accompagnons from '../assets/Accueil/accueil_accompagnons.jpg';
import Mamour_phone from '../assets/Accueil/Mamour_phone.jpg';
import Mamour_ordi from '../assets/Accueil/Mamour_ordi.jpg';
import design_entrons_en_contact from '../assets/Accueil/design_entrons_en_contact.png';
import Logo1 from '../assets/Accueil/Logo1.png';
import Logo2 from '../assets/Accueil/Logo2.png';
import Logo3 from '../assets/Accueil/Logo3.png';
import Logo4 from '../assets/Accueil/Logo4.png';
import Logo5 from '../assets/Accueil/Logo5.png';
import Logo6 from '../assets/Accueil/Logo6.png';
import Logo7 from '../assets/Accueil/Logo7.png';
import Logo8 from '../assets/Accueil/Logo8.png';
import Logo9 from '../assets/Accueil/Logo9.png';
import Logo10 from '../assets/Accueil/Logo10.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './an.css';
import useWindowWidth from './windowWidth';
import { useNavigate } from 'react-router-dom';
export default function Acceuil () {

    
    // scroll to top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const width = useWindowWidth();

    return (

        <section className="flex w-full flex-col justify-center items-center overflow-x-hidden" >

            {/* first part "Principal picture" */}
            <section >
                <img loading='lazy' src={ width >= 640 ? accueil_ok : accueil_phone} alt='Baraka image' />
            </section>

            {/* seconde part "C'que nous faisons" */}
            <section className='w-full bg-black flex flex-col text-center justify-center py-7'>


                    <h2 className=' text-bgcqnoufaisons font-interSemibold md:text-2xl text-xl  lg:text-3xl bg-opacity-10 sm:pl-[4%] '>Ce que nous faisons</h2>

                    <div className=' sm:hidden w-full  items-center flex flex-col gap-y-4 mt-8 '>

                        <h3 className=' text-blue-100 text-center text-3xl md:text-4xl lg:text-6xl font-interBold'>Concevoir</h3>

                        <p className='text-center w-[50%] text-xs sm:text-base text-gray-200 font-normal'>Nous apportons des solutions innovantes, originales et efficaces en communication visuelle</p>

                        <Link to='/portfolio' className=' rounded-full cursor-pointer p-1  boxShadow1 w-36 md:w-44 md:py-[0.375rem] flex  justify-center items-center hover:bg-gray-500 duration-200'> 
                            <div className='w-full flex justify-center items-center'>
                                <p className='text-gray-300 text-[0.8rem] sm:text-xs md:text-[0.9rem] lg:text-[1rem]  '> Nos&nbsp;réalisations </p>
                            </div>

                            <div className='p-[0.1875rem] border border-blue-100 rounded-full flex justify-center items-center'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 md:w-4 h-3 md:h-4  text-gray-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                
                <picture className=' justify-between flex mt-4 sm:mt-7'>
                    <img loading='lazy' src={Accueildesigngr2} className='h-[10.625rem] lg:h-[29.375rem] md:h-[20rem] sm:h-[15.625rem] ' alt='design 1'/>

                    <div className='pr-[4%] hidden sm:flex items-center justify-center flex-col  sm:gap-y-5 '>

                        <h3 className='  text-blue-100 text-center text-3xl md:text-4xl lg:text-6xl font-interBold'>Concevoir</h3>

                        <p className='text-center text-xs sm:text-base text-gray-200 font-normal md:w-[70%] '>Nous apportons des solutions innovantes, originales et efficaces en communication visuelle</p>

                        <Link to='/portfolio' className=' rounded-full cursor-pointer p-1  boxShadow1 w-36 md:w-44 md:py-[0.375rem] flex  justify-center items-center hover:bg-gray-500 duration-200'> 
                            <div className='w-full flex justify-center items-center'>
                                <p className='text-gray-300 text-[0.8rem] sm:text-xs md:text-[0.9rem] lg:text-[1rem]  '> Nos&nbsp;réalisations </p>
                            </div>

                            <div className='p-[0.1875rem] border border-blue-100 rounded-full flex justify-center items-center'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 md:w-4 h-3 md:h-4  text-gray-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <img loading='lazy' src={Accueildesigngr1} className='h-[10.625rem] lg:h-[29.375rem] md:h-[20rem] sm:h-[15.625rem] ' alt='design 2'/>
                </picture>
            </section>
            
            {/* third part "accompagnement" */}
            <section className='w-full bg-white flex flex-col text-center justify-center relative gap-7 pt-7 md:gap-4'>

                <article className=' w-full justify-center items-center text-center flex flex-col left-4 ml-2 md:pt-3 z-40'>

                    <div className=' w-[12.5rem]  sm:w-[25rem]  items-center flex flex-col gap-y-2 sm:gap-y-5 '>

                        <h3 className=' text-gray-800 text-center text-3xl md:text-4xl lg:text-6xl font-interBold'>Accompagner</h3>

                        <p className='text-center text-xs sm:text-base text-gray-800 font-normal'>De la stratégie à la mise en œuvre, nous aidons les entreprises à créer une image de marque forte et durable</p>
                        
                        <div to='/services' className=' rounded-full cursor-pointer p-1 border bg-bgcqnoufaisons w-36 md:w-44 md:py-[0.375rem] flex justify-between items-center hover:bg-myBlue duration-200'> 
                            <div className='w-full  flex justify-center items-center'>

                                <p className='text-white text-[0.8rem] sm:text-xs md:text-[0.9rem] lg:text-[1rem] '>Voir&nbsp;nos&nbsp;services </p>
                            </div>

                            <div className='p-[0.1875rem] rounded-full justify-center items-center  border border-blue-200 flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 md:w-4 h-3 md:h-4 text-gray-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </article>
              
                <picture className='flex flex-col justify-center items-center  md:-mt-10'>
                    <img loading='lazy' src={accueil_accompagnons} className='w-[90%] md:w-[70%] lg:w-[60%]' alt='image accompagnement'/>
                </picture>

                
            </section>
            
            {/* 4th part "mamour" */}
            <section className='w-full flex flex-col text-center justify-center items-center relative '>


                <div className=' w-full justify-center  items-center flex flex-col gap-y-1 sm:gap-y-1 absolute bottom-6 '>

                    <h3 className=' text-blue-100 text-center text-3xl md:text-4xl lg:text-6xl font-interBold'>Créer</h3>

                    <caption className='flex flex-col justify-center items-center gap-2'>
                        <p className='text-center text-xs sm:text-base text-white font-normal'>Découvrez nos histoires inspirantes</p>
                        
                        <div to='/publication' className=' rounded-full cursor-pointer py-1 px-6 border flex relative  hover:bg-myBlue duration-200'> 
                            <p className='text-white text-[0.8rem] sm:text-xs md:text-[0.9rem] lg:text-[1rem] text-center'>Voir plus </p>
                        </div>
                    </caption>
                </div>
              
                <div >
                    <img loading='lazy' src={width >= 640 ? Mamour_ordi : Mamour_phone} alt='Baraka image' />
                </div>

            </section>

            {/* 5th part "entron en contact" */}
            <figure className='w-full flex flex-col gap-5 justify-center items-center bg-gray-50 px-5 py-10'>

                <picture className=' w-full  flex justify-center items-center'>
                    <img loading='lazy' src={design_entrons_en_contact} alt='image accompagnement'/>
                </picture>
                
                <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-0  justify-center items-center w-full sm:justify-evenly'>
                    <Link to={'/contacts'} className='py-2 w-44 hover:bg-blue-400 sm:text-base text-sm  bg-blue-600 rounded-full text-white duration-200'> Contactez-nous</Link>
                    <Link to={'/contacts'} className=' py-2 w-44 boxShadow rounded-full sm:text-base text-sm hover:bg-blue-600 hover:text-white text-blue-600 duration-200'> Demander un devis </Link>
                </div>
            </figure>
            
            {/* 6th part "ils nous ont fait confiance"  */}
            <section className='w-full bg-bgCertifier flex flex-col justify-center items-center pt-8 pb-5 gap-10 px-3'>

                <h1 className='md:text-2xl text-xl text-blue-200'>Ils nous ont fait <b>confiance</b></h1>

                <div className=' flex  w-full sm:w-[90%] md:w-[80%] lg:w-[75%] overflow-hidden rounded-3xl shadow-2xl '>

                    <div className='slider flex items-center gap-5 py-4'>
                        <picture className='min-w-[40%] flex justify-center items-center'> <img loading='lazy' src={Logo1} alt='logo' className=' h-10'  /></picture>
                        <picture className='min-w-[40%] flex justify-center items-center'> <img loading='lazy' src={Logo2} alt='logo' className=' h-10' /></picture>
                        <picture className='min-w-[25%] flex justify-center items-center'> <img loading='lazy' src={Logo3} alt='logo' className=' h-10' /> </picture>
                        <picture className='min-w-[20%] flex justify-center items-center'> <img loading='lazy' src={Logo4} alt='logo' className=' h-14' /></picture>
                        <picture className='min-w-[20%] flex justify-center items-center'> <img loading='lazy' src={Logo5} alt='logo' className=' h-14' /></picture>
                        <picture className='min-w-[40%] flex justify-center items-center'> <img loading='lazy' src={Logo6} alt='logo' className=' h-6' /></picture>
                        <picture className='min-w-[30%] flex justify-center items-center'> <img loading='lazy' src={Logo7} alt='logo' className=' h-14' /></picture>
                        <picture className='min-w-[40%] flex justify-center items-center'> <img loading='lazy' src={Logo8} alt='logo' className=' h-10' /> </picture>
                        <picture className='min-w-[40%] flex justify-center items-center'> <img loading='lazy' src={Logo9} alt='logo' className=' h-10' /> </picture>
                        <picture className='min-w-[40%] flex justify-center items-center'> <img loading='lazy' src={Logo10} alt='logo' className='h-10' /></picture>
                        <picture className='min-w-[40%] flex justify-center items-center'> <img loading='lazy' src={Logo1} alt='logo' className=' h-10' /></picture>
                    </div>
                </div>
            </section>

        </section>
    )
}