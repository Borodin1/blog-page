// Core
import { observer } from 'mobx-react-lite';

// hooks
import { useContext } from 'react';

// Instrumets
import { Context } from '../../../lib/storeContext';

export const CommentsForm = observer(({ children, avatar, id }) => {
    const { commentFormStore } = useContext(Context);
    const { setPostId, selectedPostId } = commentFormStore;

    const handleClick = () => {
        event.preventDefault();
        setPostId(false);
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
});
