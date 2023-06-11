// Core
import { applyMiddleware, createStore } from 'redux';

// instruments
import { rootReducer } from './rootReducer';
import { middleware, composeEnhancers } from './middleware';

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);
