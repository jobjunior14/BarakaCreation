import SecondeNav, {OnTopBtn} from '../identite_visuel/comp/util';
import { Link } from 'react-router-dom';
import presentation from '../../../assets/Services/Design graphique/Presentation.jpg';
import Presentation_icone1 from '../../../assets/Services/Design graphique/Presentation_icone1.png';
import Presentation_icone3 from '../../../assets/Services/Design graphique/Presentation_icone3.png';
import Presentation_icone_2 from '../../../assets/Services/Design graphique/Presentation_icone_2.png';


export default function Presentation() {
    return (

        <main>

            <SecondeNav
                title={' Design Graphique'} 
                link={'/services/graphiqueDesign'} 
                bgColor={'bg-bgEvent'} 
                titleColor='text-gray-100'
                brdrColor='border-gray-100' textColor = ' text-white'
            />

            {/* welcom image and texte  */}
            <section className="w-full flex flex-col justify-center bg-bgEvent">
 
                <div className='w-full pt-[6%] sm:pt-[1%] flex flex-col gap-4 md:gap-0 z-40'>

                    <div className=' flex flex-col justify-center items-center px-[10%]  sm:px-[10%] md:px-[13%] lg:px-[16%]  '>
                        <h1 className=' text-4xl font-bold text-gray-100'>Présentation</h1>
                    </div>

                    <div className=' flex justify-center items-center gap-2 flex-col  w-full  '>
                        
                        <Link to='../' className=" duration-200  text-gray-100 text-[12px] sm:text-[14px] md:text-[16px] px-1 rounded-full bg-blue-500 hover:text-blue-500 hover:bg-bgIdVisuel border-blue-500 border">Interessé</Link>
                        
                        <Link to={'../'} className=" text-blue-500 text-[12px] sm:text-[14px] md:text-[16px] flex "> Notre portfolio <span className="flex items-center justify-center "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-14 7.5 7.5-7.5 7.5" /></svg></span></Link>
                    </div>
                </div>

                <div className=' justify-center items-center flex  '>
                    <div className='w-[90%] sm:w-[60%] md:w-[60%] lg:w-[45%]'>

                        <img src={presentation} alt="campagne"/>
                    </div>
                </div>
            </section>
            
            <section className='bg-[rgb(22,21,35)]'>

                {/* section text  */}
                <section className='py-10 w-full'>

                    <h1 className='text-left px-[10%] text-[28px] leading-6 font-bold text-bgPlay '>Vous avez un <br/> projet complexe ? </h1>

                    <section className=' px-[2%] gap-5 sm:px-[10%] flex flex-col md:flex-row py-10 md:justify-center w-full md:px-[10%]'>

                        {/* first paragraph  */}
                        <section className='px-[10%] md:px-0 w-[90%] '>

                            <p className=' text-left font-[500] text-gray-100 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[24px] leading-5 lg:leading-7  sm:w-[65%] md:w-[90%]'> Grâce à l&apos;infographie vous pouvez désomais transmettre vos infomations de la manière visuelle la plus efficace et convaincante. </p>

                        </section>

                        {/* second paragraph  */}
                        <section className='px-[10%] md:px-0 w-[90%] '>
                            <p className='text-left font-[500] text-gray-400 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[24px] leading-5 lg:leading-7  sm:w-[75%] md:w-full '>
                                Nous sommes votre patenaire de confiance pour la création des suppots de présentation professionnels et percutants.
                            </p>
                        </section>

                    </section>
                </section>

                {/* section Aspect des outils  */}
                <section className='w-full flex flex-col gap-5'>

                    <h1 className=' text-left px-[10%] text-[24px] leading-6 font-bold text-bgPlay'> Aspect des <br /> outils</h1>

                    <div className=' grid grid-cols-1 justify-between items-center px-[10%] gap-y-4'>
                        
                        <div className='w-full flex flex-col gap-2'>
                            <div className='flex justify-between items-center  w-full'>
                                <div className='w-[30%]'>
                                    <img src={Presentation_icone1} alt="Presentation_icone1" className='h-[45px]' />
                                </div>
                                <h3 className=' text-gray-200 font-bold w-[85%]  text-[15px] text-left leading-5'>Design épuré, <br /> Animation & simulation</h3>
                            </div>
                            
                            <div className='w-full h-px bg-bgPlay'></div>
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <div className='flex justify-between items-center  w-full'>
                                <div className='w-[30%]'>
                                    <img src={Presentation_icone3} alt="Presentation_icone1" className='h-[45px]' />
                                </div>
                                <h3 className=' text-gray-200 font-bold w-[85%]  text-[15px] text-left leading-5'>Support divérsifiés <br /> <span className=' text-bgPlay'>{'(print & digital)'}</span></h3>
                            </div>
                            
                            <div className='w-full h-px bg-bgPlay'></div>
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <div className='flex justify-between items-center  w-full'>
                                <div className='w-[30%]'>
                                    <img src={Presentation_icone_2} alt="Presentation_icone_2" className='h-[45px]' />
                                </div>
                                <h3 className=' text-gray-200 font-bold w-[85%]  text-[15px] text-left leading-5'>Graphique <br /> et illustrations <span className=' text-bgPlay'>personnalisés</span></h3>
                            </div>
                            
                            <div className='w-full h-px bg-bgPlay'></div>
                        </div>
                        
                        <div className='w-full flex flex-col gap-2'>
                            <div className='flex justify-between items-center  w-full'>
                                <div className='w-[30%]'>
                                    <img src={Presentation_icone1} alt="Presentation_icone1" className='h-[45px]' />
                                </div>
                                <h3 className=' text-gray-200 font-bold w-[85%]  text-[15px] text-left leading-5'>Design épuré, <br /> Animation & simulation</h3>
                            </div>
                            
                            <div className='w-full h-px bg-bgPlay'></div>
                        </div>

                    </div>
                </section>

                {/* ended text */}
                    <section className=' px-[2%] gap-5 sm:px-[10%] flex flex-col md:flex-row py-10 md:justify-center w-full md:px-[10%]'>

                        {/* first paragraph  */}
                        <section className='px-[10%] md:px-0 w-[90%] '>

                            <p className=' text-left font-[500] text-gray-100 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[24px] leading-5 lg:leading-7  sm:w-[65%] md:w-[90%]'> Nous proposons un package complète des suppots : de power point, à l'animation passant par les brochures ou le PDF. </p>

                        </section>

                        {/* second paragraph  */}
                        <section className='px-[10%] md:px-0 w-[90%] '>
                            <p className='text-left font-[500] text-gray-400 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[24px] leading-5 lg:leading-7  sm:w-[75%] md:w-full '> Nous gérons l&apos;ensemble du flux de travail, du biefing au rendu final                            </p>
                        </section>


                        <OnTopBtn brdrColor='border-gray-100' textColor = ' text-white'/>

                    </section>

            </section>
            
           
        </main>
    )
}