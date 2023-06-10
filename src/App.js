// Core
import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Slide, ToastContainer, toast } from 'react-toastify';

// pages
import { Feed } from './pages/Feed';
import { ProfilePage } from './pages/ProfilePage';
import { PostCommentsPage } from './pages/PostCommentsPage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';

// Instruments
import { Context } from './lib/storeContext';

// hooks
import { useQualityAuth } from './hooks/useQualityAuth';
import { useGetProfileInfo } from './hooks/useGetProfileInfo';


export const App = observer(() => {
    const { data } = useGetProfileInfo();
    const { uiStore } = useContext(Context);
    const { errorMessage, resetError } = uiStore;

    const { isSuccess } = useQualityAuth();
    console.log(data);
    useEffect(() => {
        if (errorMessage) {
            const notify = () => toast.error(errorMessage, {
                position:        'top-right',
                autoClose:       5000,
                hideProgressBar: true,
                closeOnClick:    true,
                pauseOnHover:    true,
                draggable:       true,
                progress:        undefined,
            });


            notify();

            resetError();
        }
        if (isSuccess) {
            toast.success(`Добро пожаловать,${data?.data?.name}`);
        }
    }, [errorMessage, isSuccess]);

    if (isSuccess) {
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
    }
});
