// Core
import { Route, Routes } from 'react-router-dom';

// pages
import { Feed } from './pages/Feed';
import { ProfilePage } from './pages/ProfilePage';
import { PostCommentsPage } from './pages/PostCommentsPage';


export const App = () => {
    return (
        <>
            <Routes>
                <Route path = '/' element = { <Feed /> } />
                <Route path = '/all-topics' element = { <Feed /> } />
                <Route path = '/feed' element = { <Feed /> } />
                <Route path = '/feed/:id' element = { <PostCommentsPage /> } />

                <Route path = '/profile' element = { <ProfilePage /> } />
            </Routes>
        </>
    );
};
