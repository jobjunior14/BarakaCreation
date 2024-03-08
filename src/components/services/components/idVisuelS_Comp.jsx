/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// 
export default function IdVisuelleComp ({image, name, text, link, onclick}) {

    return (

        <section className="w-full  bg-white rounded-lg relative flex flex-col gap-5 py-10" > 

            {/* logo type Image  */}
            <div className="w-full h-0 relative" style={{paddingTop: 'calc(100% * (1/2))'}}>
                    <img loading='lazy' src={image} alt="Id_Vieuellelogo" className=' object-contain w-full h-full absolute top-0' />
            </div>

            <section className="w-full justify-center items-center flex flex-col gap-4">
                
                {/* text logoType  */}
                <div className="text-center flex flex-col items-center justify-center gap-3">

                    <h1 className="text-2xl md:text-3xl text-gray-700 font-interBold  ">{name}</h1>
                    <p className="w-[75%] sm:w-[70%] md:w-[75%]  text-[0.69rem] sm:text-[0.875rem] md:text-[1rem] text-gray-700 font-interRegular">{text}</p>
                </div>

                {/* logotype button  */}
                <div className="flex justify-evenly gap-10">
                    { !onclick ? <Link to={link} className=" text-blue-500 text-[0.69rem] sm:text-[0.875rem] md:text-[1rem] flex items-center font-interRegular"> Voir plus <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link> :
                        <button onClick={() => onclick()} className=" text-blue-500 text-[0.69rem] sm:text-[0.875rem] md:text-[1rem] flex items-center font-interRegular "> Voir plus <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></button>
                    }
                    <Link to='/contacts' className=" duration-200  text-blue-500 text-[0.69rem] sm:text-[0.875rem] md:text-[1rem] px-2  rounded-full font-interRegular hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
                </div>
            </section>
        </section>
    );
}