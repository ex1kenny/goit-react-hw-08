import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import css from "./Layout.module.css";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
