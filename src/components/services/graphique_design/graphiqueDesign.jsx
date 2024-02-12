import { Link } from 'react-router-dom';
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
import { OnTopBtn } from '../identite_visuel/comp/util';
export default function GraphiqueDesign () {

    return (<main className=' flex flex-col gap-5 bg-black'>
 
            {/* welcom image and text  */}
            <section className='w-full flex flex-col gap-5  justify-center pt-10' >
                
                <h1 className='text-blue-100 font-bold text-2xl sm:hidden'>Des supports <br /> diversifiés et <br /> efficaces</h1>

                <div className=' justify-between flex items-center'>
                    <img src={Accueildesigngr2} alt='Accueildesigngr2' className='h-[170px] lg:h-[470px] md:h-[340px] sm:h-[250px] ' />

                    <div className='flex flex-col items-center justify-center pr-[5%] gap-4'>
                        <h1 className='text-blue-100 font-bold text-2xl md:text-[26px] lg:text-[28px] sm:flex hidden leading-[30px]'>Des supports <br /> diversifiés et <br /> efficaces</h1>
                        <p className='text-blue-100 text-[12px] md:text-[14px] lg:text-[16px] sm:flex hidden '>Nos services couvrent la conception de tous les 
                            supports de communication print ou digitaux. 
                            Nous menons à bien les projets les plus variés et 
                            vous accompagnons dans la mise en place d&apos;une 
                            communication globale forte et cohérente
                        </p>
                    </div>

                    <img src={Accueildesigngr1} alt='Accueildesigngr1' className='h-[170px] lg:h-[470px] md:h-[340px] sm:h-[250px]' />
                </div>

                <div className='px-[5%]'>
                    <img src={Design_graphic_title} alt="" className='' />
                </div>

                <p className='text-blue-100 px-[10%] text-[12px] sm:hidden'  >Nos services couvrent la conception de tous les 
                    supports de communication print ou digitaux. 
                    Nous menons à bien les projets les plus variés et 
                    vous accompagnons dans la mise en place d&apos;une 
                    communication globale forte et cohérente
                </p>

            </section>

            <section className='grid grid-cols-1 md:grid-cols-2 justify-center items-center px-[2%] gap-3'>

                <DesignGraphiqueCom 
                    hImage='h-[200px] sm:h-[250px] md:h-[270px]'
                    image={campagne}
                    name={'Campagne comm.'}
                    text={"Nous créons des visuels percutants qui transmettent votre message de manière claire et concise "}
                    link={'/services/idVisuelle/supportPrint'}
                    bg={'bg-white'}
                    colorText={'text-gray-700'}
                />

                <DesignGraphiqueCom 
                    hImage='h-[200px] sm:h-[250px] md:h-[270px]'
                    image={evenementiel}
                    name={'Event'}
                    text={"De la planification à la réalisation de votre événement, nous concevons tout supports "}
                    link={'/services/idVisuelle/supportPrint'}
                    bg={'bg-bgEvent'}
                    colorText={'text-gray-100'}
                />   

                <DesignGraphiqueCom 
                    hImage='h-[200px] sm:h-[250px] md:h-[270px]'
                    image={mise_en_page_accueil}
                    name={'Mise enpage'}
                    text={"Livres, magazines, brochures, documents administratifs, institutionnels… "}
                    link={'/services/idVisuelle/supportPrint'}
                    bg={'bg-bgMiseEnpage'}
                    colorText={'text-gray-700'}
                />    
                           
                <DesignGraphiqueCom 
                    hImage='h-[200px] sm:h-[250px] md:h-[270px]'
                    image={Presentation}
                    name={'Présentation'}
                    text={"Vous pouvez désormais présenter votre projet de la manière visuelle la plus efficace et convaincante "}
                    link={'/services/idVisuelle/supportPrint'}
                    bg={'bg-bgEvent'}
                    colorText={'text-gray-100'}
                />  

                <DesignGraphiqueCom 
                    hImage='h-[175px] sm:h-[250px] md:h-[270px]'
                    image={motion_design}
                    name={'Motion design'}
                    text={"Spot publicitaire, Présentation, promotions en motion design "}
                    link={'/services/idVisuelle/supportPrint'}
                    bg={'bg-white'}
                    colorText={'text-gray-700'}
                />  
                
                <div className='w-full border border-blue-300 rounded-lg'>
                    <DesignGraphiqueCom 
                        hImage='h-[200px] sm:h-[250px] md:h-[270px]'
                        image={web_design}
                        name={'Motion design'}
                        text={"Spot publicitaire, Présentation, promotions en motion design "}
                        link={'/services/idVisuelle/supportPrint'}
                        bg={'bg-black'}
                        colorText={'text-gray-100'}
                    />  
                </div>

                {/* return to the top of the application */}
                <OnTopBtn brdrColor='border-gray-700' textColor = ' text-white'/>

            </section>
    </main>)
}