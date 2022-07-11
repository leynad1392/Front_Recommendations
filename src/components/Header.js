import { Link } from 'react-router-dom';
import { useToken } from '../context/AuthContext';

import { Auth } from './Auth';

export const Header = () => {
  const [token, setToken] = useToken();

  return (
    <header>
      <h1>
        <Link to='/'>recommendation</Link>
      </h1>

      <nav>
        {token && <button onClick={() => setToken(null)}>Log Out</button>}

        <Auth />
      </nav>
    </header>
  );
};
