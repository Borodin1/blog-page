// Core
import { useMutation, useQueryClient } from 'react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// api
import { api } from '../api';

export const useUpdateProfile = () => {
    const navigate = useNavigate();
    const client = useQueryClient();

    const mutation = useMutation((profileInfo) => {
        return api.profile.updateProfile(profileInfo);
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            (async () => {
                await client.invalidateQueries('profile-data');
                navigate('/feed');
            })();
        }
    }, [mutation.isSuccess]);

    return mutation;
};
