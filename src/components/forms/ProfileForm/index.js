// Core
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// elements
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Input } from '../../elements/input';

// hooks
import { useGetProfileInfo, useUpdateProfile } from '../../../hooks';

// schema
import { schema } from './config';

export const ProfileForm = () => {
    const navigate = useNavigate();

    const mutation = useUpdateProfile();

    const { data:profileInfo } = useGetProfileInfo();

    const form = useForm({
        mode:     'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (profileUpdate) => {
        await mutation.mutateAsync(profileUpdate);

        form.reset();
    });
    const userData = {
        firstName: profileInfo?.data?.name.split(' ')?.[ 0 ],
        lastName:  profileInfo?.data?.name.split(' ')?.[ 1 ],
    };

    useEffect(() => {
        if (mutation.isSuccess) {
            navigate('/feed');
        }
    }, [mutation.isSuccess]);

    return (
        <form className = 'form' onSubmit = { onSubmit }>
            <div className = 'wrapper'>
                <div>
                    <h1>{ `Привет, ${userData?.firstName} ${userData?.lastName}` }</h1>
                    <img
                        src = { profileInfo?.data?.avatar }
                        alt = 'avatar'
                        className = 'navigation-avatar' />

                    <Input
                        type = 'text'
                        error = { form.formState.errors?.firstName }
                        register = { form.register('firstName') }
                        placeholder = 'Имя' />

                    <Input
                        type = 'text'
                        error = { form.formState.errors?.lastName }
                        register = { form.register('lastName') }
                        placeholder = 'Фамилия' />

                    <button className = 'loginSubmit' type = 'submit'>Обновить профиль </button>
                </div>
                <Link to = '/new-password'>
                    Сменить пароль
                </Link>
            </div>
        </form>
    );
};
