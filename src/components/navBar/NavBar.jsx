import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import aBarakaCreationLogoBleu from '../../assets/Icones/aBarakaCreationLogoBleu.png';
import abarakacreationLogophonebleu from '../../assets/Icones/abarakacreationLogophonebleu.png';
import bcconversation2_1 from '../../assets/Icones/bcconversation2_1.png';
import { useMatch } from 'react-router-dom';
export default function NavBar ()
{

    const hideNave1 = useMatch('/services/idVisuelle/logotype');
    const hideNave2 = useMatch('/services/idVisuelle/charteGraphique');
    const hideNave3 = useMatch('/services/idVisuelle/supportPrint');
    const hideNave4 = useMatch('/services/graphiqueDesign/campagnDeComm');
    const hideNave5 = useMatch('/services/graphiqueDesign/event');
    const hideNave6 = useMatch('/services/graphiqueDesign/presentation');
    const hideNave7 = useMatch('/services/graphiqueDesign/miseEnPage');
    const hideNave8 = useMatch('/services/graphiqueDesign/webDesign');
    const hideNave9 = useMatch('/portfolio/motionDesign');
    const hideNave10 = useMatch('/publication/mamour');
    const hideNave11 = useMatch('/publication/chute');
    const hideNave12 = useMatch('/publication/defi');
    const hideNave13 = useMatch('/publication/haut');
    const changeLogo = useMatch('/');

    const hideNave = hideNave1 || hideNave2 || hideNave3 || hideNave4 || hideNave5 || hideNave6 || hideNave7 || hideNave8 || hideNave9 || hideNave10 || hideNave11 || hideNave12 || hideNave13;

    const [toggleBtn, setToggleBtn] = useState(false);
    const [toggleNav, setToggleNav] = useState({services: false, portfolio: false});
    // window.onscroll = () => {
        
    //     console.log(document.documentElement.scrollTop);
    //     if ( document.documentElement.scrollTop > 1600) document.documentElement.scrollTop = 0;
    // }

    function toggle () {
        if (window.innerWidth <= 1024)  setToggleBtn(prev => {
            setToggleNav({services: false, portfolio: false});

            return prev === true ? false : true
        } );

    }

    function handleSubNav (name) {
        setToggleNav(prev => ({...prev, [name]: prev[name] ? false : true}));
    } 
    
    // hidding nav clicking anywhere else expect it 
    useEffect (() => {

        const myFubction = (e) => {

            const classl = [...e.target.classList];
            
            if (!classl.includes('mainDiv')) {
                if (!toggleBtn) {

                    if (window.innerWidth <= 1024)  setToggleBtn(prev => {
                        setToggleNav({services: false, portfolio: false});
    
                        return false;
                    } );
                }
            }
            
            
        };

        window.addEventListener('click', (e) =>  myFubction(e));

        return () => window.removeEventListener('click', (e) => myFubction(e));

    }, []);


    return (
        <nav className={`justify-between ${  hideNave ? 'hidden' : 'flex'} sticky w-full py-2 px-[6%] lg:px-[10%] z-50 bg-white shadow-lg items-center -top-0 duration-300 transition easy-in-out delay-400`}>
            
            <figure>
                <NavLink 
                    to = {`/`}> <img loading='lazy' className='h-6' src = { changeLogo ? aBarakaCreationLogoBleu : abarakacreationLogophonebleu} alt='BarakaCreation Logo' /></NavLink>
            </figure>
            
            <div className={`pt-[10%] mainDiv flex flex-col lg:flex-row text-left  ${toggleBtn ? 'translate-x-[0%]' : '-translate-x-[100%]'} lg:transform-none  delay-200 ease-in-out lg:text-center pl-[9%] lg:items-center lg:justify-center lg:p-0 lg:top-0 pt-5 pb-[100vh] top-[2.5rem] -left-0  max-lg:absolute w-[70%] bg-gray-200 lg:bg-white duration-300 transition easy-in-out delay-400 `}>
                
                <ul className='flex flex-col lg:flex-row lg:items-center gap-10 justify-evenly mainDiv'>

                    <li>
                        <NavLink 
                            onClick={toggle}
                            className={ ({isActive}) => isActive ? 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs block lg:flex hover:text-teal-400 font-interSemibold underline' : 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs hover:underline block font-interRegular'}
                            to = {`/`}> Accueil </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            onClick={toggle}
                            className={ ({isActive}) => isActive ? 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs block lg:flex hover:text-teal-400 font-interSemibold underline' : 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs hover:underline block font-interRegular'}
                            to = {`/aPropos`}>  A&nbsp;propos </NavLink>
                    </li>
                    
                    <li className='flex justify-start flex-col'>

                        <div className=' flex gap-3'>
                            <NavLink 
                                onClick={toggle}
                                className={ ({isActive}) => isActive ? 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs block lg:flex hover:text-teal-400 font-interSemibold underline' : 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs hover:underline block font-interRegular'}
                                to = {`/services`}> Services 
                            </NavLink>

                            {!toggleNav.services ? <svg onClick={() => handleSubNav('services')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex justify-center items-center mainDiv lg:hidden cursor-pointer"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg> : 
                                <svg onClick={() => handleSubNav('services')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex justify-center items-center mainDiv lg:hidden cursor-pointer">
                                 <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
                                </svg>
                            }
                        </div>

                        <div className={`w-fit lg:hidden overflow-hidden ${toggleNav.services ? 'h-[6.25rem]' : 'h-0'} transition-all `}>
                            <ul className='pl-2 list-none flex flex-col gap-2 pt-3'>
                                <li onClick={toggle} className='text-gray-700 text-xs hover:list-disc font-semibold'> <NavLink className={({isActive}) => !isActive ? ' opacity-45 hover:opacity-100 duration-200' : 'bg-none hover:opacity-45' } to={'/services/idVisuelle'}>Identité Visuelle</NavLink></li>
                                <li onClick={toggle} className='text-gray-700 text-xs hover:list-disc font-semibold'> <NavLink className={({isActive}) => !isActive ? ' opacity-45 hover:opacity-100 duration-200' : 'bg-none hover:opacity-45' } to={'/services/graphiqueDesign'}> Design Graphique</NavLink></li>
                                <li onClick={toggle} className='text-gray-700 text-xs hover:list-disc font-semibold'> <NavLink className={({isActive}) => !isActive ? ' opacity-45 hover:opacity-100 duration-200' : 'bg-none hover:opacity-45' } to={'/services/illustration'}>Illustration</NavLink></li>
                                <li onClick={toggle} className='text-gray-700 text-xs hover:list-disc font-semibold'> <NavLink className={({isActive}) => !isActive ? ' opacity-45 hover:opacity-100 duration-200' : 'bg-none hover:opacity-45' } to={'/services/motionDesign'}>Annimation</NavLink></li>
                                <li onClick={toggle} className='text-gray-700 text-xs hover:list-disc font-semibold'> <NavLink className={({isActive}) => !isActive ? ' opacity-45 hover:opacity-100 duration-200' : 'bg-none hover:opacity-45' } to={'/services/consultance'}>Consulting</NavLink></li>
                            </ul>
                        </div>
                    </li>


                    <li className='flex justify-start flex-col'>

                        <div className=' flex gap-3'>
                            <NavLink 
                                onClick={toggle}
                                className={ ({isActive}) => isActive ? 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs block lg:flex hover:text-teal-400 font-interSemibold underline' : 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs hover:underline block font-interRegular'}
                                to = {`/portfolio`}> Portfolio 
                            </NavLink>

                            {!toggleNav.portfolio ? <svg onClick={() => handleSubNav('portfolio')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex justify-center items-center mainDiv lg:hidden cursor-pointer"><path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg> : 
                                <svg onClick={() => handleSubNav('portfolio')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex justify-center items-center mainDiv lg:hidden cursor-pointer">
                                 <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
                                </svg>
                            }
                        </div>

                        <div className={`w-fit lg:hidden overflow-hidden ${toggleNav.portfolio ? 'h-[6.25rem]' : 'h-0'} transition-all `}>
                            <ul className='pl-2 list-none flex flex-col gap-2 pt-3'>
                                <li onClick={toggle} className='text-gray-700 text-xs hover:list-disc font-semibold'> <NavLink className={({isActive}) => !isActive ? ' opacity-45 hover:opacity-100 duration-200' : 'bg-none hover:opacity-45' } to={'/portfolio/galleryArt'}> Gallerie d&apos;art</NavLink></li>
                                <li onClick={toggle} className='text-gray-700 text-xs hover:list-disc font-semibold'> <NavLink className={({isActive}) => !isActive ? ' opacity-45 hover:opacity-100 duration-200' : 'bg-none hover:opacity-45' } to={'/portfolio/logofolio'}>Logofolio</NavLink></li>
                                <li onClick={toggle} className='text-gray-700 text-xs hover:list-disc font-semibold'> <NavLink className={({isActive}) => !isActive ? ' opacity-45 hover:opacity-100 duration-200' : 'bg-none hover:opacity-45' } to={'/portfolio/graphicDesign'}>Design graphique</NavLink></li>
                                <li onClick={toggle} className='text-gray-700 text-xs hover:list-disc font-semibold'> <NavLink className={({isActive}) => !isActive ? ' opacity-45 hover:opacity-100 duration-200' : 'bg-none hover:opacity-45' } to={'portfolio/motionDesign'}>Motion design</NavLink></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <NavLink 
                            onClick={toggle}
                            className={ ({isActive}) => isActive ? 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs block lg:flex hover:text-teal-400 font-interSemibold underline' : 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs hover:underline block font-interRegular'}
                            to = {`/publication`}> Publications </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            onClick={toggle}
                            className={ ({isActive}) => isActive ? 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs block lg:flex hover:text-teal-400 font-interSemibold underline' : 'duration-300 transition easy-in-out delay-400 text-gray-700 text-xs hover:underline block font-interRegular'}
                            to = {`/contacts`}> Contacts </NavLink>
                    </li>
                </ul>

            </div>

            <div className='  px-1 py-2 hidden lg:flex justify-center items-center'>
                <img loading='lazy' className='h-5' src={bcconversation2_1} alt='messagerie' />
            </div>

            {/* when it's become to phone  */}
            <div onClick={toggle} className='flex lg:hidden justify-center items-center'>
                
                    <i  className=" scale-150 hover:bg-gray-100  rounded-xl px-2 duration-300 transition easy-in-out delay-400 hover:cursor-pointer "> 

                       { 
                            toggleBtn ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mainDiv">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className= 'text-black w-5 h-5 mainDiv '>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                    </i>
            </div>
        </nav>
    );
}