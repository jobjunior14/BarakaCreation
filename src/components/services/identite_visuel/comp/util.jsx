/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function SecondeNav ({link, bgColor, titleColor, brdrColor, textColor, title}) {

    const navigate = useNavigate();

    return (
        <div className={`py-3 px-[5%] sticky top-0 ${bgColor} z-50 overflow-hidden`}>
            <section className='w-full flex justify-between item-center'>
                <h1 className={`font-bold ${titleColor}`}> {title} </h1>

                <div onClick={() => navigate(link)} className={`p-1 border ${brdrColor} rounded-full cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 ${textColor}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                </div>
            </section>

            <div className='w-full h-[1px] bg-gray-400 mt-2'> </div>
        </div>
    );
}

export function OnTopBtn ({brdrColor, textColor}) {
    return (
        <section className='x-full flex items-center justify-center py-[3%]'>

            <div onClick={() => document.documentElement.scrollTop = 0} className={`p-1 border ${brdrColor} rounded-full cursor-pointer`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 ${textColor}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>
            </div>
        </section>
    )
}