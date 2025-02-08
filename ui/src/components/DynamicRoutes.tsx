import { Route, Routes } from "react-router-dom";
import { usePagesContext } from "../hooks/usePageContext";
import Page from "./Page";

const DynamicRoutes = () => {
  const { pages } = usePagesContext();

  return (
    <Routes>
      {pages.map((page) => (
        <Route path={page.path} element={<Page page={page} />} />
      ))}
    </Routes>
  );
};

export default DynamicRoutes;
