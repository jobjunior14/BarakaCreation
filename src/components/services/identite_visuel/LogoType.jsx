import { Link } from 'react-router-dom';
import Id_Vieuellelogo from '../../../assets/Services/Id visuelle/Id_Vieuellelogo.png';
import Logo_accueil from '../../../assets/Services/Id visuelle/Logo_accueil.png';
import Accueil_Logofolio from '../../../assets/Portofolio/Logofolio/Accueil_Logofolio.jpg';
import SecondeNav, {OnTopBtn} from './comp/util';
import useWindowWidth from '../../windowWidth';
import { useEffect } from 'react';

export default function Logotype () {

    // scroll to top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const width = useWindowWidth();
    return (
        <div className='w-full bg-slate-100 '>
            
            <SecondeNav 
                link={'/services/idVisuelle'} 
                bgColor={'bg-slate-100'} 
                titleColor='text-gray-600'
                title={'Identité visuelle'}
                brdrColor='border-gray-600' textColor = ' text-black'
            />
            
            <div className='sm:pt-24 px-[6%] lg:px-[20%]'>
                
                {/* welcom image  */}
                <section className='w-full flex flex-col gap-5 items-center justify-center pb-[25%] sm:pb-[15%] md:pb-[10%] relative'>

                    <div className=' flex justify-center items-center'>
                        <img loading='lazy' src={width <= 640 ? Id_Vieuellelogo : Logo_accueil} alt=" Id_Vieuellelogo" />
                    </div>

                    <div className=' flex flex-col justify-center items-center gap-2 w-full'>
                        <Link to='/contacts' className=" duration-200  text-gray-100 text-[0.75rem] sm:text-[0.875rem]  md:text-[1rem] px-4  rounded-full bg-blue-500 hover:text-blue-500 hover:bg-bgIdVisuel border-blue-500 border">Interessé</Link>
                        
                        <Link to={'/portfolio/logofolio'} className=" text-blue-500 text-[0.75rem] sm:text-[0.875rem] smd:text-[1rem] flex items-center justify-center "> Notre Logofolio <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link>

                    </div>
                </section>

                {/* welcom text  */}
                <section className='text-left flex flex-col gap-4 pb-[8%] sm:hidden'>
                    <h1 className='text-2xl sm:text-3xl text-gray-700 font-interBold w-[60%]'> Unique,attrayant <span className='text-gray-500'>et</span> mémorable </h1>
                    
                    <p className='text-[0.875rem] sm:text-[1rem] font-interSemibold text-gray-700'>Le cœur de votre identité visuelle est votre logo. Il est la première impression que les gens ont de votre entrepise . Nous sommes spécialisés dans la conception des logos.</p>

                    <p className='text-[0.875rem] sm:text-[1rem]  font-interSemibold text-gray-500 s'>Nous vous accompagnons tout au long du processus, du briefing à la création de votre logo officiel.</p>
                </section>

                <section className='text-left hidden flex-col gap-4 pb-[8%] sm:flex'>
                    <h1 className='text-2xl sm:text-3xl text-gray-700 font-interBold w-[60%]'> Unique,attrayant <span className='text-gray-500'>et</span> mémorable </h1>
                    
                    <p className='text-[0.875rem] sm:text-[1rem] sm:w-[70%] lg:w-[65%] font-interSemibold text-gray-700'>
                        Le cœur de votre identité visuelle est votre logo. Il est la première impression que les
                        gens ont de votre entrepise . Nous sommes spécialisée dans la conception de logos.
                        Nous vous accompagnons tout au long du processus, du briefing à la création de
                        votre logo officiel.

                    </p>

                </section>
                
                {/* Logofolio image  */}
                <section className='w-full h-[57vh] bg-cover bg-fixed bg-no-repeat bg-right' style={{backgroundImage: `url(${Accueil_Logofolio})`}} >

                </section>

                {/* aspect du logo  */}
                <section className='flex flex-col gap-5 w-full text-left py-[8%] '>

                    <div className='w-full flex flex-col gap-2' >
                        <h1 className='text-2xl text-gray-700 font-interBold ' >Aspect <span className='text-gray-500'>du logo</span></h1>
                    </div>

                    <div className='flex flex-col gap-5 w-full md:flex-row md:gap-7'>

                        <div className='w-full flex flex-col gap-2' >
                            <div className='w-full h-[1px] bg-gray-500'></div>
                            <p className='text-[15px] leading-5 text-gray-700 font-interBold w-[55%] md:w-[65%]' >Simple,lisible et efficace aux objectifs en communication </p>
                        </div>

                        <div className='w-full flex flex-col gap-2' >
                            <div className='w-full h-[1px] bg-gray-500'></div>
                            <p className='text-[15px] leading-5 text-gray-700 font-interBold w-[55%] md:w-[60%]' >Déclinable sur tous supports de communication </p>
                        </div>

                        <div className='w-full flex flex-col gap-2' >
                            <div className='w-full h-[1px] bg-gray-500'></div>
                            <p className='text-[15px] leading-5 text-gray-700 font-interBold w-[55%] md:w-[60%]' >Personnalisé et qui vous distingue de la concurrence</p>
                        </div>
                    </div>
                </section>

                {/* ended text  */}
                <section className='text-left  flex-col gap-3 pb-[8%] flex sm:hidden'>

                    <p className='text-[0.875rem] sm:text-[1rem] font-interSemibold text-gray-700'>Nous guidons nos clients dans les processus complexes et paticipons activement à l&apos;élaboration d&apos;un briefing clair et pratique.</p>

                    <p className='text-[0.875rem] sm:text-[1rem] font-interSemibold text-gray-500'>En fonction des besoins et du budget, nous vous proposons 2 à 6 logotypes dans un large éventail de styles et d&apos;ambiances. Ainsi, ensemble nous pavenons à un logo durable et authentique.</p>

                </section>

                <section className='text-left flex-col gap-3 pb-[8%] hidden sm:flex'>

                    <p className='text-[0.875rem] sm:text-[1rem] font-interSemibold text-gray-700'>
                        Nous guidons nos clients dans les processus complexe et paticipons activement à
                        l&apos;élaboration d&apos;un briefing clair et pratique. En fonction des besoins et du budget, nous
                        vous proposons 2 à 6 logotypes dans un large éventail de styles et d&apos;ambiances. Ainsi,
                        ensemble nous pavenons à un logo durable et authentique.
                    </p>

                </section>

                {/* retrun to origin boutton  */}
                <OnTopBtn brdrColor='border-gray-600' textColor = ' text-black'/>
            </div>
        </div>
    );
}