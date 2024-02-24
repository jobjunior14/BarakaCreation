import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import mamour_1 from '../../assets/Publication/Mamour/mamour_1.jpg';
import mamour_1_2 from '../../assets/Publication/Mamour/mamour_1_2.jpg';
import mamour_2 from '../../assets/Publication/Mamour/mamour_2.jpg';
import mamour_2_2 from '../../assets/Publication/Mamour/mamour_2_2.jpg';
import mamour_3 from '../../assets/Publication/Mamour/mamour_3.jpg';
import mamour_4 from '../../assets/Publication/Mamour/mamour_4.jpg';
import mamour_5 from '../../assets/Publication/Mamour/mamour_5.jpg';
import mamour_5_2 from '../../assets/Publication/Mamour/mamour_5_2.jpg';
import mamour_6 from '../../assets/Publication/Mamour/mamour_6.jpg';
import mamour_7 from '../../assets/Publication/Mamour/mamour_7.jpg';
import mamour_8 from '../../assets/Publication/Mamour/mamour_8.jpg';
import mamour_8_2 from '../../assets/Publication/Mamour/mamour_8_2.jpg';
import mamour_9 from '../../assets/Publication/Mamour/mamour_9.jpg';
import mamour_10 from '../../assets/Publication/Mamour/mamour_10.jpg';
import mamour_11 from '../../assets/Publication/Mamour/mamour_11.jpg';
import mamour_12 from '../../assets/Publication/Mamour/mamour_12.jpg';
import mamour_13 from '../../assets/Publication/Mamour/mamour_13.jpg';
import mamour_14 from '../../assets/Publication/Mamour/mamour_14.jpg';
import mamour_15 from '../../assets/Publication/Mamour/mamour_15.jpg';
import mamour_15_2 from '../../assets/Publication/Mamour/mamour_15_2.jpg';
import mamour_16 from '../../assets/Publication/Mamour/mamour_16.jpg';

import ImageSlider from "./comp/imageSlider";
export default function Mamour () {

    const images = [
        mamour_1,
        mamour_1_2,
        mamour_2,
        mamour_2_2,
        mamour_3,
        mamour_4,
        mamour_5,
        mamour_5_2,
        mamour_6,
        mamour_7,
        mamour_8,
        mamour_8_2,
        mamour_9,
        mamour_10,
        mamour_11,
        mamour_12,
        mamour_13,
        mamour_14,
        mamour_15,
        mamour_15_2,
        mamour_16
    ]

    return (<>

        <ImageSlider
            images={images}
            title={'Mamour'}
        />
    </>)
}