import { Routes, Route } from 'react-router-dom';
import { Main as Layout } from 'components/layouts';
import './App.css';
import { Home } from 'pages/Home';
import { Login } from 'pages/user/Login'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/user/login' element={<Login />} />
      </Route>
    </Routes>
  );
};
