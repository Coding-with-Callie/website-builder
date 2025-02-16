import AddPageForm from "./AddPageForm";
import DeleteModal from "./DeleteModal";
import LoginForm from "./LoginForm";
import Modal from "./Modal";

type Props = {
  addPage: boolean;
  setAddPage: (addPage: boolean) => void;
  login: boolean;
  setLogin: (login: boolean) => void;
  deletePage: boolean;
  setDeletePage: (deletePage: boolean) => void;
};

const Modals = ({
  addPage,
  setAddPage,
  login,
  setLogin,
  deletePage,
  setDeletePage,
}: Props) => {
  return (
    <>
      <Modal open={addPage} setOpen={setAddPage}>
        <AddPageForm setAddPage={setAddPage} />
      </Modal>
      <Modal open={login} setOpen={setLogin}>
        <LoginForm setLogin={setLogin} />
      </Modal>
      <Modal open={deletePage} setOpen={setDeletePage}>
        <DeleteModal setDeletePage={setDeletePage} />
      </Modal>
    </>
  );
};

export default Modals;
