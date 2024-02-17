import Accueil_Illustration_phone1 from '../../../assets/Services/Illustration/Accueil_Illustration_phone1.jpg'
import illustration_emotion from '../../../assets/Services/Illustration/illustration_emotion.jpg'
import Illustration_vectoriel from '../../../assets/Services/Illustration/Illustration_vectoriel.jpg'
import Illustration_excellence from '../../../assets/Services/Illustration/Illustration_excellence.jpg'
import illustration_couverture from '../../../assets/Services/Illustration/illustration_couverture.jpg'
import illustratio_livre from '../../../assets/Services/Illustration/illustratio_livre.jpg'
import illustration_bd_ok from '../../../assets/Services/Illustration/illustration_bd_ok.jpg'
import illustration_campagne from '../../../assets/Services/Illustration/illustration_campagne.jpg'
import illustration_mascotte from '../../../assets/Services/Illustration/illustration_mascotte.jpg'
import illustration_web from '../../../assets/Services/Illustration/illustration_web.jpg'
import Illustration_concept_art_1 from '../../../assets/Services/Illustration/Illustration_concept_art_1.png'
import illustratration_concept_art_story_board from '../../../assets/Services/Illustration/illustratration_concept_art_story_board.jpg'
import Illustration_concept_art_3 from '../../../assets/Services/Illustration/Illustration_concept_art_1.jpg'
import Illustration_concept_art_5 from '../../../assets/Services/Illustration/Illustration_concept_art_5.jpg'
import Accueil_illustration from '../../../assets/Services/Illustration/Accueil_illustration.jpg'
import { Link } from 'react-router-dom'
export default function Illustation () {
    return (<main>

        {/* welcome image  */}
        <section>
            <img src={Accueil_Illustration_phone1} alt="sm:hidden" className='sm:hidden' />
            <img src={Accueil_illustration} alt="" className='hidden sm:block'/>
        </section>

        {/* first tetxt  */}
        {/* section text  */}
        <div className='w-full  flex bg-slate-100'>

            <section className='pt-10 w-full flex flex-col sm:px-[10%]'>

                <h1 className='text-left px-[10%] text-[28px] leading-6 font-bold text-gray-700 '>Des solutions <br />créatives <br />illimitées </h1>

                <section className=' gap-5   flex flex-col sm:flex-row py-10 w-full '>

                    {/* first paragraph  */}
                    <section className='px-[10%] w-[90%] sm:w-full  '>

                        <p className=' text-left font-[500] text-gray-700 text-[12px] md:text-[13px] lg:text-[15px] leading-5 lg:leading-6  '> 
                            L&apos;illustration est un outil puissant qui
                            permet de capter l&apos;attention, transmettre
                            un message et créer des émotions. <br /> <span className='text-gray-500' >Nous créons des visuels personnalisés et
                            qui reflètent votre message </span>                 
                        </p>

                    </section>

                    {/* second paragraph  */}
                    <section className='px-[10%] sm:px-0  w-[90%] sm:w-full  '>

                        <p className='text-left font-[500] text-gray-500 text-[12px] md:text-[13px] lg:text-[15px] leading-5 lg:leading-6 '> Nous vous aidons ainsi à :</p>
                        <ul className=' list-disc'>
                            <li className='text-left font-[500] text-gray-700 text-[12px] md:text-[13px] lg:text-[15px] leading-5 lg:leading-6   '> développer votre identité visuelle,</li>
                            <li className='text-left font-[500] text-gray-700 text-[12px] md:text-[13px] lg:text-[15px] leading-5 lg:leading-6   '>créer des supports impactant,</li>
                            <li className='text-left font-[500] text-gray-700 text-[12px] md:text-[13px] lg:text-[15px] leading-5 lg:leading-6   '>concrétiser des sujets abstraits &</li>
                            <li className='text-left font-[500] text-gray-700 text-[12px] md:text-[13px] lg:text-[15px] leading-5 lg:leading-6   '>raconter votre histoire</li>
                        </ul>

                    </section>

                </section>
            </section>
        </div>

        {/* here section  manque d'image de meme ration  */}
        <section className='px-[10%] grid grid-cols-1 gap-3 justify-center bg-slate-100'>
            <div className='w-full h-[300px] sm:h-[200px] md:h-[250px] lg:h-[270px] bg-black rounded-md overflow-hidden pt-[15%] pr-[20%] sm:pt-[0px] sm:pr-[15%] md:pr-[0]  relative'>

                    <div className='w-full justify-center absolute items-center z-40 top-5'>
                        <h2 className='font-bold text-gray-100 text-[18px]'>Plus d&apos;émotions</h2>
                    </div>
                    <img src={illustration_emotion} alt="illustration_emotion" className=' scale-[3.4] sm:scale-[1.4] md:scale-[1.1] w-full md:pb-[600px] ' />
            </div>
            
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <div className='w-full h-[300px] rounded-md overflow-hidden  relative'>

                        <div className='w-full justify-center absolute items-center z-40 top-5'>
                            <h2 className='font-bold text-gray-700 text-[18px]'>Plus <br /> de style</h2>
                        </div>
                        <img src={Illustration_vectoriel} alt="illustration_emotion" className='scale-[1.2] ' />
                </div>

                <div className='w-full h-[300px] rounded-md bg-fixed bg-no-repeat  overflow-hidden pr-[8%] pt-[5%]  relative' style={{backgroundImage: `url(${Illustration_excellence})`}}>

                        <div className='w-full justify-center absolute items-center z-40 top-5'>
                            <h2 className='font-bold text-gray-100 text-[18px]'>Plus <br /> d&apos;excellence</h2>
                        </div>
                        <img src={Illustration_excellence} alt="illustration_emotion" className='scale-[3.2] sm:scale-[3.4] md:scale-[3] ' />
                </div>
            </div>
        </section>
        
        {/* second text  */}
        <section className='w-full px-[10%] sm:justify-center sm:items-center flex flex-col gap-2 sm:gap-5 py-10 bg-slate-100'>
            <h1 className='text-left sm:text-center font-bold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-5 text-gray-500'> Vous avez un <br className='sm:hidden'/> projet complexe ?</h1>
            <p className=' w-[70%] sm:w-[50%] md:w-[40%]  text-left sm:text-center font-[500] text-gray-700 text-[12px] md:text-[13px] lg:text-[15px] leading-5 lg:leading-6  '>Nous proposons un package complet des suppots : de l&apos;illustration éditoiale, aux campagnes passant par le web et <Link to='../' className='text-blue-500'> concept art {'>'}</Link></p>
        </section>

        {/* section illustration editorial  */}
        <section className='bg-slate-200 px-[5%] py-10 flex flex-col gap-5 '>

            <h1 className='text-center px-[10%] text-[20px] sm:text-[24px] md:text-[26px] lg:text-[34px] leading-6 lg:leading-8 font-bold text-gray-700 '>Illustration <br /> Editoriale </h1>

            <div className='grid grid-cols-1 justify-center items-center w-full gap-3'>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 w-full'>

                    {/* Courverture  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg pb-5'>
                        <div className='w-[60%] '>
                            <img src={illustration_couverture} alt="illustration_couverture" />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <h1 className='font-bold text-gray-700'>Courverture</h1>
                            <p className='w-[70%] text-gray-700 text-[11px]'> Pour démarquer et rendre captivant les livres, romans, magazines</p>
                            <Link to='../' className=" duration-200  text-blue-500 text-[12px] sm:text-[14px] md:text-[16px] px-1 pb-[1.5px] md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>

                        </div>
                    </div>
                    

                    {/* Livre MAnuel  */}
                    <div className='w-full justify-center items-center flex flex-col bg-[rgb(245,246,248)] rounded-lg pb-5'>
                        <div className='w-full flex items-start'>
                            <div className='w-[60%] justify-start items-start overflow-hidden '>
                                <img src={illustratio_livre} alt="illustratio_livre" className='scale-[1.3]'/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center z-40'>
                            <h1 className='font-bold text-gray-700'>Livre / manuel </h1>
                            <p className='w-[70%] text-gray-700 text-[11px]'> Pour raconter les histoires et pour illustrer parfaitement votre contenu</p>
                            <Link to='../' className=" duration-200  text-blue-500 text-[12px] sm:text-[14px] md:text-[16px] px-1 pb-[1.5px] md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>

                        </div>
                    </div>

                    {/* bande Desinnée  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg pb-5'>
                        <div className='w-[60%] '>
                            <img src={illustration_bd_ok} alt="illustration_couverture" />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <h1 className='font-bold text-gray-700'>Bande dessinée</h1>
                            <p className='w-[70%] text-gray-700 text-[11px]'> Nous vous accompagnons durant tout le processus, du briefing à la réalisation passant par le storyboard</p>
                            <Link to='../' className=" duration-200  text-blue-500 text-[12px] sm:text-[14px] md:text-[16px] px-1 pb-[1.5px] md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>

                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-3 w-full'>

                    {/* campagnes  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg relative'>
                        <div className='w-full '>
                            <img src={illustration_campagne} alt="illustration_couverture" className='rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center absolute bottom-5'>
                            <h1 className='font-bold text-gray-100'>Campagne</h1>
                            <p className='w-[70%] text-gray-100 text-[11px]'> Nous créons des images captivantes de haute résolution qui illustrent parfaitement votre message</p>
                            <Link to='../' className=" duration-200  text-blue-500 text-[12px] sm:text-[14px] md:text-[16px] px-1 pb-[1.5px] md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
                        </div>
                    </div>

                    {/* MAscote  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg pb-5 relative'>
                        <div className='w-[60%] '>
                            <img src={illustration_mascotte} alt="illustration_mascotte" className='rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <h1 className='font-bold text-gray-700'>Mascotte</h1>
                            <p className='w-[70%] text-gray-700 text-[11px]'> Pour créer un lien affectif entre votre cible et votre marque ou évènement.</p>
                            <Link to='../' className=" duration-200  text-blue-500 text-[12px] sm:text-[14px] md:text-[16px] px-1 pb-[1.5px] md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
                        </div>
                    </div>

                    {/* campagnes  */}
                    <div className='w-full justify-center items-center flex flex-col bg-white rounded-lg relative'>
                        <div className='w-full '>
                            <img src={illustration_web} alt="illustration_web" className='rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-center absolute bottom-5'>
                            <h1 className='font-bold text-gray-100'>Web</h1>
                            <p className='w-[70%] text-gray-100 text-[11px]'> Illustrations simples et attrayante, création des icones personnalisées, gestion du design de site/ apps</p>
                            <Link to='../' className=" duration-200  text-blue-500 text-[12px] sm:text-[14px] md:text-[16px] px-1 pb-[1.5px] md:px-4 rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        {/* concept d'art  */}
        <section className='w-full bg-black py-10 flex flex-col gap-3'>

            <div className='px-[20%]'>
                <img src={Illustration_concept_art_1} alt="Illustration_concept_art_1" />
            </div>

            {/* text  */}
            {/* first and second paragraph  */}
            <section className=' px-[2%] gap-5 sm:px-[10%] flex flex-col md:flex-row py-10 md:justify-center w-full md:px-[10%]'>

                {/* first paragraph  */}
                <section className='px-[10%] md:px-0 w-[90%] '>
                    <p className='text-left font-[500] text-gray-100 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[24px] leading-5 lg:leading-7  sm:w-[65%] md:w-[90%]'> <span className=' text-bgPlay'>Vous avez un projet d&apos;animation, cinématographique ou jeux vidéo ?</span> Nous offrons des solutions créatives pour les projets complexes.</p>
                </section>

                {/* second paragraph  */}
                <section className='px-[10%] md:px-0 w-[90%] '>
                    <p className='text-left font-[500] text-gray-100 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[24px] leading-5 lg:leading-7  sm:w-[75%] md:w-full '> Nous vous accompagnons durant tout le processus, du biefing à la post-production, passant par le développement de votre univers visuel <span className='text-bgPlay'>et la ligne graphique  </span></p>
                </section>
            </section>

            <div className='w-full  grid grid-cols-1 md:grid-cols-2 '>

                {/* story bord  */}
                <section className='relative items-center flex flex-col justify-center px-[2%]'>
                    <img src={illustratration_concept_art_story_board} alt="illustratration_concept_art_story_board" className='rounded-lg' />

                    <div className='w-full relative'>
                        <div className='rounded-b-lg bottom-0 absolute pt-20 bg-gradient-to-t w-full from-bgCertifier from-20% h-[150px]'>
                            <h1 className='font-bold  text-center text-gray-100 text-[25px]'>Storyboard</h1>
                        </div>
                    </div>
                </section>

                {/* Creation environement  */}
                <section className='relative items-center flex flex-col justify-center px-[2%]'>
                    <img src={Illustration_concept_art_3} alt="Illustration_concept_art_2" className='rounded-lg' />

                    <div className='w-full relative '>
                        <div className='rounded-b-lg bottom-0 absolute pt-14 bg-gradient-to-t w-full from-bgCertifier from-20% h-[150px]'>
                            <h1 className='font-bold  text-center text-gray-100 text-[25px] leading-6'>Création <br /> Environnement</h1>
                        </div>
                    </div>
                </section>
            </div>

            {/* Creation environement  */}
            <section className='relative h-[300px] md:h-auto items-center flex flex-col justify-center px-[2%] overflow-hidden '>

                <div className=' overflow-hidden w-full h-full pr-[20% pt-[5%]'>

                    <img src={Illustration_concept_art_5} alt="Illustration_concept_art_2" className='rounded-lg scale-[3] mr-[100px] md:mr-0 md:scale-[1]' />
                </div>

                <div className='w-full relative md:hidden'>
                    <div className='rounded-b-lg md:bg-none bottom-0 absolute pt-14 bg-gradient-to-t w-full from-bgCertifier from-20% h-[150px]'>
                        <h1 className='font-bold  text-center text-gray-100 text-[25px] leading-6'>Création <br /> Environnement</h1>
                    </div>
                </div>

                <div className='w-full absolute left-5 hidden md:flex'>
                    <div className='rounded-b-lg absolute pl-[3%] lg:pl-[8%]'>
                        <h1 className='font-bold  text-left text-gray-100 text-[28px] lg:text-[38px] leading-8'>Création <br /> des personnages</h1>
                    </div>
                </div>
            </section>

        </section>

    </main>)
}