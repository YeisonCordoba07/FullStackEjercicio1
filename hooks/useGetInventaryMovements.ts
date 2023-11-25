import { API_ROUTES, fetcher } from '@/service/apiConfigMySQL';
import { InventoryMovementQuery } from '@/types/types';
import useSWR, { mutate } from 'swr';

const refetchInventaryMovement = async () => {
  await mutate(API_ROUTES.getAllMovimientosInventario);
};

const useGetInventaryMovements = () => {
  const { data, isLoading, error } = useSWR<InventoryMovementQuery>(
    API_ROUTES.getAllMovimientosInventario,
    fetcher
  );

  return {
    movimiento: data?.movimiento,
    movimientoLoading: isLoading,
    movimientoError: error,
  };
};

export { useGetInventaryMovements, refetchInventaryMovement };