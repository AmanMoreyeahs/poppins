import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./public.route";
import PrivateRoute from "./private.route";
import { ROUTES } from "./constant";
import { Home } from "../pages/Home/home";
import AppLayout from "../components/Layout";
import { MyShop } from "../pages/myShop";
import { CreateCatalog } from "../pages/myShop/catalog/createCatalog";

const Routers = () => {
  const publicRoutes = [
    {
      key: 1,
      path: ROUTES.INDEX,
      component: Home,
      restricted: false,
    },
  ];

  const privateRoutes = [
    {
      key: 1,
      component: Home,
      path: ROUTES.HOME,
      exact: true,
    },
    {
      key: 2,
      component: MyShop,
      path: ROUTES.MY_SHOP,
      exact: true,
    },
    {
      key: 3,
      component: CreateCatalog,
      path: ROUTES.CREATE_CATALOG,
      exact: true,
    },
  ];

  return (
    <Router>
      <AppLayout>
        <Routes>
          {publicRoutes.map((i) => (
            <Route
              path={i?.path}
              key={i?.key}
              element={
                <PublicRoute
                  restricted={i?.restricted}
                  key={i?.key}
                  component={i?.component}
                />
              }
            />
          ))}

          {privateRoutes.map((i) => (
            <Route
              path={i?.path}
              key={i?.key}
              element={<PrivateRoute key={i?.key} component={i?.component} />}
            />
          ))}
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default Routers;
