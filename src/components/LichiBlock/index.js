import React, {useEffect, useRef, useState} from 'react'
import { useInView } from 'react-intersection-observer';

import linch_yellow_background from './../../assets/img/linch_yellow_background.png';
import pink_bottle from './../../assets/img/pink_bottle.png';
import cumkvat from './../../assets/img/cumkvat.png';
import watermelon_text from './../../assets/img/watermelon_text.png';
import lazy_pink from './../../assets/img/lazy_pink.png';
import union_pink from './../../assets/img/union_pink.png';
import vitamin_b_green from './../../assets/img/vitamin_b_green.png';

import s from './LichiBlock.module.scss';
import classNames from "classnames";

const LichiBlock = ({refLich}) => {

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const [isPinkLichiHover, setIsPinkLichiHover] = useState(false);

    return (
        <div className={s.wrapper} ref={refLich}>
            <img className={s.background} src={linch_yellow_background} alt="background"/>
            <img className={s.vitamin_b} src={vitamin_b_green} alt="витамин B"/>
            <img className={s.pink_bottle} src={pink_bottle} alt="бутылка crazy energy"/>
            <img
                ref={ref}
                className={s.watermelon_text} src={watermelon_text} alt="Арбуз кумкват конопля"/>
            <img
                onMouseEnter={() => setIsPinkLichiHover(true)}
                onMouseLeave={() => setIsPinkLichiHover(false)}
                className={classNames(s.lazyPeople, {
                    [s.lazy_people_animation]: inView,
                    [s.lazy_people_hover]: isPinkLichiHover,
                })} src={lazy_pink}
                alt="Лэйзи"
            />
            <img
                className={classNames(s.union_pink, {
                    [s.union_pink_show]: isPinkLichiHover,
                    [s.union_animation]: inView,
                })}
                src={union_pink} alt="Когда придавило кринжом
        серого мира,
         просто нужен этот яркий дринк! Если ты до
          сих пор не знал, что такое кумкват, знакомься, это цитрус. Он не такой как все. Прям как ты."
            />

        </div>
        /*
            <div ref={refLich} className={s.block}>
                <img className={s.background} src={linch_yellow_background} alt="background"/>
                <div className={s.wrapper}>
                    <img className={s.pink_bottle} src={pink_bottle} alt="бутылка crazy energy"/>
                    <img className={s.cumkvat} src={cumkvat} alt="Кумкват"/>
                    <img className={s.watermelon_text} src={watermelon_text} alt="Арбуз кумкват конопля"/>
                    <div className={s.lazy_wrapper}>
                        <div
                            onMouseOver={() => setIsPinkLichiHover(false)}
                            className={s.overlay_hidden}
                        />
                        <img
                            onMouseEnter={() => setIsPinkLichiHover(true)}
                            className={classNames(s.lazyPeople, {
                                [s.lazy_people_hover]: isPinkLichiHover,
                            })} src={lazy_pink}
                            alt="Лэйзи"
                        />

                        <div className={classNames(s.union_pink_text, {
                            [s.show_union_text]: isPinkLichiHover,
                        })}>
                            Когда придавило кринжом<br/>
                            серого мира, просто нужен этот яркий<br/> дринк! Если ты до сих пор не знал, что<br/> такое
                            кумкват, знакомься,
                            это цитрус. Он <br/> не такой как все. Прям как ты.
                        </div>

                        <img
                            className={classNames(s.union_pink, {
                                [s.union_pink_show]: isPinkLichiHover
                            })}
                            src={union_pink} alt="Когда придавило кринжом
        серого мира,
         просто нужен этот яркий дринк! Если ты до
          сих пор не знал, что такое кумкват, знакомься, это цитрус. Он не такой как все. Прям как ты."
                        />
                    </div>

                </div>
            </div>
        */
    )
}

export default LichiBlock