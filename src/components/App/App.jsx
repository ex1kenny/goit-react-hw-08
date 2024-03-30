import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { selectisRefreshing } from "../../redux/auth/slice";
import { refreshUser } from "../../redux/auth/operations";
import Layout from "../Layout/Layout";
import { PrivateRoute } from "../PtivateRouter";
import { RestrictedRoute } from "../RestrictedRouter";
import { selectAuthLoading } from "../../redux/auth/slice";
import SpinLoader from "../SpinLoader/SpinLoader";

const ContactsPage = lazy(() => import("../../pages/Contacts/Contacts"));
const HomePage = lazy(() => import("../../pages/Home/Home"));
const RegisterPage = lazy(() => import("../../pages/Register/Register"));
const LoginPage = lazy(() => import("../../pages//Login//Login"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing);
  const loading = useSelector(selectAuthLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {}
      {loading ? (
        <SpinLoader />
      ) : (
        <>
          {isRefreshing ? (
            <b>...Refreshing</b>
          ) : (
            <div className={css.container}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route
                    path="/register"
                    element={
                      <RestrictedRoute
                        redirectTo="/contacts"
                        component={<RegisterPage />}
                      />
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <RestrictedRoute
                        redirectTo="/contacts"
                        component={<LoginPage />}
                      />
                    }
                  />
                  <Route
                    path="/contacts"
                    element={
                      <PrivateRoute
                        redirectTo="/login"
                        component={<ContactsPage />}
                      />
                    }
                  />
                </Route>
              </Routes>
            </div>
          )}
        </>
      )}{" "}
      {}
    </>
  );
}
