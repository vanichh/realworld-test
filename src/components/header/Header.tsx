import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <header className='header'>
      <p className='description'>Тестовое</p>
      <nav className='list'>
        <Link className='item' to='/'>
          Home
        </Link>
        <Link className='item' to='/user/login'>
          Sign in
        </Link>
        <Link className='item' to='/user/register'>
          Sign up
        </Link>
      </nav>
    </header>
  );
};
