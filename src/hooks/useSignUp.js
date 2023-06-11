// Core
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// api
import { api } from '../api';

// redux
import { authActions } from '../lib/redux/actions';

export const useSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mutation = useMutation((user) => {
        return api.auth.signup(user);
    });

    useEffect(() => {
        const token = mutation?.data;
        if (mutation.isSuccess && token) {
            dispatch(authActions.setToken(token));
            localStorage.setItem('token', token);
            navigate('/feed');
        }
    }, [mutation.isSuccess]);


    return mutation;
};
