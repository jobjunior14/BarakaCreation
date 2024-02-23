import DesignGraphiqueCom from './comp/util';
import Accueildesigngr1 from '../../../assets/Accueil/Accueildesigngr1.jpg';
import Accueildesigngr2 from '../../../assets/Accueil/Accueildesigngr2.jpg';
import Design_graphic_title from  '../../../assets/Services/Design graphique/Design_graphic_title.png';
import campagne from  '../../../assets/Services/Design graphique/campagne.jpg';
import evenementiel from  '../../../assets/Services/Design graphique/evenementiel.jpg';
import Presentation from  '../../../assets/Services/Design graphique/Presentation.jpg';
import mise_en_page_accueil from  '../../../assets/Services/Design graphique/mise_en_page_accueil.jpg';
import motion_design from  '../../../assets/Services/Design graphique/motion_design.jpg';
import web_design from  '../../../assets/Services/Design graphique/web_design.jpg';
import Web_design from  '../../../assets/Services/Design graphique/Web_design.png';
import { Link } from 'react-router-dom';
import { OnTopBtn } from '../identite_visuel/comp/util';

export default function GraphiqueDesign () {

    return (<main className=' flex flex-col gap-5 bg-black'>
 
            {/* welcom image and text  */}
            <section className='w-full flex flex-col gap-5  justify-center pt-10' >
                
                <h1 className='text-blue-100 font-bold text-2xl sm:hidden'>Des supports <br /> diversifiés et <br /> efficaces</h1>

                <div className=' justify-between flex items-center'>
                    <img src={Accueildesigngr2} alt='Accueildesigngr2' className='h-[10.625rem] lg:h-[29.375rem] md:h-[32.5rem] sm:h-[15.625rem] ' />

                    <div className='flex flex-col items-center justify-center pr-[5%] gap-4'>
                        <h1 className='text-blue-100 font-bold text-2xl md:text-[26px] lg:text-[28px] sm:flex hidden leading-[1.875rem]'>Des supports <br /> diversifiés et <br /> efficaces</h1>
                        <p className='text-blue-100 text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] sm:flex hidden '>Nos services couvrent la conception de tous les 
                            supports de communication print ou digitaux. 
                            Nous menons à bien les projets les plus variés et 
                            vous accompagnons dans la mise en place d&apos;une 
                            communication globale forte et cohérente
                        </p>
                    </div>

                    <img src={Accueildesigngr1} alt='Accueildesigngr1' className='h-[10.625rem] lg:h-[29.375rem] md:h-[32.5rem] sm:h-[15.625rem]' />
                </div>

                <div className='px-[5%]'>
                    <img src={Design_graphic_title} alt="" className='' />
                </div>

                <p className='text-blue-100 px-[10%] text-[0.75rem] sm:hidden'  >Nos services couvrent la conception de tous les 
                    supports de communication print ou digitaux. 
                    Nous menons à bien les projets les plus variés et 
                    vous accompagnons dans la mise en place d&apos;une 
                    communication globale forte et cohérente
                </p>

            </section>

            <section className='grid grid-cols-1 md:grid-cols-2 justify-center items-center px-[2%] gap-3'>

                <DesignGraphiqueCom 
                    hImage='h-[12.5rem] sm:h-[15.625rem] md:h-[270px]'
                    image={campagne}
                    name={'Campagne comm.'}
                    text={"Nous créons des visuels percutants qui transmettent votre message de manière claire et concise "}
                    link={'/services/graphiqueDesign/campagnDeComm'}
                    bg={'bg-white'}
                    colorText={'text-gray-700'}
                />

                <DesignGraphiqueCom 
                    hImage='h-[12.5rem] sm:h-[15.625rem] md:h-[270px]'
                    image={evenementiel}
                    name={'Event'}
                    text={"De la planification à la réalisation de votre événement, nous concevons tout supports "}
                    link={'/services/graphiqueDesign/event'}
                    bg={'bg-bgEvent'}
                    colorText={'text-gray-100'}
                />   

                <DesignGraphiqueCom 
                    hImage='h-[12.5rem] sm:h-[15.625rem] md:h-[270px]'
                    image={mise_en_page_accueil}
                    name={'Mise enpage'}
                    text={"Livres, magazines, brochures, documents administratifs, institutionnels… "}
                    link={'/services/graphiqueDesign/miseEnPage'}
                    bg={'bg-bgMiseEnpage'}
                    colorText={'text-gray-700'}
                />    
                           
                <DesignGraphiqueCom 
                    hImage='h-[12.5rem] sm:h-[15.625rem] md:h-[270px]'
                    image={Presentation}
                    name={'Présentation'}
                    text={"Vous pouvez désormais présenter votre projet de la manière visuelle la plus efficace et convaincante "}
                    link={'/services/graphiqueDesign/presentation'}
                    bg={'bg-bgEvent'}
                    colorText={'text-gray-100'}
                />  

                <DesignGraphiqueCom 
                    hImage='h-[175px] sm:h-[15.625rem] md:h-[270px]'
                    image={motion_design}
                    name={'Motion design'}
                    text={"Spot publicitaire, Présentation, promotions en motion design "}
                    link={'/services/idVisuelle/motionDesign'}
                    bg={'bg-white'}
                    colorText={'text-gray-700'}
                />  
                
                {/* web_design  */}
                <div className=' w-full border border-blue-200 rounded-lg'>

                    <section className={`w-full bg-blacl justify-center items-center flex flex-col gap-4 rounded-lg pt-5`}>
            
                        {/* text  */}
                        <div className="text-center flex flex-col items-center justify-center gap-3">
                            <div className='md:-mb-5'>
                                <img src={Web_design} alt="" className='h-[50px] md:h-[60px]' />
                            </div>
                            <p className={`w-[75%] sm:w-[70%] md:w-[65%]  text-[0.69rem] sm:text-[0.875rem] md:text-[15px] text-gray-100`}> Spot publicitaire, Présentation, promotions en motion design </p>
                        </div>

                        {/* button  */}
                        <div className="flex justify-evenly gap-10">
                            <Link to={'/services/graphiqueDesign/webDesign'} className=" text-blue-500 text-[0.75rem] sm:text-[15px] md:text-[1rem] flex "> Voir plus <span className="flex items-center justify-center "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link>
                            <Link to='../' className=" duration-200  text-blue-500 text-[0.75rem] sm:text-[15px] md:text-[1rem] px-1 pb-[1.5px] rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
                        </div>

                        {/* Image  */}
                        <div className="w-full justify-center items-center flex">
                                <img src={web_design} alt="Id_Vieuellelogo" className={'h-[12.5rem] sm:h-[15.625rem] md:h-[270px]'} />
                        </div>
                    </section>
                </div>



            </section>

            {/* return to the top of the application */}
            <div className='w-full flex justify-center items-center'>

                <OnTopBtn brdrColor='border-gray-700' textColor = ' text-white'/>
            </div>
    </main>)
}