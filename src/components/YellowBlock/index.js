import React, {useState} from 'react';
import classNames from "classnames";

import bottle from './../../assets/img/orange_bottle.png';
import taurin_pink from './../../assets/img/taurin_pink.png';
import orange_spray_right from './../../assets/img/orange_spray_right.png';
import orange_spray_left from './../../assets/img/orange_spray_left.png';
import lazy_orange_people from './../../assets/img/lazy_orange_people.png';
import union_eat from './../../assets/img/union_eat.png';
import cofe_green from './../../assets/img/cofe_green.png';
import melon from './../../assets/img/melon.png';
import melon_and_chizecake from './../../assets/img/melon_and_chizecake.png';

import s from './YellowBlock.module.scss';

const YellowBlock = () => {
    const [isHover, setIsHover] = useState(false);
    return <>
        <div className={s.block}/>
        <div className={s.wrapper}>
            <img className={s.bottle} src={bottle} alt="crazy lazy energy бутылка с дыней и чизкейком"/>
            <img className={s.taurin} src={taurin_pink} alt="таурин"/>
            <img className={s.spray_right} src={orange_spray_right} alt="брызга"/>
            <img className={s.spray_left} src={orange_spray_left} alt="брызга"/>
            <img
                onMouseEnter={() => setIsHover(true)}
                className={classNames(s.lazy_people, {
                    [s.lazy_show]: isHover,
                })}
                src={lazy_orange_people}
                alt="лейзи кушает"
            />
            <img className={classNames(s.union_eat,
                {[s.union_show]: isHover})} src={union_eat} alt="мысли лейзи"/>
            <img className={s.cofe} src={cofe_green} alt="кофеин"/>
            <div className={classNames(s.union_text, {
                [s.union_text_show]: isHover,
            })}>
                Ну да, дыня и чизкейк. Думаешь, что это странное, но очень вкусное сочетание? Ага, а свой плейлист и ленту
                TikTok ты видел? Примерно такая же история, если любишь все сразу, не отказывай себе. Ты же Crazy Lazy!
            </div>
            <img className={s.melon_1} src={melon} alt="дыня"/>
            <img className={s.melon_2} src={melon} alt="дыня"/>
            <img className={s.melon_text} src={melon_and_chizecake} alt="дыня и чизкейк"/>
        </div>

    </>
}

export default YellowBlock;