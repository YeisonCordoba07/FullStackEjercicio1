import { API_ROUTES, fetcher } from '@/service/apiConfigMySQL';
import { MaterialQuery } from '@/types/types';
import useSWR, { mutate } from 'swr';

const refetchMaterials = async () => {
  await mutate(API_ROUTES.getAllMaterial);
};

const useGetMaterials = () => {
  const { data, isLoading, error } = useSWR<MaterialQuery>(
    API_ROUTES.getAllMaterial,
    fetcher
  );

  return {
    materials: data?.material,
    materialsLoading: isLoading,
    materialsError: error,
  };
};

export { useGetMaterials, refetchMaterials };