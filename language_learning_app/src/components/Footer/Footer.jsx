import CSSModules from 'react-css-modules';
import style from '../Footer/footer.module.scss';

function Footer() {
    return (
        <footer styleName='container'>
            <div>Learning language App 2023</div>
        </footer>
    )
}

export default CSSModules(Footer, style);