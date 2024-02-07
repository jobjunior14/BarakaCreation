import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import aBarakaCreationLogoBleu from '../../assets/Icones/aBarakaCreationLogoBleu.png';
import bcconversation2_1 from '../../assets/Icones/bcconversation2_1.png';
export default function NavBar ()
{

    const [toggleBtn, setToggleBtn] = useState(false);
    
    // window.onscroll = () => {
        
    //     console.log(document.documentElement.scrollTop);
    //     if ( document.documentElement.scrollTop > 1600) document.documentElement.scrollTop = 0;
    // }

    function toggle () {
        if (window.innerWidth <= 1024)  setToggleBtn(prev => prev === true ? false : true );
    }

    const activeLink = `duration-300 transition easy-in-out delay-400 text-gray-700 my-9 text-xs lg:my-0 block lg:flex hover:text-teal-400 font-bold underline `;

    const inactiveLink = 'duration-300 transition easy-in-out delay-400 text-gray-700 my-9 text-xs lg:my-0 hover:underline block font-medium';
    return (
        <nav className={`justify-between  sticky w-full py-2 lg:px-28 md:px-20 sm:px-10 px-7 z-50 bg-white shadow-lg flex items-center -top-0 duration-300 transition easy-in-out delay-400`}>
            
            <div className=''>
                <NavLink 
                    to = {`/`}> <img className='h-6' src = {aBarakaCreationLogoBleu} alt='BarakaCreation Logo' /></NavLink>
            </div>
            
            <div className={`lg:flex text-left lg:pl-9  ${toggleBtn ? 'translate-x-[0%]' : '-translate-x-[100%]'} lg:transform-none  delay-200 ease-in-out   lg:text-center pl-[9%] lg:pt-0 lg:pb-0 lg:top-0 lg:-left-[40px] pt-5 pb-[100%] top-[40px] -left-0 absolute w-[70%] lg:relative bg-gray-200 lg:bg-white duration-300 transition easy-in-out delay-400 `}>
                
                <div className='block lg:flex lg:items-center justify-between gap-10'>
                    <NavLink 
                        onClick={toggle}
                        className={ ({isActive}) => isActive ? activeLink : inactiveLink}
                        to = {`/`}> Acceuil </NavLink>
                    <NavLink 
                        onClick={toggle}
                        className={ ({isActive}) => isActive ? activeLink : inactiveLink}
                        to = {`/aPropos`}>  A&nbsp;propos </NavLink>
                    <NavLink 
                        onClick={toggle}
                        className={ ({isActive}) => isActive ? activeLink : inactiveLink}
                        to = {`/services`}> Services </NavLink>
                    <NavLink 
                        onClick={toggle}
                        className={ ({isActive}) => isActive ? activeLink : inactiveLink}
                        to = {`/portfolio`}> Portfolio </NavLink>
                    <NavLink 
                        onClick={toggle}
                        className={ ({isActive}) => isActive ? activeLink : inactiveLink}
                        to = {`/publication`}> Publications </NavLink>
                    <NavLink 
                        onClick={toggle}
                        className={ ({isActive}) => isActive ? activeLink : inactiveLink}
                        to = {`/rapportJournalier`}> Contacts </NavLink>
                </div>

                <div className='  px-1 py-2 ml-[30%] hidden lg:flex justify-center items-center rounded-lg  '>
                    <img className='h-4 absolute' src={bcconversation2_1} alt='messagerie' />
                </div>
            </div>

            {/* when it's become to phone  */}
            <div className='flex lg:hidden justify-center items-center'>
                
                    <i onClick={toggle} className="  scale-150 hover:bg-gray-100  rounded-xl px-2 duration-300 transition easy-in-out delay-400 hover:cursor-pointer "> 

                       { 
                            toggleBtn ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className= 'text-black w-5 h-5 '>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                    </i>
            </div>
        </nav>
    );
}