import CSSModules from 'react-css-modules';
import style from '../Words_list/words_list.module.scss';
import TableRow from '../TableRow/TableRow';
import tableData from '../../data.json';

function WordsList() {
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
                        tableData.map((elem) => (
                            <TableRow
                                key={elem.tags_json}
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