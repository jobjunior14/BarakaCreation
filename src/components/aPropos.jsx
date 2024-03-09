import { useState, useEffect } from 'react';
import moii_2 from '../assets/A propos/moii_2.jpg';
import moii_phone from  '../assets/A propos/moii_phone.jpg';
import iconeprofession from '../assets/A propos/iconeprofession.png';
import iconeetude from '../assets/A propos/iconeetude.png';
import icone_experience_1 from '../assets/A propos/icone_experience_1.png';
import certifié_logo_1 from '../assets/A propos/certifié_logo_1.png';
import certifié_logo_2 from '../assets/A propos/certifié_logo_2.png';
import certifié_logo_3 from '../assets/A propos/certifié_logo_3.png';
import certifié_logo_4 from '../assets/A propos/certifié_logo_4.png';
import certifié_Logo_5 from '../assets/A propos/certifié_Logo_5.png';
import certifié_Logo_6 from '../assets/A propos/certifié_Logo_6.png';
import certifié_Logo_7 from '../assets/A propos/certifié_Logo_7.png';
import icone_innovation from '../assets/A propos/icone_innovation.png';
import icone_passion from '../assets/A propos/icone_passion.png';
import icone_discipline from '../assets/A propos/icone_discipline.png';
import prix_apatridie from '../assets/A propos/prix_apatridie.png';
import prix_onu_femmes from '../assets/A propos/prix_onu_femmes.png';
import prix_ecicr_1 from '../assets/A propos/prix_ecicr_1.png';
import './an.css';

export default function Apropos () {

    // scroll to top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const i = setInterval(() => setIndex(prev => prev === 5 ? 0 : prev + 1), 1000);

        return () => {
            clearInterval(i);
        }
    }, [index]);

    
    return (
        <div className="w-full md:bg-slate-100 bg-bgApropos md:pb-0">

            {/* Baraka's summary  1st part*/}
            <section className=" w-full flex flex-col sm:flex-row justify-center text-center md:pt-5">
                
                {/* pc's picture  */}
                <div className=' hidden md:flex justify-center isolate place-items-end px-6 bg-bgFormation  md:w-[40%]  '>
                    <img loading='lazy' src={moii_2} alt='moi' className='h-auto'/>
                </div>

                <div className='md:w-[50%] md:mt-9'>

                    <article className='w-full bg-bgApropos md:bg-bgFormation flex flex-col justify-center  gap-y-5 md:gap-y-2 py-7 px-8'>
                            
                        <h1 className='text-5xl md:text-3xl md:text-left text-gray-100 md:text-gray-700 font-interBold '>Hello ! </h1>
                        
                        <div className='w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-2'>
                            <div className='w-[70%] md:w-[100%] '>
                                <p className='text-gray-200 md:text-left md:text-gray-700 text-[0.69rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[1rem] font-interRegular text-center '>Je suis Baraka LURHAKWA, un artiste communicateur visuel. <br/>Je suis passionné par la production d&apos;œuvres artistiques innovantes et j&apos;accompagne les entreprises dans la réussite de leurs objectifs dans le secteur de la communication</p>
                            </div>
                       </div>
                    </article>
                    
                    {/* phone's image */}
                    <div className='bg-bgApropos flex justify-center items-center px-6 md:hidden'>
                        <img loading='lazy' src={moii_phone} className='h-auto' alt='moi phone'/>
                    </div>
                    
                    {/* proffession */}
                    <section className='pb-5  bg-bgFormation'>
                        <figcaption className='bg-bgFormation text-left p-8 md:py-0 w-full '>

                            <div className='flex items-start'>
                                <div className='flex justify-center items-center gap-1'>
                                    <img loading='lazy' src={iconeprofession} className='h-6 lg:h-7 ' alt='iconeprofession'/>
                                    <title className=' mr-1 font-interBold text-gray-700 text-[1rem] lg:text-[1.3rem] flex'> Profession </title>
                                </div>
                            </div>
                            <div className='h-px w-full bg-gray-600 mt-1'></div>
                        </figcaption>

                        <figure className='px-8 bg-bgFormation '> 
                            <div className='text-left grid grid-cols-2 gap-y-5 gap-x-2'>
                                <article>
                                    <h3 className='font-interBold text-[0.9rem] text-gray-700'> Communication </h3>
                                    <p className='text-[0.8rem] font-interRegular'>Conseiller en communication</p>
                                </article>
                                <article className='ml-8'>
                                    <h3 className='font-interBold text-[0.9rem] text-gray-700'> Graphiste </h3>
                                    <p className='text-[0.8rem] font-interRegular'>Spécialiste d&apos;identité visuelle</p>
                                </article>
                                <article >
                                    <h3 className='font-interBold text-[0.9rem] text-gray-700'> Directeur artistique </h3>
                                    <p className='text-[0.8rem] font-interRegular'>D&apos;animation | de campagne | Comm</p>
                                </article>
                                <article className='ml-8'>
                                    <h3 className='font-interBold text-[0.9rem] text-gray-700'> Illustrateur </h3>
                                    <p className='text-[0.8rem] font-interRegular'>3 fois Lauréat</p>
                                </article>
                            </div>
                            <div className='h-px w-full bg-gray-600 mt-1'></div>
                        </figure>

                        <div className='px-8 flex gap-3 text-left pt-3 bg-bgFormation'>
                            <article className='flex justify-center items-center gap-2'>
                                <img loading='lazy' src={icone_experience_1} className='h-6 lg:h-7' alt='iconeprofession'/>
                                <h1 className=' font-interBold text-gray-700 text-[0.69rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[1rem] lg:leading-5 flex'>  ans d&apos;expérience professionnelle </h1>
                            </article>

                            <article className='flex justify-center items-center gap-2'>
                                <img loading='lazy' src={iconeetude} className='h-6 lg:h-7' alt='iconeprofession'/> 
                                <h1 className=' font-interBold text-gray-700 text-[0.69rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-[1rem] lg:leading-5 flex'> Académie de Beaux-arts Kinshasa </h1>
                            </article>

                        </div>
                    </section>
                </div>
            </section>

            {/* certifier par  */}
            <section className='w-full bg-bgCertifier flex flex-col justify-center items-center py-5 gap-7 px-3'>
                <div className='w-full justify-center items-center flex flex-col gap-5'>
                    <h1 className='md:text-3xl text-xl text-blue-50 font-interSemibold'>Certifié <span className='text-gray-200'>par</span></h1>
                    <div className='sm:w-[90%] md:w-[80%] lg:w-[75%] w-full h-px bg-slate-300'></div>
                </div>

                <div className='flex  w-full sm:w-[90%] md:w-[80%] lg:w-[75%] overflow-hidden rounded-3xl shadow-2xl py-2  '>

                    <div className='slider flex items-center gap-8 py-4 w-full'>
                        <div className={` min-w-[40%] lg:min-w-[30%] flex items-center`} > <img loading='lazy' src={certifié_logo_1} alt='logo' className=' h-10' /></div> 
                        <div className={` min-w-[34%] flex items-center`} > <img loading='lazy' src={certifié_logo_2} alt='logo' className=' h-10' /></div> 
                        <div className={` min-w-[20%] flex items-center`} > <img loading='lazy' src={certifié_logo_3} alt='logo' className=' h-[50px]' /></div> 
                        <div className={` min-w-[20%] flex items-center`} > <img loading='lazy' src={certifié_logo_4} alt='logo' className=' h-10' /></div> 
                        <div className={` min-w-[20%] flex items-center`} > <img loading='lazy' src={certifié_Logo_5} alt='logo' className=' h-10' /></div> 
                        <div className={` min-w-[33%] lg:min-w-[25%] flex items-center`} > <img loading='lazy' src={certifié_Logo_6} alt='logo' className=' h-10' /></div> 
                        <div className={` min-w-[20%] flex items-center`} > <img loading='lazy' src={certifié_Logo_7} alt='logo' className=' h-[50px]' /></div> 
                    </div>
                </div>
            </section>

            {/* nos valeurs */}
            <section className=' bg-bgFormation w-full px-5 py-7 sm:p-7 md:p-9 lg:p-14 flex flex-col gap-y-5 md:items-center md:justify-center'>

                <article className='flex flex-col gap-y-5 md:max-w-[60%] '>
                    <h1 className='text-4xl sm:text-6xl md:text-7xl text-left text-nos font-interBold '>Nos <span className='text-nosVal'>valeurs</span></h1>

                    <div className='flex flex-col gap-6 md:gap-10 md:items-center md:justify-center'>
                        
                        {/* innovation  */}
                        <div className='text-left flex gap-3 md:gap-9 justify-normal w-full '>
                            <div className='w-[12%]  pt-1 md:pt-0 flex md:items-center'>
                                <img loading='lazy' src={icone_innovation} className='h-[2.2rem] md:h-auto' alt='icone' />
                            </div>

                            <div className='w-[80%] flex flex-col md:justify-center '>
                                <h2 className='text-gray-700 text-xl sm:text-2xlmd:text-3xl font-interBold'>Innovation</h2>
                                <p className='text-gray-700 text-[0.8rem] sm:text-[0.75rem] md:text-[0.875rem] font-interRegular'>  Nous nous engageons à apporter de la valeur et vous faire vivre une expérience mémorable. Chaque nouveau projet est pour nous un défi à relever; une occasion de repousser nos limites et celles de nos clients. <br/> C&apos;est ce qui nous a permis de satisfaire plus de 90% des projets réalisés</p>
                            </div>
                        </div>

                        {/* passion  */} 
                        <div className='text-left flex gap-3 md:gap-9 justify-normal w-full '>
                            <div className='w-[12%]  pt-1 md:pt-0 flex md:items-center'>
                                <img loading='lazy' src={icone_passion} className='h-[2.2rem] md:h-auto' alt='icone' />
                            </div>

                            <div className='w-[80%] flex flex-col md:justify-center '>
                                <h2 className='text-gray-700 text-xl sm:text-2xlmd:text-3xl font-interBold'>Passion</h2>
                                <p className='text-gray-700 text-[0.8rem] sm:text-[0.75rem] md:text-[0.875rem] font-interRegular'>  Nous sommes animés par la passion de créer des œuvres d&apos;art à la fois belles et significatives. Elle nous permet de partager nos idées avec le monde entier et nous pousse donner une grande considération à chaque projet et chaque client</p>
                            </div>
                        </div>

                        {/* discipline  */}
                        <div className='text-left flex gap-3 md:gap-9 justify-normal w-full '>
                            <div className='w-[12%]  pt-1 md:pt-0 flex md:items-center'>
                                <img loading='lazy' src={icone_discipline} className='h-[2.2rem] md:h-auto' alt='icone' />
                            </div>

                            <div className='w-[80%] flex flex-col md:justify-center '>
                                <h2 className='text-gray-700 text-xl sm:text-2xlmd:text-3xl font-interBold'>Discipline</h2>
                                <p className='text-gray-700 text-[0.8rem] sm:text-[0.75rem] md:text-[0.875rem] font-interRegular'>  Nous nous engageons à comprendre les besoins de nos clients, à leur proposer des solutions qui répondent à leurs attentes et à respecter les délais fixés. Nous travaillons de manière organisée et nous sécurisons les projets de nos clients pendant et après le contrat</p>
                            </div>
                        </div>
                    </div>
                </article>

            </section>

            {/* prix remporté  */} 
            <section className='w-full bg-gradient-to-r from-bgRemporter1  to-bgRemporter3 px-7 py-14 flex flex-col gap-8 sm:gap-10'>
                <h3 className='text-3xl sm:text-4xl font-interBold text-blue-100'>Prix <span className='text-remporter'>remportés</span></h3>
                
                <div className=' flex flex-col sm:flex-row justify-center items-center gap-10'>
                    <div className='flex justify-center items-center w-[70%] sm:w-[60%]'> <img loading='lazy' className='h-20 lg:h-24' src={prix_ecicr_1} alt="prix_ecicr_1" /></div>
                    <div className='flex justify-center items-center w-[70%] sm:w-[60%]'> <img loading='lazy' className='h-20 lg:h-24' src={prix_onu_femmes} alt="prix_onu_femmes" /></div>
                    <div className='flex justify-center items-center w-[70%] sm:w-[60%]'> <img loading='lazy' className='h-20 lg:h-24' src={prix_apatridie} alt="prix_apatridie" /></div>
                </div>

            </section>
        </div>
    );
}