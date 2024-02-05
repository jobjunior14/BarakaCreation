/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ToggleText ({title, toggled, jsxText, height})  {

    const [toggle, setToggle] = useState ({a: false, b: false, c: false, d: false, e: false, f: false});

    const showText = (letter) => {
        setToggle(prev => ({...prev, [letter]: prev[letter] === true ? false : true}));
    };

    return (
         <section className="p-3 text-left">
            {/* toogle btn  */}
            <div className=' justify-between flex cursor-pointer ' onClick={() => showText(toggled)}>
                <h1 className='font-bold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-gray-800'> {title} </h1>

                <div  className='w-[16px] h-[16px] sm:w-5 sm:h-5 rounded-full justify-center items-center border border-gray-900 flex '>
                    {!toggle[toggled] ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                    }

                </div>
            </div>
            
            {/* toggle text  */}
            <div className=' overflow-y-hidden border border-t-gray-600 mt-2 '>

                <div className= {`  w-full ${!toggle[toggled] ? 'h-0' : height}  transition-[height] duration-500 delay-200 px-4`}>
                    {jsxText}
                </div>
            </div>

        </section>
    )
}