import CSSModules from 'react-css-modules';
import style from '../Error/error.module.scss';

function Error() {
    return (
        <div styleName='container'>
            <img styleName='error-image' src="./images/error.jpg" alt="error page" />
        </div>
    )
}

export default CSSModules(Error, style);