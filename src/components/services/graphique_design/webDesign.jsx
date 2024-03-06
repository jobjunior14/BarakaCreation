import SecondeNav, {OnTopBtn} from '../identite_visuel/comp/util';
import { Link } from 'react-router-dom';
import Web_design from '../../../assets/Services/Design graphique/Web_design.png';
import web_design from '../../../assets/Services/Design graphique/web_design.jpg';
import web_fluide from '../../../assets/Services/Design graphique/web_fluide.png';
import web_objectif from '../../../assets/Services/Design graphique/web_objectif.png';
import web_positif from '../../../assets/Services/Design graphique/web_positif.png';
import web_adapté from '../../../assets/Services/Design graphique/web_adapté.png';


export default function WebDesign() {

    return (

        <main>

            <SecondeNav
                title={' Design Graphique'} 
                link={'/services/graphiqueDesign'} 
                bgColor={'bg-black'} 
                titleColor='text-gray-100'
                brdrColor='border-gray-100' textColor = ' text-white'
            />

            {/* welcom image and texte  */}
            <section className="w-full flex flex-col justify-center bg-black">
 
                <div className='w-full pt-[1%] sm:pt-[0%] flex flex-col gap-4 md:gap-4'>

                    <div className=' flex flex-col justify-center items-center px-[5%]  sm:px-[10%] md:px-[13%] lg:px-[16%]  '>
                        <img loading='lazy' src={Web_design} alt="Web_design" />
                    </div>

                    <div className=' flex justify-center items-center gap-2 flex-col  w-full z-40 -mt-5 md:-mt-10  '>
                        
                        <Link to='/contacts' className=" duration-200 font-interRegular  text-gray-100 text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] px-4 rounded-full bg-blue-500 hover:text-blue-500 hover:bg-bgIdVisuel border-blue-500 border">Interessé</Link>
                        
                        <Link to={'/portfolio'} className=" text-blue-500 font-interRegular text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] flex items-center "> Notre portfolio <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link>
                    </div>
                </div>

                <div className=' justify-center items-center flex -mt-5 md:-mt-10  '>
                    <div className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]'>

                        <img loading='lazy' src={web_design} alt="campagne"/>
                    </div>
                </div>
            </section>
            
            <section className='bg-black'>

                {/* section text  */}
                <div className='w-full  flex  justify-center items-center'>

                    <section className='-mt-5 w-full md:w-[65%] flex flex-col'>

                        <section className='  gap-5  flex flex-col md:flex-row py-10 md:justify-center w-full px-[10%]'>

                            {/* first paragraph  */}
                            <section className=' md:px-0  '>

                                <p className=' text-left font-interSemibold mx-[10%] md:mx-0 text-blue-200 text-[0.875rem] md:text-[15px] lg:text-[1rem] lg:leading-6  '> 
                                    Vous souhaitez créer un site web qui reflète votre image de marque ?
                                    Nous sommes à vos cotés pour la création de sites web professionnels et performants.
                                    Notre réseau de designers et de développeurs expérimentés vous accompagnent de la
                                    conception à la mise en ligne de votre site, en passant par la création de contenu.          
                                </p>

                            </section>

                        </section>
                    </section>
                </div>


                {/* apsect de la mise en page  */}
                <div className='w-full flex justify-center items-center'>

                    <div className='flex justify-center items-center w-full md:w-[80%]'>

                        <section className=' px-[10%] w-full pt-10 pb-5 flex flex-col gap-7 sm:gap-10 md:gap-14 lg:gap-14 '>
                            
                            <h1 className='md:mx-[8%] mx-[10%] text-xl text-gray-500  font-interBold text-left'> Notre objectif est de rendre votre site :</h1>

                            <ul className=' grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center w-full'>

                                <li className='flex flex-col gap-5 justify-center items-center'>
                                    <div className='h-20 w-full flex justify-center items-center pt-9'>

                                        <img loading='lazy' src={web_fluide} alt="Mise_en_page_icone_1" className='md:h-[28px] h-[25px]'/>
                                    </div>
                                    <div className='w-[90%] sm:w-[80%] md:w-[70%] h-px bg-gray-500'> </div>
                                    <div className='h-20 w-full'>

                                        <h1 className='font-interSemibold text-gray-100 text-[1rem] leading-5'>Fonctionnel, <br />fluide et facile à <br />utiliser</h1>
                                    </div>
                                </li>

                                <li className='flex flex-col gap-5 justify-center items-center'>
                                    <div className='h-20 w-full flex justify-center items-center pt-9'>

                                        <img loading='lazy' src={web_objectif} alt="web_objectif" className='md:h-[55px] h-[40px]'/>
                                    </div>
                                    <div className='w-[90%] sm:w-[80%] md:w-[70%] h-px bg-gray-500'> </div>
                                    <div className='h-20 w-full'>

                                        <h1 className='font-interSemibold text-gray-100 text-[1rem] leading-5'>Attrayant et <br />répondant aux <br />objectifs de votre <br />marque <span className='text-gray-500'>ou <br />l&apos;entreprise</span></h1>
                                    </div>
                                </li>

                                <li className='flex flex-col gap-5 justify-center items-center'>
                                    <div className='h-20 w-full flex justify-center items-center pt-9'>

                                        <img loading='lazy' src={web_positif} alt="web_positif" className='md:h-[55px] h-[40px]'/>
                                    </div>
                                    <div className='w-[90%] sm:w-[80%] md:w-[70%] h-px bg-gray-500'> </div>
                                    <div className='h-20 w-full'>

                                        <h1 className='font-interSemibold text-gray-100 text-[1rem] leading-5'>Créant une <br />impression <br />positive chez <br />les visiteurs</h1>
                                    </div>
                                </li>

                                <li className='flex flex-col gap-5 justify-center items-center'>
                                    <div className='h-20 w-full flex justify-center items-center pt-9'>

                                        <img loading='lazy' src={web_adapté} alt="Mise_en_page_icone_4" className='md:h-[55px] h-[40px]'/>
                                    </div>
                                    <div className='w-[90%] sm:w-[80%] md:w-[70%] h-px bg-gray-500'> </div>
                                    <div className='h-20 w-full'>

                                        <h1 className='font-interSemibold text-gray-100 text-[1rem] leading-5'>Adapté à tous les <br />types d&apos;écrans, <span className='text-gray-500'>y <br />compris les <br />smartphones et <br />les tablettes</span></h1>
                                    </div>
                                </li>
                            </ul>

                        </section>
                    </div>
                </div>
                
                    <OnTopBtn brdrColor='border-gray-100' textColor = ' text-white'/>
            </section>
            
           
        </main>
    )
}