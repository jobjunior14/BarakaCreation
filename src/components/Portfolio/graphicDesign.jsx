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


export default function ImageGraphiqueDesign () {


    return (<main className=" flex flex-col gap-10 bg-black">

            {/* section welcom image  */}
            <section className="flex flex-col gap-5 bg-gradient-to-t from-black to-gray-800 pt-10">
                
                <h1 className="text-6xl text-gray-100 font-bold">Graphic Design</h1>
                <p className="px-[10%] text-md text-gray-200 font-semibold "> Identié | Campagne | Event | Mise en page | Présentation</p>
            </section>

            <section className="grid grid-cols-1 gap-2  px-[10%] w-full py-10" >

                {/* first div */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full '>

                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage1'>
                        <img src={a78} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage2' >
                        <img src={a61} alt='a78' className='sm:hidden'/>
                    </div>

                    {/* i set bg-image here as a className because inline style dosen't work  */}
                   <div className='row-span-2 bgImage3 h-full bg-[length:auto_100%] bg-no-repeat bg-center cursor-pointer w-full'>
                        <img src={a73} alt="" className='sm:hidden' />
                    </div>


                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage4' >
                        <img src={a4} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage5'  >
                        <img src={a47} alt='a78' className='sm:hidden'/>
                    </div>
                </div>

                {/* second div  */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full '>

                    {/* i set bg-image here as a className because inline style dosen't work  */}
                   <div className='row-span-2 bgImage6 h-full bg-[length:auto_100%] bg-no-repeat bg-center cursor-pointer w-full'>
                        <img src={a52} alt="" className='sm:hidden' />
                    </div>

                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage7'>
                        <img src={a84} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage8' >
                        <img src={a42} alt='a78' className='sm:hidden'/>
                    </div>



                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage9' >
                        <img src={a16} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage10'  >
                        <img src={a59} alt='a78' className='sm:hidden'/>
                    </div>
                </div>
               {/* 3rd div  */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 w-full '>

                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage11'>
                        <img src={a29} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage12' >
                        <img src={a49} alt='a78' className='sm:hidden'/>
                    </div>

                    {/* i set bg-image here as a className because inline style dosen't work  */}
                   <div className='row-span-2 bgImage13 h-full bg-[length:auto_100%] bg-no-repeat bg-center cursor-pointer w-full'>
                        <img src={a45} alt="" className='sm:hidden' />
                    </div>


                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage14' >
                        <img src={a86} alt='a78' className='sm:hidden'/>
                    </div>

                    <div className=' w-full sm:h-[12.5rem] md:h-[14rem] bg-center bg-cover bgImage15'  >
                        <img src={a32} alt='a78' className='sm:hidden'/>
                    </div>
                </div>


            </section>
    </main>);
}