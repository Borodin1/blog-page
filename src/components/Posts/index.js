import React from 'react';

// Components
import { Post } from '../Post/index';

// forms
import { Composer } from '../forms/Composer/index';

// helpers
import { fetchify } from '../../helpers';

// hooks
import { usePosts } from '../../hooks/usePosts';

export const Posts = () => {
    const { data, isFetched } = usePosts();

    const postsJSX = data.map((post) => {
        return (
            <Post key = { post.hash } { ...post } />
        );
    });

    return (
        <div className = 'posts'>
            <h1 className = 'title'>Стена</h1>

            <Composer />

            <div className = 'posts-container' style = { { position: 'relative' } }>
                { fetchify(isFetched, postsJSX) }
            </div>
        </div>
    );
};
