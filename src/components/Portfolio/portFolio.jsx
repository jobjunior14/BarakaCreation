import portfolio_accueil_phone from '../../assets/Portofolio/portfolio_accueil_phone.jpg';
import Save_children_dreams_illustration_4okey from '../../assets/Portofolio/Save_children_dreams_illustration_4okey.jpg';
import logofolio_collectionC from '../../assets/Portofolio/logofolio_collectionC.jpg';
import docs_mocks_mC from '../../assets/Portofolio/docs_mocks_mC.jpg';
import portfolio_accueilC from '../../assets/Portofolio/portfolio_accueilC.jpg';
import animation_service_2C from '../../assets/Services/Animation/animation_service_2C.jpg';
import useWindowWidth from '../windowWidth';
import { Link } from 'react-router-dom';
export default function Portfolio() {

    // const [bgAttachment, setBgAttachment] = useState('bg-fixed');

    // window.onscroll = () => {
    //     if  (document.documentElement.scrollTop > 400) {
    //         setBgAttachment('bg-cover')
    //     } else {
    //         setBgAttachment('bg-fixed')
    //     }

    //     console.log (bgAttachment, document.documentElement.scrollTop)
    // }
    const width = useWindowWidth();
    return (
        <div>

            <section className='flex flex-col justify-center bg-black pb-5'>

                <section className='w-full '>
                    <img src={width <= 640 ? portfolio_accueil_phone : portfolio_accueilC} alt='image acceuil'/>
                </section>

                <section className=' grid grid-cols-1 sm:grid-cols-2 gap-3 px-2 sm:px-[10%]'>
                    
                    {/* Gallerie  */}
                    <section className={`w-full relative h-[32.5rem] sm:h-auto rounded-lg bg-cover sm:bg-none bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center`} style={{backgroundImage: `url(${Save_children_dreams_illustration_4okey})`}}>
                        <Link to={'/portfolio/galleryArt'}>
                            <div className='h-full w-full duration-200 delay-150 relative'>
                                <img src={Save_children_dreams_illustration_4okey} alt='image' className='sm:flex hidden rounded-lg hover:scale-105 duration-150 hover:-translate-x-5 hover:-translate-y-2'/>

                            </div>
                        </Link>

                        
                        <div className='absolute flex flex-col items-center justify-center top-4  gap-2'>
                            <h1 className=' text-3xl font-semibold text-gray-100'>Gallerie <br/>d&apos;art</h1>
                            <Link to={'/portfolio/galleryArt'} className=' rounded-3xl bg-blue-600 text-xs py-px px-3 text-white hover:bg-myBlue text-center'>Voir</Link>
                        </div>
                    </section>
                    
                    {/* logofolio  */}
                    <section className='w-full relative h-[32.5rem] sm:h-auto bg-blue-400 rounded-lg bg-cover sm:bg-none bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center' style={{backgroundImage: `url(${logofolio_collectionC})`}}>
                        
                        <Link to={'/portfolio/logofolio'}>
                            <div className='h-full w-full duration-200 delay-150 relative'>        
                                <img src={logofolio_collectionC} alt='image' className='sm:flex hidden rounded-lg hover:scale-105 duration-150 hover:-translate-x-5 hover:-translate-y-2'/>

                            </div>
                        </Link>

                        <div className='absolute flex flex-col items-center justify-center top-4  gap-2'>
                            <h1 className=' text-3xl font-semibold text-gray-800'>Logofolio</h1>
                            <Link to={'/portfolio/logofolio'} className=' rounded-3xl bg-blue-600 text-xs py-px px-3 text-white hover:bg-myBlue text-center'>Voir</Link>
                        </div>
                    </section>

                    {/* design graphique  */}
                    <section className='w-full relative h-[32.5rem] sm:h-auto bg-blue-400 rounded-lg bg-cover sm:bg-none bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center' style={{backgroundImage: `url(${docs_mocks_mC})`}}>

                        <div className='h-full w-full duration-200 delay-150 relative'>        
                            <img src={docs_mocks_mC} alt='image' className='sm:flex hidden rounded-lg hover:scale-105 duration-150 hover:-translate-x-5 hover:-translate-y-2'/>
        
                        </div>

                        <div className='absolute flex flex-col items-center justify-center top-4  gap-2'>
                            <h1 className=' text-3xl font-semibold text-gray-100'>Design <br/>graphique</h1>
                            <button className=' rounded-3xl bg-blue-600 text-xs py-px px-3 text-white hover:bg-myBlue text-center'>Voir</button>
                        </div>
                    </section>

                    {/* motion design  */}
                    <section className='w-full relative h-[32.5rem] sm:h-auto bg-blue-400 rounded-lg bg-cover sm:bg-none bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center' style={{backgroundImage: `url(${animation_service_2C})`}}>

                        <div className='h-full w-full duration-200 delay-150 relative'>        
                            <img src={animation_service_2C} alt='image' className='sm:flex hidden rounded-lg hover:scale-105 hover:-translate-x-5 hover:-translate-y-2 duration-150'/>

                        </div>

                        <div className='absolute flex flex-col items-center justify-center top-4  gap-2'>
                            <h1 className=' text-3xl font-semibold text-gray-100 sm:hidden'>Motion <br/>design</h1>
                            <h1 className=' text-3xl font-semibold text-gray-100 hidden sm:block'>Motion design</h1>
                            <button className=' rounded-3xl bg-blue-600 text-xs py-px px-3 text-white hover:bg-myBlue text-center'>Voir</button>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    );
}