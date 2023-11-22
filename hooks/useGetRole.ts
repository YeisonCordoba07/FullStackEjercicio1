import { API_ROUTES, fetcher } from '@/service/apiConfigMySQL';
import { RolesQuery } from '@/types/types';
import useSWR from 'swr';

const useGetRoles = () => {
  const { data, isLoading } = useSWR<RolesQuery>(API_ROUTES.roles, fetcher);

  return { roles: data?.roles, rolesLoading: isLoading };
};

export { useGetRoles };