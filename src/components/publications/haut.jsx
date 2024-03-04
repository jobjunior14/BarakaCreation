import Haut_1 from '../../assets/Publication/Haut/Haut_1.jpg';
import Haut_2 from '../../assets/Publication/Haut/Haut_2.jpg';
import Haut_3 from '../../assets/Publication/Haut/Haut_3.jpg';
import Haut_4 from '../../assets/Publication/Haut/Haut_4.jpg';
import Haut_5 from '../../assets/Publication/Haut/Haut_5.jpg';
import Haut_6 from '../../assets/Publication/Haut/Haut_6.jpg';
import Haut_7 from '../../assets/Publication/Haut/Haut_7.jpg';
import Haut_8 from '../../assets/Publication/Haut/Haut_8.jpg';
import Haut_9 from '../../assets/Publication/Haut/Haut_9.jpg';
import Haut_10 from '../../assets/Publication/Haut/Haut_10.jpg';
import Haut_11 from '../../assets/Publication/Haut/Haut_11.jpg';
import Haut_12 from '../../assets/Publication/Haut/Haut_12.jpg';
import Haut_13 from '../../assets/Publication/Haut/Haut_13.jpg';
import Haut_14 from '../../assets/Publication/Haut/Haut_14.jpg';
import Haut_15 from '../../assets/Publication/Haut/Haut_15.jpg';
import Haut_16 from '../../assets/Publication/Haut/Haut_16.jpg';
import Haut_16_1 from '../../assets/Publication/Haut/Haut_16_1.jpg';
import Haut_17 from '../../assets/Publication/Haut/Haut_17.jpg';
import Haut_18 from '../../assets/Publication/Haut/Haut_18.jpg';
import Haut_19 from '../../assets/Publication/Haut/Haut_19.jpg';
import Haut_20 from '../../assets/Publication/Haut/Haut_20.jpg';
import Haut_21 from '../../assets/Publication/Haut/Haut_21.jpg';
import Haut_22 from '../../assets/Publication/Haut/Haut_22.jpg';
import Haut_23 from '../../assets/Publication/Haut/Haut_23.jpg';
import Haut_24 from '../../assets/Publication/Haut/Haut_24.jpg';
import haut_Publication from '../../assets/Publication/Haut/haut_Publication.jpg';
import Fin_slide_Publication from '../../assets/Publication/Fin_slide_Publication.jpg';
import Fin_2_Publication from '../../assets/Publication/Fin_2_Publication.jpg';
import ImageSlider from "./comp/imageSlider";
import Haut_music from '../../assets/Musics/Haut_music.mp3'
export default function Haut () {

    const images = [
        Fin_slide_Publication,
        haut_Publication,
        Haut_1,
        Haut_2,
        Haut_3,
        Haut_4,
        Haut_5,
        Haut_6,
        Haut_7,
        Haut_8,
        Haut_9,
        Haut_10,
        Haut_11,
        Haut_12,
        Haut_13,
        Haut_14,
        Haut_15,
        Haut_16,
        Haut_16_1,
        Haut_17,
        Haut_18,
        Haut_19,
        Haut_20,
        Haut_21,
        Haut_22,
        Haut_23,
        Haut_24,
        Fin_2_Publication
    ]
    return (<>
        <ImageSlider
        images={images}
        title={'Haut'}
        audio={Haut_music}
    />
    </>)
}