import CSSModules from 'react-css-modules';
import style from '../Card/card.module.scss';
import { useState } from 'react';

function Card({ data }) {
    const { english, transcription, russian } = data;
    const [isTranslate, setIsTraslate] = useState(false);

    function getTranslate() {
        setIsTraslate(!isTranslate);
    }

    return (
        <div styleName='container'>
            <div styleName='word'>{english}</div>
            <div styleName='transcription'>{transcription}</div>
            {
                isTranslate ?
                    <div styleName='russian'>{russian}</div> :
                    <button onClick={getTranslate}>проверить</button>
            }
        </div>
    )
}

export default CSSModules(Card, style);