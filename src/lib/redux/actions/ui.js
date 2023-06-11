import { uiTypes } from '../types/ui';

export const uiActions = Object.freeze({
    setError: (message) => {
        return {
            type:    uiTypes.SET_ERROR_MESSAGE,
            payload: message,
            error:   true,
        };
    },

    resetError: () => {
        return {
            type:  uiTypes.RESET_ERROR,
            error: false,
        };
    },
});
