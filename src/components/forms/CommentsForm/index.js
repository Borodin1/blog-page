// Core
import { useContext } from 'react';

// Instrumets
import { Context } from '../../../lib/commentsFormContext';

export const CommentsForm = ({ children, avatar, id }) => {
    const [isCommentsOpen, setCommentsOpen] = useContext(Context);

    const handleClick = () => {
        event.preventDefault();
        setCommentsOpen(false);
    };

    if (id === isCommentsOpen) {
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
