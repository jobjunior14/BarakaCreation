import { useNavigate, Link } from "react-router-dom";

import SecondeNav, {OnTopBtn} from './comp/util';
import Charte_graphique1 from '../../../assets/Services/Id visuelle/Charte_graphique1.jpg'
import Charte_graphique2 from '../../../assets/Services/Id visuelle/Charte_graphique2.jpg'
import charte_logoFichier_3 from '../../../assets/Services/Id visuelle/charte_logoFichier_3.jpg';
import Charte_couleurs from '../../../assets/Services/Id visuelle/Charte_couleurs.jpg';
import Chartmotif from '../../../assets/Services/Id visuelle/Chartmotif.jpg';
import Charte_typo from '../../../assets/Services/Id visuelle/Charte_typo.jpg';
import Charte_prototypes from '../../../assets/Services/Id visuelle/Charte_prototypes.jpg';
import useWindowWidth from "../../windowWidth";
export default function CharteGraphique () {
    
    const width = useWindowWidth();
    return (
        <div className="w-full bg-bgCharteGraphique">
            <div className="w-full sticky top-0 z-50 overflow-hidden px-[6%] lg:px-[7%] bg-bgCharteGraphique">

                <SecondeNav
                    title={' Identité visuelle'} 
                    link={'/services/idVisuelle'} 
                    bgColor={'bg-bgCharteGraphique'} 
                    titleColor='text-gray-100'
                    brdrColor='border-gray-100' textColor = ' text-white'
                />
            </div>

            <div className=' sm:px-[5rem] md:px-[6.25rem] lg:px-[7.5rem] md:pt-10'> 

                {/* text and welocm image */}
                <section className="w-full">

                    {/* welcome text  */}
                    <div className="flex flex-col gap-5 sm:text-left">

                        <h1 className="text-gray-100 text-5xl md:text-6xl lg:text-[70px] sm:pl-[10%] font-interBold md:mt-8">Charte<br/>graphique</h1>


                        <div className="w-full  sm:block hidden sm:pl-[10%] sm:z-30">
                            <p className="text-gray-100 w-[60%] leading-6 text-[0.9rem] font-interRegular text-left lg:text-[1.2rem] sm:text-[1rem]">C&apos;est un document qui définit votre identité visuelle.
                                Elle est essentielle pour garantir la cohérence de
                                votre communication sur tous vos supports.
                                <br className="sm:hidden" />
                                <br />
                                <span className="text-blue-100 sm:text-gray-100">
                                    Nous vous aidons à créer une charte graphique qui
                                    soit à la fois unique et efficace.
                                </span>
                            </p>
                        </div>

                        {/* Interessé button and nous contacter  */}
                        <div className=' flex  justify-center items-center sm:justify-start sm:items-start flex-col w-full sm:pl-[10%] sm:z-30'>
                            
                            <div className=" h-fit w-fit flex flex-col text-center items-center gap-2">

                                <Link to='/contacts' className=" duration-200 font-interRegular  text-gray-100 text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] px-3  md:px-4 rounded-full bg-blue-500 hover:text-blue-500 hover:bg-bgIdVisuel border-blue-500 border">Interessé</Link>
                                
                                <Link to={'/portfolio/graphicDesign'} className=" text-gray-100 font-interRegular text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] flex items-center "> Nos créations <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link>
                            </div>
                        </div>
                    </div>

                    {/* welcom image  */}
                    <div className="lg:-my-[10%] sm:-my-[10%]  ">
                        <img loading='lazy' src={width <= 640 ? Charte_graphique2 : Charte_graphique1} alt="Id_visuelle_Charte_graphique" />
                    </div>
                    

                    <div className="w-[80%] pl-[10%] -mt-10 sm:hidden">
                        <p className="text-gray-100 md:w-[50%] lg:w-[40%] leading-5 text-[0.9rem] text-left font-interRegular">C&apos;est un document qui définit votre identité visuelle.
                            Elle est essentielle pour garantir la cohérence de
                            votre communication sur tous vos supports.
                            <br />
                            <br />
                            <span className="text-blue-100">
                                Nous vous aidons à créer une charte graphique qui
                                soit à la fois unique et efficace.
                            </span>
                        </p>
                    </div>

                    {/* second welcom text  */}
                    <div className="w-full text-left justify-end hidden md:flex">

                        <p className="text-gray-100 md:w-[60%] lg:w-[60%] leading-5 text-[14.5px] lg:text-xl sm:text-[1.125rem]">Nous créons des lignes directrices d'identité aussi bien pour les
                            logos existants que pour les nouveaux logos que nous créons. La
                            mission de la charte graphique est toujours de définir les
                            paramètres clés de l&apos;identité visuelle et de s&apos;assurer que l&apos;identité
                            reste cohérente dans le temps et dans une multitude
                            d&apos;environnements (imprimé, écran ou web).
                        </p>
                    </div>
                </section>

                {/* aspect de la charte  */}
                <section className="flex flex-col gap-5 md:gap-7 w-full px-[10%] text-left py-[8%]">

                    <div className='w-full flex flex-col gap-2' >
                        <h1 className='text-2xl sm:text-3xl md:text-4xl text-gray-100 font-interBold ' >Aspect <span className=' text-blue-100'>de la charte</span></h1>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="w-full">
                            <img loading='lazy' src={charte_logoFichier_3} alt="" className="rounded-lg" />
                            <h3 className="text-[0.8125] md:text-[1rem] font-bold text-gray-100 m-1 leading-4 font-interSemibold "> Logotype <span className="text-blue-100">&  règle <br  className="hidden md:block"/>d&apos;usage</span></h3>
                        </div>

                        <div className="w-full">
                            <img loading='lazy' src={Charte_couleurs} alt="" className="rounded-lg" />
                            <h3 className="text-[0.8125] md:text-[1rem] font-bold text-gray-100 m-1 leading-4 font-interSemibold">La charte des <br  className="hidden md:block"/>couleurs</h3>
                        </div>

                        <div className="w-full">
                            <img loading='lazy' src={Chartmotif} alt="" className="rounded-lg" />
                            <h3 className="text-[0.8125] md:text-[1rem] font-bold text-gray-100 m-1 leading-4 font-interSemibold"> Iconographie <span className="text-blue-100">& <br className="hidden md:block"/> Motifs</span></h3>
                        </div>


                        <div className="w-full">
                            <img loading='lazy' src={Charte_typo} alt="" className="rounded-lg" />
                            <h3 className="text-[0.8125] md:text-[1rem] font-bold text-gray-100 m-1 leading-4 font-interSemibold">Polices de <br className="hidden md:block" />caractère</h3>

                        </div>

                        <div className="w-full">
                            <img loading='lazy' src={Charte_prototypes} alt="" className="rounded-lg" />
                            <h3 className="text-[0.8125] md:text-[1rem] font-bold text-gray-100 m-1 leading-4 font-interSemibold">Prototypes</h3>

                        </div>
                        <div className="w-full h-auto hidden md:flex flex-col">
                            <div className="w-full lg:h-[88%] md:h-[82%] bg-white rounded-lg border-red-600 border-4 flex justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-red-500"> <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" /></svg></div>
                            <h3 className="text-[0.8125] md:text-[1rem] font-bold text-gray-100 m-1 leading-4 font-interSemibold">Iterdit</h3>

                        </div>
                    </div>

                </section>

                {/* ended text  */}
                <section className='text-left px-[10%] flex flex-col gap-3 pb-[8%]'>

                    <p className='text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[20px] text-gray-100 font-interRegular'>Nous guidons nos clients dans les processus complexe et participons activement à l&apos;élaboration d&apos;un briefing clair et pratique. En fonction des besoins et du budget, nous élaborons les supports d&apos;une mini-charte à une charte graphique plus développée. </p>

                    <p className='text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[20px] text-blue-100 font-interRegular'>La conception d&apos;une charte graphique est indispensable pour toute entreprise, commerciale souhaitant se démarquer de la concurrence</p>
                </section>

                {/* retrun to origin boutton  */}
                <OnTopBtn brdrColor='border-gray-100' textColor = ' text-white'/>

            </div>
            

        </div>
    )
}