// Core
import { useQuery } from 'react-query';

// api
import { api } from '../api';

export const usePosts = () => {
    const { data, isFetched } = useQuery('posts', api.posts.fetch);

    return {
        data: data || [],
        isFetched,
    };
};
