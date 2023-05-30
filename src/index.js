// Core
import React from 'react';
import { render } from 'react-dom';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments
import { QueryClientProvider } from 'react-query';

// App

import { App } from './App';
import { queryClient } from './lib/queryClient';

render(
    <>
        <QueryClientProvider client = { queryClient }>
            <App />
        </QueryClientProvider>
    </>,
    document.getElementById('root'),
);
