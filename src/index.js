// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments
import { configure } from 'mobx';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { queryClient } from './lib/queryClient';

// Components
import { App } from './App';
import { store } from './lib/redux/init/store';

configure({
    enforceActions:             'always',
    computedRequiresReaction:   true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});


createRoot(document.getElementById('root')).render(
    <>
        <QueryClientProvider client = { queryClient }>
            <Provider store = { store }>
                <Router>
                    <App />
                </Router>
            </Provider>
        </QueryClientProvider>
    </>,
);

