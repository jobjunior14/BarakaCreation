import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { SocialIcon } from 'react-social-icons';

export function Footer ()
{
    const sr = ScrollReveal({
        origin: 'top',
           
    });
    sr.reveal('.top-footer',{delay: 300});
    sr.reveal('.footer-menu', {delay: 300});
    sr.reveal ('.footer-social-icons', {delay: 200});

    return (
        <footer className='w-full justify-center items-center flex flex-col' >
            <div className="text-2xl font-semibold">
                <p>Moïse Kafeka</p>
            </div>

            <div className="">
                <ul className="flex my-5 sm:gap-x-6 gap-x-3">
                    <li className="p-1 ">
                        <Link className='text-teal-500' to = '/'>Acceuil</Link>
                        
                    </li>
                    <li className="p-1 ">
                        <Link className='text-teal-500' to = '/projets'> Projets </Link>
                    </li>
                    <li className="p-1 ">
                        <Link className='text-teal-500' to = '/apropos'> A&nbsp;propos</Link>
                    </li>
                    <li className="p-1 ">
                        <Link className='text-teal-500' to = '/contacts'> Contacts</Link>
                    </li>
                </ul>
            </div>
            <div className="flex sm:gap-x-5 gap-x-5 mb-5">
                <div > <SocialIcon 
                    target="_blank" 
                    className="shadow-gray-600 shadow-md rounded-full" 
                    bgColor='black' 
                    fgColor='white' 
                    url="https://twitter.com" />
                </div>

                <div  > <SocialIcon 
                    target="_blank" 
                    className="shadow-gray-600 shadow-md rounded-full" 
                    bgColor='black' 
                    fgColor='white' 
                    url="https://facebook.com" />
                </div>

                <div  > <SocialIcon 
                    target="_blank" 
                    className="shadow-gray-600 shadow-md rounded-full" 
                    bgColor='black' 
                    fgColor='white' 
                    url="https://instagram.com" />
                </div>
                        
            </div>
            <div className="bottom-footer">
                <p>Copyright &copy; <a href="#home" style={{textDecoration: 'none'}}>Job Junior</a> - All rights reserved
                </p>
            </div>
        </footer>
    )
}