import { useState } from 'react';
import { useToken } from '../context/AuthContext';
import { logInUserService } from '../services';
import { Navigate } from 'react-router-dom';

export const Loginpages = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useToken();
  // Si estamos logeados nos redirecciona a la página principal

  if (token) return <Navigate to='/'></Navigate>;
  const handleForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = await logInUserService({ email, password });
      setToken(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='pass'>Password</label>
          <input
            type='password'
            name='pass'
            id='pass'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
