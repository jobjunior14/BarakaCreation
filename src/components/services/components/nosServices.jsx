/* eslint-disable react/prop-types */
export default function NosServices ({iconeSrc, title, texte}) {

    return (
        <div className='flex flex-col items-center justify-center gap-3 '>
            <div className='w-full flex flex-col justify-center items-center'>
                <img src={iconeSrc} alt='icone' className='h-[38px] sm:h-[42px] md:h-[44px] lg:h-[46px]'/>
                <div className='bg-gray-500 mt-1 w-full h-[1px]'></div>
            </div>
            <div className='flex flex-col text-center justify-center'>
                <h3 className='text-[12px] font-bold sm:text-[14px] text-gray-700'>{title}</h3>
                <p className='text-[10px] sm:text-[12px] text-gray-700'>{texte}</p>
            </div>
        </div>
    )
}