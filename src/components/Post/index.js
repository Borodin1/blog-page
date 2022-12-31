import React from 'react';

// icons
import { LikeIcon } from '../../theme/assets/like';
import { CommentIcon } from '../../theme/assets/comment';

export const Post = () => {
    return (
        <section className = 'post'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar' />
            <a>Chuck Norris</a>
            <time>about 7 hours ago</time>
            <p>Текущая дата: 16-11-2021 12:00:00</p>
            <div className = 'reaction-controls'>
                <section className = 'like'>
                    <div>
                        <span>0</span>
                    </div>
                    <span className = 'icon'>
                        <LikeIcon />
                        Like
                    </span>
                </section>
                <span className = 'comment'>
                    <CommentIcon />
                    0 comments
                </span>
            </div>
        </section>
    );
};
