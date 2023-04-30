import React, {useState} from 'react';

import button_yellow from './../../assets/img/button_yellow.png';
import button_white from './../../assets/img/button_white.png';
import crazy from './../../assets/img/crazy_kent.png';
import pears from './../../assets/img/pears.png';
import crazy_show_union from './../../assets/img/crazy_show_union.png';
import swiper_people_2 from './../../assets/img/swiper_people_2.png';
import crazy_union_2 from './../../assets/img/crazy_union_2.png';
import crazy_3 from './../../assets/img/fruits_logo.png';
import crazy_3_union from './../../assets/img/crazy_union_3.png';
import crazy_4 from './../../assets/img/crazy_3.png';
import crazy_4_union from './../../assets/img/crazy_4_union.png';
import lazy_show_table from './../../assets/img/lazy_show_table.png';

import s from './SwiperBlock.module.scss';
import classNames from "classnames";

const SwiperBlock = ({clickToSecretButton}) => {
    const [isHover, setIsHover] = useState(false);
    const [count, setCount] = useState(0);

    const nextSlide = () => {
        if (count === 3) {
            return setCount(0)
        }
        setCount(prev => prev + 1)
    }

    return (
        <div className={s.swiper_block}>
            {count === 0 && <>
                <img className={s.pears} src={pears} alt="груши"/>
                <img className={s.crazy} src={crazy} alt="крези смотрит на кнопку"/>
                <img
                    onMouseLeave={() => setIsHover(false)}
                    onMouseEnter={() => setIsHover(true)}
                    className={s.lazy_show}
                    src={lazy_show_table}
                    alt="лейзи показывает таблицу crazy-lazy energy"
                />
                <img
                    className={classNames(s.crazy_union, {
                        [s.union_show]: isHover,
                    })}
                    src={crazy_show_union}
                    alt="Пробуй максимум понемножку!
            Мир большой, как тут все успеть! Но у тебя точно получится. Или не точно. "
                />
            </>}
            {count === 1 && <>
                <img
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className={s.crazy_2}
                    src={swiper_people_2}
                    alt="Быть одному можно только вместе! Всегда держи рядом друга! Вместе кринж не такой кринжовый,
                 а движ еще более движовый."
                />
                <img
                    className={classNames(s.crazy_2_union, {
                        [s.union_show]: isHover
                    })}
                    src={crazy_union_2}
                    alt="Быть одному можно только вместе! Всегда держи рядом друга! Вместе кринж не такой кринжовый,
                 а движ еще более движовый."
                />
            </>}
            {count === 2 && <>
                <img
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className={s.crazy_3}
                    src={crazy_3}
                    alt="крейзи жанглируешь грушами"
                />
                <img className={classNames(s.crazy_2_union, {
                    [s.union_show]: isHover
                })} src={crazy_3_union}
                     alt="Скучно веселись или весело скучай! Кто сказал, что всегда нужно быть на
                 подъеме. Иногда ты Lazy, а иногда Crazy."
                />
            </>}
            {count === 3 && <>
                <img
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    className={s.crazy_4}
                    src={crazy_4}
                    alt="Крейзи и лейзи кушают"
                />
                <img
                    className={classNames(s.crazy_2_union, {
                        [s.union_show]: isHover
                    })}
                    src={crazy_4_union}
                    alt="Не слушай эти советы, если не хочешь! А делай как хочешь."
                />
            </>}
            <div className={s.video_block}/>
            <button onClick={nextSlide} className={s.button_yellow}>
                <img src={button_yellow} alt="ЖМИ"/>
                <div className={s.text}>ЖМИ</div>
            </button>
            {count === 0 && <button onClick={clickToSecretButton} className={s.button_while}>
                <img src={button_white} alt="а сюда не жмиииии"/>
                <div className={s.text}> а сюда<br/> не жмиииии</div>
            </button>}
        </div>
    )

}

export default SwiperBlock;