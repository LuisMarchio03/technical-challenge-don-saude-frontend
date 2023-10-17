import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { styled } from '@stitches/react';

const Main = styled('main', {
  width: 'calc(100vw - 160px)',
  height: 'auto',
  marginLeft: '120px',
  background: 'red',
})

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
