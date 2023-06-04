// Core
import { Link } from 'react-router-dom';

export const ProfileForm = () => {
    return (
        <form className = 'form'>
            <div className = 'wrapper'>
                <div>
                    <h1>Привет, Chuck Norris</h1>
                    <img
                        src = 'https://placeimg.com/256/256/animals'
                        alt = 'avatar'
                        className = 'navigation-avatar' />
                    <label>
                        <div>
                            <span className = 'error-message'></span>
                            <input type = 'text' placeholder = 'Имя' />
                        </div>
                    </label>
                    <label>
                        <div>
                            <span className = 'error-message'></span>
                            <input type = 'text' placeholder = 'Фамилия' />
                        </div>
                        <button className = 'loginSubmit' type = 'submit'>Обновить профиль </button>
                    </label>
                </div>
                <Link to = '/new-password'>
                    Сменить пароль
                </Link>
            </div>
        </form>
    );
};
