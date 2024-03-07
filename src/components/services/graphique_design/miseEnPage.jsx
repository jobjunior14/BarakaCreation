import SecondeNav, {OnTopBtn} from '../identite_visuel/comp/util';
import { Link } from 'react-router-dom';
import mise_en_page_accueil from '../../../assets/Services/Design graphique/mise_en_page_accueil.jpg';
import mise_en_page_service_design from '../../../assets/Services/Design graphique/mise_en_page_service_design.jpg';
import Mise_en_page_adapté from '../../../assets/Services/Design graphique/Mise_en_page_adapté.jpg';
import Mise_en_page_icone_1 from '../../../assets/Services/Design graphique/Mise_en_page_icone_1.png';
import Mise_en_page_icone3 from '../../../assets/Services/Design graphique/Mise_en_page_icone3.png';
import Mise_en_page_icone_2 from '../../../assets/Services/Design graphique/Mise_en_page_icone_2.png';
import Mise_en_page_icone_4 from '../../../assets/Services/Design graphique/Mise_en_page_icone_4.png';
import mise_enpage_service_design_2__ordi from '../../../assets/Services/Design graphique/mise_enpage_service_design_2__ordi.jpg';
import mise_en_page_service_design_ordi from '../../../assets/Services/Design graphique/mise_en_page_service_design_ordi.jpg';
import useWindowWidth from '../../windowWidth';
import { useEffect } from 'react';
export default function MiseEnPage() {

    // scroll to top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const width = useWindowWidth()
    return (

        <main className='bg-gray-50 pb-8'>

            <SecondeNav
                title={' Design Graphique'} 
                link={'/services/graphiqueDesign'} 
                bgColor={'bg-bgMiseEnpage'} 
                titleColor='text-gray-700'
                brdrColor='border-gray-700' textColor = ' text-black'
            />

            {/* welcom image and texte  */}
            <section className="w-full flex flex-col justify-center bg-bgMiseEnpage">
 
                <div className='w-full pt-[6%] sm:pt-[1%] flex flex-col gap-4 md:gap-4'>

                    <div className=' flex flex-col justify-center items-center  '>
                        <h1 className=' text-5xl sm:text-[4.25rem] md:text-[4.625rem] lg:text-[5.625rem] font-interBold text-gray-700'>Mise en page</h1>
                    </div>

                    <div className=' flex justify-center items-center gap-2 flex-col  w-full z-40  '>
                        
                        <Link to='/contacts' className=" duration-200  text-gray-100 font-interRegular text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] px-4 rounded-full bg-blue-500 hover:text-blue-500 hover:bg-bgIdVisuel border-blue-500 border">Interessé</Link>
                        
                        <Link to={'/portfolio'} className=" text-blue-500 text-[0.75rem] font-interRegular sm:text-[0.875rem] md:text-[1rem] flex items-center "> Notre portfolio <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link>
                    </div>
                </div>

                <div className=' justify-center items-center flex -mt-4  '>
                    <div className='w-[90%] sm:w-full lg:w-[45%]'>

                        <img loading='lazy' src={mise_en_page_accueil} alt="campagne"/>
                    </div>
                </div>
            </section>
            
            <section className=' mb-10'>

                {/* section text  */}
                <div className='w-full  flex  justify-center items-center px-[6%] lg:px-[5%]'>

                    <section className='pt-10 w-full md:w-[65%] flex flex-col'>

                        <h1 className='text-left text-[1.75rem] leading-6 font-interBold text-bgPlay '>Vous avez un <br/> projet complexe ? </h1>

                        <section className='gap-5  flex flex-col md:flex-row py-10 md:justify-center w-full '>

                            {/* first paragraph  */}
                            <section className=' md:px-0 w-[90%] md:w-[80%] '>

                                <p className=' text-left font-interSemibold text-gray-700 text-[1rem]  leading-5 lg:leading-6  '> 
                                    Nous faisons la mise en page des supports pour l&apos;impression & le Web. Nous proposons une gamme complète de sevices en matière de conception de publications : de la recherche d&apos;images, à la création d&apos;illustrations et infographies passant par la conception de la charte éditoiale
                                </p>

                            </section>

                            {/* second paragraph  */}
                            <section className=' md:px-0 w-[90%] md:w-[50%] '>

                                <p className='text-left font-interSemibold text-gray-500 text-[1rem]  leading-5 lg:leading-6    '>
                                Nous gérons l&apos;ensemble du flux de travail de conception des suppots, du biefing à la livraison
                                </p>

                            </section>

                        </section>
                    </section>
                </div>

                {/* section list  */}
                <section className=' flex flex-col py-10 w-full justify-center items-center px-[6%] lg:px-[12%]'>

                    
                    <div className='md:w-[75%] w-full flex flex-col gap-5'>
                        <div>
                            <p className='text-left text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.125rem] text-gray-700 flex items-start w-[90%] font-interRegular'>Les projets de conception de publications les plus courants que nous traitons sont: </p>
                            <div className='w-full h-px bg-gray-500'> </div>

                        </div>

                        <div className=' grid grid-cols-2 md:grid-cols-3 justify-start items-stretch md:gap- w-full' >

                            <ul className=' list-disc w-full '>
                                <li className='text-left font-interSemibold text-gray-700 text-[0.75rem] md:text-[13px] lg:text-[15px] leading-5 lg:leading-7  '>Livre</li>
                                <li className='text-left font-interSemibold text-gray-700 text-[0.75rem] md:text-[13px] lg:text-[15px] leading-5 lg:leading-7  '>Brochure</li>
                                <li className='text-left font-interSemibold text-gray-700 text-[0.75rem] md:text-[13px] lg:text-[15px] leading-5 lg:leading-7  '>Magazine</li>
                                <li className='text-left md:hidden font-bold text-gray-700 text-[0.75rem] md:text-[13px] lg:text-[15px] leading-5 lg:leading-7  '>Rapport annuel</li>
                            </ul>

                            <ul className=' list-disc w-full '>
                                <li className='text-left font-interSemibold text-gray-700 text-[0.75rem] md:text-[13px] lg:text-[15px] leading-5 lg:leading-7  '>Bande dessinée</li>
                                <li className='text-left font-interSemibold text-gray-700 text-[0.75rem] md:text-[13px] lg:text-[15px] leading-5 lg:leading-7  '>Manuel pédagogique</li>
                                <li className='text-left font-interSemibold text-gray-700 text-[0.75rem] md:text-[13px] lg:text-[15px] leading-5 lg:leading-7  '>Dépliant</li>
                                <li className='text-left font-bold md:hidden text-gray-700 text-[0.75rem] md:text-[13px] lg:text-[15px] leading-5 lg:leading-7  '>Documents internes</li>
                            </ul>

                            <ul className=' list-disc w-full hidden md:block'>
                                <li className='text-left font-interSemibold text-gray-700 text-[0.75rem] md:text-[13px] lg:text-[15px] leading-5 lg:leading-7  '>Documents internes</li>
                                <li className='text-left font-interSemibold text-gray-700 text-[0.75rem] md:text-[13px] lg:text-[15px] leading-5 lg:leading-7  '>Rapport annuel</li>
                            </ul>
                        </div>
                    </div> 
                </section>
                
                {/* attrayante et lisibe  */}
                <section className='flex flex-col gap-5 px-[6%] lg:px-[10%]'>

                    <section className='w-full bg-[rgb(116,141,182)]   rounded-lg pt-[45px] sm:pt-10 md:pt-20 lg:pt-20 overflow-hidden h-[425px] sm:h-[300px] flex flex-col  relative '>

                        <div className=' relative z-40'>
                            <h1 className=' text-left sm:ml-[14%] ml-[10%] font-interBold text-gray-100 text-[1.75rem] md:text-[1.875rem] leading-8 lg:text-4xl'>Une mise en <br /> page attrayante <br /> et lisibe</h1>
                        </div>
                        
                        <section className=' flex justify-start items-start w-[full] absolute -bottom-5 right-0'>
                            <img loading='lazy' src={ width <= 640 ? mise_en_page_service_design : mise_en_page_service_design_ordi} alt="mise_en_page_sevice_design" className='sm:scale-120 ' />
                        </section>
                    </section>

                    <section className='w-full bg-[rgb(236,236,236)]  rounded-lg pt-[45px] sm:pt-10 md:pt-20 lg:pt-20 overflow-hidden h-[425px] sm:h-[300px] flex flex-col  relative '>

                        <div className=' relative z-40'>
                            <h1 className=' text-right mr-[10%] font-interBold text-gray-700 text-[1.75rem] md:text-[1.875rem] leading-7 lg:text-4xl'>Adapté aux <br /> formats print <span className='text-gray-400'>&</span> <br className=''/> Digital ( e-book )</h1>
                        </div>
                        
                        <section className=' flex justify-start items-start w-[full] absolute -bottom-8 left-0'>
                            <img loading='lazy' src={width <= 640 ? Mise_en_page_adapté : mise_enpage_service_design_2__ordi} alt="mise_en_page_service_desig" className='  ' />
                        </section>
                    </section>

                   
                </section>

                {/* apsect de la mise en page  */}
                <div className='w-full flex justify-center items-center px-[6%] lg:px-[20%]'>

                    <div className='flex justify-center items-center w-full'>

                        <section className=' w-full pt-10 flex flex-col gap-7 sm:gap-10 md:gap-14 lg:gap-14 '>
                            
                            <h1 className=' text-[1.3rem] text-gray-500  font-interBold text-left'>Aspect  <br className='sm:hidden'/>de la mise en page</h1>
                            <ul className=' grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center w-full'>

                                <li className='flex flex-col gap-3 justify-center items-center'>
                                    <figure className='w-full h-14 flex items-center justify-center'>

                                        <img loading='lazy' src={Mise_en_page_icone_1} alt="Mise_en_page_icone_1" className='h-14'/>
                                    </figure>
                                    <div className='w-[90%] sm:w-full h-px bg-gray-500'> </div>

                                    <figcaption className='w-full h-20'>
                                        <h1 className='font-interBold text-gray-700 text-[0.875rem] md:text-[1rem] lg:text-[1.3rem] leading-4 lg:leading-6'>Design épuré, <br />lisible et <br />attrayant</h1>
                                    </figcaption>
                                </li>

                                <li className='flex flex-col gap-3 justify-center items-center'>
                                        <figure className='w-full h-14 flex items-center justify-center'>

                                            <img loading='lazy' src={Mise_en_page_icone3} alt="Mise_en_page_icone3" className='h-14'/>
                                        </figure>
                                    <div className='w-[90%] sm:w-full h-px bg-gray-500'> </div>

                                    <figcaption className='w-full h-20'>
                                        <h1 className='font-interBold text-gray-700 text-[0.875rem] md:text-[1rem] lg:text-[1.3rem] leading-4 lg:leading-6'>Graphiques <br />et icones <br />originales</h1>
                                    </figcaption>
                                </li>

                                <li className='flex flex-col gap-3 justify-center items-center'>
                                        <figure className='w-full h-14 flex items-center justify-center'>

                                            <img loading='lazy' src={Mise_en_page_icone_2} alt="Mise_en_page_icone_2" className='h-14'/>
                                        </figure>
                                    <div className='w-[90%] sm:w-full h-px bg-gray-500'> </div>

                                    <figcaption className='w-full h-20'>
                                        <h1 className='font-interBold text-gray-700 text-[0.875rem] md:text-[1rem] lg:text-[1.3rem] leading-4 lg:leading-6'>Illustrations <br />personnalisées <br /></h1>
                                    </figcaption>
                                </li>

                                <li className='flex flex-col gap-3 justify-center items-center'>
                                        <figure className='w-full h-14 flex items-center justify-center'>

                                            <img loading='lazy' src={Mise_en_page_icone_4} alt="Mise_en_page_icone_4" className='h-14'/>
                                        </figure>
                                    <div className='w-[90%] sm:w-full h-px bg-gray-500'> </div>

                                    <figcaption className='w-full h-20'>
                                        <h1 className='font-interBold text-gray-700 text-[0.875rem] md:text-[1rem] lg:text-[1.3rem] leading-4 lg:leading-6'>Adaptée au <br />format print et <br />digital (e-book)</h1>
                                    </figcaption>
                                </li>
                            </ul>

                        </section>
                    </div>
                </div>
                
            </section>
            
            <OnTopBtn brdrColor='border-gray-700' textColor = ' text-black'/>
           
        </main>
    )
}