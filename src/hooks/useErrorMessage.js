// Core
import { useEffect } from 'react';
import { toast } from 'react-toastify';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getErrorMessage } from '../lib/redux/selectors/ui';
import { uiActions } from '../lib/redux/actions/ui';

// instruments
import { toastOptions } from '../constants/toastOptions';

export const useErrorMessage = () => {
    const dispatch = useDispatch();
    const errorMessage = useSelector(getErrorMessage);

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, toastOptions);

            dispatch(uiActions.resetError());
        }
    }, [errorMessage]);
};
