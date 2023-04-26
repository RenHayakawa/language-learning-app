import CSSModules from 'react-css-modules';
import style from '../Words_list/words_list.module.scss';
import TableRow from '../TableRow/TableRow';
import { useContext } from 'react';
import { Context } from '../../Context/Context'

function WordsList() {

    const { dataWords, setDataWords } = useContext(Context);

    return (
        <div styleName='container'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>english</th>
                        <th>transcription</th>
                        <th>russian</th>
                        <th>tags</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataWords.map((elem) => (
                            <TableRow
                                key={elem.id}
                                id={elem.id}
                                english={elem.english}
                                transcription={elem.transcription}
                                russian={elem.russian}
                                tags={elem.tags}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CSSModules(WordsList, style);