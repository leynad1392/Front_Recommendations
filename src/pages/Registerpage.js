import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../context/AuthContext';
import { registerUserService } from '../services';
import { Navigate } from 'react-router-dom';

export const Registerpage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [username, setusername] = useState('');
  const [error, setError] = useState('');
  const [token] = useToken();

  // Si estamos logeados nos redirecciona a la página principal

  if (token) return <Navigate to='/'></Navigate>;

  const handleForm = async (e) => {
    e.preventDefault();
    setError('');
    if (pass1 !== pass2) {
      setError('Passwords do not match');
      return;
    }
    try {
      await registerUserService({ email, password: pass1, username });
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='username'>Username</label>
          <input
            type='username'
            id='email'
            name='username'
            value={username}
            required
            onChange={(e) => setusername(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='pass1'>Password</label>
          <input
            type='password'
            id='pass1'
            name='pass1'
            value={pass1}
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='pass2'>Repeat password</label>
          <input
            type='password'
            id='pass2'
            name='pass2'
            value={pass2}
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>
        <button>Register</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
