import { Route, Routes } from "react-router-dom";
import { usePagesContext } from "../hooks/usePageContext";
import Page from "./Page";
import React from "react";

type Props = {
  role: "admin" | "guest";
};

const DynamicRoutes = ({ role }: Props) => {
  const { pages } = usePagesContext();

  return (
    <Routes>
      {pages.map((page) => (
        <React.Fragment key={page.path}>
          <Route path={page.path} element={<Page page={page} role={role} />} />
          <Route
            path={`${page.path}/edit`}
            element={<div>EDIT PAGE HERE</div>}
          />
        </React.Fragment>
      ))}
    </Routes>
  );
};

export default DynamicRoutes;
