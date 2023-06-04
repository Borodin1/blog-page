// Components
import { Navigation } from '../../components/Navigation';
import { Profile } from '../../components/Profile';

export const ProfilePage = () => {
    return (
        <main>
            <div className = 'feed-wrapper'>
                <div className = 'container'>
                    <Navigation />
                    <Profile />
                </div>
            </div>
        </main>
    );
};
