
import icone_contat_Whatsapp from '../assets/Contact/icone_contat_Whatsapp.png';
import icone_contat_call_center from '../assets/Contact/icone_contat_call_center.png';
import icone_contat_Mail from '../assets/Contact/icone_contat_Mail.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import bcBehance from '../assets/Icones/bcBehance.png';
import bcFb from '../assets/Icones/bcFb.png';
import bcInsta from '../assets/Icones/bcInsta.png';
import bclinkedin from '../assets/Icones/bclinkedin.png';
import bctwitter_2 from '../assets/Icones/bctwitter_2.png';
import iconPinterest from '../assets/Icones/iconPinterest.png';
import iconTiktok from '../assets/Icones/iconTiktok.png';
import iconyoutube from '../assets/Icones/iconyoutube.png';
import axios from 'axios';
export default function Contacts () {
    
    const [data, setData] = useState({
        nom: '',
        email: '',
        tel: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [dataMessage, setDataMessage] = useState({nom: false, email: false, message: false, tel: false});
    const [fetchingMessage, setFetchingMessage] = useState(false);

    const handleData = (name, value) => {
        setData(prev => ({...prev, [name]: value}))
    };

    const Usermessage = `Nom: ${data.nom}\nTelephone: ${data.tel}\nEmail: ${data.email}\n \n  MESSAGE: \n \n ${data.message}`

    
    const sendingData = async (data) => {

        if (data.nom === '') {
            return setDataMessage(prev => ({...prev, nom: true}))
        }
        if (data.email === '' && data.tel === '') {
            return setDataMessage(prev => ({...prev, email: true, tel: true}));
        }
        if (data.message === '') {
            return setDataMessage(prev => ({...prev, message: true}))
        }
       
        try {
            
            setLoading(true);
            const dataFect = await axios.post('https://degobar.onrender.com/api/v1/user/barakaCreation', {message: Usermessage});

            setFetchingMessage('Message envoyé avec succès');
            
        } catch (err) {
            setFetchingMessage('Une erreur est survenue, ressayé plus-tard');
            setLoading(false);
            
        } finally {

            setLoading(false);
        }
    } 

    return (<main className='px-[10%] justify-center items-center py-10 bg-slate-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5'>
        
        {/* Baraka information  */}
        <section className='flex flex-col gap-3 items-start sm:w-[35%] relative sm:h-[20rem] w-full '> 

            <section className='flex flex-col gap-3 items-start'>
                <div className="flex gap-3 justify-center items-center">
                    <div className='w-[1.3rem]'>
                        <img src={icone_contat_Mail}/>
                    </div>
                    <p className=" font-bold text-[13px] text-gray-700"> barakalurhakwa@gmail.com</p>
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <div className='w-[1.3rem]'>
                        <img src={icone_contat_call_center}/>
                    </div>
                    <p className=" font-bold text-[13px] text-gray-700">+243 976 458 461</p>
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <div className='w-[1.3rem]'>
                        <img src={icone_contat_Whatsapp}/>
                    </div>
                    <p className=" font-bold text-[13px] text-gray-700">+243 823 468 444</p>
                </div>
            </section>

            <section className='sm:grid grid-cols-4 gap-3 hidden absolute bottom-4'>
                
                <Link to={'https://www.behance.net/barakacreation'}> <img src={bcBehance} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://web.facebook.com/barakalurhakwa'}><img src={bcFb} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://www.instagram.com/barakacreation/'}><img src={bcInsta} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://www.linkedin.com/in/baraka-creation-a0a69321b/'}><img src={bclinkedin} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://twitter.com/BarakaLurhakwa'}><img src={bctwitter_2} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://www.pinterest.fr/barakalurhakwa/'}><img src={iconPinterest} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://www.tiktok.com/@barakacrea'}><img src={iconTiktok} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://www.youtube.com/channel/UCUIo11-hI77iG8CqH5DQScA'}><img src={iconyoutube} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
            
            </section>
            
        </section>

        {/* clients info  */}
        <section className='flex flex-col gap-3 sm:w-[55%] '>

            <h1 className='text-blue-500 text-2xl text-left font-bold'>Entrons en contact</h1>
            <div className='flex flex-col gap-1'> 
                <label className='text-left text-[12px] text-gray-700 ' htmlFor="nom">Votre nom</label>
                <input onChange={(e) => {
                    const {name, value} = e.target;
                    if (value !== '') setDataMessage(prev => ({...prev, nom: false}))
                    return handleData(name, value);
                }}  value={data.nom} placeholder='Votre Nom' type="text" id='nom' name='nom' className={` rounded-lg focus:border-blue-200 focus:outline border-2 ${dataMessage.nom ? 'border-red-500' : ""}  outline-none px-2 py-1 text-gray-700`}/>
                {dataMessage.nom && <p className='text-[11px] text-red-500'>veillez donner votre nom s&apos;il vous plait</p>}
             </div>

            <div className='flex flex-col gap-1'> 
                <label className='text-left text-[12px] text-gray-700 ' htmlFor="email">Votre mail</label>
                <input onChange={(e) => {
                    const {name, value} = e.target;

                    return handleData(name, value);
                }}  value={data.email} placeholder='Votre mail' type="text" id='email' name='email' className={` rounded-lg focus:border-blue-200 focus:outline border-2 ${dataMessage.email ? 'border-red-500' : ""}  outline-none px-2 py-1 text-gray-700`}/>

            </div>

            <div className='flex flex-col gap-1'> 
                <label className='text-left text-[12px] text-gray-700 ' htmlFor="tel">Num Tel</label>
                <input onChange={(e) => {
                    const {name, value} = e.target;
                    if (value) setDataMessage (prev => ({...prev, email: false, tel: false}));
                    return handleData(name, value);
                }}  value={data.tel} placeholder='Votre numero téléphone' type="text" id='tel' name='tel' className={` rounded-lg focus:border-blue-200 focus:outline border-2 ${dataMessage.email ? 'border-red-500' : ""}  outline-none px-2 py-1 text-gray-700`}/>
                {dataMessage.email && <p className='text-[11px] text-red-500'>Fournissez soit votre numero ou email</p>}
            </div>

            <div className='flex flex-col gap-1'> 
                <label className='text-left text-[12px] text-gray-700 ' htmlFor="message">Message </label>
                <textarea onChange={(e) => {
                    const {name, value} = e.target;
                    if (value !== '') setDataMessage(prev => ({...prev, message: false}));
                    return handleData(name, value);
                }}  value={data.message} placeholder='Votre message' className={` rounded-lg focus:border-blue-200 focus:outline border-2 ${dataMessage.message ? 'border-red-500' : ""}  outline-none px-2 py-1 text-gray-700`} name="message" id="message" cols="30" rows="5"></textarea>
                {dataMessage.message && <p className='text-[11px] text-red-500'>Veillez ne pas envoyer un message vide</p>}

            </div>
            
            { fetchingMessage && <p className={` text-[12px] ${fetchingMessage ? fetchingMessage === 'Message envoyé avec succès' ? 'text-blue-500' : 'text-red-500' : ''}`}> {fetchingMessage}</p>}
            <div className='w-full sm:text-left  justify-center items-center'>
                <button disabled={loading} onClick={() => sendingData(data)} className='bg-blue-500 duration-150 text-gray-100 px-5 py-1 rounded-full active:bg-blue-300'>{!loading ? 'Envoyer' : <div className='w-1 h-[2px] animate-spin border-2 p-2 rounded-full border-t-gray-100 border-r-gray-300 border-blue-500  '></div>}</button>
            </div>
        </section>

        {/* link section  */}
        <section className='sm:hidden grid grid-cols-4 gap-3 justify-center items-center'>
                
                <Link to={'https://www.behance.net/barakacreation'}> <img src={bcBehance} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://web.facebook.com/barakalurhakwa'}><img src={bcFb} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://www.instagram.com/barakacreation/'}><img src={bcInsta} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://www.linkedin.com/in/baraka-creation-a0a69321b/'}><img src={bclinkedin} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://twitter.com/BarakaLurhakwa'}><img src={bctwitter_2} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://www.pinterest.fr/barakalurhakwa/'}><img src={iconPinterest} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://www.tiktok.com/@barakacrea'}><img src={iconTiktok} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
                <Link to={'https://www.youtube.com/channel/UCUIo11-hI77iG8CqH5DQScA'}><img src={iconyoutube} alt='image' className='w-[1.5rem] hover:scale-110 duration-200'/></Link>
            
        </section>
    </main>)
}