import CSSModules from 'react-css-modules';
import style from '../Header/header.module.scss';

function Header() {
    return (
        <header styleName='container'>
            <div styleName='logo'>
                <img src="./images/logo.svg" alt="logo" />
                <h1>
                    <a href="/#">Learning language App</a>
                </h1>
            </div>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Words list</a>
                <a href="/#">Learn new words</a>
            </nav>
        </header >
    );
}

export default CSSModules(Header, style);