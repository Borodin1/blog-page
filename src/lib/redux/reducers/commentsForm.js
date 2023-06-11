import { commentsFormTypes } from '../types/commentsForm';

const initialState = {
    postId: '',
};


// eslint-disable-next-line default-param-last
export const commentsFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case commentsFormTypes.SET_POST_ID: {
            return {
                ...state,
                postId: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

