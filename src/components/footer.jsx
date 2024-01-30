import { Link } from 'react-router-dom';
import logo_pictogrammFichier_1 from '../assets/Icones/logo_pictogrammFichier_1.png';
import bcBehance from '../assets/Icones/bcBehance.png';
import bcFb from '../assets/Icones/bcFb.png';
import bctwitter_2 from '../assets/Icones/bctwitter_2.png';
import bcInsta from '../assets/Icones/bcInsta.png';
import bclinkedin from '../assets/Icones/bclinkedin.png';

export function Footer ()
{
    return (
        <footer className='w-full bg-gray-50 flex flex-col sm:flex-row justify-center  items-center sm:justify-normal  py-8 sm:px-20 px-10'>
            
            {/* baraka creation logo and texts */}
            <div className='sm:w-[30%] sm:block flex items-center gap-x-5 w-[40%%]'>
                <img className='h-20 mb-1' src={logo_pictogrammFichier_1} alt="pictogram" />
                <div className='text-left'>
                    <p className='text-[8px] text-semibold text-gray-800'>Kinshasa, RDC <br/> Baraka creation, votre partenaire <br/> idéal en communication visuelle<br/> <b>Ensemble innovons </b></p>
                </div>
            </div>

            <div className='mt-5 justify-between w-[70%] '>
                
                <div className='flex flex-col sm:flex-row justify-center  items-center w-full sm:justify-between'>
                    {/* menu */}
                    <div>
                        <div>
                            <h4 className='text-left text-xs font-bold text-gray-700 mb-1'>Menu</h4>
                            <div className=' h-[3px] w-[32px] rounded-full bg-gray-600'></div>
                        </div>

                        <div className='flex gap-x-4 text-left mt-2'>
                            <div className='flex flex-col gap-y-px'>
                                <Link to={'/'} className='text-[9px] text-gray-800 text-semibold hover:underline'>Accueil</Link>
                                <Link to={'/'} className='text-[9px] text-gray-800 text-semibold hover:underline'>A propos</Link>
                                <Link to={'/'} className='text-[9px] text-gray-800 text-semibold hover:underline'>Services</Link>
                            </div>

                            <div className='flex flex-col gap-y-px'>
                                <Link to={'/'} className='text-[9px] text-gray-800 text-semibold hover:underline'>Portfolio</Link>
                                <Link to={'/'} className='text-[9px] text-gray-800 text-semibold hover:underline'>Publications</Link>
                                <Link to={'/'} className='text-[9px] text-gray-800 text-semibold hover:underline'>Contactez-nous</Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* link  */}
                    <div className='flex gap-x-[7px] sm:mt-14 mt-3'>
                        <Link to='https://google.com'> <img className='h-4 hover:scale-125 duration-200' src={bclinkedin} alt="Linkdin" /> </Link>
                        <Link to='https://google.com'> <img className='h-4 hover:scale-125 duration-200' src={bcInsta} alt="Insta" /> </Link>
                        <Link to='https://google.com'> <img className='h-4 hover:scale-125 duration-200' src={bcFb} alt="fb" /> </Link>
                        <Link to='https://google.com'> <img className='h-4 hover:scale-125 duration-200' src={bctwitter_2} alt="Twitter" /> </Link>
                        <Link to='https://google.com'> <img className='h-4 hover:scale-125 duration-200' src={bcBehance} alt="Twitter" /> </Link>
                    </div>
                </div>
                
                <div className='h-[2px] w-full rounded-full bg-gray-600 mt-2'>

                </div>
                <p className='text-black text-[7px] sm:text-left text-center mt-2'>© Copyright 2023 Baraka creation  All Rights Reserved</p>
            </div>
        </footer>
    );
}