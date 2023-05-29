import { createContext, useState } from 'react';

export const Context = createContext(['', () => null]);


export const CommentsFormProvider = ({ children }) => {
    const state = useState('');

    return (
        <Context.Provider value = { state }>
            { children }
        </Context.Provider>
    );
};
