// Core
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetProfileInfo } from '../../hooks/useGetProfileInfo';

export const Navigation = () => {
    const { data:profileInfo } = useGetProfileInfo();

    return (
        <div>
            <div className = 'navigation-profile'>
                <div className = 'profile-wrapper'>
                    <img
                        src = 'https://placeimg.com/256/256/animals'
                        alt = 'avatar'
                        className = 'navigation-avatar' />
                    <div className = 'user-status'>
                        <div className = 'status online'>
                            <span></span>
                        </div>
                    </div>
                </div>
                { profileInfo?.data?.name }
            </div>
            <Link  className = 'navigation-item' to = '/profile'> Профиль </Link>
            <Link
                aria-current = 'page'
                className = 'navigation-item active'
                to = '/'> Стена </Link>
            <button className = 'logout'>Выйти</button>
        </div>
    );
};
