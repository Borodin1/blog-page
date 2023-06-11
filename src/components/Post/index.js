import React from 'react';

// Instruments
import cx from 'classnames';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getPostId } from '../../lib/redux/selectors/commentsForm';
import { commentsFormActions } from '../../lib/redux/actions';


// icons
import { LikeIcon } from '../../theme/assets/like';
import { CommentIcon } from '../../theme/assets/comment';
import { CommentsForm } from '../forms/CommentsForm';
import { Comment } from '../Comment';

export const Post = ({
    hash, body, author, created, comments,
}) => {
    const dispatch = useDispatch();
    const selectedPostId = useSelector(getPostId);

    const handleClick = () => {
        dispatch(commentsFormActions.setPostId(hash === selectedPostId ? '' : hash));
    };

    const commentClasses = cx('comment', {
        'comment-fill': hash === selectedPostId,
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
