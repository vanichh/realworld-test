import { Header } from '../header';
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
