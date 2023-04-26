import CSSModules from 'react-css-modules';
import style from '../TableRow/tableRow.module.scss';
import { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context/Context';

function TableRow(props) {

    const { id, english, transcription, russian, tags } = props;
    const [isEdit, setIsEdit] = useState(false);
    const [inputText, setInputText] = useState({
        id: id,
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
    const { saveWordsInput, deleteWordsInput } = useContext(Context);

    useEffect(() => {
        if (englishError || transcriptionError || russianError || tagsError) {
            setInputValidation(false);
        }
        else {
            setInputValidation(true);
        }
    }, [englishError, transcriptionError, russianError, tagsError]);

    const getEdit = () => {
        setIsEdit(!isEdit);
    }

    const getValidate = () => {
        if (inputText.english === '') {
            alert('Заполните пустую строку')
            setEnglishError(true);
        }

        if (inputText.transcription === '') {
            alert('Заполните пустую строку')
            setTranscriptionError(true);
        }

        if (inputText.russian === '') {
            alert('Заполните пустую строку')
            setRussianError(true);
        }

        if (inputText.tags === '') {
            alert('Заполните пустую строку')
            setTagsError(true);
        }
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
        getValidate();
    }

    const handleSave = (e) => {
        e.preventDefault();
        getValidate();
        if (inputText.english !== "" && inputText.transcription !== "" && inputText.russian !== "" && inputText.tags !== "") {
            setIsEdit(false);
        }
        saveWordsInput(inputText);
    }

    const handleDelete = () => {
        deleteWordsInput(id);
    }

    return (
        <>
            {isEdit ?
                <tr>
                    < td > {inputText.id}</td >
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
                        <button styleName='save_button' disabled={!inputValidation} onClick={handleSave}>
                            <img src="./images/save-icon.svg" alt="save button icon" />
                        </button>
                        <div onClick={getEdit} styleName='cancel_button'>
                            <img src="./images/cancel-icon.svg" alt="cancel button icon" />
                        </div>
                    </td>
                </tr >
                :
                <tr>
                    <td>{inputText.id}</td>
                    <td>{inputText.english}</td>
                    <td>{inputText.transcription}</td>
                    <td>{inputText.russian}</td>
                    <td>{inputText.tags}</td>
                    <td>
                        <div onClick={getEdit} styleName='edit_button'>
                            <img src="./images/pen.svg" alt="edit button icon" />
                        </div>
                        <div styleName='delete_button' onClick={handleDelete}>
                            <img src="./images/trash.svg" alt="delete button icon" />
                        </div>
                    </td>
                </tr>
            }
        </>
    )
}

export default CSSModules(TableRow, style);