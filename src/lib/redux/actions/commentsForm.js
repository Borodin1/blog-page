import { commentsFormTypes } from '../types/commentsForm';

export const commentsFormActions = Object.freeze({
    setPostId: (id) => {
        return {
            type:    commentsFormTypes.SET_POST_ID,
            payload: id,
        };
    },
});
