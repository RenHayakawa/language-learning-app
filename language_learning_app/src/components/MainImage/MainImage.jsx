import CSSModules from 'react-css-modules';
import style from '../MainImage/mainImage.module.scss';

function MainImage() {
    return (
        <div styleName='container'>
            <img src="./images/main_photo.png" alt="main" />
        </div>
    )
}

export default CSSModules(MainImage, style);