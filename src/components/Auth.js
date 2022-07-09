import { Link } from 'react-router-dom';
import { useToken } from '../context/AuthContext';

export const Auth = () => {
  const [token] = useToken();

  return (
    <ul>
      <li>
        <Link to={'/register'}>Register</Link>
      </li>
      <li>
        <Link to={'/login'}>Login</Link>
      </li>
      <li>Token: {token}</li>
    </ul>
  );
};
