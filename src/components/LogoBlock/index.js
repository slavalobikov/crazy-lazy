import React from 'react';

import s from './LogoBlock.module.scss';
import backgroundBlack from './../../assets/img/background_logo_black.png';
import logo from './../../assets/img/logo.png';
import fruits from './../../assets/img/fruits_logo.png';
import logo_subword from './../../assets/img/logo_subword.png';
import smile from './../../assets/img/smile.png';
import fruits_text from './../../assets/img/fruits_text.png';
import smile_two from './../../assets/img/smile_two.png';
import energy from './../../assets/img/energy.png';
import coffe from './../../assets/img/coffe.png';
import vitamin_b from './../../assets/img/vitamin_b.png';
import taurin from './../../assets/img/taurin.png';

const LogoBlock = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.black_block}>
                <img className={s.background_black} src={backgroundBlack} alt="logo"/>
                <div className={s.logo_wrapper}>
                    <img className={s.logo} src={logo} alt="crazy lazy energy"/>
                    <img className={s.fruits} src={fruits} alt="фрукты и витамины"/>
                    <img className={s.logo_subword} src={logo_subword} alt="Ты совсем crazy lazy?"/>
                </div>
                <div className={s.pink_block}>
                    <img className={s.energy} src={energy} alt="energy"/>
                    <img className={s.coffe} src={coffe} alt="кофеин"/>
                    <img className={s.vitamin_b} src={vitamin_b} alt="Витамин B"/>
                    <img className={s.taurin} src={taurin} alt="Таурин"/>
                    <div className={s.text}>
                        <div>
                            Новый <b>Energy напиток</b>, который ты точно оценишь. Для настроения тут самые <b>Crazy
                            цвета и вкусы!</b>
                            <img className={s.smile} src={smile} alt="мордочка"/>
                        </div>
                        <div className={s.text_description}>
                        <span>Содержит таурин, кофеин и витамины, доступен всем-всем.
                            <img className={s.fruits_text} src={fruits_text} alt="fruit"/></span>
                            <span className={s.empty_span}/>
                            <span>Еще не успел попробовать?</span>
                            <span className={s.last_string}>
                                <span className={s.empty_span}/>
                                <img className={s.smile_two} src={smile_two} alt="мордочка"/>
                                Ты совсем  <b>  Crazy Lazy</b>? 
                                <button className={s.btn}>→ Зацени эти вкусы!</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoBlock;