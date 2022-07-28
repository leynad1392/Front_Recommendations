import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { useToken } from '../context/AuthContext';
import { createNewRecommendation } from '../services';

export const NewRecommendationpage = () => {
  //Necesitamos el token porque solo se puede crear una recommendation si estás logeado
  const [token] = useToken();
  const navigate = useNavigate();

  //Variables de estado
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [place, setPlace] = useState('');
  const [leadin, setLeadin] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  // Si no tenemos token nos redirecciona a la página principal
  if (!token) return <Navigate to='/'></Navigate>;

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    setLoading(true);
    try {
      const formData = new FormData();

      formData.append('image', file);
      formData.append('title', title);
      formData.append('category', category);
      formData.append('place', place);
      formData.append('leadin', leadin);
      formData.append('text', text);

      const body = await createNewRecommendation(formData, token);
      if (body.status === 'error') {
        ErrorMessage({
          message: body.message,
        });
      } else {
        navigate('/');
      }
    } catch (err) {
      ErrorMessage({
        message: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='newreco'>
    <form className='newr' onSubmit={handleSubmit}>
      <label className='labelnew'>
        Select Image:
        <input
          type='file'
          name='image'
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>
      <label className='labelnew'>
        Title:
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className='labelnew'>
        Category:
        <input
          type='text'
          name='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label className='labelnew'>
        Place:
        <input
          type='text'
          name='Place'
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </label>
      <label className='labelnew'>
        {' '}
        Lead In
        <input
          type='text'
          name='leadin'
          value={leadin}
          onChange={(e) => setLeadin(e.target.value)}
        />
      </label>
      <label className='labelnew'>
        Text:
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </label>

      <button disabled={loading}>Send</button>
    </form>
    </section>
  );
};
