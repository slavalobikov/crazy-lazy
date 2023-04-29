import React, {useState} from 'react';
import classNames from "classnames";

import yellow_bacground from './../../assets/img/yellow_bacground.png';
import orange_wave from './../../assets/img/orange_wave.png';
import yellow_bottle from './../../assets/img/yellow_bottle.png';
import energy_orange from './../../assets/img/energy_orange.png';
import cirkle from './../../assets/img/cirkle.png';
import yellow_spray from './../../assets/img/yellow_spray.png';
import crazy_kent from './../../assets/img/crazy_kent.png';
import linchi_pineapple from './../../assets/img/linchi_pineapple.png';
import union_yellow from './../../assets/img/union_yellow.png';

import s from './OrangeBlock.module.scss';
import {useInView} from "react-intersection-observer";

const OrangeBlock = () => {
    const [isHover, setIsHover] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    return (
        <div className={s.wrapper}>
            <img className={s.orange_wave} src={orange_wave} alt="orange wave"/>
            <img ref={ref} className={s.yellow_bottle} src={yellow_bottle} alt="личи ананас бутылка"/>
            <img className={s.energy} src={energy_orange} alt="enegry"/>
            <img className={s.pineapple_linchi} src={linchi_pineapple} alt="личи ананас"/>
            <img className={s.berry} src={cirkle} alt="ягода"/>
            <img className={s.yellow_spray} src={yellow_spray} alt="желтая брызга"/>
            <img className={classNames(s.union, {
                [s.union_show]: isHover,
            })} src={union_yellow}
                 alt="личи смиотрит на бутылку"/>
            <img
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={classNames(s.crazy_linch, {
                [s.linch_show]: isHover,
                [s.linch_animation]: inView,
            })} src={crazy_kent}
                 alt="crazy линч"/>

        </div>
    )
}

export default OrangeBlock;