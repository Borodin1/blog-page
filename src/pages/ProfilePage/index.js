// Components
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
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
            <Footer />
        </main>
    );
};
