import React from 'react';
import { useGetProfileInfo } from '../../../hooks/useGetProfileInfo';

export const Composer = () => {
    const { data } = useGetProfileInfo();

    return (
        <section className = 'composer'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar' />
            <form>
                <label>
                    <div>
                        <span className = 'error-message'></span>
                    </div>
                    <textarea  placeholder = { `What's on your mind, ${data?.data?.name}?` } name = 'body' />
                </label>
                <button type = 'submit' name = 'body'>Запостить</button>
            </form>
        </section>
    );
};
