import { Link } from 'react-router-dom';
import { useToken } from '../context/AuthContext';

export const Auth = () => {
  const [token] = useToken();
  return (
    <ul>
      {token && (
        <li>
          <Link to={'newRecommendation'}> New Recommendation </Link>
        </li>
      )}
      {!token && (
        <li>
          <Link to={'/register'}>Register</Link>
        </li>
      )}
      {!token && (
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
      )}
    </ul>
  );
};
