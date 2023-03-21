import CSSModules from 'react-css-modules';
import style from '../Header/header.module.scss';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import PageError from '../../pages/PageError/PageError';
import PageHome from '../../pages/PageHome/PageHome';
import PageWordsList from '../../pages/PageWordsList/PageWordsList';
import PageGame from '../../pages/PageGame/PageGame';

function Header() {
    return (
        <Router>
            <header styleName='container'>
                <div styleName='logo'>
                    <NavLink to="/">
                        <img src="./images/logo.svg" alt="logo" />
                    </NavLink>
                    <h1>
                        <NavLink to="/">Learning language App</NavLink>
                    </h1>
                </div>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/words_list">Words list</NavLink>
                    <NavLink to="/game">Learn new words</NavLink>
                </nav>
            </header >

            <Routes>
                <Route exact path='/' element={<PageHome />} />
                <Route exact path='/words_list' element={<PageWordsList />} />
                <Route exact path='/game' element={<PageGame />} />
                <Route path='*' element={<PageError />} />
            </Routes>
        </Router>
    );
}

export default CSSModules(Header, style);