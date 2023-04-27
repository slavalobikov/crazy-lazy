import logo from './logo.svg';
import s from './App.module.scss';
import LogoBlock from "./components/LogoBlock";
import LichiBlock from "./components/LichiBlock";
import OrangeBlock from "./components/OrangeBlock";
import YellowBlock from "./components/YellowBlock";


function App() {
    return (
        <>
            <LogoBlock/>
            <div className={s.black_line} />
            <LichiBlock />
            <OrangeBlock />
            <YellowBlock />
            <div className={s.yellow_line_after_block} />
            <div className={s.black_line} />
        </>
    );
}

export default App;
