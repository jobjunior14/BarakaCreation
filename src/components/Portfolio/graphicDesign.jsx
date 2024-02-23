import a78 from '../../assets/Portofolio/Graphic design/a78.jpg';
import a61 from '../../assets/Portofolio/Graphic design/a61.jpg';
import a73 from '../../assets/Portofolio/Graphic design/a73.jpg';
import a4 from '../../assets/Portofolio/Graphic design/a4.jpg';
import a47 from '../../assets/Portofolio/Graphic design/a47.jpg';
import a52 from '../../assets/Portofolio/Graphic design/a52.jpg';
import a42 from '../../assets/Portofolio/Graphic design/a42.jpg';
import a16 from '../../assets/Portofolio/Graphic design/a16.jpg';
import a59 from '../../assets/Portofolio/Graphic design/a59.jpg';
import a84 from '../../assets/Portofolio/Graphic design/a84.jpg';
import a29 from '../../assets/Portofolio/Graphic design/a29.jpg';
import a49 from '../../assets/Portofolio/Graphic design/a49.jpg';
import a45 from '../../assets/Portofolio/Graphic design/a45.jpg';
import a86 from '../../assets/Portofolio/Graphic design/a86.jpg';
import a32 from '../../assets/Portofolio/Graphic design/a32.jpg';
import a6 from '../../assets/Portofolio/Graphic design/a6.jpg';
import a22 from '../../assets/Portofolio/Graphic design/a22.jpg';
import a from '../../assets/Portofolio/Graphic design/a.jpg';
import a14 from '../../assets/Portofolio/Graphic design/a14.jpg';
import a56 from '../../assets/Portofolio/Graphic design/a56.jpg';
import a10 from '../../assets/Portofolio/Graphic design/a10.jpg';
import a24 from '../../assets/Portofolio/Graphic design/a24.jpg';
import a19 from '../../assets/Portofolio/Graphic design/a19.jpg';
import a38 from '../../assets/Portofolio/Graphic design/a38.jpg';
import a12 from '../../assets/Portofolio/Graphic design/a12.jpg';
import a35 from '../../assets/Portofolio/Graphic design/a35.jpg';
import a26 from '../../assets/Portofolio/Graphic design/a26.jpg';
import a92 from '../../assets/Portofolio/Graphic design/a92.jpg';
import {OnTopBtn} from '../services/identite_visuel/comp/util';
import { useState, useEffect } from 'react';
import { LogoDetail } from './logofolio';


export default function ImageGraphiqueDesign () {

    const [showDetails, setShowDetails] = useState({
    a1: false, a2: false, a3: false, a4: false, a5: false, a6: false, a7: false, a8: false, a9: false,
    a10: false, a11: false, a12: false, a13: false, a14: false, a15: false, a16: false, a17: false,
    a18: false, a19: false, a20: false, a21: false, a22: false, a23: false, a24: false, a25: false,
    a26: false, a27: false, a28: false, a29: false, a30: false, a31: false, a32: false, a33: false,
        a34: false, a35: false, a36: false, 

        hidden: function () {

          return this.a1 || this.a2 || this.a3 || this.a4 || this.a5 || this.a6 || this.a7 || this.a8 || this.a9 || this.a10 || this.a11 || this.a12 || this.a13 || this.a14 || this.a15 || this.a16 || this.a17 || this.a18 || this.a19 || this.a20 || this.a21 || this.a22 || this.a23 || this.a24 || this.a25 || this.a26 || 
          this.a27  || this.a28  || this.a29  || this.a30  || this.a31  || this.a32  || this.a33  || this.a34  || this.a35  || this.a36    
        } 
    });

    const staticObj = {
    a1: false, a2: false, a3: false, a4: false, a5: false, a6: false, a7: false, a8: false, a9: false,
    a10: false, a11: false, a12: false, a13: false, a14: false, a15: false, a16: false, a17: false,
    a18: false, a19: false, a20: false, a21: false, a22: false, a23: false, a24: false, a25: false,
    a26: false, a27: false, a28: false, a29: false, a30: false, a31: false, a32: false, a33: false,
        a34: false, a35: false, a36: false, 

        hidden: function () {

          return this.a1 || this.a2 || this.a3 || this.a4 || this.a5 || this.a6 || this.a7 || this.a8 || this.a9 || this.a10 || this.a11 || this.a12 || this.a13 || this.a14 || this.a15 || this.a16 || this.a17 || this.a18 || this.a19 || this.a20 || this.a21 || this.a22 || this.a23 || this.a24 || this.a25 || this.a26 || 
          this.a27  || this.a28  || this.a29  || this.a30  || this.a31  || this.a32  || this.a33  || this.a34  || this.a35  || this.a36    
        } 
    };


    const handleDetails = (letter) => {

        setShowDetails({...staticObj, [letter]: true});
    };

    const hideDetails = () => {
        setShowDetails({...staticObj});
    };

    //state to load photo
    const [loadPhotoState, setLoadPhotoState] = useState(2);

    // handle loading photo on scroll 
    useEffect (() => {

        const handleLoading = () => {
            if (((window.innerHeight + window.scrollY) - 1000) >= (document.body.offsetHeight - 1400) ) {

                setLoadPhotoState (prev => {
                    if (prev < 7) {
                        return prev + 1;
                    } else {
                        return prev;
                    }
                });
            }
        };

        window.addEventListener('scroll', handleLoading);

        return () => window.removeEventListener('scroll', handleLoading);
    }, []);

    return (<main className=" flex flex-col gap-10 bg-black">

            {/* section welcom image  */}
            <section className="flex flex-col gap-5 bg-gradient-to-t from-black to-gray-800 pt-10">
                
                <h1 className="text-6xl text-gray-100 font-bold">Graphic Design</h1>
                <p className="px-[10%] text-md text-gray-200 font-semibold "> Identié | Campagne | Event | Mise en page | Présentation</p>
            </section>

            <section className="grid grid-cols-1 gap-2  px-[10%] w-full py-10" >

                {/* first div */}
               { loadPhotoState >= 1 && <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full '>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage1'>
                        <img src={a78} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage2' >
                        <img src={a61} alt='a78' className='sm:hidden'/>
                    </div>

                    {/* i set bg-image here as a className because inline style dosen't work  */}
                   <div className='row-span-2 bgImage3 h-full bg-[length:auto_100%] bg-no-repeat bg-center cursor-pointer w-full'>
                        <img src={a73} alt="" className='sm:hidden' />
                    </div>


                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage4' >
                        <img src={a4} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage5'  >
                        <img src={a47} alt='a78' className='sm:hidden'/>
                    </div>
                </div>}

                {/* second div  */}
                { loadPhotoState >= 2 && <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full '>

                    {/* i set bg-image here as a className because inline style dosen't work  */}
                   <div className='row-span-2 bgImage6 h-full bg-[length:auto_100%] bg-no-repeat bg-center cursor-pointer w-full'>
                        <img src={a52} alt="" className='sm:hidden' />
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage7'>
                        <img src={a84} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage8' >
                        <img src={a42} alt='a78' className='sm:hidden'/>
                    </div>



                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage9' >
                        <img src={a16} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage10'  >
                        <img src={a59} alt='a78' className='sm:hidden'/>
                    </div>
                </div>}
               {/* 3rd div  */}
                { loadPhotoState >= 3 && <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full '>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage11'>
                        <img src={a29} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage12' >
                        <img src={a49} alt='a78' className='sm:hidden'/>
                    </div>

                    {/* i set bg-image here as a className because inline style dosen't work  */}
                   <div className='row-span-2 bgImage13 h-full bg-[length:auto_100%] bg-no-repeat bg-center cursor-pointer w-full'>
                        <img src={a45} alt="" className='sm:hidden' />
                    </div>


                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage14' >
                        <img src={a86} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage15'  >
                        <img src={a32} alt='a78' className='sm:hidden'/>
                    </div>
                </div>}

               {/* 4th div  */}
                { loadPhotoState >= 4 && <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full '>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage16'>
                        <img src={a6} alt='a78' className='sm:hidden'/>
                    </div>

                    {/* i set bg-image here as a className because inline style dosen't work  */}
                   <div className='row-span-2 bgImage17 h-full bg-[length:auto_100%] bg-no-repeat bg-center cursor-pointer w-full'>
                        <img src={a22} alt="" className='sm:hidden' />
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage18' >
                        <img src={a} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage19' >
                        <img src={a14} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage20'  >
                        <img src={a56} alt='a78' className='sm:hidden'/>
                    </div>
                </div>}

                {/* 5rd div  */}
               { loadPhotoState >= 5 && <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full '>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage21'>
                        <img src={a10} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage22' >
                        <img src={a24} alt='a78' className='sm:hidden'/>
                    </div>

                    {/* i set bg-image here as a className because inline style dosen't work  */}
                   <div className='row-span-2 bgImage23 h-full bg-[length:auto_100%] bg-no-repeat bg-center cursor-pointer w-full'>
                        <img src={a19} alt="" className='sm:hidden' />
                    </div>


                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage24' >
                        <img src={a38} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage25'  >
                        <img src={a12} alt='a78' className='sm:hidden'/>
                    </div>
                </div>}

                {/* finally div  */}
                { loadPhotoState >= 6 && <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full '>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage26'>
                        <img src={a35} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage27' >
                        <img src={a26} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] cursor-pointer md:h-[14rem] bg-center bg-cover bgImage28'  >
                        <img src={a92} alt='a78' className='sm:hidden'/>
                    </div>
                </div>}

            </section>

            <OnTopBtn brdrColor='border-gray-100' textColor = ' text-white'/>

    </main>);
}