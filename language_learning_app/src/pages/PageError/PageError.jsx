import CSSModules from 'react-css-modules';
import style from '../PageError/PageError.module.scss'
import Footer from '../../components/Footer/Footer';


function PageError() {
    return (
        <div styleName='container'>
            <img src="./images/404.jpg" alt="page error 404" />
            <Footer />
        </div>
    )
}

export default CSSModules(PageError, style);