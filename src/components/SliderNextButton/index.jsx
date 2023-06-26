import React from 'react';
import {useSwiper} from 'swiper/react';
import s from "../SwiperBlock/SwiperBlock.module.scss";
import next_btn from "../../assets/img/next_btn.png";

export default function SlideNextButton() {
    const swiper = useSwiper();
    return (
        <div onClick={() => swiper.slideNext()} className={s.next_btn}>
            <img src={next_btn} alt="next"/>
        </div>
    );
}