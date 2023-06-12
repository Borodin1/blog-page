// types
import { authTypes } from '../types/auth';

const initialState = {
    token:      '',
    password:   null,
    isFetching: false,
};

// eslint-disable-next-line default-param-last
export const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.SET_TOKEN: {
            return {
                ...state,
                token: action.payload,
            };
        }

        case authTypes.START_RESET: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case authTypes.STOP_RESET: {
            return {
                ...state,
                isFetching: false,
            };
        }

        case authTypes.SET_RESETPASSWORD: {
            return {
                ...state,
                isFetching: false,
                password:   action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
