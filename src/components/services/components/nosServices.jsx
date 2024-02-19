/* eslint-disable react/prop-types */
export default function NosServices ({iconeSrc, title, texte}) {

    return (
        <div className='flex flex-col items-center justify-center gap-3 '>
            <div className='w-full flex flex-col justify-center items-center'>
                <img src={iconeSrc} alt='icone' className='h-[2.375rem] sm:h-[2.625rem] md:h-[2.75rem] lg:h-[2.875rem]'/>
                <div className='bg-gray-500 mt-1 w-full h-[1px]'></div>
            </div>
            <div className='flex flex-col text-center h-20 '>
                <h3 className='text-[0.75rem] font-bold sm:text-[0.875rem] md:text-[0.9rem] lg:text-[1rem] text-gray-700'>{title}</h3>
                <p className='text-[10px] sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.9rem] text-gray-700'>{texte}</p>
            </div>
        </div>
    )
}