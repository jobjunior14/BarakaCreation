/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// 
export default function DesignGraphiqueCom ({image, hImage, name, text, link, bg, colorText}) {

    return (

    <section className={`w-full  ${bg} justify-center items-center flex flex-col gap-4 rounded-lg pt-5`}>
        
        {/* text  */}
        <div className="text-center flex flex-col items-center justify-center gap-3">

            <h1 className={`text-2xl md:text-3xl ${colorText} font-bold `}>{name}</h1>
            <p className={`w-[75%] sm:w-[70%] md:w-[65%]  text-[0.69rem] sm:text-[0.875rem] md:text-[15px] ${colorText}`}>{text}</p>
        </div>

        {/* button  */}
        <div className="flex justify-evenly gap-10">
            <Link to={link} className=" text-blue-500 text-[0.75rem] sm:text-[15px] md:text-[1rem] flex items-center "> Voir plus <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link>
            <Link to='/contacts' className=" duration-200  text-blue-500 text-[0.75rem] sm:text-[15px] md:text-[1rem] px-3  rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
        </div>

        {/* Image  */}
        <div className="w-full justify-center items-center flex">
                <img loading='lazy' src={image} alt="Id_Vieuellelogo" className={hImage} />
        </div>
    </section>
    );
}