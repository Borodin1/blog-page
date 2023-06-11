// Core
import { useQuery } from 'react-query';

// api
import { api } from '../api';

export const useComments = () => {
    const { data, isFetched } = useQuery('comments', api.posts.getComments);

    return {
        data: data || [],
        isFetched,
    };
};
