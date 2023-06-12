// Components
import { Navigation } from '../../components/Navigation';
import { NewPassword } from '../../components/forms/NewPassword';
import { Footer  } from '../../components/Footer';

export const NewPasswordPage = () => {
    return (
        <>
            <main>
                <div className = 'feed-wrapper'>
                    <div className = 'container'>
                        <div>
                            <Navigation />
                        </div>
                        <div className = 'wrapper'>
                            <NewPassword />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
