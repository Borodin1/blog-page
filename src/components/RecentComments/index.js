// Core
import React from 'react';
import { Link } from 'react-router-dom';


// hooks
import { useComments } from '../../hooks';

// helpers
import { fetchify } from '../../helpers/fetchify';

export const RecentComments = () => {
    const { data, isFetched } = useComments();

    const commentsJSX = data.map(({
        hash, body, author, created, post,
    }) => {
        return (
            <div className = 'comment' key = { hash }>
                <p className = 'name'>{ author.name }</p>
                <time>{ created }</time>
                <p className = 'body'>{ body }</p>
                <Link to = { `/feed/${post.hash}` }> Больше комментариев к посту</Link>
            </div>
        );
    });

    return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>Популярные комментарии</h1>
            <section>
                { fetchify(isFetched, commentsJSX) }
            </section>
        </div>
    );
};
