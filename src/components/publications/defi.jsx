import _01 from '../../assets/Publication/Le reve et le defi/_01.jpg';
import _02 from '../../assets/Publication/Le reve et le defi/_02.jpg';
import _03 from '../../assets/Publication/Le reve et le defi/_03.jpg';
import _04 from '../../assets/Publication/Le reve et le defi/_04.jpg';
import _06 from '../../assets/Publication/Le reve et le defi/_06.jpg';
import _07 from '../../assets/Publication/Le reve et le defi/_07.jpg';
import _08 from '../../assets/Publication/Le reve et le defi/_08.jpg';
import _09 from '../../assets/Publication/Le reve et le defi/_09.jpg';
import _10 from '../../assets/Publication/Le reve et le defi/_10.jpg';
import _11 from '../../assets/Publication/Le reve et le defi/_11.jpg';

import ImageSlider from "./comp/imageSlider";
export default function Defi () {

    const images = [
        _01,
        _02,
        _03,
        _04,
        _06,
        _07,
        _08,
        _09,
        _10,
        _11,
    ]
    return (<>
        <ImageSlider
            images={images}
            title={'Le reve et le défi'}
        />
    </>)
}