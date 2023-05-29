import React, { useContext } from 'react';
// Instruments
import cx from 'classnames';
import { Context } from '../../lib/commentsFormContext';

// icons
import { LikeIcon } from '../../theme/assets/like';
import { CommentIcon } from '../../theme/assets/comment';
import { CommentsForm } from '../forms/CommentsForm';
import { Comment } from '../Comment';

export const Post = ({
    hash, body, author, created, comments,
}) => {
    const [isCommentsOpen, setCommentsOpen] = useContext(Context);

    const handleClick = () => {
        setCommentsOpen(hash === isCommentsOpen ? '' : hash);
    };

    const commentClasses = cx('comment', {
        'comment-fill': hash === isCommentsOpen,
    });

    const commentsJSX = comments.map((comment) => {
        return <Comment key = { comment.hash } { ...comment } />;
    });

    return (
        <section className = 'post'>
            <img src = { author.avatar } alt = 'avatar' />
            <a>{ author.name }</a>
            <time>{ created }</time>
            <p>{ body }</p>
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
                <span className = { commentClasses } onClick = { handleClick }>
                    <CommentIcon />
                    { comments.length }
                </span>
            </div>
            <CommentsForm
                id = { hash } { ...author }>
                { commentsJSX }
            </CommentsForm>
        </section>
    );
};
