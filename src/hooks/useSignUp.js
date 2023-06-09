// Core
import { useMutation } from 'react-query';

// api
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api';

export const useSignUp = () => {
    const navigate = useNavigate();

    const mutation = useMutation((user) => {
        return api.auth.signup(user);
    });

    useEffect(() => {
        const token = mutation?.data;
        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            navigate('/feed');
        }
    }, [mutation.isSuccess]);


    return mutation;
};
