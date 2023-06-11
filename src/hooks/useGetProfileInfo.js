// Core
import { useQuery } from 'react-query';

// api
import { api } from '../api';

export const useGetProfileInfo = () => {
    const { data } = useQuery('profile-data', api.profile.fetch);

    return {
        data: data || [],
    };
};
