// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

// hooks
import { useSignUp } from '../../../hooks';

// elements
import { Input } from '../../elements/input';

// config
import { schema } from './config';


export const SignUpForm = () => {
    const signUp = useSignUp();

    const form = useForm({
        mode:     'onSubmit',
        resolver: yupResolver(schema),
    });


    const onSubmit = form.handleSubmit(async (data) => {
        const { confirmPassword, ...newUser } = data;

        await signUp.mutateAsync(newUser);

        form.reset();
    });

    return (
        <form className = 'form centered' onSubmit = { onSubmit } >
            <div className = 'wrapper centered' >
                <div className = 'logo'></div>
                <div
                    disabled = { signUp.isLoading }>

                    <Input
                        placeholder = 'Имя'
                        error = { form.formState.errors?.name }
                        register = { form.register('name') } />

                    <Input
                        placeholder = 'Электропочта'
                        error = { form.formState.errors?.email }
                        register = { form.register('email') } />
                    <Input
                        type = 'password'
                        placeholder = 'Пароль'
                        error = { form.formState.errors?.password }
                        register = { form.register('password') } />
                    <Input
                        type = 'password'
                        placeholder = 'Подтверждение пароля'
                        error = { form.formState.errors?.confirmPassword }
                        register = { form.register('confirmPassword') } />
                    <button
                        className = 'signupSubmit' type = 'submit'>
                        Создать аккаунт
                    </button>
                </div>
                <p className = 'options'>Есть аккаунт? <Link to = '/login'>Войти</Link></p>
            </div>
        </form>
    );
};
