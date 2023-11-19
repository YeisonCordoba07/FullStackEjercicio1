import { Dialog as MuiDialog, DialogContent, DialogTitle } from '@mui/material';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  titulo: string;
  children: React.ReactNode;
}

const DialogoMUI = ({ open, onClose, titulo, children }: ModalProps) => {
  return (
    <MuiDialog open={open} onClose={onClose}>
      <DialogTitle>{titulo}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </MuiDialog>
  );
};

export { DialogoMUI };