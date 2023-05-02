import React, {useState} from 'react';
import classNames from "classnames";

import bottle from './../../assets/img/orange_bottle.png';
import orange_spray_right from './../../assets/img/orange_spray_right.png';
import orange_spray_left from './../../assets/img/orange_spray_left.png';
import lazy_orange_people from './../../assets/img/lazy_orange_people.png';
import union_eat from './../../assets/img/union_eat.png';
import cofe_green from './../../assets/img/cofe_green.png';
import melon from './../../assets/img/melon.png';
import melon_half from './../../assets/img/melon_half.png';
import melon_and_chizecake from './../../assets/img/melon_and_chizecake.png';

import s from './YellowBlock.module.scss';
import {useInView} from "react-intersection-observer";

const YellowBlock = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const [isHover, setIsHover] = useState(false);

    return <>
        <div className={s.wrapper}>
            <img ref={ref} className={s.bottle} src={bottle} alt="crazy lazy energy бутылка с дыней и чизкейком"/>
            <img className={s.spray_left} src={orange_spray_left} alt="брызга"/>
            <img className={s.spray_right} src={orange_spray_right} alt="брызга"/>
            <img className={s.melon_half} src={melon_half} alt="дыня"/>
            <img className={s.melon_2} src={melon} alt="дыня"/>
            <img
/*                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}*/
                className={classNames(s.lazy_people, {
                    [s.lazy_show]: inView,
                    [s.lazy_animation]: inView,
                })}
                src={lazy_orange_people}
                alt="лейзи кушает"
            />
            <img className={s.melon_text} src={melon_and_chizecake} alt="дыня и чизкейк"/>
            <img className={classNames(s.union_eat, {
                [s.union_show]: inView,
                [s.union_animation]: inView,
            })} src={union_eat} alt="мысли лейзи"/>
            <img className={s.cofe} src={cofe_green} alt="кофеин"/>



        </div>
    </>
}

export default YellowBlock;