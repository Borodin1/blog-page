// Core
import { useQuery } from 'react-query';
import { useContext } from 'react';

// instruments
import { Context } from '../lib/storeContext';

// api
import { api } from '../api';

export const useQualityAuth = () => {
    const { authStore, uiStore } = useContext(Context);
    const { setToken } = authStore;
    const { setErrorMessage } = uiStore;

    const { token } = api;

    const query = useQuery('quality-auth', api.auth.auth, {
        onSuccess() {
            setToken(token);
        },
        onError(message) {
            setErrorMessage(message);
        },
    });

    return query;
};
