import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <p>Тестовое</p>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/user/login'>Sign in</Link>
        <Link to='/user/register'>Sign up</Link>
      </nav>
    </header>
  );
};
