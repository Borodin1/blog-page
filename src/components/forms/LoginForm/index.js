// Core
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// hooks
import { useLogin } from '../../../hooks/useLogin';

// elements
import { Input } from '../../elements/input';

// schema
import { schema } from './config';

export const LoginForm = () => {
    const login = useLogin();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });


    const onSubmit = form.handleSubmit(async (credentials) => {
        await login.mutateAsync(credentials);

        form.reset();
    });

    return (
        <form onSubmit = { onSubmit } className = 'form centered'>
            <div className = 'wrapper centered' >
                <div className = 'logo'></div>
                <div disabled = { login.isLoading }>
                    <Input
                        placeholder = 'Почта'
                        error = { form.formState.errors?.mail }
                        register = { form.register('email') } />
                    <Input
                        placeholder = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors?.password }
                        register = { form.register('password') } />
                    <button
                        className = 'loginSubmit'
                        type = 'submit'>
                     Войти
                    </button>
                </div>
                <p className = 'options'>
                Нет аккаунта ?
                    <Link to = '/signUp'>Создать</Link>
                </p>
            </div>
        </form>
    );
};
