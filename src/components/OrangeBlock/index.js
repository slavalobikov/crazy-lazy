import React, {useState} from 'react';

import yellow_bacground from './../../assets/img/yellow_bacground.png';
import orange_wave from './../../assets/img/orange_wave.png';
import yellow_bottle from './../../assets/img/yellow_bottle.png';
import cirkle from './../../assets/img/cirkle.png';
import energy_left from './../../assets/img/energy_left.png';
import yellow_spray from './../../assets/img/yellow_spray.png';
import crazy_kent from './../../assets/img/crazy_kent.png';
import linchi_pineapple from './../../assets/img/linchi_pineapple.png';
import union_yellow from './../../assets/img/union_yellow.png';

import s from './OrangeBlock.module.scss';
import classNames from "classnames";

const OrangeBlock = () => {
    const [isHover, setIsHover] = useState(false)
    return (
        <div className={s.orange_block}>
            <img className={s.orange_wave} src={orange_wave} alt="orange wave"/>
            <div className={s.wrapper}>
                <div className={s.relative}>
                    <img className={s.yellow_bottle} src={yellow_bottle} alt="личи ананас бутылка"/>
                    <img className={s.cirkle_1} src={cirkle} alt="ягода"/>
                    <img className={s.cirkle_2} src={cirkle} alt="ягода"/>
                    <img className={s.energy} src={energy_left} alt="energy"/>
                    <img className={s.yellow_spray} src={yellow_spray} alt="желтая брызга"/>
                    <img onMouseEnter={() => setIsHover(true)} className={classNames(s.crazy_linch, {
                        [s.linch_show]: isHover,
                    })} src={crazy_kent}
                         alt="crazy линч"/>
                    <img className={s.pineapple_linchi} src={linchi_pineapple} alt="личи ананас"/>
                    <img className={classNames(s.union, {[s.union_show]: isHover})} src={union_yellow}
                         alt="личи смиотрит на бутылку"/>
                    <div className={classNames(s.union_text, {
                        [s.union_show]: isHover,
                    })}>
                        Знаешь этот вайб, когда вокруг веселый движ, когда залетают видосы, когда хочется придумывать
                        идеи и покорять миры. Да, в играх тоже считается! Тропик вкус, кайфовый, как летний день!
                    </div>
                    <img className={s.cirkle_3} src={cirkle} alt="ягода"/>
                </div>
            </div>

            {/*
            <img className={s.yellow_background} src={yellow_bacground} alt="background wave"/>
*/}
        </div>
    )
}

export default OrangeBlock;