// Core
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';

// pages
import { Feed } from './pages/Feed';
import { ProfilePage } from './pages/ProfilePage';
import { PostCommentsPage } from './pages/PostCommentsPage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';


// hooks
import {
    useQualityAuth,
    useGetProfileInfo,
    useErrorMessage,
} from './hooks';


export const App = () => {
    const { data } = useGetProfileInfo();
    const { isSuccess } = useQualityAuth();
    useErrorMessage();

    useEffect(() => {
        setTimeout(() => {
            if (isSuccess && data) {
                toast.success(`Добро пожаловать,${data?.data?.name}`);
            }
        }, 1000);
    }, [data]);

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />

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
