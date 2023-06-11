// Core
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { uiActions } from '../lib/redux/actions/ui';
import { authActions } from '../lib/redux/actions';

// api
import { api } from '../api';

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((credentials) => {
        return api.auth.login(credentials);
    }, {
        onError(error) {
            const { response } = error;

            if (response?.status === 401) {
                dispatch(uiActions.setError('Неверный логин или пароль. Проверьте корректность введеных данных'));
            } else {
                dispatch(uiActions.setError('Ошибка запроса. Повторите попытку через несколько минут или обратитесь к администратору.'));
            }
        },
    });

    useEffect(() => {
        const token = mutation.data?.data;
        if (mutation.isSuccess && token) {
            dispatch(authActions.setToken(token));
            localStorage.setItem('token', token);
            navigate('/feed');
        }
    }, [mutation.isSuccess]);


    return mutation;
};
