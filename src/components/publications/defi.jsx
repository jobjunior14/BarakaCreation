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
import cover_ordDefii from '../../assets/Publication/Le reve et le defi/cover_ordDefii.jpg';
import Le_reve_debut_Publication from '../../assets/Publication/Le reve et le defi/Le_reve_debut_Publication.jpg';
import Le_reve_Publication from '../../assets/Publication/Le reve et le defi/Le_reve_Publication.jpg';
import Fin_slide_Publication from '../../assets/Publication/Fin_slide_Publication.jpg';
import Reve_et_defi from '../../assets/Musics/Reve_et_defi.mp3'
import ImageSlider from "./comp/imageSlider";
export default function Defi () {

    const images = [
        Le_reve_debut_Publication,
        _01,
        _02,
        _03,
        _04,
        cover_ordDefii,
        _06,
        _07,
        _08,
        _09,
        _10,
        _11,
        Le_reve_Publication,
        Fin_slide_Publication,
   ]
    return (<>
        <ImageSlider
            images={images}
            title={'Le reve et le défi'}
            audio={Reve_et_defi}
        />
    </>)
}