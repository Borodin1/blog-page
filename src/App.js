// Core

import { CommentsFormProvider } from './lib/commentsFormContext';
import { Feed } from './pages/Feed';

// Components

export const App = () => {
    return (
        <>
            <CommentsFormProvider>
                <Feed />
            </CommentsFormProvider>
        </>
    );
};
