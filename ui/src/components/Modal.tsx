import {
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot,
} from "@chakra-ui/react";
import AddPageForm from "./AddPageForm";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Modal = ({ open, setOpen }: Props) => {
  return (
    <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)} size="lg">
      <DialogBackdrop />
      <DialogContent
        p={4}
        bg="white"
        boxShadow="lg"
        borderRadius="lg"
        height="100%"
      >
        <AddPageForm />
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default Modal;
