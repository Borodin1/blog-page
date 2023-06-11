import { uiTypes } from '../types/ui';

const initialState = {
    message: '',
    error:   false,
};


// eslint-disable-next-line default-param-last
export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case uiTypes.RESET_ERROR: {
            return {
                ...state,
                message: '',
                error:   false,
            };
        }

        case uiTypes.SET_ERROR_MESSAGE: {
            return {
                ...state,
                message: action.payload,
                error:   true,
            };
        }

        default: {
            return state;
        }
    }
};
