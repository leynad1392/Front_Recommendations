import { Link } from 'react-router-dom';
import { useToken } from '../context/AuthContext';

export const Auth = () => {
  const [token] = useToken();
  return (
    <ul className='ul'>
      {token && (
        <li>
          <Link className='links' to={'newRecommendation'}> New Recommendation </Link>
        </li>
      )}
      {!token && (
        <li>
          <Link className='links' to={'/register'}>Register</Link>
        </li>
      )}
      {!token && (
        <li>
          <Link className='links' to={'/login'}>Login</Link>
        </li>
      )}
    </ul>
  );
};
