import Accueil_Logofolio from '../../assets/Portofolio/Logofolio/Accueil_Logofolio.jpg';
import Logo_AED_1 from '../../assets/Portofolio/Logofolio/Logo_AED_1.jpg';
import Logo_Afrique_millenaire_3_ from '../../assets/Portofolio/Logofolio/Logo_Afrique_millenaire_3_.jpg';
import Logo_AED_2 from '../../assets/Portofolio/Logofolio/Logo_AED_2.jpg';
import Logo_Architectonic_2 from '../../assets/Portofolio/Logofolio/Logo_Architectonic_2.jpg';
import Logo_Zali_1 from '../../assets/Portofolio/Logofolio/Logo_Zali_1.jpg';
import Logo_Transformation_church_1 from '../../assets/Portofolio/Logofolio/Logo_Transformation_church_1.jpg';
import Logo_Odej_1 from '../../assets/Portofolio/Logofolio/Logo_Odej_1.jpg';
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

import { useState } from 'react';

// function LogoDetail ({welcomImge, })

export default function Logofolio () {

    return (
        <main className="w-full flex flex-col gap-5">
            <section className='w-full h-[18.75rem] sm:h-auto bg-cover sm:bg-none bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center' style={{backgroundImage: `url(${Accueil_Logofolio})`}}>
                        
                <div className='h-full w-full duration-200 delay-150 relative'>        
                    <img src={Accueil_Logofolio} alt='image' className='sm:block hidden'/>

                </div>  

                    
            </section>

            <section className="grid grid-cols-2 sm:grid-cols-3 w-full gap-2 px-[2%] bg-slate-300 py-5 sm:px-[10%]" >

                <div className='bg-cover bg-center  flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_AED_2})`}}>

                </div>      

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_synergy_1})`}}>

                </div>     

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Architectonic_2})`}}>

                </div>  

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Zali_1})`}}>

                </div> 

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Transformation_church_1})`}}>

                </div>
                
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Odej_1})`}}>

                </div>                
                
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_sos_libota_1})`}}>

                </div>   

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Smart_touch_3})`}}>

                </div>
                
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_uibec_1})`}}>

                </div> 
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_TF_School_1})`}}>

                </div>

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_SLIGRA_2})`}}>

                </div>                

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_plus_pres_de_moi_1})`}}>

                </div>                

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_FPEF_1})`}}>

                </div> 

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Entreprenher_1})`}}>

                </div>                

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_cepac_1})`}}>

                </div>     

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_ONT_1})`}}>

                </div>                

                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Nyota_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${logo_elenge_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_DHAD_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Architectonic_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Baraka_creation_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Mon_plongeur_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Santé_et_moi_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_SLIGRA_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Idemboxes_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_VMH_1})`}}>

                </div>                
                              
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Impactpub_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_UK_DRC_Forum_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Extreme_holding_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Mobc_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Malabar_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Lafamiliya_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Fojed_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Ecobuilding_1})`}}>

                </div>                
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_centenaire_cepac_1})`}}>

                </div>                          
                              
                <div className='bg-cover bg-center flex justify-center items-center w-full h-[10rem] sm:hover:scale-105 duration-150 sm:hover:-translate-x-5 sm:hover:-translate-y-2 rounded-lg ' style={{backgroundImage: `url(${Logo_Afrique_millenaire_1})`}}>

                </div>                
                              
            </section>

        </main>
    )
}