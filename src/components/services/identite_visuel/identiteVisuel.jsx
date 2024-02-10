import { useState } from "react";
import accueil_i_visuelle_phone from '../../../assets/Services/Id visuelle/accueil_i_visuelle_phone.jpg';
import accueil_Id_visuelle from '../../../assets/Services/Id visuelle/accueil_Id_visuelle.jpg';
import Id_Vieuellelogo from '../../../assets/Services/Id visuelle/Id_Vieuellelogo.png';
import Id_visuelle_Charte_graphique from '../../../assets/Services/Id visuelle/Id_visuelle_Charte_graphique.jpg';
import Id_visuelle_print from '../../../assets/Services/Id visuelle/Id_visuelle_print.jpg';
import id_visuel_digital from '../../../assets/Services/Id visuelle/id_visuel_digital.jpg';
import Id_visuelle_packaging from '../../../assets/Services/Id visuelle/Id_visuelle_packaging.jpg';
import id_visuelle_video from '../../../assets/Services/Id visuelle/id_visuelle_video.jpg';
import Digital_presentation from '../../../assets/Services/Id visuelle/Digital_presentation.png';
import Digital_supports_digitaux_Copie from '../../../assets/Services/Id visuelle/Digital_supports_digitaux_Copie.png';
import Digital_site_web_icone from '../../../assets/Services/Id visuelle/Digital_site_web_icone.png';
import IdVisuelleComp from "../components/idVisuelS_Comp";

import { Link } from "react-router-dom";
export default function IdentiteVisuel () {

    const [digitalClick, setDigitalClick] = useState(true);
    const [packegingClick, setPackegingClick] = useState(true);

    const digitalClickHandler  = () => {
        setDigitalClick(prev => prev ? false : true);
    };
    
    const packegingClickHandler  = () => {
        setPackegingClick(prev => prev ? false : true);
    }

    return (
        <>
            
            {/* welcom image  */}
            <section className="w-full">
                <img src={accueil_i_visuelle_phone} alt="image d'accueil" className="sm:hidden"/>
                <img src={accueil_Id_visuelle} alt="image d'accueil" className="sm:block hidden"/>

            </section>
            
            {/* demarquez vous  */}
            <section className="px-3 flex flex-col justify-center bg-bgIdVisuel w-full pb-5">

                {/* welcom text  */}
                <section className="text-left p-7 sm:px-20 md:px-28 w-full flex flex-col md:justify-center md:items-center">
                        
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-gray-600 w-[80%] sm:w-[75%] md:w-[70%]  font-bold mb-7 leading-6"> Démarquez-vous <span className=" text-bgPlay">par une identité visuelle qui</span> marque les esprits</h1>
                        <p className=" text-md sm:text-[18px] md:text-[22px] lg:text-[26px] text-gray-600 w-[80%] sm:w-[75%] md:w-[70%]  font-bold leading-5 md:leading-7"> Nous vous aidons à créer une identité visuelle qui soit à la fois unique et efficace pour développer votre notoiété, augmenter votre crédibilité, communiquer efficacement et <span className=" text-bgPlay">vous démarquer en créant une relation durable avec votre public.</span> </p>
                </section>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:px-5 md:px-8 lg:px-14">

                    {/* logo type  */}
                    <IdVisuelleComp 
                        hImage='h-[200px] sm:h-[250px]  md:h-[270px]'
                        image={Id_Vieuellelogo}
                        name={'Logotype'}
                        text={"Il s'agit du cœur de votre identité visuelle. Nous créons un logo qui vous distingue"}
                        link={'/services/idVisuelle/logotype'}
                    />

                    {/* charte graphique  */}
                    <section className="w-full bg-white rounded-lg py-5"> 

                        {/* Charte graphique image  */}
                        <div className="w-full justify-start items-start flex">
                                <img src={Id_visuelle_Charte_graphique} alt="Id_Vieuellelogo" className="h-[200px] sm:h-[250px] md:h-[270px]" />
                        </div>

                        <section className="w-full justify-center items-center flex flex-col gap-4">
                            
                            {/* charte Graphique logoType  */}
                            <div className="text-center flex flex-col items-center justify-center gap-3">

                                <h1 className="text-2xl md:text-3xl text-gray-600 font-bold  ">Charte Graphique</h1>
                                <p className="w-[75%] sm:w-[70%] md:w-[65%]  text-[11px] sm:text-[14px] lg:text-[15px] text-gray-600">Pour maintenir votre identité visuelle, unifiée, forte et cohérente</p>
                            </div>

                            {/* Charte Graphique button  */}
                            <div className="flex justify-evenly gap-10">
                                <Link to={'/services/idVisuelle/charteGraphique'} className=" text-blue-500 text-[12px] sm:text-[15px] md:text-[16px] flex "> Voir plus <span className="flex items-center justify-center "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 pb-1"><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link>
                                <Link to='../' className=" duration-200  text-blue-500 text-[12px] sm:text-[15px] md:text-[16px] px-1 pb-[1.5px] rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
                            </div>
                        </section>
                    </section>
                    
                    {/* support Print  */}
                    <IdVisuelleComp 
                        hImage='h-[200px] sm:h-[250px] md:h-[270px]'
                        image={Id_visuelle_print}
                        name={'Support Print'}
                        text={"Supports de présentation, affichages, supports administratifs et habillages"}
                        link={'/services/idVisuelle/supportPrint'}
                    />

                    {/*Digital  */}
                    <section className="w-full flex overflow-hidden relative">

                        <div className="w-full ">
                            <IdVisuelleComp 
                                hImage='h-[200px] sm:h-[250px] md:h-[270px]'
                                image={id_visuel_digital}
                                name={'Digital'}
                                text={"Connectez-vous avec votre public grâce à une stratégie et des supports digitaux efficaces"}
                                link={'../'}
                                onclick={digitalClickHandler}
                            />
                        </div>

                        <div className={`flex flex-col justify-center items-center  gap-4 sm:gap-6 w-full p-7 sm:p-10 lg:p-14 h-full bg-white absolute rounded-lg duration-500 ${digitalClick ?  'translate-x-[100%]' : 'translate-x-[0%]'}`}>
                            
                            {/* presentation  */}
                            <div className="text-left flex w-full gap-3" >
                                <div className="w-[10%]">
                                    <img src={Digital_presentation} alt="Digital_presentation" />
                                </div>
                                <div className="w-[90%] flex flex-col  gap-1">
                                    <h1 className="md:text-[18px] font-bold text-gray-600">Présentation</h1>
                                    <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-gray-600">Nous sommes à vos cotés pour élaborer et créer des supports de présentation de votre entreprise adaptés les aux écrans </p>
                                </div>
                            </div>

                            {/* reseaux sociaux  */}
                            <div className="text-left flex w-full gap-3" >
                                <div className="w-[10%]">
                                    <img src={Digital_supports_digitaux_Copie} alt="Digital_supports_digitaux_Copie" />
                                </div>
                                <div className="w-[90%] flex flex-col  gap-1">
                                    <h1 className="md:text-[18px] font-bold text-gray-600">Réseaux sociaux</h1>
                                    <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-gray-600">Nous élaborons et nous concevons des supports efficaces pour créer un lien affectif avec votre public ciblé. </p>
                                </div>
                            </div>

                            {/* web services  */}
                            <div className="text-left flex w-full gap-3" >
                                <div className="w-[10%]">
                                    <img src={Digital_site_web_icone} alt="Digital_site_web_icone" />
                                </div>
                                <div className="w-[90%] flex flex-col  gap-1">
                                    <h1 className="md:text-[18px] font-bold text-gray-600">Web design</h1>
                                    <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-gray-600"> Conception graphique des sites web & applications mobile</p>
                                    <button className="text-[11px] sm:text-[13px] lg:text-[15px] text-blue-500 mt-2 text-left flex items-center "  onClick={() => digitalClickHandler()}>Voir moins <span className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                                        </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            
                        </div>

                    </section>

                    {/*Packaging  */}
                    <section className="w-full flex overflow-hidden relative">

                        <div className="w-full ">
                            <IdVisuelleComp 
                                hImage='h-[200px] sm:h-[250px] md:h-[270px]'
                                image={Id_visuelle_packaging}
                                name={'Packaging'}
                                text={"Faites concevoir un packaging attractif et informatif avec nous"}
                                link={'../'}
                                onclick={packegingClickHandler}
                            />
                        </div>

                        <div className={` text-left flex flex-col justify-center items-start  gap-4 sm:gap-6 w-full p-7 sm:p-10 lg:p-14 h-full bg-white absolute rounded-lg duration-500 ${packegingClick ?  'translate-x-[100%]' : 'translate-x-[0%]'}`}>

                            <h1 className="text-left md:text-[18px] font-bold text-gray-600">Un atout marketing incontournable</h1>

                            <p className="text-left text-[11px] sm:text-[13px] lg:text-[15px] text-gray-600">Le packaging est le premier contact que vos clients ont avec votre produit. <br /> 
                                Nous créons un packaging qui vous permettra d&apos;atteindre vos objectifs marketing.
                            </p>

                            <p className=" text-left text-[11px] sm:text-[13px] lg:text-[15px] text-gray-600"> Le packaging vous aidera à:</p>

                            <div className="w-full text-left px-4">
                               <ul className="list-disc ">
                                    <li className=" text-left text-[11px] sm:text-[13px] lg:text-[15px] text-gray-600">Augmenter la notoriété de votre marque</li>
                                    <li className=" text-left text-[11px] sm:text-[13px] lg:text-[15px] text-gray-600">Développer votre imaege de marque</li>
                                    <li className=" text-left text-[11px] sm:text-[13px] lg:text-[15px] text-gray-600">Améliorer la perception de votre produit</li>
                                    <li className=" text-left text-[11px] sm:text-[13px] lg:text-[15px] text-gray-600">Faciliter la vente de votre produit</li>
                                    <li className=" text-left text-[11px] sm:text-[13px] lg:text-[15px] text-gray-600">Démarquer votre produit</li>
                                </ul>     
                            </div>
                            <button className="text-[11px] sm:text-[13px] lg:text-[15px] text-blue-500 mt-2 text-left flex items-center " onClick={() => packegingClickHandler()}>Voir moins <span className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                                </svg>
                                </span>
                            </button>
                            
                        </div>

                    </section>

                    {/*Video  */}
                    <IdVisuelleComp 
                        hImage='h-[200px] sm:h-[250px] md:h-[270px]'
                        image={id_visuelle_video}
                        name={'Vidéo'}
                        text={"Spot publicitaire, Présentation, promotions en motion design"}
                        link={'/services/idVisuelle/motionDesign'}
                    />

                </div>

            </section>
        </>
    )
}