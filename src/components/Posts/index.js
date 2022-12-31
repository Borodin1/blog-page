import React from 'react';

// Components
import { Post } from '../Post/index';

// forms
import { Composer } from '../forms/Composer/index';

export const Posts = () => {
    return (
        <div className = 'posts'>
            <h1 className = 'title'>Стена</h1>

            <Composer />

            <div className = 'posts-container' style = { { position: 'relative' } }>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};
