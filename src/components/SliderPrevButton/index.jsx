import React from 'react';

import prev_btn from './../../assets/img/prev_btn.png';
import s from './../SwiperBlock/SwiperBlock.module.scss';
import {useSwiper} from "swiper/react";

const SliderPrevButton = () => {
    const swiper = useSwiper();
    return (
        <div onClick={() => swiper.slidePrev()}>
            <img className={s.prev_btn} src={prev_btn} alt="prev"/>
        </div>
    )
}

export default SliderPrevButton;