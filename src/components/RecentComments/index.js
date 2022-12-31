import React from 'react';

export const RecentComments = () => {
    return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>Популярные комментарии</h1>
            <section>
                <div className = 'comment'>
                    <p className = 'name'>Elon Musk</p>
                    <time> about 22 hours ago</time>
                    <p className = 'body'>Hello! </p>
                    <a href = '#'> Больше комментариев к посту</a>
                </div>
                <div className = 'comment'>
                    <p className = 'name'>Elon Musk</p>
                    <time> about 22 hours ago</time>
                    <p className = 'body'>Всем привет! </p>
                    <a href = '#'> Больше комментариев к посту</a>
                </div>
            </section>
        </div>
    );
};
