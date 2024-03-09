import Accueil_Illustration_phone1 from '../../../assets/Services/Illustration/Accueil_Illustration_phone1.jpg'
import illustration_emotion from '../../../assets/Services/Illustration/illustration_emotion.jpg';
import Illustration_vectoriel from '../../../assets/Services/Illustration/Illustration_vectoriel.jpg';
import Illustration_excellence from '../../../assets/Services/Illustration/Illustration_excellence.jpg';
import illustration_couverture_new from '../../../assets/Services/Illustration/illustration_couverture_new.jpg';
import illustration_livre_new from '../../../assets/Services/Illustration/illustration_livre_new.jpg';
import illustration_bd_new from '../../../assets/Services/Illustration/illustration_bd_new.jpg';
import Illustration_concept_art_new from '../../../assets/Services/Illustration/Illustration_concept_art_new.jpg';
import illustration_campagne from '../../../assets/Services/Illustration/illustration_campagne.jpg';
import illustration_mascotte_new from '../../../assets/Services/Illustration/illustration_mascotte_new.jpg';
import illustration_web_new from '../../../assets/Services/Illustration/illustration_web_new.jpg';
import Illustration_concept_art_1 from '../../../assets/Services/Illustration/Illustration_concept_art_1.png';
import illustratration_concept_art_story_board_new from '../../../assets/Services/Illustration/illustratration_concept_art_story_board_new.jpg';
import Illustration_concept_art_3 from '../../../assets/Services/Illustration/Illustration_concept_art_1.jpg';
import Illustration_concept_art_5 from '../../../assets/Services/Illustration/Illustration_concept_art_5.jpg';
import Accueil_illustration from '../../../assets/Services/Illustration/Accueil_illustration.jpg';
import design_entrons_en_contact from '../../../assets/Accueil/design_entrons_en_contact.png';
import useWindowWidth from '../../windowWidth';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Illustation () {

    // scroll to top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const width = useWindowWidth();

    return (<main className='bg-bgIllustration'>

        {/* welcome image  */}
        <section>
            <img loading='lazy' src={width <= 640 ? Accueil_Illustration_phone1 : Accueil_illustration} alt="sm:hidden" />
        </section>

        {/* first tetxt  */}
        {/* section text  */}
        <section className='w-full  flex '>

            <section className='py-10 w-full flex flex-col sm:px-[10%]'>

                <h1 className='text-left px-[10%] text-[2rem] md:text-[2.5rem] leading-10 font-interBold text-gray-700 '>Des solutions <br className='sm:hidden'/>créatives <br />illimitées </h1>

                <section className=' gap-5   flex flex-col sm:flex-row py-10 w-full '>

                    {/* first paragraph  */}
                    <section className='px-[10%] w-[90%] sm:w-full  '>

                        <p className=' text-left font-interSemibold text-gray-700 text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] leading-6 lg:leading-7  '> 
                            L&apos;illustration est un outil puissant qui
                            permet de capter l&apos;attention, transmettre
                            un message et créer des émotions. <br /> <span className='text-gray-500' >Nous créons des visuels personnalisés et
                            qui reflètent votre message </span>                 
                        </p>

                    </section>

                    {/* second paragraph  */}
                    <section className='px-[10%] sm:px-0  gap-5 flex flex-col w-[90%] sm:w-full  '>

                        <p className='text-left font-interSemibold text-gray-500 text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] leading-6 lg:leading-7 '> Nous vous aidons ainsi à :</p>
                        <ul className=' list-disc'>
                            <li className='text-left font-interSemibold text-gray-700 text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] leading-6 lg:leading-7   '> développer votre identité visuelle,</li>
                            <li className='text-left font-interSemibold text-gray-700 text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] leading-6 lg:leading-7   '>créer des supports impactant,</li>
                            <li className='text-left font-interSemibold text-gray-700 text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] leading-6 lg:leading-7   '>concrétiser des sujets abstraits &</li>
                            <li className='text-left font-interSemibold text-gray-700 text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] leading-6 lg:leading-7   '>raconter votre histoire</li>
                        </ul>

                    </section>

                </section>
            </section>
        </section>

        {/* here section    */}
        <section className='px-[12%] grid grid-cols-1 gap-3 justify-center '>

            <figure className='w-full h-[12.5rem] md:h-[15.625rem] lg:h-[16.875rem] rounded-md overflow-hidden relative'>

                    <div className='w-full justify-center absolute items-center z-40 top-5'>
                        <h2 className='font-interBold text-gray-100 text-[1.125rem] md:text-[2rem]'>Plus d&apos;émotions</h2>
                    </div>
                    <img loading='lazy' src={illustration_emotion} alt="illustration_emotion" className=' object-cover w-full h-full' />
            </figure>
            
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <figure className='w-full h-0 rounded-md overflow-hidden  relative' style={{ paddingTop: 'calc(100% * (4/3.5))'}}>

                        <div className='w-full justify-center absolute items-center z-40 top-5'>
                            <h2 className='font-interBold text-gray-700 text-[1.125rem] md:text-[2rem] md:leading-8 leading-5'>Plus <br /> de style</h2>
                        </div>
                        <img loading='lazy' src={Illustration_vectoriel} alt="illustration_emotion" className='absolute top-0 object-cover w-full h-full' />
                </figure>

                <figure className='w-full h-0 rounded-md  overflow-hidden relative' style={{ paddingTop: 'calc(100% * (4/3.5))'}}>

                        <div className='w-full justify-center absolute items-center z-40 top-5'>
                            <h2 className='font-interBold text-gray-100 text-[1.125rem] md:text-[2rem] md:leading-8 leading-5'>Plus <br /> d&apos;excellence</h2>
                        </div>
                        <img loading='lazy' src={Illustration_excellence} alt="illustration_emotion" className='absolute top-0 object-cover w-full h-full' />
                </figure>
            </div>
        </section>
        
        {/* second text  */}
        <section className='w-full px-[10%]  sm:justify-center sm:items-center flex flex-col gap-2 sm:gap-5 py-14 bg-slate-100'>
            <h1 className='text-left sm:text-center font-interBold text-[1.25rem] sm:text-[1.38rem] md:text-[1.5rem] lg:text-[1.65rem] leading-5 text-gray-500'> Vous avez un <br className='sm:hidden'/> projet complexe ?</h1>
            <p className=' w-[75%] sm:w-[55%] md:w-[55%]  text-left sm:text-center font-interSemibold text-gray-700 text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] leading-6 lg:leading-7 '>Nous proposons un package complet des supports de l&apos;illustration éditoriale, aux campagnes passant par le web et <Link to='/portfolio' className='text-blue-500'> concept art {'>'}</Link></p>
        </section>

        {/* section illustration editorial  */}
        <section className='bg-slate-200 px-[5%] lg:px-[12%] py-10 flex flex-col gap-5 '>

            <h1 className='text-center px-[10%] text-[1.25rem] sm:text-[1.5rem] md:text-[1.625rem] lg:text-[2.125rem] leading-6 lg:leading-9 font-interBold text-gray-700 '>Illustration <br /> Editoriale </h1>

            <div className='grid grid-cols-1 justify-center items-center w-full gap-3'>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 w-full'>

                    {/* Courverture  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg relative'>
                        <div className='w-full '>
                            <img loading='lazy' src={illustration_couverture_new} alt="illustration_couverture" className='rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center absolute bottom-3'>
                            <h1 className='font-interBold text-gray-700'>Courverture</h1>
                            <p className='w-[70%] text-gray-700 text-[0.69rem] sm:text-[0.812rem] '> Pour démarquer et rendre captivant les livres, romans, magazines</p>
                            <Link to='/contacts' className=" duration-200  text-blue-500 text-[0.75rem] sm:text-[0.875rem] px-3  md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>

                        </div>
                    </div>
                    

                    {/* Livre MAnuel  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg relative'>

                        <div className='w-full '>
                            <img loading='lazy' src={illustration_livre_new} alt="illustratio_livre" className='rounded-lg'/>
                        </div>

                        <div className='flex flex-col gap-2 justify-center items-center absolute bottom-3'>
                            <h1 className='font-interBold text-gray-700'>Livre / manuel </h1>
                            <p className='w-[70%] text-gray-700 text-[0.69rem] sm:text-[0.812rem] '> Pour raconter les histoires et pour illustrer parfaitement votre contenu</p>
                            <Link to='/contacts' className=" duration-200  text-blue-500 text-[0.75rem] sm:text-[0.875rem] px-3  md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>

                        </div>
                    </div>

                    {/* bande Desinnée  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg relative'>
                        <div className='w-full '>
                            <img loading='lazy' src={illustration_bd_new} alt="illustration_couverture" className='rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center absolute bottom-3'>
                            <h1 className='font-interBold text-gray-700'>Bande dessinée</h1>
                            <p className='w-[90%] text-gray-700 text-[0.69rem] sm:text-[0.812rem] '> Nous vous accompagnons durant tout le processus, du briefing à la réalisation passant par le storyboard</p>
                            <Link to='/contacts' className=" duration-200  text-blue-500 text-[0.75rem] sm:text-[0.875rem] px-3  md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>

                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 w-full'>

                    {/* campagnes  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg relative'>
                        <div className='w-full '>
                            <img loading='lazy' src={illustration_campagne} alt="illustration_couverture" className='rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center absolute bottom-3'>
                            <h1 className='font-interBold text-gray-100'>Campagne</h1>
                            <p className='w-[70%] text-gray-100 text-[0.69rem] sm:text-[0.812rem] '> Nous créons des images captivantes de haute résolution qui illustrent parfaitement votre message</p>
                            <Link to='/contacts' className=" duration-200  text-blue-500 text-[0.75rem] sm:text-[0.875rem] px-3  md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
                        </div>
                    </div>

                    {/* MAscote  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg relative'>
                        <div className='w-full '>
                            <img loading='lazy' src={illustration_mascotte_new} alt="illustration_mascotte" className='rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center absolute bottom-3'>
                            <h1 className='font-interBold text-gray-700'>Mascotte</h1>
                            <p className='w-[70%] text-gray-700 text-[0.69rem] sm:text-[0.812rem] '> Pour créer un lien affectif entre votre cible et votre marque ou évènement.</p>
                            <Link to='/contacts' className=" duration-200  text-blue-500 text-[0.75rem] sm:text-[0.875rem] px-3  md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
                        </div>
                    </div>

                    {/* campagnes  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg relative'>
                        <div className='w-full '>
                            <img loading='lazy' src={illustration_web_new} alt="illustration_web" className='rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center absolute bottom-3'>
                            <h1 className='font-interBold text-gray-100'>Web</h1>
                            <p className='w-[70%] text-gray-100 text-[0.69rem] sm:text-[0.812rem] '> Illustrations simples et attrayante, création des icones personnalisées, gestion du design de site/ apps</p>
                            <Link to='/contacts' className=" duration-200  text-blue-500 text-[0.75rem] sm:text-[0.875rem] px-3  md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        {/* concept d'art  */}
        <section className='w-full bg-black py-14 flex flex-col gap-3'>

            <div className='px-[20%]'>
                <img loading='lazy' src={Illustration_concept_art_1} alt="Illustration_concept_art_1" />
            </div>

            {/* text  */}
            {/* first and second paragraph  */}
            <section className=' px-[2%] gap-5 sm:px-[10%] flex flex-col md:flex-row py-10 md:justify-center w-full md:px-[12%]'>

                {/* first paragraph  */}
                <section className='px-[10%] md:px-0 w-[90%] '>
                    <p className='text-left font-interSemibold text-gray-100 text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] leading-6 lg:leading-7  sm:w-[65%] md:w-[90%]'> <span className=' text-bgPlay'>Vous avez un projet d&apos;animation, cinématographique ou jeux vidéo ?</span> Nous offrons des solutions créatives pour les projets complexes.</p>
                </section>

                {/* second paragraph  */}
                <section className='px-[10%] md:px-0 w-[90%] '>
                    <p className='text-left font-interSemibold text-gray-100 text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] leading-6 lg:leading-7  sm:w-[75%] md:w-full '> Nous vous accompagnons durant tout le processus, du briefing à la post-production, passant par le développement de votre univers visuel <span className='text-bgPlay'>et la ligne graphique  </span></p>
                </section>
            </section>

            <section className='w-full gap-3  grid grid-cols-1 md:grid-cols-2 '>

                {/* story bord  */}
                <section className='relative items-center flex flex-col justify-center px-[2%]'>
                    <img loading='lazy' src={illustratration_concept_art_story_board_new} alt="illustratration_concept_art_story_board" className='rounded-lg' />

                    <div className='w-full relative'>
                        <div className='rounded-b-lg bottom-0 absolute pt-20 bg-gradient-to-t w-full from-bgCertifier from-20% h-[9.375rem]'>
                            <h1 className='font-interBold  text-center text-gray-100 text-[1.5rem]'>Storyboard</h1>
                        </div>
                    </div>
                </section>

                {/* Creation environement  */}
                <section className='relative items-center flex flex-col justify-center px-[2%]'>
                    <img loading='lazy' src={Illustration_concept_art_3} alt="Illustration_concept_art_2" className='rounded-lg' />

                    <div className='w-full relative '>
                        <div className='rounded-b-lg bottom-0 absolute pt-14 bg-gradient-to-t w-full from-bgCertifier from-20% h-[9.375rem]'>
                            <h1 className='font-interBold  text-center text-gray-100 text-[1.5rem] leading-6'>Création <br /> Environnement</h1>
                        </div>
                    </div>
                </section>
            </section>

            {/* Creation environement  */}
            <section className='relative items-center flex flex-col justify-center sm:px-[1%] px-[2%]  overflow-hidden '>

                <div className=' overflow-hidden w-full h-full'>

                    <img loading='lazy' src={ width >= 640 ? Illustration_concept_art_5 : Illustration_concept_art_new} alt="Illustration_concept_art_2" className='rounded-lg' />
                </div>

                <div className='w-full relative md:hidden'>
                    <div className='rounded-b-lg md:bg-none bottom-0 absolute pt-14 bg-gradient-to-t w-full from-bgCertifier from-20% h-[9.375rem]'>
                        <h1 className='font-interBold  text-center text-gray-100 text-[1.5rem] leading-6'>Création <br /> des personnages</h1>
                    </div>
                </div>

                <div className='w-full absolute left-5 hidden items-center md:flex'>
                    <div className='rounded-b-lg absolute pl-[3%] lg:pl-[8%]'>
                        <h1 className='font-interBold  text-left text-gray-100 text-[1.5rem]'>Création <br /> des personnages</h1>
                    </div>
                </div>
            </section> 

            {/* section entron en contact  */}
            <section className='w-full flex flex-col gap-2 text-center justify-center items-center relative px-5 pt-20 pb-10'>

                 <div className='h-[95%] sm:h-[80%] w-full  flex justify-center items-center'>
                    <img loading='lazy' src={design_entrons_en_contact} className='' alt='image accompagnement'/>
                </div>

                <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-0 w-[60%] sm:w-full sm:justify-evenly'>
                    <Link to='/contacts' className='py-2 px-4 hover:bg-blue-400 sm:text-base text-sm  bg-blue-600 rounded-full text-white font-interRegular duration-200'> Contactez-nous</Link>
                    <Link to='/contacts' className=' py-1 px-4 border rounded-full sm:text-base text-sm hover:bg-blue-600 hover:text-white font-interRegular text-blue-600 border-blue-600 duration-200'> Demander&nbsp;un&nbsp;devis </Link>
                </div>
            </section>

        </section>
        
        <section className='w-full flex items-end justify-end sticky bottom-5 px-[2%] '>

            <div onClick={() => document.documentElement.scrollTop = 0} className={`p-1 border border-gray-400 bg-black rounded-full cursor-pointer`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 text-white`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>
            </div>
        </section>


    </main>)
}