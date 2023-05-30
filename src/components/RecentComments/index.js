// Core
import React from 'react';

// hooks
import { useComments } from '../../hooks/useComments';

// helpers
import { fetchify } from '../../helpers/fetchify';

export const RecentComments = () => {
    const { data, isFetched } = useComments();

    const commentsJSX = data.map(({
        hash, body, author, created,
    }) => {
        return (
            <div className = 'comment' key = { hash }>
                <p className = 'name'>{ author.name }</p>
                <time>{ created }</time>
                <p className = 'body'>{ body }</p>
                <a href = '#'> Больше комментариев к посту</a>
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
