import moii_2 from '../assets/A propos/moii_2.jpg';
import moii_phone from  '../assets/A propos/moii_phone.jpg';
import iconeprofession from '../assets/A propos/iconeprofession.png';
export default function Apropos () {
    return (
        <div className="w-full bg-slate-100">

            {/* Baraka's summary */}
            <div className=" w-full flex flex-col justify-center text-center ">

                <div className='w-full bg-bgApropos flex flex-col justify-center items-center gap-y-5 py-7'>

                    <h1 className='text-6xl text-gray-100 font-bold '>Hello ! </h1>

                    <div className='w-[80%]'>
                        <p className='text-gray-200 text-lg font-normal text-center '>Je suis Baraka LURHAKWA, un artiste communicateur visuel. <br/>Je suis passionné par la production d&apos;œuvres artistiques innovantes et j&apos;accompagne les entreprises dans la réussite de leurs objectifs dans lesecteur de la communication</p>
                    </div>
                </div>

                <div className='bg-bgApropos flex justify-center items-center '>
                    <img src={moii_phone} className='h-[400px]' alt='moi phone'/>
                </div>

                <div className='bg-bgFormation text-left p-8 w-full'>
                    <h1 className=' mr-1 font-bold text-gray-700 text-lg flex'> <img src={iconeprofession} className='h-6 mt-px mr-1' alt='iconeprofession'/> Profession </h1>
                    <div className='h-px w-full bg-gray-600 mt-1'></div>
                </div>
            </div>
        </div>
    )
}