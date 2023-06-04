// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments
import { QueryClientProvider } from 'react-query';

// App

import { App } from './App';
import { queryClient } from './lib/queryClient';
import { CommentsFormProvider } from './lib/commentsFormContext';

createRoot(document.getElementById('root')).render(
    <>
        <QueryClientProvider client = { queryClient }>
            <CommentsFormProvider>
                <Router>
                    <App />
                </Router>
            </CommentsFormProvider>
        </QueryClientProvider>
    </>,
);

