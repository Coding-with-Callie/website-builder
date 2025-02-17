import { HStack, IconButton } from "@chakra-ui/react";
import {
  GrEdit,
  GrAdd,
  GrLogin,
  GrLogout,
  GrLinkPrevious,
} from "react-icons/gr";
import { axiosCustom } from "../utils/axios";
import { useUser } from "../hooks/useUser";
import { User } from "../types/user";
import { PageType } from "../types/page";
import usePages from "../hooks/usePages";
import { useNavigate } from "react-router-dom";

type Props = {
  role: "admin" | "guest";
  setLogin: (login: boolean) => void;
  setAddPage: (addPage: boolean) => void;
  addPage: boolean;
  setEditPage: (editPage: boolean) => void;
  editPage: boolean;
};

const AdminButtons = ({
  role,
  setLogin,
  setAddPage,
  addPage,
  setEditPage,
  editPage,
}: Props) => {
  const { setUser } = useUser();
  const { setPages } = usePages();
  const navigate = useNavigate();

  const openEditPage = () => {
    setEditPage(!editPage);
    const currentPage = window.location.pathname;

    if (editPage) {
      if (currentPage === "/home/edit") {
        navigate("/");
        return;
      }

      navigate(currentPage.replace("/edit", ""));
      return;
    }

    if (currentPage === "/") {
      navigate("/home/edit");
      return;
    }

    navigate(currentPage + "/edit");
  };

  const handleLoginLogout = async () => {
    if (role === "admin") {
      const { user, pages } = (await axiosCustom.post("/logout")).data as {
        user: User;
        pages: PageType[];
      };

      setUser(user);
      setPages(pages);
    } else {
      setLogin(true);
    }
  };

  return (
    <HStack justifyContent="flex-end" w="100%" p={2} position="fixed" top={20}>
      <IconButton
        aria-label="Edit Page"
        rounded="full"
        display={role === "admin" ? "flex" : "none"}
        onClick={openEditPage}
      >
        {editPage ? <GrLinkPrevious /> : <GrEdit />}
      </IconButton>
      <IconButton
        aria-label="Add Page"
        rounded="full"
        onClick={() => setAddPage(!addPage)}
        display={role === "admin" ? "flex" : "none"}
      >
        <GrAdd />
      </IconButton>
      <IconButton
        aria-label="Log in as admin"
        rounded="full"
        onClick={handleLoginLogout}
        opacity={role === "admin" ? 1 : 0}
        _hover={{ opacity: 1 }}
      >
        {role === "admin" ? <GrLogout /> : <GrLogin />}
      </IconButton>
    </HStack>
  );
};

export default AdminButtons;
