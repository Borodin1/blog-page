import React from 'react';

export const Composer = () => {
    return (
        <section className = 'composer'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar' />
            <form>
                <label>
                    <div>
                        <span className = 'error-message'></span>
                    </div>
                    <textarea  placeholder = { 'What \'s on your mind, Elon Musk?' } name = 'body' />
                </label>
                <button type = 'submit' name = 'body'>Запостить</button>
            </form>
        </section>
    );
};
