// Core

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getPostId } from '../../../lib/redux/selectors/commentsForm';
import { commentsFormActions } from '../../../lib/redux/actions';

export const CommentsForm = ({ children, avatar, id }) => {
    const dispatch = useDispatch();
    const selectedPostId = useSelector(getPostId);

    const handleClick = () => {
        event.preventDefault();
        dispatch(commentsFormActions.setPostId(''));
    };

    if (id === selectedPostId) {
        return (
            <>
                <form className = 'commentForm'>
                    <img
                        src = { avatar }
                        alt = 'avatar'
                        className = 'navigation-avatar' />
                    <label>
                        <div>
                            <span className = 'error-message'></span>
                        </div>
                        <input placeholder = 'Комментарий...' type = 'text' />
                    </label>
                    <button type = 'submit' onClick = { handleClick }>Комментировать</button>
                </form>
                <hr className = 'separator' />
                <ul>{ children }</ul>
            </>
        );
    }
};
