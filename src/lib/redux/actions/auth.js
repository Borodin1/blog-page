// Core
import { toast } from 'react-toastify';

// api
import { api } from '../../../api';

// types
import { authTypes } from '../types/auth';

// actions
import { uiActions } from './ui';

export const authActions = Object.freeze({
    setToken: (token) => {
        return {
            type:    authTypes.SET_TOKEN,
            payload: token,
        };
    },

    startReset: () => {
        return {
            type: authTypes.START_RESET,
        };
    },

    stopReset: () => {
        return {
            type: authTypes.STOP_RESET,
        };
    },

    resetPassword: (newPassword) => {
        return {
            type:    authTypes.SET_RESETPASSWORD,
            payload: newPassword,
        };
    },


    resetPasswordAsync: (password) => async (dispatch) => {
        try {
            dispatch(authActions.startReset());

            const token = await api.auth.resetPassword(password);

            dispatch(authActions.setToken(token));
            localStorage.setItem('token', token);


            toast.success('Пароль успешно сменён');
            dispatch(authActions.resetPassword(password));
        } catch (error) {
            const { message } = error;
            dispatch(uiActions.setError(message));
        } finally {
            dispatch(authActions.stopReset());
        }
    },
});
