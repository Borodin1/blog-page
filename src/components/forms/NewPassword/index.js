// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// elements
import { Input } from '../../elements/input';

// schema
import { schema } from './config';

// actions
import { authActions } from '../../../lib/redux/actions';

export const NewPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit((data) => {
        dispatch(authActions.resetPasswordAsync(data));

        navigate('/feed');
    });

    return (
        <form className = 'form' onSubmit = { onSubmit }>
            <div className = 'wrapper'>
                <div>
                    <h1>Смена пароля</h1>

                    <Input
                        type = 'password'
                        error = { form.formState.errors.oldPassword }
                        register = { form.register('oldPassword') }
                        placeholder = 'Старый пароль' />
                    <Input
                        type = 'password'
                        error = { form.formState.errors.newPassword }
                        register = { form.register('newPassword') }
                        placeholder = 'Новый пароль' />

                    <button className = 'loginSubmit' type = 'submit'>
                        Сменить пароль
                    </button>
                </div>
            </div>
        </form>
    );
};
