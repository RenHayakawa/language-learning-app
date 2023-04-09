import CSSModules from 'react-css-modules';
import style from '../TableRow/tableRow.module.scss';
import { useState, useEffect } from 'react';

function TableRow(props) {

    const { id, english, transcription, russian, tags } = props;
    const [isEdit, setIsEdit] = useState(false);
    const [inputText, setInputText] = useState({
        english: english,
        transcription: transcription,
        russian: russian,
        tags: tags,
    });
    const [englishError, setEnglishError] = useState(false);
    const [transcriptionError, setTranscriptionError] = useState(false);
    const [russianError, setRussianError] = useState(false);
    const [tagsError, setTagsError] = useState(false);
    const [inputValidation, setInputValidation] = useState(false);

    useEffect(() => {
        if (englishError || transcriptionError || russianError || tagsError) {
            setInputValidation(false);
        }
        else {
            setInputValidation(true);
        }
    }, [englishError, transcriptionError, russianError, tagsError]);

    function getEdit() {
        setIsEdit(!isEdit);
    }

    const handleChangeInput = (e) => {
        setInputText({ ...inputText, [e.target.name]: e.target.value });

        if (inputText.english.match(/[^a-zA-Z]+/g)) {
            alert("Используйте латиницу");
            setEnglishError(!englishError);
        }

        if (inputText.transcription.match(/\d+/g)) {
            alert("Не используйте цифры");
            setTranscriptionError(!transcriptionError);
        }

        if (inputText.russian.match(/[^а-яА-я]+/g)) {
            alert("Используйте криллицу");
            setRussianError(!russianError);
        }

        if (inputText.tags.match(/[^а-яА-яa-zA-z]+/g)) {
            alert("Используйте криллицу или латиницу");
            setTagsError(!tagsError);
        }

        if (inputText.english !== "") {
            setEnglishError(false);
        }
        if (inputText.transcription !== "") {
            setTranscriptionError(false);
        }
        if (inputText.russian !== "") {
            setRussianError(false);
        }
        if (inputText.tags !== "") {
            setTagsError(false);
        }
    }

    const getValidate = () => {
        if (inputText.english === '') {
            setEnglishError(true);
        }

        if (inputText.transcription === '') {
            setTranscriptionError(true);
        }

        if (inputText.russian === '') {
            setRussianError(true);
        }

        if (inputText.tags === '') {
            setTagsError(true);
        }

        if (inputText.english !== "" && inputText.transcription !== "" && inputText.russian !== "" && inputText.tags !== "") {
            setIsEdit(false);
            console.log(props);
        }
    }

    return (
        <>
            {isEdit ?
                <tr>
                    < td > {id}</td >
                    <td>
                        <input
                            styleName={englishError ? 'input-error' : ''}
                            type="text"
                            value={inputText.english}
                            name="english"
                            onChange={handleChangeInput} />
                    </td>
                    <td>
                        <input
                            styleName={transcriptionError ? 'input-error' : ''}
                            type="text"
                            value={inputText.transcription}
                            name="transcription"
                            onChange={handleChangeInput} />

                    </td>
                    <td>
                        <input
                            styleName={russianError ? 'input-error' : ''}
                            type="text"
                            value={inputText.russian}
                            name="russian"
                            onChange={handleChangeInput} />
                    </td>
                    <td>
                        <input
                            styleName={tagsError ? 'input-error' : ''}
                            type="text"
                            value={inputText.tags}
                            name="tags"
                            onChange={handleChangeInput} />
                    </td>
                    <td>
                        <button styleName='save_button' disabled={!inputValidation} onClick={getValidate}>
                            <img src="./images/save-icon.svg" alt="save button icon" />
                        </button>
                        <div onClick={getEdit} styleName='cancel_button'>
                            <img src="./images/cancel-icon.svg" alt="cancel button icon" />
                        </div>
                    </td>
                </tr >
                :
                <tr>
                    <td>{id}</td>
                    <td>{english}</td>
                    <td>{transcription}</td>
                    <td>{russian}</td>
                    <td>{tags}</td>
                    <td>
                        <div onClick={getEdit} styleName='edit_button'>
                            <img src="./images/pen.svg" alt="edit button icon" />
                        </div>
                        <div styleName='delete_button'>
                            <img src="./images/trash.svg" alt="delete button icon" />
                        </div>
                    </td>
                </tr>
            }
        </>
    )
}

export default CSSModules(TableRow, style);