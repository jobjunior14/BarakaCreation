import campagne from '../../../assets/Services/Design graphique/campagne.jpg';
import campagne_ordi from '../../../assets/Services/Design graphique/campagne_ordi.jpg';
import campagne_plan_comm_2 from '../../../assets/Services/Design graphique/campagne_plan_comm_2.png';
import campagne_conception from '../../../assets/Services/Design graphique/campagne_conception.png';
import campagne_digital_title from '../../../assets/Services/Design graphique/campagne_digital_title.png';
import campagne_digital_1 from '../../../assets/Services/Design graphique/campagne_digital_1.png';
import Campagne_plan_comm_analyse from '../../../assets/Services/Design graphique/Campagne_plan_comm_analyse.png';
import Campagne_plan_comm_strategie from '../../../assets/Services/Design graphique/Campagne_plan_comm_strategie.png';
import Campagne_plan_comm_action from '../../../assets/Services/Design graphique/Campagne_plan_comm_action.png';
import campagne_conception_affichage from '../../../assets/Services/Design graphique/campagne_conception_affichage.png';
import campagne_conception_flyers from '../../../assets/Services/Design graphique/campagne_conception_flyers.png';
import campagne_conception_banderole from '../../../assets/Services/Design graphique/campagne_conception_banderole.png';
import campagne_conception_pub from '../../../assets/Services/Design graphique/campagne_conception_pub.png';
import campagne_conception_t_shirt from '../../../assets/Services/Design graphique/campagne_conception_t_shirt.png';
import campagne_conception_vehicule from '../../../assets/Services/Design graphique/campagne_conception_vehicule.png';
import campagne_conception_illustration from '../../../assets/Services/Design graphique/campagne_conception_illustration.png';
import Digital_site_web_icone from '../../../assets/Services/Id visuelle/Digital_site_web_icone.png';
import Digital_supports_digitaux_Copie from '../../../assets/Services/Id visuelle/Digital_supports_digitaux_Copie.png';
import SecondeNav, {OnTopBtn} from '../identite_visuel/comp/util';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useWindowWidth from '../../windowWidth';

export default function CampagneDeComm () {

    // scroll to top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [toggled, setToggled] = useState({a: true, b: true, c: true});

    const width = useWindowWidth()
    const handleToggled = (letter) => {
        setToggled(prev => ({...prev, [letter]: prev[letter] ? false : true}),)
    }
    return (
        <main className=''>

            {/* <nav className='sticky top-0 bg-white z-50 overflow-hidden px-[6%] lg:px-[12%]'> */}

                <SecondeNav
                    title={' Design Graphique'} 
                    link={'/services/graphiqueDesign'} 
                    bgColor={'bg-white'} 
                    titleColor='text-gray-700'
                    brdrColor='border-gray-700' textColor = ' text-black'
                />
            {/* </nav> */}
            {/* welcom image and texte  */}
            <section className="w-full flex flex-col justify-center bg-white px-[4%] lg:px-[20%]">

                <div className='w-full pt-[6%] sm:pt-[3%] flex flex-col gap-4 z-40'>
                    <h1 className='text-gray-700 text-[1.875rem] sm:text-[2.5rem] font-interBold md:text-[2.75rem] lg:text-[3.375rem] font-bold leading-8 sm:leading-[2.5rem] md:leading-[2.75rem] lg:leading-[56px]'>Campagne de <br /> Communication</h1>
                    <div className=' flex justify-center items-center gap-2 flex-col  w-full  '>
                        
                        <Link to='/contacts' className=" duration-200  text-gray-100 font-interRegular text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] px-4  rounded-full bg-blue-500 hover:text-blue-500 hover:bg-bgIdVisuel border-blue-500 border">Interessé</Link>
                        
                        <Link to={'/portfolio'} className=" text-blue-500 font-interRegular text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] flex items-center "> Notre portfolio <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link>
                    </div>
                </div>

                <div className=' justify-center items-center flex  sm:-mt-[2%] md:-mt-[1%] '>
                    <div className='w-[70%] sm:w-[60%] md:w-[40%] lg:w-[45%]'>

                        <img loading='lazy' src={ width >= 640 ? campagne_ordi : campagne} alt="campagne"/>
                    </div>
                </div>
            </section>

            <div className=' bg-bgCampagnCom flex flex-col justify-center px-[3%] lg:px-[9%]'>

                <section className='  w-full grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 md:gap-7 px-[4%] sm:px-[5%] md:px-[10%] lg:px-[15%] py-10'>
                    
                    {/* first paragraph  */}
                    <section className='px-[5%] md:px-0 w-[80%] md:w-[100%] md:py-10'>
                        <p className='text-left font-interSemibold text-gray-100 text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] leading-5 sm:leading-7  sm:w-[100%] md:w-full'>
                            <span className='text-blue-100 md:text-gray-100'>

                                Avez vous une cause que vous souhaiteriez
                                poter à l&apos;attention du grand public ? </span>
                            <br  className='md:hidden'/>
                            <br className='md:hidden' />
                             Nous créons votre campagne du briefing au
                            lancement. La clé du succès est un visuel
                            percutant qui transmet votre message de
                            manière claire et concise
                        </p>
                    </section>

                    {/* second paragraph  */}
                    <section className='px-[5%] md:px-0 w-[70%] '>
                        <p className='text-left font-interSemibold text-blue-100 text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] leading-5 sm:leading-7  sm:w-[75%] md:w-[75%] lg:w-[84%] '>
                            Nous vous proposons une large gamme de solutions, de l&apos;élaboration du plan de communication aux conceptions.
                        </p>
                    </section>

                    {/* plan & stategie  */}
                    <section className="w-full flex overflow-hidden relative">

                        <div className='w-full bg-gradient-to-b from-slate-200 from-5% to-white pt-[25%] md:pt-[23%] rounded-lg flex flex-col gap-5'>
                            <figcaption className=' justify-start items-start flex flex-col gap-2 w-full px-[15%]'>
                                <h3 className='text-left font-interBold text-[24px] sm:text-[1.625rem] md:text-[28px] lg:text-[1.875rem] leading-7 text-gray-800'>Plan & <br /> strategies de <br /> communication</h3>
                                <button onClick={() => handleToggled('a')} className=" text-blue-500 font-interRegular text-[0.75rem] sm:text-[15px] md:text-[1rem] flex items-center "> Voir plus <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></button>
                            </figcaption>
                            
                            <figure className=' md:flex md:justify-start md:w-[70%]'>

                                <img loading='lazy' src={campagne_plan_comm_2} alt="campagne_plan_comm_2" />
                            </figure>
                        </div>

                        {/* toggled  */}
                    <div className={`flex flex-col justify-center items-center  gap-6 sm:gap-14 md:gap-2 w-full p-7 sm:p-20 md:px-7 md:py-3  h-full bg-white absolute rounded-lg duration-500 ${toggled.a ?  'translate-x-[100%]' : 'translate-x-[0%]'}`}>
                                
                            {/* Analyse  */}
                            <div className="text-left flex w-full gap-3" >
                                <div className="w-[10%]">
                                    <img loading='lazy' src={Campagne_plan_comm_analyse} alt="Campagne_plan_comm_analyse" />
                                </div>
                                <div className="w-[90%] flex flex-col  gap-1">
                                    <h1 className="md:text-[1.125rem] font-interBold text-gray-600">Analyse du contexte</h1>
                                    <p className="text-[0.69rem] sm:text-[13px] md:text-[0.69rem] font-interRegular lg:text-[0.75rem] text-gray-600"> Analyse de votre entreprise, du cible, des concurents, de l&apos;objectif et des enjeux ainsi que la politique de communication </p>
                                </div>
                            </div>

                            {/* Les Strategies  */}
                            <div className="text-left flex w-full gap-3" >
                                <div className="w-[10%]">
                                    <img loading='lazy' src={Campagne_plan_comm_strategie} alt="Campagne_plan_comm_strategie" />
                                </div>
                                <div className="w-[90%] flex flex-col  gap-1">
                                    <h1 className="md:text-[1.125rem] font-interBold text-gray-600">Les stratégies</h1>
                                    <p className="text-[0.69rem] sm:text-[13px] md:text-[0.69rem] font-interRegular lg:text-[0.75rem] text-gray-600"> Elaboration du message, la manière de la transmettre, des outils de communication adaptés, le style et la ligne graphique</p>
                                </div>
                            </div>

                            {/*Modalites d'action  */}
                            <div className="text-left flex w-full gap-3" >
                                <div className="w-[10%]">
                                    <img loading='lazy' src={Campagne_plan_comm_action} alt="Campagne_plan_comm_action" />
                                </div>
                                <div className="w-[90%] flex flex-col  gap-1">
                                    <h1 className="md:text-[1.125rem] font-interBold text-gray-600"> Modalités d&apos;action </h1>
                                    <p className="text-[0.69rem] sm:text-[13px] md:text-[0.69rem] font-interRegular lg:text-[0.75rem] text-gray-600"> le choix des canaux de communication. Le Budget alloué à votre action & le pilotage de l&apos;action</p>
                                    <button className="text-[0.69rem] sm:text-[13px] md:text-[0.69rem] font-interRegular lg:text-[0.75rem] text-blue-500 mt-2 text-left flex items-center "  onClick={() => handleToggled('a')}>Voir moins <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                                        </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            
                        </div>

                    </section>

                    {/* conception graphique */}
                    <section className='w-full flex overflow-hidden relative'>

                        <div className='w-full bg-gradient-to-t from-[rgb(74,76,127)] to-[rgb(141,143,228)] pt-[23%] md:pt-[20%] rounded-lg flex flex-col gap-5'>
                            <div className=' justify-start items-start flex flex-col gap-2 w-full px-[15%]'>
                                <h3 className='text-left text-[24px] sm:text-[1.625rem] md:text-[28px] lg:text-[1.875rem] font-interBold leading-7 md:leading-8 text-gray-100'>Conception <br />graphique des <br />supports</h3>
                                <button onClick={() => handleToggled('b')} className=" text-blue-100 text-[0.75rem] sm:text-[15px] md:text-[1rem] flex items-center font-interRegular "> Voir plus <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></button>
                            </div>

                            <figure className='w-full flex rounded-lg py-[2px] justify-center items-center pb-5'>

                                <div className='w-[48%] flex justify-center items-center'>

                                    <img loading='lazy' src={campagne_conception} alt="campagne_conception" />
                                </div>
                            </figure>
                        </div>

                        {/* toggled */}
                        <section className={`flex flex-col justify-center items-start  gap-5 sm:gap-8 md:gap-5 w-full px-7 sm:p-20 md:px-7 md:py-3  h-full bg-white absolute rounded-lg duration-500 ${toggled.b ?  'translate-x-[100%]' : 'translate-x-[0%]'}`}>
                            
                            <p className='text-left font-interRegular text-[0.75rem] sm:text-[0.875rem] text-gray-700 leading-4'>Nous vous proposons un package complet des supports de communication adapté à vos objectif</p>

                            <div className='flex flex-col gap-3 md:gap-2 lg:gap-4 justify-center items-center w-full'>

                                <div className='w-full flex bg-slate-200 rounded-lg items-center py-[2px] px-5'>
                                    <div className='w-[20%]'>
                                        <img loading='lazy' src={campagne_conception_affichage} alt="campagne_conception_affichage" className = 'h-4 sm:h-5 md:h-4' />
                                    </div>
                                    <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem] sm:text-[0.875rem]'> Affichage</h2>
                                </div>

                                <div className='w-full flex bg-slate-200 rounded-lg items-center py-[2px] px-5'>
                                    <div className='w-[20%]'>
                                        <img loading='lazy' src={campagne_conception_flyers} alt="campagne_conception_flyers" className = 'h-4 sm:h-5 md:h-4' />
                                    </div>
                                    <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem] sm:text-[0.875rem]'> Brochure / Flyers</h2>
                                </div>

                                <div className='w-full flex bg-slate-200 rounded-lg items-center py-[2px] px-5'>
                                    <div className='w-[20%]'>
                                        <img loading='lazy' src={campagne_conception_banderole} alt="campagne_conception_banderole" className = 'h-3' />
                                    </div>
                                    <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem] sm:text-[0.875rem]'>Banderole</h2>
                                </div>

                                <div className='w-full flex bg-slate-200 rounded-lg items-center py-[2px] px-5'>
                                    <div className='w-[20%]'>
                                        <img loading='lazy' src={campagne_conception_pub} alt="campagne_conception_pub" className = 'h-4 sm:h-5 md:h-4' />
                                    </div>
                                    <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem] sm:text-[0.875rem]'>Publicité</h2>
                                </div>

                                <div className='w-full flex bg-slate-200 rounded-lg items-center py-[2px] px-5'>
                                    <div className='w-[20%]'>
                                        <img loading='lazy' src={campagne_conception_illustration} alt="campagne_conception_illustration" className = 'h-4 sm:h-5 md:h-4' />
                                    </div>
                                    <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem] sm:text-[0.875rem]'>Illustation</h2>
                                </div>
                                
                                <div className='w-full flex bg-slate-200 rounded-lg items-center py-[2px] px-5'>
                                    <div className='w-[20%]'>
                                        <img loading='lazy' src={campagne_conception_t_shirt} alt="campagne_conception_t_shirt" className = 'h-4 sm:h-5 md:h-4' />
                                    </div>
                                    <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem] sm:text-[0.875rem]'> Support d&apos;habillage</h2>
                                </div>

                                <div className='w-full flex bg-slate-200 rounded-lg items-center py-[2px] px-5'>
                                    <div className='w-[20%]'>
                                        <img loading='lazy' src={campagne_conception_vehicule} alt="campagne_conception_vehicule" className = 'h-4 sm:h-5 md:h-4' />
                                    </div>
                                    <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem] sm:text-[0.875rem]'>Et bien plus</h2>
                                </div>
                            </div>

                            <button onClick={() => handleToggled('b')} className=" text-blue-500 text-[0.75rem] sm:text-[15px] md:text-[13px] flex items-center "> Voir moins <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                                        </svg></span></button>

                        </section>

                    </section>


                    {/* communication digital */}
                    <section className='w-full flex overflow-hidden relative md:col-span-2 col-end-2 justify-center items-center'>
                        <div className='w-full bg-black pt-[15%] md:py-[5%] rounded-lg flex flex-col md:flex-row gap-[60px]  justify-center items-center'>

                            <div className=' justify-center items-center md:justify-start md:items-start flex flex-col gap-0 w-full'>
                                <h3 className='text-left text-[1.125rem] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-7 text-gray-100 md:px-[83px]'>Communication</h3>
                                <div className='w-full px-[83px]'>
                                    <img loading='lazy' src={campagne_digital_title} alt=''/>
                                </div>
                                <button onClick={() => handleToggled('c')} className=" text-blue-400 text-[0.75rem] sm:text-[15px] md:text-[1rem] flex items-center font-interRegular  md:px-[83px]"> Voir plus <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></button>
                            </div>

                            <figure className='w-full flex rounded-lg py-[2px] px-5 justify-center items-center pb-5 md:pb-0'>

                                <div className='w-[80%] flex justify-center items-center'>

                                    <img loading='lazy' src={campagne_digital_1} alt="campagne_digital_1" />
                                </div>
                            </figure>
                        </div>

                        {/* toggled  */}
                        
                        <div className={`flex flex-col md:flex-row justify-center items-center  gap-5 sm:gap-8 md:gap-5 w-full px-7 sm:p-20 md:px-7 md:py-3  h-full bg-white absolute rounded-lg duration-500 ${toggled.c ?  'translate-x-[100%]' : 'translate-x-[0%]'}`}>

                            {/* Reseaux sociaux  */}
                            <div className="text-left flex w-full gap-3" >
                                <figure className="w-[10%]">
                                    <img loading='lazy' src={Digital_supports_digitaux_Copie} alt="Digital_supports_digitaux_Copie" />
                                </figure>
                                <figcaption className="w-[90%] flex flex-col  gap-1">
                                    <h1 className="md:text-[1.125rem] font-interBold text-gray-600"> Réseaux sociaux</h1>
                                    <p className="text-[0.69rem] sm:text-[13px] md:text-[0.69rem] font-interRegular lg:text-[0.75rem] text-gray-600">Nous élaborons et concevons des support digitaux efficaces pour atteindre une large audience lors de votre campagne. </p>
                                </figcaption>
                            </div>

                            {/* web Design  */}
                            <div className="text-left flex w-full gap-3" >
                                <div className="w-[10%]">
                                    <img loading='lazy' src={Digital_site_web_icone} alt="Digital_site_web_icone" />
                                </div>
                                <div className="w-[90%] flex flex-col ">
                                    <div className='w-full flex flex-col  gap-1'>
                                        <h1 className="md:text-[1.125rem] font-interBold text-gray-600">Web Design</h1>
                                        <p className="text-[0.69rem] sm:text-[13px] md:text-[0.69rem] font-interRegular lg:text-[0.75rem] text-gray-600"> Conception graphique des sites wb, application mobile et tout support numerique</p>
                                    </div>
                                    <button className="text-[0.69rem] sm:text-[13px] md:text-[0.69rem] font-interRegular lg:text-[0.75rem] text-blue-500 mt-2 text-left flex items-center "  onClick={() => handleToggled('c')}>Voir moins <span className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                                        </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>

                <OnTopBtn brdrColor='border-gray-100' textColor = ' text-white'/>
            </div>


        </main>
    )
}