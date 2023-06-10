import { createContext } from 'react';
import { RootStore } from './mobX';

const rootStore = new RootStore();

export const Context = createContext(rootStore);


export const StoreContext = (props) => {
    return (
        <Context.Provider value = { rootStore }>
            { props.children }
        </Context.Provider>
    );
};
