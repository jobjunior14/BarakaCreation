/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
// 
export default function DesignGraphiqueCom ({image, name, text, link, bg, colorText}) {

    return (

    <section className={`w-full  ${bg} justify-center items-center flex flex-col gap-4 rounded-lg pt-5`}>
        
        {/* text  */}
        <div className="text-center flex flex-col items-center justify-center gap-3">

            <h1 className={`text-2xl md:text-3xl ${colorText} font-interBold `}>{name}</h1>
            <p className={`w-[75%] sm:w-[80%] md:w-[70%] font-interRegular  text-[0.69rem] sm:text-[0.875rem] md:text-[15px] ${colorText}`}>{text}</p>
        </div>

        {/* button  */}
        <div className="flex justify-evenly gap-10">
            <Link to={link} className=" text-blue-500 text-[0.69rem] sm:text-[0.875rem] md:text-[15px] font-interRegular flex items-center justify-center "> Voir plus <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 "><path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" /></svg></span></Link>
            <Link to='/contacts' className=" duration-200  text-blue-500 text-[0.69rem] sm:text-[0.875rem] font-interRegular md:text-[15px] px-3  rounded-full hover:text-gray-100 hover:bg-blue-500 border-blue-500 border">Interessé</Link>
        </div>

        {/* Image  */}
        <div className="w-full justify-center rounded-lg  overflow-hidden items-center flex relative h-0" style={{ paddingTop: 'calc(100% * (1/2))'}} >
                <img loading='lazy' src={image} alt="Id_Vieuellelogo" className=" object-contain h-full w-full absolute top-0" />
        </div>
    </section>
    );
}