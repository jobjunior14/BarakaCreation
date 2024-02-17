import SecondeNav, {OnTopBtn} from './comp/util';
import { Link } from 'react-router-dom';
import print_accueil from '../../../assets/Services/Id visuelle/print_accueil.jpg';
import print_Brochure from '../../../assets/Services/Id visuelle/print_Brochure.png';
import print_flyers_1 from '../../../assets/Services/Id visuelle/print_flyers_1.png';
import print_rollup from '../../../assets/Services/Id visuelle/print_rollup.png';
import print_catalogue from '../../../assets/Services/Id visuelle/print_catalogue.png';
import print_deplient from '../../../assets/Services/Id visuelle/print_deplient.png';
import print_carte_de_visite from '../../../assets/Services/Id visuelle/print_carte_de_visite.png';
import print_plaquette from '../../../assets/Services/Id visuelle/print_plaquette.png';
import print_livret from '../../../assets/Services/Id visuelle/print_livret.png';
import print_affiche_A3_A0 from '../../../assets/Services/Id visuelle/print_affiche_A3_A0.png';
import print_bilboard from '../../../assets/Services/Id visuelle/print_bilboard.png';
import print_panneau from '../../../assets/Services/Id visuelle/print_panneau.png';
import print_signaletique from '../../../assets/Services/Id visuelle/print_signaletique.png';
import print_banderole_1 from '../../../assets/Services/Id visuelle/print_banderole_1.png';
import print_lettre_entete from '../../../assets/Services/Id visuelle/print_lettre_entete.png';
import print_calendar from '../../../assets/Services/Id visuelle/print_calendar.png';
import print_envellope from '../../../assets/Services/Id visuelle/print_envellope.png';
import print_carte_de_service from '../../../assets/Services/Id visuelle/print_carte_de_service.png';
import print_agenda from '../../../assets/Services/Id visuelle/print_agenda.png';
import print_cachet from '../../../assets/Services/Id visuelle/print_cachet.png';
import print_registre from '../../../assets/Services/Id visuelle/print_registre.png';
import print_facture from '../../../assets/Services/Id visuelle/print_facture.png';
import print_plus_1 from '../../../assets/Services/Id visuelle/print_plus_1.png';
import print_interieur from '../../../assets/Services/Id visuelle/print_interieur.png';
import print_tenu from '../../../assets/Services/Id visuelle/print_tenu.png';
import print_vehicule from '../../../assets/Services/Id visuelle/print_vehicule.png';
import print_veteùent from '../../../assets/Services/Id visuelle/print_veteùent.png';

export default function SupportPrint() {


    return (
        <div className='w-full bg-white'>
            
            <SecondeNav 
                link={'/services/idVisuelle'} 
                bgColor={'bg-white'} 
                titleColor='text-gray-600'
                title={'Identité visuelle'}
                brdrColor='border-gray-600' textColor = ' text-black'
            />
            
            {/* welcom image  */}
            <section className='w-full px-[5%] flex flex-col items-center justify-center relative '>
            
                <img src={print_accueil} alt=" print_accueil" className=''/>
                
                <div className=' flex justify-center items-center gap-2 flex-col  w-full pl-[3%] relative bottom-2 lg:bottom-5 '>
                    
                    <Link to='../' className=" duration-200  text-gray-100 text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] px-1 pb-[1.5px] rounded-full bg-blue-500 hover:text-blue-500 hover:bg-bgIdVisuel border-blue-500 border">Interessé</Link>
                    
                    <Link to={'../'} className=" text-blue-500 text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] flex "> Notre Logofolio <span className="flex items-center justify-center "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-14 7.5 7.5-7.5 7.5" /></svg></span></Link>
                </div>
            </section>

            <div className=' sm:px-[80px] md:px-[100px] lg:px-[120px] bg-slate-50 w-full flex flex-col gap-14'>
                
                {/* Supports de présentation  */}
                <section className='flex flex-col gap-3  bg-white w-full p-5 mt-5 rounded-lg'>

                    <h1 className='font-bold text-gray-700 text-left'>Supports de présentation</h1>
                    <div className='w-full h-px bg-gray-600'></div>

                    <div className='grid md:grid-cols-3 grid-cols-2 justify-center items-center bg-white gap-5'>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_Brochure} alt="print_Brochure" className='h-6'  />
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold pt-2'>Brochure</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_flyers_1} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Flyers</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_rollup} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Rollup</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_catalogue} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Catalogue</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_deplient} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Depliant</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_carte_de_visite} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Cartes de visite</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_plaquette} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Plaquette</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_livret} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Livret</p>
                        </div>
                    </div>
                </section>

                {/* Affichage  */}
                <section className='flex flex-col gap-3 bg-white w-full p-5 rounded-lg '>

                    <h1 className='font-bold text-gray-700 text-left'> Affichage</h1>
                    <div className='w-full h-px bg-gray-600'></div>

                    <div className='grid md:grid-cols-3 grid-cols-2 justify-center items-center gap-5'>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_affiche_A3_A0} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold '>A3 - A0</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_bilboard} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Affiche lumineuse</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_signaletique} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Signaletique</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_panneau} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Panneau publicitaire</p>
                        </div>
                        <div className='flex  md:justify-start justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_banderole_1} alt="print_Brochure"  className='md:h-5 h-4'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Banderole</p>
                        </div>
                        
                    </div>
                </section>

                {/* Supports administratifs  */}
                <section className='flex flex-col gap-3 bg-white w-full p-5 rounded-lg '>

                    <h1 className='font-bold text-gray-700 text-left'> Supports administratifs</h1>
                    <div className='w-full h-px bg-gray-600'></div>

                    <div className='grid md:grid-cols-3 grid-cols-2 justify-center items-center gap-5'>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_lettre_entete} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold '> Lettre entete</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_calendar} alt="print_Brochure"  className='md:h-5 h-4'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Calendiers</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_envellope} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Enveloppe</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_carte_de_service} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Cates de sevices</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_agenda} alt="print_Brochure"  className='md:h-5 h-4'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Agenda/notebook</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_cachet} alt="print_Brochure"  className='md:h-5 h-4'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Cachet</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_registre} alt="print_Brochure"  className='md:h-5 h-4'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Registre, bons …</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_facture} alt="print_Brochure"  className='md:h-5 h-4'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Factures</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_plus_1} alt="print_Brochure"  className='md:h-5 h-4'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Autres documents</p>
                        </div>
                        
                    </div>
                </section>

                {/* Supports d'habillage */}
                <section className='flex flex-col gap-3 bg-white w-full p-5 rounded-lg '>

                    <h1 className='font-bold text-gray-700 text-left'>Supports d&apos;habillage</h1>
                    <div className='w-full h-px bg-gray-600'></div>

                    <div className='grid md:grid-cols-3 grid-cols-2 justify-center items-center gap-5'>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_interieur} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold text-left '> Habillage intene & extene</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_tenu} alt="print_Brochure"  className='md:h-5 h-4'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Tenu de travail</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_plus_1} alt="print_Brochure"  className='md:h-5 h-4'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Et bien plus</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_vehicule} alt="print_Brochure"  className='md:h-6 h-5'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Habillage vehicules</p>
                        </div>
                        <div className='flex  justify-start items-center md:gap-4 gap-3'>
                            <div className='w-[25%] lg:w-[13%] h-auto'>

                                <img src={print_veteùent} alt="print_Brochure"  className='md:h-5 h-4'/>
                            </div>
                            <p className='text-gray-700 md:text-[15px] sm:text-[13px] text-[0.69rem]  font-semibold'>Vetement</p>
                        </div>
                       
                    </div>
                </section>


                {/* retrun to origin boutton  */}
                <OnTopBtn brdrColor='border-gray-600' textColor = ' text-black'/>
            </div>
        </div>
    );
}