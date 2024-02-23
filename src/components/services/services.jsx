import ac2P from '../../assets/Services/ac2P.jpg';
import ac2O from '../../assets/Services/ac2O.jpg';
import ac3P from '../../assets/Services/ac3P.jpg';
import ac3O from '../../assets/Services/ac3O.jpg';
import ac4P from '../../assets/Services/ac4P.jpg';
import ac4O from '../../assets/Services/ac4O.jpg';
import ac5P from '../../assets/Services/ac5P.jpg';
import ac5O from '../../assets/Services/ac5O.jpg';
import ac1 from '../../assets/Services/ac1.jpg';
import Acillustration from '../../assets/Services/Acillustration.jpg';
import Ac_a_services from '../../assets/Services/Ac_a_services.jpg';
import icone4 from '../../assets/Services/icone4.png';
import icone1 from '../../assets/Services/icone1.png';
import icone2 from '../../assets/Services/icone2.png';
import icone3 from '../../assets/Services/icone3.png';
import NosServices from './components/nosServices';
import ToggleText from './components/toggleText';
import { useNavigate } from 'react-router-dom';
import useWindowWidth from '../windowWidth';
export default function Services () {

    const navigate = useNavigate();
    const width = useWindowWidth();

    return (
        <main className="w-full flex flex-col gap-5">

            {/* 1st part welcome picture  */}
            <section className="w-full flex flex-col justify-center items-center relative sm:-mt-20">
                <img src={Ac_a_services} alt='Ac_a_services'/>
                <div className=' bg-white pb-8 sm:pb-4 lg:pb-14 sm:absolute sm:bottom-0 sm:bg-opacity-0'>
                    <h3 className='text-[0.9rem] sm:text-[0.82rem] md:text-[1.07rem] lg:text-[1.25rem] text-left  text-gray-500 font-bold '>En faisant <span className='text-gray-500'>la différence</span> nous vous <br/>aiderons à <span className='text-gray-500'>gagner le cœur de votre <br/>public cible</span></h3>
                </div>
            </section>
            
            <section className='w-full flex flex-col justify-center relative gap-5'>

                {/* 2nd part "identité" visuelle  */}
                <section className='flex justify-center sm:items-center  '>
                    <img src={width <= 640 ? ac2P : ac2O} alt='ac2P' className='rounded-lg' />

                    <div className='flex flex-col absolute justify-center items-center  gap-1 mt-2 sm:items-start sm:left-[3.75rem] md:left-20 sm:gap-3 md:gap-5 lg:gap-6'>
                        <h1 className='font-bold sm:hidden text-[1.4375rem] sm:text-3xl md:text-4xl lg:text-6xl'>Identité Visuelle</h1>
                        <h1 className='font-bold hidden sm:block text-[1.4375rem] sm:text-3xl md:text-4xl lg:text-6xl'>Identité<br/>Visuelle</h1>
                        <p className='text-[0.69rem] sm:text-[1.125rem] md:text-xl  sm:text-left'>LOGO, Charte graphique <br/> Supports print & Digital <br/> Packaging</p>
                        <button onClick={() => navigate('/services/idVisuelle') } className='bg-blue-500 px-3 py-[0.13rem] text-white text-xs rounded-full sm:text-[1.125rem] hover:bg-myBlue duration-200 ' > Plus </button>
                    </div>
                </section>

                {/* 3rd part "design graohique" */}
                <section className='flex justify-center sm:items-center  '>
                    <img src={width <= 640 ? ac3P : ac3O} alt='ac2P' className=' rounded-lg' />

                    <div className='flex flex-col absolute justify-center items-center  gap-1 mt-2 sm:items-start sm:left-[3.75rem] md:left-20 sm:gap-3 md:gap-5 lg:gap-6'>
                        <h1 className='font-bold sm:hidden text-[1.4375rem] sm:text-3xl md:text-4xl lg:text-6xl text-gray-100'>Design Graphique</h1>
                        <h1 className='font-bold hidden sm:block text-[1.4375rem] sm:text-3xl md:text-4xl lg:text-6xl text-gray-100 text-left'>Design<br/>Graphique</h1>
                        <p className='text-[0.69rem] sm:text-[1.125rem] md:text-xl sm:text-left text-gray-100'>Campagne de comm. <span className='text-gray-500'>&</span> Evènementiels<br/> Mise en page <span className='text-gray-500'>&</span> Présentation <br/> Web design</p>
                        <button onClick={() => navigate('/services/graphiqueDesign')} className='bg-blue-500 px-3 py-[0.13rem] text-white text-xs rounded-full sm:text-[1.125rem] hover:bg-myBlue duration-200' > Plus </button>
                    </div>
                </section>

                {/* illustration */}
                <section className='flex justify-center sm:items-center  '>
                    <img src={width <= 640 ? ac1 : Acillustration} alt='ac2P' className=' rounded-lg' />

                    <div className='flex flex-col absolute justify-center items-center  gap-1 mt-2 sm:items-end sm:right-20 sm:gap-3 md:gap-5 lg:gap-6'>
                        <h1 className='font-bold text-[1.4375rem] sm:text-3xl md:text-4xl lg:text-6xl '>Illustration</h1>
                        <p className='text-[0.69rem] sm:hidden sm:text-[1.125rem] md:text-xl sm:text-right '>Livre, Couverture <span className='text-gray-500'>&</span> Bande dessinée <br/> Campagne <span className='text-gray-500'>&</span> web</p>
                        <p className='text-[0.69rem] hidden sm:block sm:text-[1.125rem] md:text-xl sm:text-right '>Livre  <span className='text-gray-500'>&</span> Couverture <br/>Bande dessinée <br/> Campagne <span className='text-gray-500'>&</span> web</p>
                        <button onClick={() => navigate('/services/illustration')} className='bg-blue-500 px-3 py-[0.13rem] text-white text-xs rounded-full sm:text-[1.125rem] hover:bg-myBlue duration-200' > Plus </button>
                    </div>
                </section>

                {/* annimation  */}
                <section className='flex justify-center sm:items-center  '>
                    <img src={width <= 640 ? ac5P : ac5O} alt='ac2P' className=' rounded-lg' />

                    <div className='flex flex-col absolute justify-center items-center  gap-1 mt-2 sm:items-start sm:left-[3.75rem] md:left-20 sm:gap-3 md:gap-5 lg:gap-6'>
                        <h1 className='font-bold text-[1.4375rem] sm:text-3xl md:text-4xl lg:text-6xl '>Annimation</h1>
                        <p className='text-[0.69rem] sm:text-[1.125rem] md:text-xl sm:text-left '>Spot publicitaire<br/>Présentation <span className='text-gray-500'>&</span> <br/> Conténu</p>
                        <button onClick={() => navigate('/services/idVisuelle/motionDesign')} className='bg-blue-500 px-3 py-[0.13rem] text-white text-xs rounded-full sm:text-[1.125rem] hover:bg-myBlue duration-200' > Plus </button>
                    </div>
                </section>
                
                {/* consulting  */}
                <section className='flex justify-center sm:items-center  '>
                    <img src={width <= 640 ? ac4P : ac4O} alt='ac2P' className='rounded-lg' />

                    <div className='flex flex-col absolute justify-center items-center  gap-1 mt-2 sm:items-start sm:left-[3.75rem] md:left-20 sm:gap-3 md:gap-5 lg:gap-6'>
                        <h1 className='font-bold text-[1.4375rem] sm:text-3xl md:text-4xl lg:text-6xl text-gray-100'> Consulting</h1>
                        <p className='text-[0.69rem] sm:text-[1.125rem] md:text-xl sm:text-left text-gray-100'>Nous vous accompagnons dans la <br/> définition de votre stratégie de<br/>communication, la mise en place de vos<br/>outils et la mesure de vos résultats</p>
                        <button onClick={() => navigate('/services/consultance')} className='bg-gray-50 px-3 py-[0.13rem] text-blue-500 text-xs rounded-full sm:text-[1.125rem] hover:bg-myBlue duration-200' > Plus </button>
                    </div>
                </section>
            </section>

            {/* engagement  */}
            <section className='w-full flex flex-col justify-center gap-5 md:gap-8 px-7 md:px-20 sm:items-center'>
               
               <p className='text-left text-[0.75rem] leading-4 font-bold w-[70%] sm:w-[80%] sm:text-center sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] text-gray-700 md:leading-6  '>Nous nous engageons à comprendre vos besoins , et vous proposons des solutions qui répondent à vos attentes afin d'atteindre vos objectifs.</p>
               <h3 className='text-gray-600 leading-5 text-left w-[50%] font-bold text-xl sm:text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] sm:text-center'>Nos services sont basés sur :</h3>

                {/* nos service sont basée sur  */}
               <section className='grid grid-cols-2 lg:grid-cols-4 gap-7'>
                    
                    <NosServices iconeSrc={icone4} title={'Originalité'} texte={'Par notre créativité, nousconcevons des visuels uniques et personnalisés pour vous demarquer'} />

                    <NosServices iconeSrc={icone1} title={'Efficacité Suivie'} texte={'Nous élaborons des stratégies et visuels basés sur le résultat visés en respectant les délais fixés'} />

                    <NosServices iconeSrc={icone3} title={'Suivie'} texte={"Nous assistons nos clients pendant et après l'exécution des projets."} />

                    <NosServices iconeSrc={icone2} title={<> Protection<span className='text-gray-500'> &</span> confidentialité</>} texte={'des fichiers sources et des vos données internes pour des projets précis'} />

               </section>

            </section>

            <section className='text-left px-7 md:px-20'>
                
                <ToggleText
                    title={'Nos procédures & Times Lines'}
                    toggled={'a'}
                    jsxText={<> 
                        <h3 className='mb-3 text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] font-bold'>1. Contactez-nous</h3>
                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>Pour commencer, contactez-nous pour discuter de votre projet. Nous vous enverrons ensuite un cahier des charges pour mieux comprendre vos besoins et vos attentes. Ce document vous permettra de décrire votre projet et d'établir une estimation du temps de travail.</p>

                        <h3 className='mb-3 text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] font-bold'>2. Elaboration du devis</h3>
                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>Une fois que nous avons reçu votre cahier des charges, nous élaborerons un devis. Ce devis sera basé sur les informations que vous nous avez fournies et sur notre estimation du temps de travail nécessaire. Nous vous ferons ensuite parvenir le devis pour que vous puissiez l'examiner et l'approuver.</p>

                        <h3 className='mb-3 text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] font-bold'>3. Mise en œuvre du projet</h3>
                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>Une fois que vous avez approuvé le devis, nous mettrons en œuvre votre projet. Nous travaillerons en étroite collaboration avec vous pour vous fournir les résultats que vous souhaitez. Pour ce faire la mise en œuvre du projet commence par le versement de 70% du budget.</p>

                        <h3 className='mb-3 text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] font-bold'>4. Livraison du rendu</h3>
                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>A la fin de la phase de mise en œuvre, nous vous livrerans le rendu de votre projet. Ce rendu est le résultat de la conception selon vos besoins et notre apport. A cette étape, nous pouvons apporter des changements et des corrections afin d'aboutir au résultat officiel.</p>

                        <h3 className='mb-3 text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] font-bold'>5. Finissage et paiement final</h3>
                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>Une fois que vous avez approuvé le rendu, nous procéderons au finissage du projet. Cette étape comprend la correction des dernières erreurs et la mise en forme finale du projet. Cette étape se conclu par le versement de 30% du budget restant.</p>

                        <h3 className='mb-3 text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] font-bold'>6. Suivi</h3>
                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>Une fois que le projet est terminé, nous vous proposerons un suivi pour vous assurer que vous êtes satisfait du résultat. Nous serons également disponibles pour répondre à toutes vos questions ou demandes.</p>
                     </>}
                    height = {"sm:h-[31.20rem] lg:h-[34.3] md:h-[37.5rem] h-[49rem] pt-3"}
                />

                <ToggleText
                    title={'Méthodes et moyens de paiements'}
                    toggled={'a'}
                    jsxText={<> 
                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem]'> Vous choisissez le plus adapté pour vous:</p>
                        <div className='flex flex-col items-start justify-start text-left'>

                            <div className='flex justify-center items-center'>
                                <div className='bg-black w-[6px] h-[6px] md:w-[0.5rem] md:h-[0.5rem] lg:w-[0.625rem] lg:h-[0.625rem] mr-1'> </div>
                                <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem]'>Virement bancaire</p>
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className='bg-black w-[6px] h-[6px] md:w-[0.5rem] md:h-[0.5rem] lg:w-[0.625rem] lg:h-[0.625rem] mr-1'> </div>
                                <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem]'>Mobile Money</p>
                            </div>

                        </div>
                    </>}
                    height = {" sm:h-[5rem] h-[4.37rem] pt-3"}
                />

                <ToggleText
                    title={"Delais d'interventions et support"}
                    toggled={'a'}
                    jsxText={<p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem]'>Notre engagement va au-delà de la simple relation client-fournisseur. Nous sommes des partenaires. Nous accompagnons nos clients via différents canaux, avec des modes de réponse et des priorités croissantes en fonction du plan choisi. Tous les clients ayant ouvert un projet avec nous peuvent demander une assistance par e-mail. Sur demande, les clients peuvent bénéficier d'une assistance dédiée via WhatsApp ou appel téléphonique.</p>}
                    height = {"sm:h-[6.87rem] lg:h-[6.23rem] md:h-[7.5rem] h-[10.62rem] pt-3"}
                />

                <ToggleText
                    title={"Outils utilisés"}
                    toggled={'a'}
                    jsxText={<> <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem]'>Pour créer des visuels de haute qualité, nous utilisons des logiciels avancés et professionnels du domaine.

                        Nous utilisons notamment les logiciels Adobe, qui sont adaptés aux standards internationaux.

                        Toutes nos créations sont réalisées par notre expertise et créativité, sans recours à l&apos;intelligence artificielle.

                        Nous sommes équipés de matériels professionnels et performants, pour créer avec plus de finesse et de rapidité.</p> </>}
                    height = {"sm:h-[6.87rem] lg:h-[6.23rem] md:h-[7.5rem] h-[10.62rem] pt-3"}
                />

                <ToggleText
                    title={"Resiliation de contrat"}
                    toggled={'a'}
                    jsxText={<> 
                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>
                            Bien sûr, nous aimons la liberté autant que vous. Vous êtes libre de résilier le contrat a tout moment.
                            Si après la signature du contrat ou au cours d&apos;un projet, nous n&apos;arrivons pas à trouver un intérêt d&apos;attente ou vous faire des propositions satisfaisantes, Vous êtes libre de résilier le contrat.
                            Dans certains cas, on peut fixer des frais de résiliation. Ces frais sont généralement dus par la partie qui résilie le contrat avant la fin de la durée prévue.
                        </p>

                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem]'>
                            La résiliation d&apos;un contrat s&apos;effectue conformément aux conditions prévues dans le contrat. Il est important de respecter les délais de préavis et les frais de résiliation, si ceux-ci sont prévus.
                        </p>
                    </>}
                    height = {"sm:h-[9.375rem] lg:h-[11.25rem] md:h-[10.62rem] h-[16.87rem] pt-3"}
                />

                <ToggleText
                    title={"Protection & confidentialité"}
                    toggled={'a'}
                    jsxText={<> 
                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'> 
                            La protection et la confidentialité des données des nos partenaires et clients est une priorité pour nous,
                        </p>
                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>
                            Nous nous engageons à protéger leurs données personnelles et les fichiers des conceptions que nous réalisons pour eux. Nous collectons et utilisons uniquernent les données personnelles qui sont nécessaires à la fourniture de nos services. Nous nous assurons également que ces données sont sécurisées et protégées contre les accès non autorisés pendant et après le contrat.
                        </p>

                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>
                            Ces données peuvent inclure des informations telles que le nom, l&apos;adresse e- mail, les informations sur l'entreprise, les données internes de l'entreprise, les fichiers sources des projets réalisés, les fichiers de haute qualité susceptibles d'être imprimés ou piratés.
                            Nous utilisons uniquement les données dans notre portfolio, tout en respectant les limites définies dans notre accord.
                        </p>

                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>
                            Vous avez le droit d&apos;établir les limites sur l&apos;usage de vos visuels après contrat, conformément à notre accord.
                        </p>

                        <p className='text-gray-600 text-[0.63rem] md:text-[0.75rem] lg:text-[0.9rem] mb-3'>
                            Nous sommes toujours ouverts à vous répondre aux questions ou préoccupations concernant la protection et la confidentialité de vos données personnelles.
                        </p>
                    </>}
                    height = {"sm:h-[16.25rem] lg:h-[21.87rem] md:h-[21.25rem] h-[29.3rem] pt-3"}
                />

            </section>
        </main>
    )
}