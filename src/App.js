import logo from './logo.svg';
import s from './App.module.scss';
import LogoBlock from "./components/LogoBlock";
import LichiBlock from "./components/LichiBlock";
import OrangeBlock from "./components/OrangeBlock";
import YellowBlock from "./components/YellowBlock";
import Footer from "./components/Footer";
import SwiperBlock from "./components/SwiperBlock";
import MobileBlock from "./components/MobileBlock";


function App() {
    return (
        <>
            <LogoBlock/>
            <div className={s.black_line} />
            {/*<LichiBlock />
            <OrangeBlock />
            <YellowBlock />
            <div className={s.yellow_line_after_block} />
            <div className={s.black_line} />
            <SwiperBlock />
            <div className={s.black_line} />
            <MobileBlock />
            <Footer />*/}
        </>
    );
}

export default App;
