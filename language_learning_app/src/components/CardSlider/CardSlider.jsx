import CSSModules from 'react-css-modules';
import style from '../CardSlider/cardSlider.module.scss';
import Card from '../Card/Card'
import { useState, useContext } from 'react';
import { Context } from '../../Context/Context';

function CardSlider() {
    const [sliderIndex, setSliderIndex] = useState(0);
    const [wordsNumber, setWordsNumber] = useState(0);
    const { dataWords } = useContext(Context);

    function getPreviousWord() {
        if (sliderIndex > 0) {
            setSliderIndex((sliderIndex - 1) % dataWords.length)
        }
        else {
            setSliderIndex(dataWords.length - 1)
        }
    }

    function getNextWord() {
        setSliderIndex((sliderIndex + 1) % dataWords.length)
    }

    function getWordsNumber() {
        setWordsNumber(wordsNumber + 1)
    }

    return (
        <div styleName='container'>
            <p styleName='text'>Выучено слов: <span>{wordsNumber}</span>
            </p>
            <div styleName='card-wrapper'>
                <div onClick={getPreviousWord} styleName='prev-button'>
                    <img src="./images/arrow-button.svg" alt="previous button" />
                </div>
                <Card dataWords={dataWords[sliderIndex]} sliderIndex={sliderIndex} key={sliderIndex} getWordsNumber={getWordsNumber} />
                <div onClick={getNextWord} styleName='next-button'>
                    <img src="./images/arrow-button.svg" alt="next button" />
                </div>
            </div>
        </div>
    )
}

export default CSSModules(CardSlider, style);