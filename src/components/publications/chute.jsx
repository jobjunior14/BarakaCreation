import a_01 from '../../assets/Publication/Apres la chute/a_01.jpg';
import a_02 from '../../assets/Publication/Apres la chute/a_02.jpg';
import a_03 from '../../assets/Publication/Apres la chute/a_03.jpg';
import a_04 from '../../assets/Publication/Apres la chute/a_04.jpg';
import a_05 from '../../assets/Publication/Apres la chute/a_05.jpg';
import a_06 from '../../assets/Publication/Apres la chute/a_06.jpg';
import a_07 from '../../assets/Publication/Apres la chute/a_07.jpg';
import a_08 from '../../assets/Publication/Apres la chute/a_08.jpg';
import a_09 from '../../assets/Publication/Apres la chute/a_09.jpg';
import a_10 from '../../assets/Publication/Apres la chute/a_10.jpg';

import ImageSlider from "./comp/imageSlider"
export default function Chute () {

    const images = [
        a_01,
        a_02,
        a_03,
        a_04,
        a_05,
        a_06,
        a_07,
        a_08,
        a_09,
        a_10,
    ]
     return (<>
        <ImageSlider
            images={images}
            title={'Après la chute'}
        />
    </>)
}