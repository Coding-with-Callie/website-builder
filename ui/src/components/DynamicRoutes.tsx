import { Route, Routes } from "react-router-dom";
import { usePagesContext } from "../hooks/usePageContext";
import Page from "./Page";
import React from "react";
import EditPage from "./EditPage";

type Props = {
  role: "admin" | "guest";
  setEditPage: (editPage: boolean) => void;
};

const DynamicRoutes = ({ role, setEditPage }: Props) => {
  const { pages } = usePagesContext();

  return (
    <Routes>
      {pages.map((page) => (
        <React.Fragment key={page.path}>
          <Route path={page.path} element={<Page page={page} />} />
          {role === "admin" && (
            <Route
              path={page.path === "/" ? "home/edit" : `${page.path}/edit`}
              element={<EditPage page={page} setEditPage={setEditPage} />}
            />
          )}
        </React.Fragment>
      ))}
    </Routes>
  );
};

export default DynamicRoutes;
