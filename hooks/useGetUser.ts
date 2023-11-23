import { API_ROUTES, fetcher } from '@/service/apiConfigMySQL';
import { UserQuery } from '@/types/types';
import useSWR, { mutate } from 'swr';

const refetchUsers = async () => {
  await mutate(API_ROUTES.getAllUser);
};

const useGetUsers = () => {
  const { data, isLoading, error } = useSWR<UserQuery>(
    API_ROUTES.getAllUser,
    fetcher
  );

  return {
    user: data?.user,
    userLoading: isLoading,
    userError: error,
  };
};

export { useGetUsers, refetchUsers };