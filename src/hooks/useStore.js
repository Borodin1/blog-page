import { useContext } from 'react';
import { StoreContext } from '../lib/storeContext';

export const useStore = () => {
    const store = useContext(StoreContext);

    return store;
};
