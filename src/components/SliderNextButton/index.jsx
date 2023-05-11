import React from 'react';
import {useSwiper} from 'swiper/react';
import s from "../SwiperBlock/SwiperBlock.module.scss";
import button_yellow from "../../assets/img/button_yellow.png";

export default function SlideNextButton({setIsBtnPressed, isBtnPressed}) {
    const swiper = useSwiper();
    return (
    <button onClick={() => {
        if (!isBtnPressed) {
            setIsBtnPressed(true)
        } else {
            swiper.slideNext()
        }
    }}  className={s.button_yellow}>
        <img src={button_yellow} alt="ЖМИ"/>
        <div className={s.text}>ЖМИ</div>
    </button>
    );
}