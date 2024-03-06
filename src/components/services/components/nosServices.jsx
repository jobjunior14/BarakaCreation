/* eslint-disable react/prop-types */
export default function NosServices ({iconeSrc, title, texte}) {

    return (
        <div className='flex flex-col items-center justify-center gap-3 '>
            <div className='w-full flex flex-col justify-center gap-2 items-center'>
                <img loading='lazy' src={iconeSrc} alt='icone' className='h-[2.375rem] sm:h-[2.625rem] md:h-[2.75rem] lg:h-[2.875rem]'/>
                <div className='bg-gray-500 mt-1 w-full h-[1px]'></div>
            </div>
            <div className='flex flex-col gap-2 text-center h-20 '>
                <h3 className='text-[0.9rem] leading-4 font-interBold sm:text-[1rem]  text-gray-700 '>{title}</h3>
                <p className=' font-interRegular font-[500] leading-3 sm:leading-4 text-[0.625rem] sm:text-[0.75rem] md:text-[0.8rem] text-gray-900'>{texte}</p>
            </div>
        </div>
    )
}