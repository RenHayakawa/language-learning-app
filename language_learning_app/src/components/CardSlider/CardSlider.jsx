import CSSModules from 'react-css-modules';
import style from '../CardSlider/cardSlider.module.scss';
import Card from '../Card/Card'
import data from '../../data.json';
import { useState } from 'react';

function CardSlider() {
    const [sliderIndex, setSliderIndex] = useState(0);

    function getPreviousWord() {
        if (sliderIndex > 0) {
            setSliderIndex((sliderIndex - 1) % data.length)
        }
        else {
            setSliderIndex(data.length - 1)
        }
    }

    function getNextWord() {
        setSliderIndex((sliderIndex + 1) % data.length)
    }

    return (
        <div styleName='container'>
            <div onClick={getPreviousWord} styleName='prev-button'>
                <img src="./images/arrow-button.svg" alt="previous button" />
            </div>
            <Card data={data[sliderIndex]} sliderIndex={sliderIndex} key={sliderIndex} />
            <div onClick={getNextWord} styleName='next-button'>
                <img src="./images/arrow-button.svg" alt="next button" />
            </div>
        </div>
    )
}

export default CSSModules(CardSlider, style);