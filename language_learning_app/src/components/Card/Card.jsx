import CSSModules from 'react-css-modules';
import style from '../Card/card.module.scss';
import { useState, useRef, useEffect } from 'react';

function Card({ dataWords, getWordsNumber }) {
    const { english, transcription, russian } = dataWords;
    const [isTranslate, setIsTraslate] = useState(false);
    const refButton = useRef();

    function getTranslate() {
        setIsTraslate(!isTranslate);
        getWordsNumber();
    }

    useEffect(() => {
        refButton.current.focus()
    }, [])

    return (
        <div styleName='container'>
            <div styleName='word'>{english}</div>
            <div styleName='transcription'>{transcription}</div>
            {
                isTranslate ?
                    <div styleName='russian'>{russian}</div> :
                    <button onClick={getTranslate} ref={refButton}>проверить</button>
            }
        </div>
    )
}

export default CSSModules(Card, style);