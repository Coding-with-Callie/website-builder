import {
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot,
} from "@chakra-ui/react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
};

const Modal = ({ open, setOpen, children }: Props) => {
  return (
    <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)} size="lg">
      <DialogBackdrop />
      <DialogContent p={4} bg="white" boxShadow="lg" borderRadius="lg">
        {children}
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default Modal;
