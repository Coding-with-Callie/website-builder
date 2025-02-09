import { Route, Routes } from "react-router-dom";
import { usePagesContext } from "../hooks/usePageContext";
import Page from "./Page";

type Props = {
  role: "admin" | "guest";
};

const DynamicRoutes = ({ role }: Props) => {
  const { pages } = usePagesContext();

  return (
    <Routes>
      {pages.map((page) => (
        <Route path={page.path} element={<Page page={page} role={role} />} />
      ))}
    </Routes>
  );
};

export default DynamicRoutes;
