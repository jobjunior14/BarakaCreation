/* eslint-disable react/prop-types */
import Accueil_Logofolio from '../../assets/Portofolio/Logofolio/Accueil_Logofolio.jpg';
import Logo_AED_1 from '../../assets/Portofolio/Logofolio/Logo_AED_1.jpg';
import Logo_Afrique_millenaire_3_ from '../../assets/Portofolio/Logofolio/Logo_Afrique_millenaire_3_.jpg';
import Logo_AED_2 from '../../assets/Portofolio/Logofolio/Logo_AED_2.jpg';
import Logo_Architectonic_2 from '../../assets/Portofolio/Logofolio/Logo_Architectonic_2.jpg';
import Logo_Zali_1 from '../../assets/Portofolio/Logofolio/Logo_Zali_1.jpg';
import Logo_Transformation_church_1 from '../../assets/Portofolio/Logofolio/Logo_Transformation_church_1.jpg';
import Logo_Odej_1 from '../../assets/Portofolio/Logofolio/Logo_Odej_1.jpg';
import Logo_Odej_2 from '../../assets/Portofolio/Logofolio/Logo_Odej_2.jpg';
import Logo_Odej_3 from '../../assets/Portofolio/Logofolio/Logo_Odej_3.jpg';
import Logo_sos_libota_1 from '../../assets/Portofolio/Logofolio/Logo_sos_libota_1.jpg';
import Logo_Smart_touch_3 from '../../assets/Portofolio/Logofolio/Logo_Smart_touch_3.jpg';
import Logo_uibec_1 from '../../assets/Portofolio/Logofolio/Logo_uibec_1.jpg';
import Logo_TF_School_1 from '../../assets/Portofolio/Logofolio/Logo_TF_School_1.jpg';
import Logo_synergy_1 from '../../assets/Portofolio/Logofolio/Logo_synergy_1.jpg';
import Logo_SLIGRA_2 from '../../assets/Portofolio/Logofolio/Logo_SLIGRA_2.jpg';
import Logo_plus_pres_de_moi_1 from '../../assets/Portofolio/Logofolio/Logo_plus_pres_de_moi_1.jpg';
import Logo_FPEF_1 from '../../assets/Portofolio/Logofolio/Logo_FPEF_1.jpg';
import Logo_Entreprenher_1 from '../../assets/Portofolio/Logofolio/Logo_Entreprenher_1.jpg';
import Logo_cepac_1 from '../../assets/Portofolio/Logofolio/Logo_cepac_1.jpg';
import Logo_ONT_1 from '../../assets/Portofolio/Logofolio/Logo_ONT_1.jpg';
import Logo_Nyota_1 from '../../assets/Portofolio/Logofolio/Logo_Nyota_1.jpg';
import logo_elenge_1 from '../../assets/Portofolio/Logofolio/logo_elenge_1.jpg';
import Logo_DHAD_1 from '../../assets/Portofolio/Logofolio/Logo_DHAD_1.jpg';
import Logo_Architectonic_1 from '../../assets/Portofolio/Logofolio/Logo_Architectonic_1.jpg';
import Logo_Baraka_creation_1 from '../../assets/Portofolio/Logofolio/Logo_Baraka_creation_1.jpg';
import Logo_Mon_plongeur_1 from '../../assets/Portofolio/Logofolio/Logo_Mon_plongeur_1.jpg';
import Logo_Santé_et_moi_1 from '../../assets/Portofolio/Logofolio/Logo_Santé_et_moi_1.jpg';
import Logo_SLIGRA_1 from '../../assets/Portofolio/Logofolio/Logo_SLIGRA_1.jpg';
import Logo_Impactpub_1 from '../../assets/Portofolio/Logofolio/Logo_Impactpub_1.jpg';
import Logo_Idemboxes_1 from '../../assets/Portofolio/Logofolio/Logo_Idemboxes_1.jpg';
import Logo_VMH_1 from '../../assets/Portofolio/Logofolio/Logo_VMH_1.jpg';
import Logo_UK_DRC_Forum_1 from '../../assets/Portofolio/Logofolio/Logo_UK_DRC_Forum_1.jpg';
import Logo_Extreme_holding_1 from '../../assets/Portofolio/Logofolio/Logo_Extreme_holding_1.jpg';
import Logo_Mobc_1 from '../../assets/Portofolio/Logofolio/Logo_Mobc_1.jpg';
import Logo_Malabar_1 from '../../assets/Portofolio/Logofolio/Logo_Malabar_1.jpg';
import Logo_Lafamiliya_1 from '../../assets/Portofolio/Logofolio/Logo_Lafamiliya_1.jpg';
import Logo_Fojed_1 from '../../assets/Portofolio/Logofolio/Logo_Fojed_1.jpg';
import Logo_Ecobuilding_1 from '../../assets/Portofolio/Logofolio/Logo_Ecobuilding_1.jpg';
import Logo_centenaire_cepac_1 from '../../assets/Portofolio/Logofolio/Logo_centenaire_cepac_1.jpg';
import Logo_Afrique_millenaire_1 from '../../assets/Portofolio/Logofolio/Logo_Afrique_millenaire_1.jpg';
import {OnTopBtn} from '../services/identite_visuel/comp/util';
import { useState, useEffect, useCallback } from 'react';

// logo details component 
export function LogoDetail ({images,text, title, state, hideDetails }) {
    
    const [index, setIndex] = useState(0);

      // slide the images automaticaly
    useEffect(() => {

        const interval = setInterval(() => {
            
            setIndex ( prev => prev === 200 ? 0 : prev + 100);
        }, 5000) ;

        return () => {
            clearInterval(interval);
        }
    }, [index]);

    const nextImage = () =>  {
        setIndex ( prev => prev === 200 ? 0 : prev + 100);
    };

    const prevImage = () =>  {
        setIndex ( prev => prev === 0 ? 200 : prev - 100);
    };
    

    return (<div className={`${ state ? 'absolute' : 'hidden'} p-5 sm:p-7 md:px-10 lg:px-[8%] w-full flex flex-col justify-center items-center gap-5 bg-slate-200 relative rounded-xl`}>
            

        {/* button to hide the details  */}
        <div onClick={() => hideDetails()} className={`p-1 border border-gray-700 rounded-full cursor-pointer`}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
        </div>

        {/* images slider */}
        {state && <section className='w-full flex justify-center overflow-hidden items-center gap-2'>
            <div className='w-full flex duration-200' style={{transform: `translateX(${-index}%)`}} >
                <img src={images[0]} alt='image'/>
                <img src={images[1]} alt='image'/>
                <img src={images[2]} alt='image'/>

            </div>

        </section>}

        {/* circle div to show the image's number  */}
        <section className=' flex items-center justify-center w-full px-5 gap-2'>

            <div onClick={() => setIndex(0)} className={`w-[0.625rem] h-[0.625rem] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${index === 0 ? 'bg-gray-400' : ''} duration-300 delay-200 hover:cursor-pointer`}> </div>
            <div onClick={() => setIndex(100)} className={`w-[0.625rem] h-[0.625rem] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${index === 100 ? 'bg-gray-400' : ''} duration-300 delay-200 hover:cursor-pointer`}> </div>
            <div onClick={() => setIndex(200)} className={`w-[0.625rem] h-[0.625rem] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${index === 200 ? 'bg-gray-400' : ''} duration-300 delay-200 hover:cursor-pointer`}> </div>
        </section>

        {/* section texte  */}
        <section className='text-left flex flex-col gap-3 '>
            <h1 className='font-bold text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] text-gray-700'>{title}</h1>
            <p className='text-[0.75rem] sm:text-[0.9rem] md:text-[1.1rem] md:leading-6 text-gray-700 w-[70%]'> {text}</p>
        </section>

        {/* div to prev or next images  */}
        <div className=' flex items-center justify-evenly  w-full px-5'>
            
            <div className='md:w-[35px] md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] items-center justify-center rounded-full sm:hover:bg-gray-300 duration-200 cursor-pointer pr-[4px] border border-gray-600 flex' onClick={prevImage}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-600 sm:hover:text-gray-800 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </div>
            
            
            <div className='md:w-[35px] md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] items-center justify-center rounded-full sm:hover:bg-gray-300 duration-200 cursor-pointer pl-[4px] border border-gray-600 flex' onClick={nextImage}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-600 sm:hover:text-gray-800 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div>

        </div>

    </div>)
}

export default function Logofolio () {
    

    //all the stastes
    const [showDetails, setShowDetails] = useState({
    a1: false, a2: false, a3: false, a4: false, a5: false, a6: false, a7: false, a8: false, a9: false,
    a10: false, a11: false, a12: false, a13: false, a14: false, a15: false, a16: false, a17: false,
    a18: false, a19: false, a20: false, a21: false, a22: false, a23: false, a24: false, a25: false,
    a26: false, a27: false, a28: false, a29: false, a30: false, a31: false, a32: false, a33: false,
        a34: false, a35: false, a36: false, 

        hidden: function () {

          return this.a1 || this.a2 || this.a3 || this.a4 || this.a5 || this.a6 || this.a7 || this.a8 || this.a9 || this.a10 || this.a11 || this.a12 || this.a13 || this.a14 || this.a15 || this.a16 || this.a17 || this.a18 || this.a19 || this.a20 || this.a21 || this.a22 || this.a23 || this.a24 || this.a25 || this.a26 || 
          this.a27  || this.a28  || this.a29  || this.a30  || this.a31  || this.a32  || this.a33  || this.a34  || this.a35  || this.a36    
        } 
    });

    const staticObj = {
    a1: false, a2: false, a3: false, a4: false, a5: false, a6: false, a7: false, a8: false, a9: false,
    a10: false, a11: false, a12: false, a13: false, a14: false, a15: false, a16: false, a17: false,
    a18: false, a19: false, a20: false, a21: false, a22: false, a23: false, a24: false, a25: false,
    a26: false, a27: false, a28: false, a29: false, a30: false, a31: false, a32: false, a33: false,
        a34: false, a35: false, a36: false, 

        hidden: function () {

          return this.a1 || this.a2 || this.a3 || this.a4 || this.a5 || this.a6 || this.a7 || this.a8 || this.a9 || this.a10 || this.a11 || this.a12 || this.a13 || this.a14 || this.a15 || this.a16 || this.a17 || this.a18 || this.a19 || this.a20 || this.a21 || this.a22 || this.a23 || this.a24 || this.a25 || this.a26 || 
          this.a27  || this.a28  || this.a29  || this.a30  || this.a31  || this.a32  || this.a33  || this.a34  || this.a35  || this.a36    
        } 
    };


    const handleDetails = (letter) => {

        setShowDetails({...staticObj, [letter]: true});
    };

    const hideDetails = () => {
        setShowDetails({...staticObj});
    };
    
    //all the static images
    const images = [Logo_AED_2, 
        Logo_Architectonic_2,
        Logo_Zali_1,
        Logo_Transformation_church_1,
        Logo_Odej_1,
        Logo_sos_libota_1,
        Logo_Smart_touch_3,
        Logo_uibec_1,
        Logo_TF_School_1,
        Logo_synergy_1,
        Logo_SLIGRA_2,
        Logo_plus_pres_de_moi_1,
        Logo_FPEF_1,
        Logo_Entreprenher_1,
        Logo_cepac_1,
        Logo_ONT_1,
        Logo_Nyota_1,
        logo_elenge_1,
        Logo_DHAD_1,
        Logo_Architectonic_1,
        Logo_Baraka_creation_1,
        Logo_Mon_plongeur_1,
        Logo_Santé_et_moi_1,
        Logo_SLIGRA_1,
        Logo_Impactpub_1,
        Logo_Idemboxes_1,
        Logo_VMH_1,
        Logo_UK_DRC_Forum_1,
        Logo_Extreme_holding_1,
        Logo_Mobc_1,
        Logo_Malabar_1,
        Logo_Lafamiliya_1,
        Logo_Fojed_1,
        Logo_Ecobuilding_1,
        Logo_centenaire_cepac_1,
        Logo_Afrique_millenaire_1,
    ];

    // array to map returnung jsx element////////////
    const [mainImages, setMainImages] = useState([Logo_AED_2,
        Logo_Architectonic_2,
        Logo_Zali_1,
        Logo_Transformation_church_1,
        Logo_Odej_1,
        Logo_sos_libota_1
    ]);

    // all logo details  
    const logoDetails = [
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
        {
            images: [Logo_Odej_2, Logo_Odej_3, Logo_Odej_1],
            title: 'ODJ asbl',
            text: "Le coeur de l'identé visuelle est le Logo. Il est la premiere impression que les gens ont d'une entreprise, nous sommes spécialisés dans la conception des logos. Nous avons accompagnés l'organisation ODJ tout au long du processus du briefing à la création du logo officiel",
        },
    ];



    //load images on scrolling  
    useEffect(() => {

        const loadImage = () => {

            if (((window.innerHeight + window.scrollY) - 1000) >= (document.body.offsetHeight - 1400) ) {

                setMainImages(prev => {
                    if (prev.length <= 33) {
                        return [...prev, images[(prev.length - 1) + 1], images[(prev.length - 1) + 2], images[(prev.length - 1) + 3]]
                    } else {
                        return [...prev];
                    }
                });
            }
        }; 

        window.addEventListener('scroll', loadImage);

        return () => window.removeEventListener('scroll', loadImage);
    }, []);

    // main jsx 
    const logos = useCallback(() => {


       return mainImages.map((prev, index) => <div onClick={() => handleDetails(`a${index + 1 }`)}  key={index} className='bg-cover bg-center cursor-pointer  flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${prev})`}}></div> )
    }, [mainImages]);

    const myDetailsLogo = useCallback(() => {

        return logoDetails.map((prev, index) => <LogoDetail key={index}  images={prev.images} title={prev.title} text={prev.text} hideDetails={hideDetails} state={showDetails[`a${index + 1}`]}/>)
    }, [showDetails]);

    return (
        <main className="w-full flex flex-col gap-5 relative">
            {/* logo details displayed in absolute  */}
            <div aria-hidden={true} className={` ${showDetails.hidden() ? 'sticky' : 'hidden'} absolute top-0 md:top-5 z-40 backdrop-blur-md   w-full h-[100vh]  justify-center items-center flex px-[2%] sm:px-[5%] md:px-[10%] lg:px-[15%]`}>{myDetailsLogo()}</div>
            
            {/* welcom imaga  */}
            <section className='w-full h-[18.75rem] sm:h-auto bg-cover sm:bg-none bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center' style={{backgroundImage: `url(${Accueil_Logofolio})`}}>       
                <div className='h-full w-full duration-200 delay-150 relative'>        
                    <img src={Accueil_Logofolio} alt='image' className='sm:block hidden'/>
                </div>     
            </section>
            
            {/* logo display  */}
            <section className="grid grid-cols-2 sm:grid-cols-3 w-full gap-2 px-[2%] bg-slate-300 py-5 sm:px-[10%]" > {logos ()} </section>

            <OnTopBtn brdrColor='border-gray-700' textColor = ' text-black'/>

        </main>
    )
}

