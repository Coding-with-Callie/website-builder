import AddPageForm from "./AddPageForm";
import LoginForm from "./LoginForm";
import Modal from "./Modal";

type Props = {
  addPage: boolean;
  setAddPage: (addPage: boolean) => void;
  login: boolean;
  setLogin: (login: boolean) => void;
};

const Modals = ({ addPage, setAddPage, login, setLogin }: Props) => {
  return (
    <>
      <Modal open={addPage} setOpen={setAddPage}>
        <AddPageForm setAddPage={setAddPage} />
      </Modal>
      <Modal open={login} setOpen={setLogin}>
        <LoginForm setLogin={setLogin} />
      </Modal>
    </>
  );
};

export default Modals;
