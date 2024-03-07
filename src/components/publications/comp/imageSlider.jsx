/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useWindowWidth from "../../windowWidth";
import { useMatch } from "react-router-dom";
export default function ImageSlider ({images, title, audio}) {

    const [index, setIndex] = useState(0);
    const audioRef = useRef (new Audio(audio));
    const [currentTime, setCurrentTime] = useState(audioRef.current.currentTime);
    const minutes = Math.floor((images.length * 6) / 60);
    const seconds = Math.floor((images.length * 6) % 60);

    //check if the browser support an auto play attribute on  VIDEO OR AUDIO    
    const isAutoplaySupported = audioRef.current.autoplay;


    // useEffect to update time //////////////////////////////////
    useEffect(() => {

        const interval = setInterval(() => setCurrentTime(audioRef.current.currentTime), 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    // slide the images automaticaly///////////////////////////////////////////
    useEffect(() => {

        const interval = setInterval(() => {
            
            setIndex ( prev => {
                return prev === (images.length - 1 ) * 100 ? 0 : prev + 100
            });
        }, 6000) ;


        return () => {
            clearInterval(interval);
        }
    }, [index]);



    // check if the audio background reach the end to restart it //////////////////////////////////////
    if (audioRef.current.currentTime >= (images.length * 6)) {
        audioRef.current.currentTime = 0;
    }

    const nextImage = () =>  {
        setIndex ( prev => {
            
            // sync the audio and the image 
            audioRef.current.currentTime = ((prev === (images.length - 1 ) * 100 ? 0 : prev + 100) / 100) * 6;
            return prev === (images.length - 1 ) * 100 ? 0 : prev + 100;
        });

        setCurrentTime(audioRef.current.currentTime);

    };


    const prevImage = () =>  {

        setIndex ( prev => {
            
            audioRef.current.currentTime = ((prev === 0 ? (images.length - 1 ) * 100 : prev - 100) / 100) * 6;
            return prev === 0 ? (images.length - 1 ) * 100 : prev - 100;
        });

        audioRef.current.currentTime = (index / 100) * 6;
        setCurrentTime(audioRef.current.currentTime);
    };

    //set the orientation of the screen to landscape if we are under 640px
    const width = useWindowWidth();

    

    //state to mute background music or not 
    const [mute, setMute] = useState(false);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    const handleMuted = () => {
        setMute(prev => prev ? false : true);
    };

    //initialize the controller tio true 
    const [hideVideoController, setHideVideoController] = useState (true);
    //help us to store the setTimeoutID
    const timeoutRef = useRef(null);

    //check if the audio is ready to player than restart the slider
    const [canPlay, setCanPlay] = useState(0);

    //restart the slider if the canPlay number === 1
    useEffect(() => {

        if (canPlay === 1) {

            setIndex( prev => 0);
        }
    }, [canPlay])


    //time out to show the silde controller
    useEffect(() => {

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set a new timeout to hide the controller after 5 seconds
        timeoutRef.current = setTimeout(() => {
            setHideVideoController(false);
        }, 5000);

    }, []);

    const handleShowController = (e) => {
        // Toggle hide/show controller state based on 'e'
        setHideVideoController(prev => e ? !prev : true);

        // Clear the previous timeout if it exists
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set a new timeout to hide the controller after 5 seconds
        timeoutRef.current = setTimeout(() => {
            setHideVideoController(false);
        }, 5000);
    };

    const circleDiv = images.map((prev, myIndex) => <div key={index + prev} onClick={() => {setIndex(myIndex * 100); audioRef.current.currentTime = myIndex * 6}} className={` w-[100%] h-[3px] rounded-full border border-blue-200 transition-[background-color]  flex hover:bg-gray-400 ${index === (myIndex * 100) ? 'bg-gray-50' : ''} duration-300 delay-200 hover:cursor-pointer`}> </div> );

    //side effect to not re render all the image to improve performance
    const myImages = images.map((prev, myIndex) => <img loading='lazy' key={myIndex} src={prev} alt="image" className={` w-full transition top-0 left-0 duration-[2500ms] delay-200 ease-in-out   ${index === (myIndex * 100) ? 'opacity-100' : ' opacity-0 absolute' }`}/>);

    /////////////set the image div to the full  screen //////////////////////////////////
    const [fullSreen, setFullScreen] = useState(false);

    const handleSetFullSreen  = () =>  {
        setFullScreen(true);
        const element = document.documentElement;
    
        if (!document.fullscreenElement) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
                
            } else if (element.mozRequestFullScreen) {
                //for mozilla browsers
                element.mozRequestFullScreen();
                
            } else if (element.webkitRequestFullScreen) {
                //for chrome, opera & safari browsers (webkit browsers)
                element.webkitRequestFullScreen();
                
            } else if (element.msRequestFullScreen) {
                // IE / edge
                element.msRequestFullScreen();
                
            };
        };
    };

    const handleExitFullScreen = () => {

        setFullScreen(false);

        if (document.exitFullscreen) {
            document.exitFullscreen();
        }  else if (document.webkitRequestFullScreen) {
            document.webkitExitFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullScreen) {
            document.msExitFullScreen();
        };
    };
    

    useEffect(() => {

        const myF = () => {
            audioRef.current.pause();
        }

        window.addEventListener('beforeunload', myF);

        return window.removeEventListener('beforeunload', myF);
    }, []);
    

    return (<main className="w-full h-[100vh] relative flex flex-col justify-center items-center  bg-bgRemporter1 ">
        
        {/* audio  ambiance in background   */}
        {/* onCanPlay function are here to begin the slider if the background song can play ////////////////////////////////////// */}
        <audio controls = {audioRef.current.paused} controlsList="play" onCanPlayThrough={() => setCanPlay(prev => prev + 1)} ref={audioRef} loop muted={mute}  autoPlay type='audio/mp3' src={audio}> your browser can&apos;t support this audio music </audio>


        {/* //////////////////////just put the half of images  on the dom to load it at the same time with the audio//////////////////////////////////// */}
        { canPlay === 0 && <div className="hidden">
            <img src={images[0]} alt="image"/>
            <img src={images[1]} alt="image"/>
            <img src={images[2]} alt="image"/>
            <img src={images[3]} alt="image"/>
            <img src={images[4]} alt="image"/>
        </div>}

        {canPlay >= 1 ? 
            <div className="w-full h-full relative flex flex-col justify-center items-center  bg-bgRemporter1 ">


                {/* message to rotate the screen  */}
                {width <=640 && <div className="absolute top-[10vh] flex flex-col gap-3 justify-center items-center">
                    { audioRef.current.paused && <p className={`text-gray-200 text-xs font-semibold `}>Votre Navigateur ne peut jouer de la musique automatiquement, S&apos;il vous plait veillez appuiyer sur <b>Play</b></p>}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>

                    
                    <p className={`text-gray-200 text-xs font-semibold`}>Roter votre téléphone pour un meilleur visionnage  </p>
                </div>}
                {/* section image */}
                <section  className="w-full relative flex overflow-hidden justify-center items-center gap-2">

                    <div onClick={ (e) => handleShowController (e)} className='w-full flex duration-[1000ms] delay-300 relative' >
                    {myImages}
                    </div>

                    {/* div to prev or next images  */}
                    <div className=' absolute bottom-5 flex items-center duration-500 justify-evenly  w-full px-5' style={{transform: !hideVideoController ? `translateY(20vh)` : `translateY(0%)`}}>
                        
                        <div className='md:w-[35px] md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-gray-600 bg-opacity-45 items-center justify-center rounded-full  duration-200 cursor-pointer pr-[4px] border border-gray-600 flex' onClick={() => {prevImage()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-200  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>

                        </div>
                        
                        
                        <div className='md:w-[35px] md:h-[35px] sm:w-[1.875rem] sm:h-[1.875rem] w-[25px] h-[25px] bg-gray-600 bg-opacity-45 items-center justify-center rounded-full  duration-200 cursor-pointer pl-[4px] border border-gray-600 flex' onClick={ () => {nextImage()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-gray-200 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>

                    </div>

                    {/* circle div to show the image's number  */}
                    <section className={`absolute bottom-2 grid grid-flow-col duration-500  items-center gap-1 h-2 w-full px-5` } style={{transform: !hideVideoController ? `translateY(20vh)` : `translateY(0%)`}}>
                        {circleDiv}
                    </section>
                    
                    {/* custom navBar         */}
                    <section className={`py-3 px-[5%] bg-gradient-to-b from-gray-500 w-full absolute duration-500 top-0 z-50 ` } style={{transform: !hideVideoController ? `translateY(-20vh)` : `translateY(0%)`}}>

                        <section className='w-full flex justify-between item-center'>

                            <h1 className={`font-bold text-gray-100`}> {title} </h1>

                            <div className={`p-1  rounded-full flex gap-4 justify-center items-center`}>
                                <Link to={'../'}>
                                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 text-white`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                    </svg>
                                </Link>

                                { mute ? <svg onClick={handleMuted} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white cursor-pointer ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                    </svg> :
                                    <svg onClick={handleMuted} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                </svg>}

                                {/* displayed the slider timer  */}
                                <p className="text-gray-100 text-xs">{formatTime(currentTime)} - {minutes}:{seconds < 10 ? `0${seconds}` : seconds} </p>
                            </div>
                        </section>

                    </section>

                    {/* set full screen button  */}
                    <section className="absolute  flex bottom-5 duration-500 right-10" style={{transform: !hideVideoController ? `translateY(20vh)` : `translateY(0%)`}}>
                        { !fullSreen ? <svg onClick={handleSetFullSreen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                            </svg> : <svg onClick={handleExitFullScreen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                            </svg>
                        }
                    </section>
                </section>

            </div>: 

            <div className="h-full w-full flex flex-col gap-5 justify-center items-center">

                <h3 className="font-interSemibold text-gray-100 animate-pulse"> Veillez patienter </h3>
                <div className='w-5 h-5 animate-spin border-2 p-4 rounded-full border-t-gray-100 border-r-gray-300 border-blue-500  '></div>
            </div>
        
        }

        
      

        
    </main>)
}