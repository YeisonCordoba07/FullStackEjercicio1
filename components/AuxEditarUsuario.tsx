//import { Tooltip } from '@/components/ui/Tooltip';
import { useState } from 'react';



import { BotonEditarUsuario } from '@/components/BotonEditarUsuario';
import { User } from '@/types/types';

interface UserActionsProps {
  user: User;
}

const AuxEditarUsuario = ({ user }: UserActionsProps) => {
    const [openEditarUsuario, setOpenEditarUsurio] = useState(false);

  return (
    <div className='text-3xl flex gap-2'>
      {/*<Tooltip description='Editar el usuario'>*/}
        <button
          type='button'
          onClick={() => {
            setOpenEditarUsurio(true);
          }}
        >
            Editar
        </button>
      {/*</Tooltip>*/}


<BotonEditarUsuario open={openEditarUsuario} setOpen={setOpenEditarUsurio} user={user}/>
    </div>
  );
};

export { AuxEditarUsuario };