// Core
import { useQuery } from 'react-query';

// redux
import { useDispatch } from 'react-redux';
import { authActions } from '../lib/redux/actions';
import { uiActions } from '../lib/redux/actions/ui';

// api
import { api } from '../api';


export const useQualityAuth = () => {
    const dispatch = useDispatch();

    const { token } = api;

    const query = useQuery('quality-auth', api.auth.auth, {
        onSuccess() {
            dispatch(authActions.setToken(token));
        },
        onError(message) {
            dispatch(uiActions.setError(message));
            dispatch(uiActions.resetError());
        },

    });

    return query;
};
