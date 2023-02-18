import CSSModules from 'react-css-modules';
import style from '../TableRow/tableRow.module.scss';
import { useState } from 'react';

function TableRow(props) {

    const { id, english, transcription, russian, tags } = props;
    const [isEdit, setIsEdit] = useState(false);

    function getEdit() {
        setIsEdit(!isEdit);
    }

    return (
        <>
            {isEdit ?
                <tr>
                    < td > {id}</td >
                    <td>
                        <input className='input_english' type="text" defaultValue={english} />
                    </td>
                    <td>
                        <input className='input_transcription' type="text" defaultValue={transcription} />
                    </td>
                    <td>
                        <input className='input_russian' type="text" defaultValue={russian} />
                    </td>
                    <td>
                        <input className='input_tags' type="text" defaultValue={tags} />
                    </td>
                    <td>
                        <div styleName='save_button'>
                            <img src="./images/save-icon.svg" alt="save button icon" />
                        </div>
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