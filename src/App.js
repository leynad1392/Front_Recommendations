import './App.css';
import { Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from "./components/Header";
import { Homepages } from './pages/Homepages';
import { Recommendationpages } from './pages/Recommendationpage';
import { Loginpages } from './pages/Loginpages';
import { Registerpage } from './pages/Registerpage';
import { Notfoundpages } from './pages/Notfoundpages';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Homepages/>} />
        <Route path='/register' element= { <Registerpage />} />
        <Route path='/login' element={<Loginpages/>} />
        <Route path='/recommendations/:id' element={<Recommendationpages/>} />
        <Route path='*' element={<Notfoundpages/>} />
      </Routes>
      <Footer />    
    </main>
  );
}

export default App;
