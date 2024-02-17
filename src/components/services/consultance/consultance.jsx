import { Link } from "react-router-dom"
import Accueil_Consulting_services_phone from '../../../assets/Services/Consulting/Accueil_Consulting_services_phone.jpg';
import Consulting_service_pics from '../../../assets/Services/Consulting/Consulting_service_pics.jpg';

export default function Consultance () {

    return ( <section className="w-full">

        {/* welcom image   */}
        <section className="w-full flex   relative">

            <div className="flex w-full top-10 absolute  justify-center gap-4 items-center flex-col sm:hidden">
                <h1 className="text-6xl text-gray-100 font-bold">Consulting</h1>
                <Link to={'../'} className=" hover:bg-gray-100 hover:text-blue-600 duration-200 text-sm text-gray-100 border border-gray-50 rounded-full px-[0.25rem] py-[0.125rem]"> Nous contacter</Link>
            </div>
            <img src={Accueil_Consulting_services_phone} alt="" className="sm:hidden" />
        </section>

         {/* first tetxt  */}
        {/* section text  */}
        <div className='w-full  flex bg-slate-100'>

            <section className='pt-10 w-full flex flex-col sm:px-[10%]'>

                <h1 className='text-left px-[10%] text-[1.624rem] leading-7 font-bold text-gray-700 '>Conseil et <br /> stratégies <br /> <span className="text-gray-500">pour votre</span> <br />Communication</h1>

                <section className=' gap-5   flex flex-col sm:flex-row py-5 w-full '>

                    {/* first paragraph  */}
                    <section className='px-[10%] w-[90%] sm:w-full  '>

                        <p className=' text-left font-[500] text-gray-700 text-[0.75rem] md:text-[0.813rem] lg:text-[0.94rem] leading-5 lg:leading-6  '> 
                          Baraka creation vous accompagne
                            dans l&apos;élaboration de la stratégie de
                            communication dans l&apos;objectif de
                            définir les valeurs de votre entreprise,
                            votre positionnement sur le marché et
                            celui de la concurrence, identifier vos
                            cibles pour réaliser un message précis                
                        </p>

                    </section>

                    {/* second paragraph  */}
                    <section className='px-[10%] sm:px-0  w-[90%] sm:w-full hidden md:flex '>

                        <p className='text-left font-[500] text-gray-500 text-[0.75rem] md:text-[0.813rem] lg:text-[0.94rem] leading-5 lg:leading-6 '> Nous vous aidons ainsi à :</p>
                        
                    </section>

                </section>
            </section>
        </div>

        {/* baraka's image  */}
        <section className=" bg-[rgb(132,130,255)] flex flex-col gap-5">

            <div className="flex flex-col gap-2 px-[5%] pt-5">
                <p className='text-center font-[500] text-blue-100 text-[0.875rem] sm:text-[15px] md:text-[17px] leading-5  sm:w-[75%] md:w-full'> 
                    Nous intervenons dans ce
                    processus afin de vous
                    accompagner dans la réalisation
                    et la mise en place d&apos;une stratégie
                    de communication efficace qui
                    vous convient.
                </p>

                <p className=' font-[500] text-gray-100 text-[0.875rem] sm:text-[15px] md:text-[17px] leading-5  sm:w-[75%] md:w-full'> 
                    Sous fome de réunions en ligne ou dans
                    vos locaux, nous vous proposons de
                    travailler ensemble sur votre stratégie,
                    sous fome de conseils en communication.
                </p>

                <p className=' font-[500] text-blue-100 text-[0.875rem] sm:text-[15px] md:text-[17px] leading-5  sm:w-[75%] md:w-full'> 
                    Nous saurons analyser l&apos;ensemble de vos
                    données sectoielles pour dégager une
                    tendance vers laquelle diiger votre
                    communication.
                </p>
            </div>
            <div className="w-full flex justify-center ">

                <div className="flex w-[60%]">
                    <img src={Consulting_service_pics} alt="Consulting_service_pics" />
                </div>
            </div>
        </section>
    </section>)
}