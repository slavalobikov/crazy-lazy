import React, {useState} from 'react';

import vitamin_b_green from './../../assets/img/vitamin_b_green.png';
import taurin from './../../assets/img/taurin_pink.png';
import cafe from './../../assets/img/coffe.png';
import crazy_mobile_block from './../../assets/img/crazy_mobile_block.png';
import union_mobile_block from './../../assets/img/union_mobile_block.png';
import melon from './../../assets/img/melon.png';
import s from './MobileBlock.module.scss';
import classNames from "classnames";

const MobileBlock = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div className={s.block}>
            <img className={s.vitamin_b} src={vitamin_b_green} alt="витамин B"/>
            <img className={s.taurin} src={taurin} alt="таурин"/>
            <div className={s.mobilka}>
                <div className={s.relative}>
                    <div className={s.video_placeholder}/>
                    <img className={s.cafe} src={cafe} alt='кофеин'/>
                    <div className={s.eyebrow}/>
                </div>
            </div>
            <img onMouseEnter={() => setIsHover(true)} className={s.people} src={crazy_mobile_block} alt="крейзи"/>
            <img className={classNames(s.union, {[s.union_show]: isHover})} src={union_mobile_block}
                 alt="мысли крейзи"/>
            <div className={classNames(s.union_text, {[s.union_text_show]: isHover})}>да ты крейзи!</div>
            <img className={s.melon_1} src={melon} alt="дыня"/>
        </div>
    )
}

export default MobileBlock;