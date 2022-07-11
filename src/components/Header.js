import { Link } from 'react-router-dom';
import { useToken } from '../context/AuthContext';

import { Auth } from './Auth';
import duck from '../images/duck.png'

export const Header = () => {
  const [token, setToken] = useToken();

  return (
    <header className='header'>
      <div>
      <img className='ducklogo' src={duck}></img>
      </div>
      <h1>
        <Link className='logo' to='/'>Pato'dos lados</Link>
      </h1>

      <nav>
        {token && <button className='but' onClick={() => setToken(null)}>Log Out</button>}
        <Auth />
      </nav>
    </header>
  );
};
