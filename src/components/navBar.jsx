import { NavLink, useMatch } from 'react-router-dom';
import { useState } from 'react';

export function NavBar ()
{
    const [theme, setTheme] = useState ('dark');
    
    const decorativeActiveLink = {
        home: useMatch('/'),
        projets: useMatch('/projets'),
        projetsSubLink: useMatch('/projets/oeuvresUnique'),
        contacts: useMatch('/contacts'),
        apropos: useMatch('/apropos'),
    }
    // window.onscroll = () =>
    // {
    //     if (document.body.scrollTop > 5 || document.documentElement.scrollTop >  5)
    //     {
    //         setstyeShadwonNav ({
    //             boxShadow : "0 1px 6px rgba(0, 0, 0, 0.1)",
    //             height : "70px",
    //             lineHeight : "70px",
    //         });
    //     } else{
    //         setstyeShadwonNav (
    //             {
    //                 boxShadow : "none",
    //                 height : "70px",
    //                 lineHeight : "90px"
    //             }
    //         )
    //     }
    // };
    
    function toggleTheme () {


        if (theme === 'dark') {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        } else {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }

    const [toggleBtn, setToggleBtn] = useState('hidden');

    function toggle () {
        if (window.innerWidth <= 1024) setToggleBtn(prev => prev === 'hidden' ? 'flex-col' : 'hidden');
    }

    const activeLink = `duration-300 my-9 lg:my-0  hover:text-indigo-300 block lg:flex font-bold dark:text-teal-400 text-teal-600 lg:mx-10`;
    return (
        <nav className={`justify-between  fixed w-full py-4 px-9 z-50 dark:bg-slate-950 bg-white rounded-xl shadow-lg flex items-center -top-1 duration-300`}>

            <div className='relative flex justify-center items-center mr-40'>
                <div className=' w-2 h-2 bg-white rounded-full absolute -right-3 bottom-2 '></div>
                <NavLink 
                    className= { `dark:text-gray-200 text-gray-800 font-bold duration-200 text-2xl ml-5`}
                    to = {`/`}> MK&nbsp;Art</NavLink>
            </div>

            <div className={`lg:flex lg:pl-9 duration-300 mr-40 justify-center items-center ${toggleBtn} ${toggleBtn === 'flex-col' ? ' fixed top-16 left-0 w-full h-full p-10 backdrop-blur-lg  items-center justify-center' : "" }`}>

                <div className='block lg:flex items-center lg:mr-96 justify-between'>
                    <div className='relative flex justify-center'>
                        { decorativeActiveLink.home && <div className='h-1 w-1 bg-white absolute rounded-full top-16 lg:top-7 scale-x-150 duration-500 px-1 delay-500  '></div>}
                        <NavLink 
                            onClick={toggle}
                            className={ ({isActive}) => isActive ? activeLink : `duration-300 dark:text-gray-100 text-gray-700 my-9 lg:my-0 block lg:flex hover:text-indigo-300 font-bold  lg:mx-10`}
                            to = {`/`}> Acceuil </NavLink>
                    </div>

                    <div className='relative flex justify-center'>

                        { (decorativeActiveLink.projets || decorativeActiveLink.projetsSubLink) && <div className='h-1 w-1 bg-white absolute rounded-full top-16 lg:top-7 scale-x-150 duration-500 px-1 delay-500'></div>}
                        <NavLink 
                            onClick={toggle}
                            className={ ({isActive}) => isActive ? activeLink : `duration-300 dark:text-gray-100 text-gray-700 my-9 lg:my-0 hover:text-indigo-300 block lg:flex font-bold lg:mx-10`}
                            to = {`/projets`}> Projets </NavLink>
                    </div>

                    <div className='relative flex justify-center'>

                        { decorativeActiveLink.contacts && <div className='h-1 w-1 bg-white absolute rounded-full top-16 lg:top-7 scale-x-150 duration-500 px-1 delay-500'></div>}
                        <NavLink 
                            onClick={toggle}
                            className={ ({isActive}) => isActive ? activeLink : `duration-300 dark:text-gray-100 text-gray-700 my-9 lg:my-0 hover:text-indigo-300 block lg:flex font-bold lg:mx-10`}
                            to = {`/contacts`}> Contacts </NavLink>
                    </div>

                    <div className='relative flex justify-center'>
                        { decorativeActiveLink.apropos && <div className='h-1 w-1 bg-white absolute rounded-full top-16 lg:top-7 scale-x-150 duration-500 px-1 delay-500'></div>}
                        <NavLink 
                            onClick={toggle}
                            className={ ({isActive}) => isActive ? activeLink : `duration-300 dark:text-gray-100 text-gray-700 my-9 lg:my-0 hover:text-indigo-300 block lg:flex font-bold lg:mx-10`}
                            to = {`/apropos`}> A&nbsp;Propos </NavLink>
                    </div>
                </div>
            </div>

            <div className='flex lg:hidden justify-center items-center'>
                    <i onClick={toggle} className="  scale-150 hover:bg-gray-100 rounded-xl px-2 duration-300 hover:cursor-pointer "> 
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${theme === 'dark' ? 'text-white' : 'text-black' } w-5 h-5`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    </i>
            </div>
        </nav>
    );
}