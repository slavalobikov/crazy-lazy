import logo from './logo.svg';
import s from './App.module.scss';
import LogoBlock from "./components/LogoBlock";
import LichiBlock from "./components/LichiBlock";
import OrangeBlock from "./components/OrangeBlock";


function App() {
    return (
        <>
            <LogoBlock/>
            <div className={s.black_line} />
            <LichiBlock />
            <OrangeBlock />
        </>
    );
}

export default App;
