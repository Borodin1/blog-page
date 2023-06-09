import React from 'react';

// Components
import { Footer } from '../../components/Footer';
import { Navigation } from '../../components/Navigation';
import { Posts } from '../../components/Posts';
import { RecentComments } from '../../components/RecentComments';

export const Feed = () => {
    return (
        <>
            <main>
                <div className = 'feed-wrapper'>
                    <div className = 'container'>
                        <Navigation />
                        <Posts />
                        <RecentComments />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};
