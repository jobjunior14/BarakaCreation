import CICR_0 from '../../assets/Portofolio/GallerieArt/CICR_0.jpg';
import Le_retour_0 from '../../assets/Portofolio/GallerieArt/Le_retour_0.jpg';
import Ambouteillage_0 from '../../assets/Portofolio/GallerieArt/Ambouteillage_0.jpg';
import Envol_end_0 from '../../assets/Portofolio/GallerieArt/Envol_end_0.jpg';
import Mama_hero_0 from '../../assets/Portofolio/GallerieArt/Mama_hero_0.jpg';
import Apatridie_0 from '../../assets/Portofolio/GallerieArt/Apatridie_0.jpg';
import bye_2022_0 from '../../assets/Portofolio/GallerieArt/bye_2022_0.jpg';
import save_children_dreams_3_0 from '../../assets/Portofolio/GallerieArt/save_children_dreams_3_0.jpg';
import Au_controle_0 from '../../assets/Portofolio/GallerieArt/Au_controle_0.jpg';
import Peintre_work_0 from '../../assets/Portofolio/GallerieArt/Peintre_work_0.jpg';
import save_children_dreams_2_0 from '../../assets/Portofolio/GallerieArt/save_children_dreams_2_0.jpg';
import Aurevoir_0 from '../../assets/Portofolio/GallerieArt/Aurevoir_0.jpg';
import sav_children_dreams_1_0 from '../../assets/Portofolio/GallerieArt/sav_children_dreams_1_0.jpg';
import yambala_oyo_0 from '../../assets/Portofolio/GallerieArt/yambala_oyo_0.jpg';
import Mama_sacrifice_0 from '../../assets/Portofolio/GallerieArt/Mama_sacrifice_0.jpg';
import Matadi_kibala_0 from '../../assets/Portofolio/GallerieArt/Matadi_kibala_0.jpg';
import Livre_monde_0 from '../../assets/Portofolio/GallerieArt/Livre_monde_0.jpg';
import Apatridie_0_2 from '../../assets/Portofolio/GallerieArt/Apatridie_0_2.jpg';
import Woman_tech_0 from '../../assets/Portofolio/GallerieArt/Woman_tech_0.jpg';
import Woman_warior_0 from '../../assets/Portofolio/GallerieArt/Woman_warior_0.jpg';
import Milele_africa_illustration_Square_0 from '../../assets/Portofolio/GallerieArt/Milele_africa_illustration_Square_0.jpg';
import Envol_0 from '../../assets/Portofolio/GallerieArt/Envol_0.jpg';
import Apatridie_0_1 from '../../assets/Portofolio/GallerieArt/Apatridie_0_1.jpg';
import NAZA_MOLONGI_0 from '../../assets/Portofolio/GallerieArt/NAZA_MOLONGI_0.jpg';
import Diplome_0 from '../../assets/Portofolio/GallerieArt/Diplome_0.jpg';
import Covid_atack_0 from '../../assets/Portofolio/GallerieArt/Covid_atack_0.jpg';
import Aides_0 from '../../assets/Portofolio/GallerieArt/Aides_0.jpg';
import Ungana_0 from '../../assets/Portofolio/GallerieArt/Ungana_0.jpg';
import useWindowWidth from '../windowWidth';
import { useEffect, useState } from 'react';

export default function GalleryArt() {

    // scroll to top 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [height, setHeight] = useState(0);
    const width = useWindowWidth();
    
    useEffect(() => {
        const handleHeight = () => {
            setHeight ((document.documentElement.scrollTop * 100) / document.documentElement.scrollHeight) ;
        }

        window.addEventListener('scroll', handleHeight);

        return () => {
            window.removeEventListener('scroll', handleHeight);
        }
    }, []);
       

    if (width <= 640) {

        return (<section className='pt-10 flex flex-col gap-3 bg-gray-100'>
            
            {/* first div  */}
            <section className='w-full  grid sm:grid-rows-2 grid-cols-1 sm:grid-cols-3 gap-3 px-[10%]'>

                <div className='w-full h-full  sm:col-start-1 sm:col-span-3 sm:col-end-3 flex items-center justify-center '>
                    <div className='sm:w-[50%] '>

                        <img loading='lazy'  src={CICR_0} alt="" />
                    </div>
                </div>

                <div className='w-full h-full sm:col-start-3 sm:row-start-1 sm:row-end-3 '>
                    <img loading='lazy' src={Le_retour_0} alt="" />
                </div>

                <div className='w-full h-full '>
                    <img loading='lazy' src={Envol_end_0} alt="" />
                </div>

                <div className='w-full h-full '>
                    <img loading='lazy' src={Ambouteillage_0} alt="" />
                </div>
            </section>


            {/* second div  */}
            <section className=' w-full gap-3 flex flex-col sm:flex-row px-[10%] sm:px-[13%]'>
                <div className=''>
                    <img loading='lazy' src={ Mama_hero_0} alt="Mama_hero_0" />
                </div>
                
                <div className='lg:w-[85%]'>
                    <img loading='lazy' src={Apatridie_0} alt="Apatridie_0" />
                </div>
            </section>

            {/* third div */}
            { height >= 14  && <section className='flex flex-col sm:flex-row gap-3 px-[10%]'>

                <div className='sm:w-[99%]'>
                    <img loading='lazy' src={bye_2022_0} alt="bye_2022_0" />
                </div>

                <div>
                    <img loading='lazy' src={save_children_dreams_3_0} alt="save_children_dreams_3_0" />
                </div>

                <div className='w-[99%]'>
                    <img loading='lazy' src={Au_controle_0} alt="Au_controle_0" />
                </div>
            </section>}

            {/* 4th div  */}
            { height >= 21 && <section className=' w-full gap-3 flex flex-col sm:flex-row px-[10%] sm:px-[13%]'>

                <div className='lg:w-[88%] '>
                    <img loading='lazy' src={Peintre_work_0} alt="Peintre_work_0" />
                </div>

                <div>
                    <img loading='lazy' src={save_children_dreams_2_0} alt="Mama_hero_0" />
                </div>
                
            </section>}

            {/* 5th div  */}
            {height >= 28 && <section className='flex flex-col sm:flex-row gap-3 px-[10%]'>
                <div>
                    <img loading='lazy' src={Aurevoir_0} alt="Aurevoir_0" />
                </div>

                <div className='sm:w-full md:w-[90%] lg:w-[80%] xl:w-[65%]'>
                    <img loading='lazy' src={sav_children_dreams_1_0} alt="sav_children_dreams_1_0" />
                </div>
            </section>}

            {/* 6th div  */}
            { height >= 35  && <section className='w-full grid sm:grid-rows-2 grid-cols-1 sm:grid-cols-3 gap-3 px-[10%]'>

                <div className='w-full  sm:row-span-2 h-full'>

                    <img loading='lazy'  src={yambala_oyo_0} alt="yambala_oyo_0" />
                </div>

                <div className='w-full h-full'>
                    <img loading='lazy' src={Mama_sacrifice_0} alt="Mama_sacrifice_0" />
                </div>

                <div className='w-full h-full sm:row-start-2 sm:col-start-3'>
                    <img loading='lazy' src={Matadi_kibala_0} alt="" />
                </div>
            </section>}

            {/* 7th div  */}
            {  height >= 42  && <section className=' w-full gap-3 flex flex-col sm:flex-row px-[10%] '>

                <div className='w-full'>
                    <img loading='lazy' src={Apatridie_0_2} alt="Mama_hero_0" />
                </div>

                <div className='lg:w-[60%]  sm:w-[80%] '>
                    <img loading='lazy' src={Livre_monde_0} alt="Peintre_work_0" />
                </div>
            </section>}

            {/* 8th div  */}
            { height >= 49  && <section className=' grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-3 px-[10%]'>

                <div className='w-full'>
                    <img loading='lazy' src={Woman_tech_0} alt="Woman_tech_0" />
                </div>
                <div className=' row-start-2 col-start-1 '>
                    <img loading='lazy' src={Woman_warior_0} alt="Woman_warior_0" />
                </div>
                <div  className='h-full w-full row-span-2 justify-center items-center flex'>
                    <img loading='lazy' src={Milele_africa_illustration_Square_0} alt="" />
                </div>
            </section>}

            {/* 9th div  */}
            { height >= 56  && <section className='grid grid-cols-1 sm:grid-cols-3 sm:flex-row gap-3 px-[10%]'>

                <div className=' sm:col-start-2'>
                    <img loading='lazy' src={Envol_0} alt="save_children_dreams_3_0" />
                </div>

                <div className='w-[99%]'>
                    <img loading='lazy' src={Apatridie_0_1} alt="Au_controle_0" />
                </div>
            </section>}

            {/* 10th div  */}
            { height >= 63  && <section className=' w-full gap-3 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 px-[10%] '>

                <div className=' sm:row-span-2'>
                    <img loading='lazy' src={NAZA_MOLONGI_0} alt="NAZA_MOLONGI_0" />
                </div>
                <div className='lg:w-[60%]  sm:w-[80%] sm:row-start-2 sm:col-start-2'>
                    <img loading='lazy' src={Diplome_0} alt="Diplome_0" />
                </div>
            </section>}
            
            {/* 11th div  */}
            { height >= 73  && <section className='w-full flex justify-center items-center px-[10%] '>
                <div className='md:w-[70%] lg:w-[60%]'>
                    <img loading='lazy' src={Covid_atack_0} alt="" />
                </div>
            </section>}

            {/* 12th div  */}
            { height >= 73  && <section className=' w-full gap-3 flex flex-col sm:flex-row px-[10%] sm:px-[13%]'>

                <div className='lg:w-[88%] '>
                    <img loading='lazy' src={Aides_0} alt="Peintre_work_0" />
                </div>

                <div>
                    <img loading='lazy' src={Ungana_0} alt="Mama_hero_0" />
                </div>
                
            </section>}

            <section className='w-full flex items-end justify-end sticky bottom-5 px-[2%] py-[3%]'>

                <div onClick={() => document.documentElement.scrollTop = 0} className={`p-1 border border-gray-400 bg-black shadow-2xl rounded-full cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 text-white`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </section>
        </section>)
    } else {
        return (<section className='pt-10 flex flex-col gap-3 bg-gray-100'>
            
            {/* first div  */}
            <section className='w-full  grid sm:grid-rows-2 grid-cols-1 sm:grid-cols-3 gap-3 px-[10%]'>

                <div className='w-full h-full  sm:col-start-1 sm:col-span-3 sm:col-end-3 flex items-center justify-center '>
                    <div className='sm:w-[50%] '>

                        <img loading='lazy'  src={CICR_0} alt="" />
                    </div>
                </div>

                <div className='w-full h-full sm:col-start-3 sm:row-start-1 sm:row-end-3 '>
                    <img loading='lazy' src={Le_retour_0} alt="" />
                </div>

                <div className='w-full h-full '>
                    <img loading='lazy' src={Envol_end_0} alt="" />
                </div>

                <div className='w-full h-full '>
                    <img loading='lazy' src={Ambouteillage_0} alt="" />
                </div>
            </section>


            {/* second div  */}
            <section className=' w-full gap-3 flex flex-col sm:flex-row px-[10%] sm:px-[13%]'>
                <div className=''>
                    <img loading='lazy' src={ Mama_hero_0} alt="Mama_hero_0" />
                </div>
                
                <div className='lg:w-[85%]'>
                    <img loading='lazy' src={Apatridie_0} alt="Apatridie_0" />
                </div>
            </section>

            {/* third div */}
            <section className='flex flex-col sm:flex-row gap-3 px-[10%]'>

                <div className='sm:w-[99%]'>
                    <img loading='lazy' src={bye_2022_0} alt="bye_2022_0" />
                </div>

                <div>
                    <img loading='lazy' src={save_children_dreams_3_0} alt="save_children_dreams_3_0" />
                </div>

                <div className='w-[99%]'>
                    <img loading='lazy' src={Au_controle_0} alt="Au_controle_0" />
                </div>
            </section>

            {/* 4th div  */}
            <section className=' w-full gap-3 flex flex-col sm:flex-row px-[10%] sm:px-[13%]'>

                <div className='lg:w-[88%] '>
                    <img loading='lazy' src={Peintre_work_0} alt="Peintre_work_0" />
                </div>

                <div>
                    <img loading='lazy' src={save_children_dreams_2_0} alt="Mama_hero_0" />
                </div>
                
            </section>

            {/* 5th div  */}
            <section className='flex flex-col sm:flex-row gap-3 px-[10%]'>
                <div>
                    <img loading='lazy' src={Aurevoir_0} alt="Aurevoir_0" />
                </div>

                <div className='sm:w-full md:w-[90%] lg:w-[80%] xl:w-[65%]'>
                    <img loading='lazy' src={sav_children_dreams_1_0} alt="sav_children_dreams_1_0" />
                </div>
            </section>

            {/* 6th div  */}
            <section className='w-full grid sm:grid-rows-2 grid-cols-1 sm:grid-cols-3 gap-3 px-[10%]'>

                <div className='w-full  sm:row-span-2 h-full'>

                    <img loading='lazy'  src={yambala_oyo_0} alt="yambala_oyo_0" />
                </div>

                <div className='w-full h-full'>
                    <img loading='lazy' src={Mama_sacrifice_0} alt="Mama_sacrifice_0" />
                </div>

                <div className='w-full h-full sm:row-start-2 sm:col-start-3'>
                    <img loading='lazy' src={Matadi_kibala_0} alt="" />
                </div>
            </section>

            {/* 7th div  */}
             <section className=' w-full gap-3 flex flex-col sm:flex-row px-[10%] '>

                <div className='w-full'>
                    <img loading='lazy' src={Apatridie_0_2} alt="Mama_hero_0" />
                </div>

                <div className='lg:w-[60%]  sm:w-[80%] '>
                    <img loading='lazy' src={Livre_monde_0} alt="Peintre_work_0" />
                </div>
            </section>

            {/* 8th div  */}
            <section className=' grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-3 px-[10%]'>

                <div className='w-full'>
                    <img loading='lazy' src={Woman_tech_0} alt="Woman_tech_0" />
                </div>
                <div className=' row-start-2 col-start-1 '>
                    <img loading='lazy' src={Woman_warior_0} alt="Woman_warior_0" />
                </div>
                <div  className='h-full w-full row-span-2 justify-center items-center flex'>
                    <img loading='lazy' src={Milele_africa_illustration_Square_0} alt="" />
                </div>
            </section>

            {/* 9th div  */}
            <section className='grid grid-cols-1 sm:grid-cols-3 sm:flex-row gap-3 px-[10%]'>

                <div className=' sm:col-start-2'>
                    <img loading='lazy' src={Envol_0} alt="save_children_dreams_3_0" />
                </div>

                <div className='w-[99%]'>
                    <img loading='lazy' src={Apatridie_0_1} alt="Au_controle_0" />
                </div>
            </section>

            {/* 10th div  */}
            <section className=' w-full gap-3 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 px-[10%] '>

                <div className=' sm:row-span-2'>
                    <img loading='lazy' src={NAZA_MOLONGI_0} alt="NAZA_MOLONGI_0" />
                </div>
                <div className='lg:w-[60%]  sm:w-[80%] sm:row-start-2 sm:col-start-2'>
                    <img loading='lazy' src={Diplome_0} alt="Diplome_0" />
                </div>
            </section>
            
            {/* 11th div  */}
            <section className='w-full flex justify-center items-center px-[10%] '>
                <div className='md:w-[70%] lg:w-[60%]'>
                    <img loading='lazy' src={Covid_atack_0} alt="" />
                </div>
            </section>

            {/* 12th div  */}
            <section className=' w-full gap-3 flex flex-col sm:flex-row px-[10%] sm:px-[13%]'>

                <div className='lg:w-[88%] '>
                    <img loading='lazy' src={Aides_0} alt="Peintre_work_0" />
                </div>

                <div>
                    <img loading='lazy' src={Ungana_0} alt="Mama_hero_0" />
                </div>
                
            </section>

            <section className='w-full flex items-end justify-end sticky bottom-5 px-[2%] py-[3%]'>

                <div onClick={() => document.documentElement.scrollTop = 0} className={`p-1 border border-gray-400 bg-black shadow-2xl rounded-full cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 text-white`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </section>
        </section>)

    }
}