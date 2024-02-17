import { Link } from 'react-router-dom';
import Id_Vieuellelogo from '../../../assets/Services/Id visuelle/Id_Vieuellelogo.png';
import Logo_accueil from '../../../assets/Services/Id visuelle/Logo_accueil.png';
import Accueil_Logofolio from '../../../assets/Portofolio/Logofolio/Accueil_Logofolio.jpg';
import SecondeNav, {OnTopBtn} from './comp/util';

export default function Logotype () {

    return (
        <div className='w-full bg-bgIdVisuel'>
            
            <SecondeNav 
                link={'/services/idVisuelle'} 
                bgColor={'bg-bgIdVisuel'} 
                titleColor='text-gray-600'
                title={'Identité visuelle'}
                brdrColor='border-gray-600' textColor = ' text-black'
            />
            
            <div className=' sm:px-[80px] md:px-[100px] lg:px-[120px]'>
                
                {/* welcom image  */}
                <section className='w-full flex items-center justify-center px-[14%] sm:px-[10%] md:px-[7%] pt-[1.875rem] sm:pt-[20px] lg:pt-[1.875rem] pb-[25%] sm:pb-[15%] md:pb-[10%] relative'>
                
                    <img src={Id_Vieuellelogo} alt=" Id_Vieuellelogo" className='sm:hidden'/>
                    <img src={Logo_accueil} alt=" Logo_accueil" className='hidden sm:block'/>
                    

                    <div className='absolute flex sm:flex-row justify-center items-center flex-col gap-2 sm:gap-x-[5%] bottom-5 w-full'>
                        <Link to='../' className=" duration-200  text-gray-100 text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] px-1 pb-[1.5px] rounded-full bg-blue-500 hover:text-blue-500 hover:bg-bgIdVisuel border-blue-500 border">Interessé</Link>
                        
                        <Link to={'../'} className=" text-blue-500 text-[0.75rem] sm:text-[0.875rem] md:text-[1rem] flex "> Notre Logofolio <span className="flex items-center justify-center "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-14 7.5 7.5-7.5 7.5" /></svg></span></Link>

                    </div>
                </section>

                {/* welcom text  */}
                <section className='text-left px-[10%] flex flex-col gap-3 pb-[8%]'>
                    <h1 className='text-2xl text-gray-700 font-bold w-[60%]'> Unique,attrayant <span className='text-gray-500'>et</span> mémorable </h1>
                    
                    <p className='text-[0.875rem] font-bold text-gray-700'>Le cœur de votre identité visuelle est votre logo. Il est la première impression que les gens ont de votre entrepise . Nous sommes spécialisée dans la conception de logos.</p>

                    <p className='text-[0.875rem] font-bold text-gray-500'>Nous vous accompagnons tout au long du processus, du biefing à la création de votre logo officiel.</p>
                </section>
                
                {/* Logofolio image  */}
                <section className='w-full h-[57vh] bg-cover bg-fixed bg-no-repeat bg-right' style={{backgroundImage: `url(${Accueil_Logofolio})`}} >

                </section>

                {/* aspect du logo  */}
                <section className='flex flex-col gap-5 w-full px-[10%] text-left py-[8%] '>

                    <div className='w-full flex flex-col gap-2' >
                        <h1 className='text-2xl text-gray-700 font-bold ' >Aspect <span className='text-gray-500'>du logo</span></h1>
                    </div>

                    <div className='flex flex-col gap-5 w-full md:flex-row md:gap-7'>

                        <div className='w-full flex flex-col gap-2' >
                            <div className='w-full h-[1px] bg-gray-500'></div>
                            <p className='text-[15px] leading-5 text-gray-700 font-bold w-[55%] md:w-[65%]' >Simple,lisible et efficace aux objectifs en communication </p>
                        </div>

                        <div className='w-full flex flex-col gap-2' >
                            <div className='w-full h-[1px] bg-gray-500'></div>
                            <p className='text-[15px] leading-5 text-gray-700 font-bold w-[55%] md:w-[60%]' >Déclinable sur tous supports de communication </p>
                        </div>

                        <div className='w-full flex flex-col gap-2' >
                            <div className='w-full h-[1px] bg-gray-500'></div>
                            <p className='text-[15px] leading-5 text-gray-700 font-bold w-[55%] md:w-[60%]' >Personnalisé et qui vous distingue de la concurrence</p>
                        </div>
                    </div>
                </section>

                {/* ended text  */}
                <section className='text-left px-[10%] flex flex-col gap-3 pb-[8%]'>

                    <p className='text-[0.875rem] font-bold text-gray-700'>Nous guidons nos clients dans les processus complexe et paticipons activement à l&apos;élaboration d&apos;un biefing clair et pratique.</p>

                    <p className='text-[0.875rem] font-bold text-gray-500'>En fonction des besoins et du budget, nous vous proposons 2 à 6 logotypes dans un large éventail de styles et d&apos;ambiances. Ainsi, ensemble nous pavenons à un logo durable et authentique.</p>

                </section>

                {/* retrun to origin boutton  */}
                <OnTopBtn brdrColor='border-gray-600' textColor = ' text-black'/>
            </div>
        </div>
    );
}