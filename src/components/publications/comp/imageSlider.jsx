/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import useWindowWidth from "../../windowWidth";

export default function ImageSlider ({images, title}) {


    const [index, setIndex] = useState(0);

      // slide the images automaticaly
    useEffect(() => {

        const interval = setInterval(() => {
            
            setIndex ( prev => prev === (images.length - 1 ) * 100 ? 0 : prev + 100);
        }, 5000) ;

        return () => {
            clearInterval(interval);
        }
    }, [index]);

    const nextImage = () =>  {
        setIndex ( prev => prev === (images.length - 1 ) * 100 ? 0 : prev + 100);
    };

    const prevImage = () =>  {
        setIndex ( prev => prev === 0 ? (images.length - 1 ) * 100 : prev - 100);
    };

    //set the orientation of the screen to landscape if we are under 640px
    const width = useWindowWidth();

    const myImages = useCallback(() => {
        return images.map((prev, index) => <img key={index} src={prev} alt="image"/>);
    }, [images]);

    const circleDiv = images.map((prev, myIndex) => <div key={index + prev} onClick={() => setIndex(myIndex * 100)} className={`w-[5px] h-[5px] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${index === (myIndex * 100) ? 'bg-gray-400' : ''} duration-300 delay-200 hover:cursor-pointer`}> </div> )

    return (<main className="w-full h-[100vh] relative flex flex-col justify-center items-center bg-gray-900">
        
        {width <=640 && <div className="absolute top-5 flex flex-col gap-3 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-100">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>

            
            <p className="text-gray-200 text-xs font-semibold">Roter votre téléphone pour un meilleur visionnage  </p>
        </div>}
        {/* section image */}
        <section className="w-full relative  flex justify-center overflow-hidden items-center gap-2">

            <div className='w-full flex duration-200' style={{transform: `translateX(${-index}%)`}} >
               {myImages() }
            </div>

             {/* div to prev or next images  */}
            <div className=' absolute bottom-5 flex items-center justify-evenly  w-full px-5'>
                
                <div className='md:w-[35px] md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-slate-100 bg-opacity-25 items-center justify-center rounded-full  duration-200 cursor-pointer pr-[4px] border border-gray-600 flex' onClick={prevImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-200  ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </div>
                
                
                <div className='md:w-[35px] md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-slate-100 bg-opacity-25 items-center justify-center rounded-full  duration-200 cursor-pointer pl-[4px] border border-gray-600 flex' onClick={nextImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-200 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>

            </div>

             {/* circle div to show the image's number  */}
            <section className='absolute bottom-2 flex items-center justify-between h-2 w-full px-5 flex-wrap'>
                {circleDiv}
            </section>
            
            {/* custom navBar         */}
            <section className={`py-3 px-[5%] w-full absolute top-0 z-50 `}>

                <section className='w-full flex justify-between item-center'>

                    <h1 className={`font-bold text-gray-100`}> {title} </h1>

                    <div className={`p-1  rounded-full flex gap-4 justify-center items-center`}>
                        <Link to={'../'}>
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 text-white`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                            </svg>
                        </Link>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                        </svg>


                    </div>
                </section>

                <div className='w-full h-[1px] bg-gray-400 mt-2'> </div>
            </section>
        </section>


        
    </main>)
}