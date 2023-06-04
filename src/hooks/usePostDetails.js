// Core
import { useQuery } from 'react-query';

// api
import { api } from '../api';

export const usePostDetails = (id) => {
    const { data, isFetchedAfterMount } = useQuery(['post-by-id', id],
        () => api.posts.getPostById(id));

    return {
        data: data?.data || {},
        isFetchedAfterMount,
    };
};
