import React, {useState} from 'react';

import vitamin_b_green from './../../assets/img/vitamin_b_green.png';
import taurin from './../../assets/img/taurin_pink.png';
import cafe from './../../assets/img/coffe.png';
import crazy_mobile_block from './../../assets/img/crazy_mobile_block.png';
import union_mobile_block from './../../assets/img/union_mobile_block.png';
import mobile_block_right from './../../assets/img/mobile_block_right.png';
import mobile_block_left from './../../assets/img/mobile_block_left.png';
import mobile_mobile from './../../assets/img/mobile_mobile.png';
import fruit_mobile_left from './../../assets/img/fruit_mobile_left.png';
import mobile from './../../assets/img/mobile.png';
import fruit_mobile from './../../assets/img/fruit_mobile.png';
import fruit_mobile_left_for_mobile from './../../assets/img/fruit_mobile_left_for_mobile.png';
import s from './MobileBlock.module.scss';
import classNames from "classnames";
import {useInView} from "react-intersection-observer";

const MobileBlock = ({isMobileBlockShow, refMobileBlock}) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    return (
        <div ref={refMobileBlock} className={classNames(s.block, {
            [s.show_block]:isMobileBlockShow}
        )}>
            <img className={s.mobile_block_right} src={mobile_block_right} alt="элементы"/>
            <img className={s.mobile_block_left} src={mobile_block_left} alt="элементы"/>
            <img className={s.mobile} src={mobile_mobile} alt="рамка"/>
            <div className={s.video_placeholder} />
            <img className={s.mobile_for_mobile} src={mobile} alt="мобильник"/>

            {/*            <img className={s.vitamin_b} src={vitamin_b_green} alt="витамин B"/>
            <img className={s.taurin} src={taurin} alt="таурин"/>
            <img className={s.cafe} src={cafe} alt='кофеин'/>
            <img className={s.energy_mobile} src={energy_mobile} alt="energy"/>
            <img className={s.fruit_mobile} src={fruit_mobile} alt="фрукты"/>
            <div className={s.mobilka}>
                <div className={s.relative}>
                    <div className={s.video_placeholder}/>
                    <div className={s.eyebrow}/>
                </div>
            </div>
            <img className={s.mobile_for_mobile} src={mobile} alt="мобильник"/>
            <img className={s.fruit_mobile_left} src={fruit_mobile_left} alt="мобильник"/>
            <img className={s.fruilt_mobile_left_for_mobile} src={fruit_mobile_left_for_mobile} alt="фрукты"/>*/}
            <img className={s.fruilt_mobile_left_for_mobile} src={fruit_mobile_left_for_mobile} alt="фрукты"/>
            <img className={s.fruit_mobile_left} src={fruit_mobile_left} alt="мобильник"/>
            <img ref={ref} className={classNames(s.union, {[s.union_show]: inView})} src={union_mobile_block}
                 alt="мысли крейзи"/>
            <img className={s.crazy} src={crazy_mobile_block} alt="крейзи"/>

{/*
            <div className={classNames(s.union_text, {[s.union_text_show]: inView})}>да ты крейзи!</div>
*/}
        </div>
    )
}

export default MobileBlock;