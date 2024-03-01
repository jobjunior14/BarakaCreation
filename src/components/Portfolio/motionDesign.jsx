import SecondeNav, {OnTopBtn} from '../services/identite_visuel/comp/util';
import Motion_1 from '../../assets/Portofolio/Motion design/Motion_1.jpg';
import Motion_2 from '../../assets/Portofolio/Motion design/Motion_2.jpg';
import Motion_3 from '../../assets/Portofolio/Motion design/Motion_3.jpg';


export default function MotionDesignPortofolio () {

    return (
        <main className='bg-black'>

            <SecondeNav 
                link={'/portfolio'} 
                bgColor={'bg-black'} 
                titleColor='text-gray-100'
                title={'Motion Design'}
                brdrColor='border-gray-100' textColor = ' text-white'
            />

            {/* image section  */}
            <section className='flex flex-col px-[2%] gap-5 sm:px-[5%] md:px-[10%] w-full justify-center items-center'>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5'>
                    <img loading='lazy' src={Motion_1} alt=" image"  className='rounded-lg'/>
                    <img loading='lazy' src={Motion_2} alt=" image"  className='rounded-lg'/>

                </div>
                <img loading='lazy' src={Motion_3} alt=" image"  className='rounded-lg'/>
            </section>

            {/* retrun to origin boutton  */}
            <OnTopBtn brdrColor='border-gray-100' textColor = ' text-white'/>
        </main>
    )
}