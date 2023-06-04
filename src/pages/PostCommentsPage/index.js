
// Components
import { Navigation } from '../../components/Navigation';
import { PostComments } from '../../components/PostComments';

export const PostCommentsPage = () => {
    return (
        <main>
            <div className = 'feed-wrapper'>
                <div className = 'container'>
                    <Navigation />
                    <PostComments />
                </div>
            </div>
        </main>
    );
};
