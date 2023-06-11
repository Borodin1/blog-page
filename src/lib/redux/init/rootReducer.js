// Core
import { combineReducers } from 'redux';


// reducers
import {
    authReducers as auth,
    uiReducer as ui,
    commentsFormReducer as commentsForm,

} from '../reducers';

export const rootReducer = combineReducers({
    auth,
    ui,
    commentsForm,
});
