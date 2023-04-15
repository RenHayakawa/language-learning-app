import React, { useState, useEffect, createContext } from 'react';

export const Context = createContext();

export function ContextProvider({ children }) {

    const [dataWords, setDataWords] = useState(false);

    useEffect(() => {
        async function Fetch() {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            const words = await response.json();
            setDataWords(words);
        }
        Fetch()
    }, [])

    if (!dataWords) {
        return (
            <h1>Loading...</h1>
        )
    }

    const value = { dataWords, setDataWords };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}