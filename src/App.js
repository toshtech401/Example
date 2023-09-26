import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import Contact from './Components/Contact/Contact'
import Promotion from './Components/Promotion/Promotion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/promotion' element={<Promotion />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
