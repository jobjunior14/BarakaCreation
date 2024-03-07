import portfolio_accueil_phone from '../../assets/Portofolio/portfolio_accueil_phone.jpg';
import Save_children_dreams_illustration_4okey from '../../assets/Portofolio/Save_children_dreams_illustration_4okey.jpg';
import logofolio_collectionC from '../../assets/Portofolio/logofolio_collectionC.jpg';
import docs_mocks_mC from '../../assets/Portofolio/docs_mocks_mC.jpg';
import portfolio_accueilC from '../../assets/Portofolio/portfolio_accueilC.jpg';
import animation_service_2C from '../../assets/Services/Animation/animation_service_2C.jpg';
import useWindowWidth from '../windowWidth';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
export default function Portfolio() {

    // scroll to top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const width = useWindowWidth();
    return (
        <div>

            <section className='flex flex-col justify-center bg-black pb-5'>

                <section className='w-full '>
                    <img loading='lazy' src={width <= 640 ? portfolio_accueil_phone : portfolio_accueilC} alt='image acceuil'/>
                </section>

                <section className=' grid grid-cols-1 sm:grid-cols-2 gap-3 px-2 sm:px-[10%]'>
                    
                    {/* Gallerie  */}
                    <section className={`w-full relative h-[32.5rem] sm:h-auto rounded-lg bg-cover sm:bg-none bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center`} style={{backgroundImage: `url(${Save_children_dreams_illustration_4okey})`}}>
                        <Link to={'/portfolio/galleryArt'}>
                            <div className='h-full w-full duration-200 delay-150 relative'>
                                <img loading='lazy' src={Save_children_dreams_illustration_4okey} alt='image' className='sm:flex hidden rounded-lg duration-150  hover:-translate-y-2'/>

                            </div>
                        </Link>

                        
                        <div className='absolute flex flex-col items-center justify-center top-0 pt-4  gap-2 sm:bg-none bg-gradient-to-b rounded-t-lg from-white w-full'>
                            <h1 className=' text-3xl sm:text-xl md:text-2xl  font-interBold text-gray-800 sm:text-gray-100'>Gallerie <br/>d&apos;art</h1>
                            <Link to={'/portfolio/galleryArt'} className='bg-blue-500 px-4 py-[0.23rem]  text-white text-xs rounded-full sm:text-[1rem] hover:bg-myBlue duration-200 ' > Voir </Link>
                        </div>
                    </section>
                    
                    {/* logofolio  */}
                    <section className='w-full relative h-[32.5rem] sm:h-auto bg-blue-400 rounded-lg bg-cover sm:bg-none bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center' style={{backgroundImage: `url(${logofolio_collectionC})`}}>
                        
                        <Link to={'/portfolio/logofolio'}>
                            <div className='h-full w-full duration-200 delay-150 relative'>        
                                <img loading='lazy' src={logofolio_collectionC} alt='image' className='sm:flex hidden rounded-lg duration-150  hover:-translate-y-2'/>

                            </div>
                        </Link>

                        <div className='absolute flex flex-col items-center justify-center top-0 pt-4  gap-2 sm:bg-none bg-gradient-to-b rounded-t-lg from-gray-100 w-full'>
                            <h1 className=' text-3xl sm:text-xl md:text-2xl  font-interBold text-gray-800'>Logofolio</h1>
                            <Link to={'/portfolio/logofolio'} className='bg-blue-500 px-4 py-[0.23rem]  text-white text-xs rounded-full sm:text-[1rem] hover:bg-myBlue duration-200 ' > Voir </Link>
                        </div>
                    </section>

                    {/* design graphique  */}
                    <section className='w-full relative h-[32.5rem] sm:h-auto bg-blue-400 rounded-lg bg-cover sm:bg-none bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center' style={{backgroundImage: `url(${docs_mocks_mC})`}}>
                        
                        <Link to={'/portfolio/graphicDesign'}>
                            <div className='h-full w-full duration-200 delay-150 relative'>        
                                <img loading='lazy' src={docs_mocks_mC} alt='image' className='sm:flex hidden rounded-lg duration-150  hover:-translate-y-2'/>
            
                            </div>
                        </Link>

                        <div className='absolute flex flex-col items-center justify-center top-0 pt-4  gap-2 sm:bg-none bg-gradient-to-b rounded-t-lg from-black w-full'>
                            <h1 className=' text-3xl sm:text-xl md:text-2xl  font-interBold text-gray-100'>Design <br/>graphique</h1>
                            <Link to={'/portfolio/graphicDesign'} className='bg-blue-500 px-4 py-[0.23rem]  text-white text-xs rounded-full sm:text-[1rem] hover:bg-myBlue duration-200 ' > Voir </Link>
                        </div>
                    </section>

                    {/* motion design  */}
                    <section className='w-full relative h-[32.5rem] sm:h-auto bg-blue-400 rounded-lg bg-cover sm:bg-none bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center' style={{backgroundImage: `url(${animation_service_2C})`}}>

                        <Link to={'/portfolio/motionDesign'}>
                            <div className='h-full w-full duration-200 delay-150 relative'>        
                                <img loading='lazy' src={animation_service_2C} alt='image' className='sm:flex hidden rounded-lg  hover:-translate-y-2 duration-150'/>

                            </div>
                        </Link>

                        <div className='absolute flex flex-col items-center justify-center top-0 pt-4  gap-2 sm:bg-none bg-gradient-to-b rounded-t-lg from-black w-full'>
                            <h1 className=' text-3xl sm:text-xl md:text-2xl  font-interBold text-gray-100 '>Motion <br className='sm:flex hidden'/>design</h1>
                            <Link to={'/portfolio/motionDesign'} className='bg-blue-500 px-4 py-[0.23rem]  text-white text-xs rounded-full sm:text-[1rem] hover:bg-myBlue duration-200 ' > Voir </Link>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    );
}