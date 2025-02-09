import { HStack, IconButton } from "@chakra-ui/react";
import { GrEdit, GrAdd, GrLogin, GrLogout } from "react-icons/gr";
import { axiosPrivate } from "../utils/axios";
import { useUser } from "../hooks/useUser";
import { User } from "../types/user";
import { PageType } from "../types/page";
import usePages from "../hooks/usePages";

type Props = {
  role: "admin" | "guest";
  setLogin: (login: boolean) => void;
  setAddPage: (addPage: boolean) => void;
  addPage: boolean;
};

const AdminButtons = ({ role, setLogin, setAddPage, addPage }: Props) => {
  const { setUser } = useUser();
  const { setPages } = usePages();

  const handleLoginLogout = async () => {
    if (role === "admin") {
      const { user, pages } = (await axiosPrivate.post("/logout")).data as {
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
    <>
      <HStack justifyContent="flex-end" p={4}>
        <IconButton
          aria-label="Edit Page"
          rounded="full"
          display={role === "admin" ? "flex" : "none"}
        >
          <GrEdit />
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
    </>
  );
};

export default AdminButtons;
