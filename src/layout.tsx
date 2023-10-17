import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./styles/layout";

export function Layout() {
  return (
    <>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
