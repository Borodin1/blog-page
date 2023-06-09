// Core
import { Route, Routes } from 'react-router-dom';

// pages
import { Feed } from './pages/Feed';
import { ProfilePage } from './pages/ProfilePage';
import { PostCommentsPage } from './pages/PostCommentsPage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { LoginForm } from './components/forms/LoginForm';


export const App = () => {
    return (
        <>
            <Routes>
                <Route path = '/' element = { <Feed /> } />
                <Route path = '/all-topics' element = { <Feed /> } />

                <Route path = '/feed' element = { <Feed /> } />
                <Route path = '/feed/:id' element = { <PostCommentsPage /> } />

                <Route path = '/signUp' element = { <SignUpPage /> } />
                <Route path = '/login' element = { <LoginPage /> } />

                <Route path = '/profile' element = { <ProfilePage /> } />
            </Routes>
        </>
    );
};
