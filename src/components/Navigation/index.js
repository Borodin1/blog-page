import React from 'react';

export const Navigation = () => {
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
                Chuck Norris
            </div>
            <a  className = 'navigation-item' href = '#'> Профиль </a>
            <a
                aria-current = 'page'
                className = 'navigation-item active'
                href = '#'> Стена </a>
            <button className = 'logout'>Выйти</button>
        </div>
    );
};
