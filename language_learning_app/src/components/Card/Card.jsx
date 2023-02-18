import CSSModules from 'react-css-modules';
import style from '../Card/card.module.scss';
import { useState } from 'react';

function Card() {

    const [isTranslate, setIsTraslate] = useState(false);

    function getTranslate() {
        setIsTraslate(!isTranslate);
    }

    return (
        <div styleName='container'>
            <div styleName='card'>
                <div styleName='word'>Map</div>
                <div styleName='transcription'>sefwe</div>
                {
                    isTranslate ?
                        <div styleName='russian'>Карта</div> :
                        <button onClick={getTranslate}>проверить</button>
                }
            </div>
        </div>
    )
}

export default CSSModules(Card, style);