import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero';
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
