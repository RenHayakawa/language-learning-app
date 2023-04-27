import React, { useState, useEffect, createContext } from 'react';
import Error from '../components/Error/Error';

export const Context = createContext();

export function ContextProvider({ children }) {

    const [dataWords, setDataWords] = useState([]);

    useEffect(() => {
        Fetch()
    }, [])

    const Fetch = () => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then((response) => response.json())
            .then((response) => setDataWords(response))
            .catch((error) => console.log(error))
    }

    function saveWordsInput(inputText) {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${inputText.id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(inputText)
        })
            .then(() => Fetch())
            .catch((error) => console.log(error))
    }

    function deleteWordsInput(id) {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST'
        })
            .then(() => Fetch())
            .catch((error) => console.log(error))
    }

    if (!dataWords) {
        return (
            <Error />
        )
    }

    const value = { dataWords, saveWordsInput, deleteWordsInput };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}