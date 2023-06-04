// Core
import { Link, useParams } from 'react-router-dom';

// hooks
import { usePostDetails } from '../../hooks/usePostDetails';

// helpers
import { fetchify } from '../../helpers';

export const PostComments = () => {
    const params = useParams();


    const { data, isFetchedAfterMount } = usePostDetails(params.id);

    const renderCommentJSX = data.comments?.map((comment) => {
        return (
            <div className = 'comment' key = { comment.hash }>
                <p>{ comment?.author?.name }</p>
                <time>{ comment?.created }</time>
                <p>{ comment?.body }</p>
            </div>
        );
    });

    return (
        <div className = 'wrapper'>
            <Link to = '/feed' className = 'link-back active'>
                <div className = 'arrow'></div>
             Назад
            </Link>
            <h1 className = 'title'>Комментарии к посту</h1>
            <div className = 'comment'>
                <p className = 'name'></p>
                <time>{ fetchify(isFetchedAfterMount, data?.created) }</time>
                <p className = 'body'>{ fetchify(isFetchedAfterMount, data?.body) }</p>
                <p className = 'subtitle'>Популярные комментарии</p>

                { fetchify(isFetchedAfterMount, renderCommentJSX) }


            </div>
        </div>
    );
};
