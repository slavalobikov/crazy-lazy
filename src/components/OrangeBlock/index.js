import React from 'react';

import yellow_bacground from './../../assets/img/yellow_bacground.png';
import orange_wave from './../../assets/img/orange_wave.png';

import s from './OrangeBlock.module.scss';

const OrangeBlock = () => {
    return (
        <div className={s.orange_block}>
            <img className={s.orange_wave} src={orange_wave} alt="orange wave"/>
{/*
            <img className={s.yellow_background} src={yellow_bacground} alt="background wave"/>
*/}
        </div>
    )
}

export default OrangeBlock;