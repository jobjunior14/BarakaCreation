import {OnTopBtn} from './comp/util';
import { Link } from 'react-router-dom';
import Accueil_animation_accueil from '../../../assets/Services/Animation/Accueil_animation_accueil.jpg';
import Accueil_Animation_phone from '../../../assets/Services/Animation/Accueil_Animation_phone.jpg';
import animation_service_2 from '../../../assets/Services/Animation/animation_service_2.jpg';
import animation_service_3 from '../../../assets/Services/Animation/animation_service_3.jpg';
import Illustration_concept_art_1 from '../../../assets/Services/Illustration/Illustration_concept_art_1.jpg'; 
import animation_partner from '../../../assets/Services/Animation/animation_partner.jpg';
import useWindowWidth from '../../windowWidth';
export default function MotionDesign() {

    const width = useWindowWidth();

    return (
        <div className='w-full bg-white'>

            
            {/* welcom image  */}
            <section className='w-full flex flex-col items-center justify-center relative '>
            
                <img src={width <= 640 ? Accueil_Animation_phone : Accueil_animation_accueil} alt=" print_accueil"/>

            </section>

            <div className=' sm:px-[5rem] md:px-[6.25rem] lg:px-[7.5rem] bg-myBlue w-full flex flex-col gap-6 md:gap-10  p-5'>
                
                {/* welcom text  */}
                <h1 className='sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-8 text-blue-50 font-bold'>Motion <br className='sm:hidden'/> design <br /> <span className=' text-blue-500'>solution <br className='sm:hidden'/> innovante</span></h1>

                <section className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10'>
                    {/* first paraagraph  */}
                    <div className='w-full px-[15%] sm:px-0'>
                        <p className='text-left font-[500] text-gray-100 text-[0.875rem] sm:text-[15px] md:text-[17px] leading-5  sm:w-[75%] md:w-[70%] lg:w-[65%] '>Un puissant message qui permet de capter l&apos;attention de votre public et transmettre des messages de maniere claire et concise.</p>
                    </div>
                    
                    {/* second paragraph  */}
                    <div className='w-full px-[15%] sm:px-0'>
                        <p className='text-left font-[500] text-bgPlay text-[0.875rem] sm:text-[15px] md:text-[17px] leading-5'>Nous créons des animations personalisées et qui reflètent votre message. <br /> Nous vous accompagnons durant tout le processus du briefing au rendu final.</p>
                    </div>

                    {/* first image Spot publicitaire */}
                    <div className=' bg-bgAnnimation rounded-lg '>
                        <img src={animation_service_2} alt="animation_service_3" />
                        <div className='w-full text-left flex flex-col gap-2 md:gap-3 lg:gap-4  items-center pb-5'>

                            <div className='w-[80%] sm:w-[77%] md:w-[74%] lg:w-[71%] flex flex-col gap-2 md:gap-3 lg:gap-4 items-start pl-[5%] sm:pl-0'>
                                <h1 className=' text-gray-100 font-bold text-left text-[20px] sm:text-[1.375rem] md:text-[24px] lg:text-[1.625rem]'> Spot Publicitaire</h1>
                                <p className='text-gray-100 text-[0.625rem] sm:text-[0.75rem] md:text-[0.875rem] lg:text-[15px] text-left'>Présentation d&apos;entreprise, des sservices, promotion des produits</p>
                                <Link to={'../'} className='text-gray-100 text-[0.625rem] sm:text-[0.75rem] md:text-[0.875rem] lg:text-[15px] hover:bg-blue-600 duration-200 rounded-full px-2 sm:px-3 pb-px bg-blue-500'>Intéressé</Link>
                            </div>
                        </div>
                    </div>

                    {/* second image Presentation  */}
                    <div className='bg-bgAnnimation rounded-lg'>
                        <img src={animation_service_3} alt="animation_service_3" />

                        <div className='w-full text-left flex flex-col gap-2 md:gap-3 lg:gap-4  items-center pb-5'>

                            <div className='w-[80%] sm:w-[77%] md:w-[74%] lg:w-[71%] flex flex-col gap-2 md:gap-3 lg:gap-4 items-start pl-[5%] sm:pl-0'>
                                <h1 className=' text-gray-100 font-bold text-left text-[20px] sm:text-[1.375rem] md:text-[24px] lg:text-[1.625rem]'> Présentation </h1>
                                <p className='text-gray-100 text-[0.625rem] sm:text-[0.75rem] md:text-[0.875rem] lg:text-[15px] text-left'>Présentation des projets. <br /> Animation des contenus</p>
                                <Link to={'../'} className='text-gray-100 text-[0.625rem] sm:text-[0.75rem] md:text-[0.875rem] lg:text-[15px] hover:bg-blue-600 duration-200 rounded-full px-2 sm:px-4 pb-px bg-blue-500'>Intéressé</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* final text  */}
                <section className='grid grid-cols-1 gap-6 md:gap-10 px-[5%] sm:px-[10%]  text-left'> 
                    <div>
                        <h1 className=' text-blue-100 text-[24px] sm:text-[1.625rem] md:text-[28px] lg:text-[1.875rem] font-bold leading-7 w-[70%]' >Votre partenaire créatif pour la préproduction des dessins animés</h1>
                    </div>
                   
                    <div>
                        <p className='font-[500] text-blue-50 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-5'>Nous vous accompagnons durant tout le processus, du biefing à la post-production, passant par le développement de votre univers visuel et la ligne graphique</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h4 className='font-[500] text-bgPlay text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px]'> Nous assurons la gestion de:</h4>
                        <ul className=' list-disc'>
                            <li className='font-[500] text-blue-50 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] '>Storybord</li>
                            <li className='font-[500] text-blue-50 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] '>Création des environnements</li>
                            <li className='font-[500] text-blue-50 text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] '>Création des personnages</li>
                        </ul>
                    </div>
                </section>
                
                {/* image's galery */}
                <section className='w-full'>

                    <img src={Illustration_concept_art_1} alt="Illustration_concept_art_1" className='sm:hidden' />
                    <img src={animation_partner} alt="Illustration_concept_art_1" className='sm:block hidden' />
                </section>

                {/* retrun to origin boutton  */}
                <OnTopBtn brdrColor='border-gray-200' textColor = ' text-white'/>
            </div>
        </div>
    );
}