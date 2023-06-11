import { authTypes } from '../types/auth';

const initialState = {
    token: '',
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
        default: {
            return state;
        }
    }
};
