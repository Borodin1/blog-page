import React from 'react';

// Components
import { Post } from '../Post/index';

// forms
import { Composer } from '../forms/Composer/index';

// mock-data
import posts from '../../mock-data/posts.json';

export const Posts = () => {
    const postsJSX = posts.map((post) => {
        return (
            <Post key = { post.hash } { ...post } />
        );
    });

    return (
        <div className = 'posts'>
            <h1 className = 'title'>Стена</h1>

            <Composer />

            <div className = 'posts-container' style = { { position: 'relative' } }>
                { postsJSX }
            </div>
        </div>
    );
};
