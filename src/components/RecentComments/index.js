// Core
import React from 'react';

// mock-data
import comments from '../../mock-data/comments.json';

export const RecentComments = () => {
    const commentsJSX = comments.map(({
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
                { commentsJSX }
            </section>
        </div>
    );
};
