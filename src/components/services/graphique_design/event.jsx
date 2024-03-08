import SecondeNav, {OnTopBtn} from '../identite_visuel/comp/util';
import { Link } from 'react-router-dom';
import evenementiel from '../../../assets/Services/Design graphique/evenementiel.jpg'
import evenementielT from '../../../assets/Services/Design graphique/evenementielT.png'
import campagne_conception_affichage from '../../../assets/Services/Design graphique/campagne_conception_affichage.png'
import campagne_conception_banderole from '../../../assets/Services/Design graphique/campagne_conception_banderole.png'
import campagne_conception_flyers from '../../../assets/Services/Design graphique/campagne_conception_flyers.png'
import campagne_conception_pub from '../../../assets/Services/Design graphique/campagne_conception_pub.png'
import campagne_conception_t_shirt from '../../../assets/Services/Design graphique/campagne_conception_t_shirt.png'
import campagne_conception_vehicule from '../../../assets/Services/Design graphique/campagne_conception_vehicule.png'
import event_Album from '../../../assets/Services/Design graphique/event_Album.png'
import event_supports_digitaux from '../../../assets/Services/Design graphique/event_supports_digitaux.png'
import event_presentation_1 from '../../../assets/Services/Design graphique/event_presentation_1.png'
import Digital_site_web_icone from '../../../assets/Services/Id visuelle/Digital_site_web_icone.png';
import event_Backdrop from '../../../assets/Services/Design graphique/event_Backdrop.png';
import event_stand from '../../../assets/Services/Design graphique/event_stand.png';
import event_Habillage from '../../../assets/Services/Design graphique/event_Habillage.png';
import event_Signaletique from '../../../assets/Services/Design graphique/event_Signaletique.png';
import event_Badges from '../../../assets/Services/Design graphique/event_Badges.png';
import event_Rollup from '../../../assets/Services/Design graphique/event_Rollup.png';
import event_invitatations from '../../../assets/Services/Design graphique/event_invitatations.png';
import event_digital from '../../../assets/Services/Design graphique/event_digital.png';
import event_package from '../../../assets/Services/Design graphique/event_package.png';
import event_plus from '../../../assets/Services/Design graphique/event_plus.png';
import { useEffect } from 'react';

export default function Event() {

    // scroll to top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <main>

            <SecondeNav
                title={' Design Graphique'} 
                link={'/services/graphiqueDesign'} 
                bgColor={'bg-bgEvent'} 
                titleColor='text-gray-100'
                brdrColor='border-gray-100' textColor = ' text-white'
            />
            
            {/* welcom image and texte  */}
            <section className="w-full flex flex-col justify-center bg-bgEvent px-[6%] lg:px-[20%]">
 
                <div className='w-full pt-[6%] sm:pt-[1%] flex flex-col gap-4 md:gap-0 z-40'>

                    <div className=' flex flex-col justify-center items-center  '>
                        <img loading='lazy' src={evenementielT} alt="evenementielT" className='lg:w-[90%]' />
                    </div>

                    <div className=' flex justify-center items-center gap-2 flex-col  w-full  '>
                        
                        <Link to='/contacts' className=" duration-200 font-interRegular  text-gray-100 text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] px-4  rounded-full bg-blue-500 hover:text-blue-500 hover:bg-bgIdVisuel border-blue-500 border">Interessé</Link>
                        
                        <Link to={'/portfolio'} className=" text-blue-500 font-interRegular text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] flex items-center "> Notre portfolio <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link>
                    </div>
                </div>

                <div className=' justify-center items-center flex  '>
                    <div className='w-full sm:w-[60%] md:w-[65%] lg:w-[60%]'>

                        <img loading='lazy' src={evenementiel} alt="campagne"/>
                    </div>
                </div>
            </section>
            
            {/* first and second paragraph  */}
            <section className=' bg-slate-200 gap-5 flex flex-col md:flex-row py-14 md:justify-center w-full px-[6%] lg:px-[21%] '>

                {/* first paragraph  */}
                <section className=' w-[90%] '>
                    <p className='text-left font-interSemibold text-gray-700 text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] leading-5 sm:leading-6  sm:w-[65%] md:w-[90%]'>
                        Baraka creation s&apos;occupe de tous types d&apos;outils de communication dont vous pouiez avoir besoin pour la réussite de vos événements . Nous concevons des suppots avec rapidité, efficacité et un résultat impeccable
                    </p>
                </section>

                {/* second paragraph  */}
                <section className=' w-[90%] '>
                    <p className='text-left font-interSemibold text-gray-400 text-[1rem] sm:text-[1.2rem] md:text-[1.3rem] leading-5 sm:leading-6  sm:w-[75%] md:w-full '>
                        Nous vous accompagnons durant tout le processus, de la définition de votre plan de communication à la réalisation de votre événement, passant par la conception des suppots, la création d&apos;une ligne graphique personnalisée et les impressions.
                    </p>
                </section>
            </section>
            
            <section className=' w-full flex-col flex justify-center items-center bg-slate-200 gap-5 pb-5'>

                
                {/* conception des supports publicitaire  */}
                <section className='w-full px-[6%] lg:px-[21%] bg-white rounded-lg flex flex-col gap-5 md:gap-10 lg:gap-14 py-10  lg:py-14'>

                    <h1 className='text-left font-interBold text-gray-700 text-[24px] md:text-[28px] lg:text-[32px] leading-6 lg:leading-7'>Conception des <br/> supports publicitaires</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2 lg:gap-4 justify-center items-center w-full'>

                        <div className='flex flex-col gap-3 md:gap-2 lg:gap-4 justify-center items-center w-full'>
                            <div className='w-full flex bg-slate-200 rounded-lg items-center md:gap-4 py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={campagne_conception_affichage} alt="campagne_conception_affichage" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem]'> Affichage</h2>
                            </div>

                            <div className='w-full flex bg-slate-200 rounded-lg items-center md:gap-4 py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={campagne_conception_flyers} alt="campagne_conception_flyers" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem]'> Brochure / Flyers</h2>
                            </div>

                            <div className='w-full flex bg-slate-200 rounded-lg items-center md:gap-4 py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={campagne_conception_banderole} alt="campagne_conception_banderole" className = 'h-3' />
                                </div>
                                <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem]'>Banderole</h2>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 md:gap-2 lg:gap-4 justify-center items-center w-full'>
                            <div className='w-full flex bg-slate-200 rounded-lg items-center md:gap-4 py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={campagne_conception_pub} alt="campagne_conception_pub" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem]'>Publicité</h2>
                            </div>

                            <div className='w-full flex bg-slate-200 rounded-lg items-center md:gap-4 py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_presentation_1} alt="event_Album" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem]'>Support de présentation</h2>
                            </div>
                            
                            <div className='w-full flex bg-slate-200 rounded-lg items-center md:gap-4 py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={campagne_conception_t_shirt} alt="campagne_conception_t_shirt" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem]'> Support d&apos;habillage</h2>
                            </div>
                        </div>


                        <div className='flex flex-col gap-3 md:gap-2 lg:gap-4 justify-center items-center w-full'>
                            <div className='w-full flex bg-slate-200 rounded-lg items-center md:gap-4 py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={Digital_site_web_icone} alt="Digital_site_web_icone" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem]'> Site Web</h2>
                            </div>
                            <div className='w-full flex bg-slate-200 rounded-lg items-center md:gap-4 py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_supports_digitaux} alt="campagne_conception_vehicule" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem]'> Réseaux sociaux </h2>
                            </div>
                            <div className='w-full flex bg-slate-200 rounded-lg items-center md:gap-4 py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={campagne_conception_vehicule} alt="campagne_conception_vehicule" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-700 text-left text-[0.75rem]'>Et bien plus</h2>
                            </div>
                        </div>
                    </div> 
                </section>
                
                {/* conception des supports evenementiels penadant et apres  */}
                <section className=' px-[6%] lg:px-[21%] w-full bg-bgConception rounded-lg  flex flex-col gap-5 md:gap-10 lg:gap-14 py-10 lg:py-14'>

                    <h1 className='text-left font-interBold text-gray-100 text-[24px] md:text-[28px] lg:text-[32px] leading-6 md:leading-7'><span className=' text-bgPlay md:text-gray-100'>Conception des</span> <br className='md:hidden'/> supports <br /> évènementiels <br className='md:hidden'/> pendant et <br className='hidden md:block' /> après</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2 lg:gap-4 justify-center items-center w-full'>

                        <div className='flex flex-col gap-3 md:gap-2 lg:gap-4 justify-center items-center w-full'>
                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_Backdrop} alt="event_Backdrop" className = 'h-3 ' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'> Back drop</h2>
                            </div>

                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_stand} alt="event_stand" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'> Stand design</h2>
                            </div>

                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_Habillage} alt="event_Habillage" className = 'h-3 ' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'>Habillages</h2>
                            </div>

                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_Signaletique} alt="event_Signaletique" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'>Signalétiques</h2>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 md:gap-2 lg:gap-4 justify-center items-center w-full'>

                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_Badges} alt="event_Badges" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'>Badges</h2>
                            </div>
                            
                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_Album} alt="campagne_conception_t_shirt" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'> Albulms / Magazines</h2>
                            </div>

                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_Rollup} alt="Digital_site_web_icone" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'> Rollup </h2>
                            </div>

                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_invitatations} alt="event_invitatations" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'> Invitation / Tickets </h2>
                            </div>
                        </div>


                        <div className='grid grid-cols-1 gap-3 md:gap-2 lg:gap-4 justify-center w-full'>

                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_digital} alt="event_digital" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'> Support digitaux</h2>
                            </div>

                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_package} alt="event_package" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'> Package des invités</h2>
                            </div>

                            <div className='w-full flex bg-bgConceptionGrid rounded-lg md:gap-2 items-center py-[5px] md:py-3 px-5'>
                                <div className='w-[20%] md:w-[15%]'>
                                    <img loading='lazy' src={event_plus} alt="event_plus" className = 'h-4 sm:h-5 md:h-4' />
                                </div>
                                <h2 className='font-interSemibold text-gray-100 text-left text-[0.75rem]'>Et bien plus</h2>
                            </div>

                            <div className='w-full flex bg-bgConception rounded-lg items-center py-[5px] md:py-3 px-5'> 

                            
                                <h2 className='font-bold text-bgConception text-left text-[0.75rem] sm:text-[0.875rem]'>Et bien plus</h2>
                            </div>
                        </div>
                    </div> 
                </section>

                <OnTopBtn brdrColor='border-gray-700' textColor = ' text-black'/>

            </section>
        </main>
    )
}