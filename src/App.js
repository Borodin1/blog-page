// Core
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

// pages
import { Feed } from './pages/Feed';
import { ProfilePage } from './pages/ProfilePage';
import { PostCommentsPage } from './pages/PostCommentsPage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { NewPasswordPage } from './pages/NewPasswordPage';

// hooks
import {
    useQualityAuth,
    useGetProfileInfo,
    useErrorMessage,
} from './hooks';

// selectors
import { getToken } from './lib/redux/selectors/auth';


export const App = () => {
    const navigate = useNavigate();
    const token = useSelector(getToken);
    const { data } = useGetProfileInfo();
    const { isSuccess } = useQualityAuth();
    useErrorMessage();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (isSuccess && data && token) {
                toast.success(`Добро пожаловать,${data?.data?.name}`);
            }
        }, 1000);
    }, [data, token]);


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
                <Route path = '/profile/new-password' element = { <NewPasswordPage /> } />

            </Routes>
        </>
    );
};
