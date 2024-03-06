import { Link } from 'react-router-dom';
import logo_pictogrammFichier_1 from '../assets/Icones/logo_pictogrammFichier_1.png';
import bcBehance from '../assets/Icones/bcBehance.png';
import bcFb from '../assets/Icones/bcFb.png';
import bctwitter_2 from '../assets/Icones/bctwitter_2.png';
import bcInsta from '../assets/Icones/bcInsta.png';
import bclinkedin from '../assets/Icones/bclinkedin.png';
import { useMatch } from 'react-router-dom';
export function Footer ()
{

    const hideNave10 = useMatch('/publication/mamour');
    const hideNave11 = useMatch('/publication/chute');
    const hideNave12 = useMatch('/publication/defi');
    const hideNave13 = useMatch('/publication/haut');

    const myHidding = hideNave10 || hideNave11 || hideNave12 || hideNave13 

    return (
        <footer className={`w-full bg-gray-50 ${myHidding ? 'hidden' : 'flex'} flex-col sm:flex-row sm:gap-10 justify-center  items-center sm:justify-between  py-8 px-[5%] lg:px-[10%]`}>
            
            {/* baraka creation logo and texts */}
            <div className='flex justify-center  '>

                <div className='sm:block flex items-center gap-x-5 w-[90%]'>
                    <img loading='lazy' className='h-20 mb-1' src={logo_pictogrammFichier_1} alt="pictogram" />
                    <div className='text-left'>
                        <p className='text-[0.6rem] text-semibold text-gray-800'>Kinshasa, RDC <br className='sm:hidden'/> Baraka creation, votre partenaire <br/> idéal en communication visuelle<br/> <b>Ensemble innovons </b></p>
                    </div>
                </div>
            </div>

            <div className='mt-5 justify-between w-[70%] '>
                
                <div className='flex flex-col sm:flex-row justify-center  items-center w-full sm:justify-between'>
                    {/* menu */}
                    <div>
                        <div>
                            <h4 className='text-left text-xs sm:text-base font-bold text-gray-700 mb-1'>Menu</h4>
                            <div className=' h-[3px] w-[32px] sm:w-[43px] rounded-full bg-gray-600'></div>
                        </div>

                        <div className='flex gap-x-4 text-left mt-2'>
                            <div className='flex flex-col gap-y-1'>
                                <Link to={'/'} className='text-[0.7rem] sm:text-[0.8rem] text-gray-800 text-semibold hover:underline'>Accueil</Link>
                                <Link to={'/aPropos'} className='text-[0.7rem] sm:text-[0.8rem] text-gray-800 text-semibold hover:underline'>A propos</Link>
                                <Link to={'/services'} className='text-[0.7rem] sm:text-[0.8rem] text-gray-800 text-semibold hover:underline'>Services</Link>
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <Link to={'/portfolio'} className='text-[0.7rem] sm:text-[0.8rem] text-gray-800 text-semibold hover:underline'>Portfolio</Link>
                                <Link to={'/publication'} className='text-[0.7rem] sm:text-[0.8rem] text-gray-800 text-semibold hover:underline'>Publications</Link>
                                <Link to={'/contacts'} className='text-[0.7rem] sm:text-[0.8rem] text-gray-800 text-semibold hover:underline'>Contactez-nous</Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* link  */}
                    <div className='flex gap-x-[7px] sm:mt-14 mt-3'>
                        <Link to='https://www.linkedin.com/in/baraka-creation-a0a69321b/'> <img loading='lazy' className=' h-5 hover:scale-125 duration-200' src={bclinkedin} alt="Linkdin" /> </Link>
                        <Link to='https://www.instagram.com/barakacreation/'> <img loading='lazy' className=' h-5 hover:scale-125 duration-200' src={bcInsta} alt="Insta" /> </Link>
                        <Link to='https://web.facebook.com/barakalurhakwa'> <img loading='lazy' className=' h-5 hover:scale-125 duration-200' src={bcFb} alt="fb" /> </Link>
                        <Link to='https://twitter.com/BarakaLurhakwa'> <img loading='lazy' className=' h-5 hover:scale-125 duration-200' src={bctwitter_2} alt="Twitter" /> </Link>
                        <Link to='https://www.behance.net/barakacreation'> <img loading='lazy' className=' h-5 hover:scale-125 duration-200' src={bcBehance} alt="Twitter" /> </Link>
                    </div>
                </div>
                
                <div className='h-[2px] w-full rounded-full bg-gray-600 mt-2'>

                </div>
                <p className='text-black text-[10px] sm:text-left text-center mt-2'>© Copyright 2023 Baraka creation  All Rights Reserved</p>
            </div>
        </footer>
    );
}