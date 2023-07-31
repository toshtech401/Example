import './App.css';
import Explore from './Components/Explore/Explore';
import Features from './Components/Features/Features';
import Footer from './Components/Footer';
import Goods from './Components/Goods/Goods';
import Header from './Components/Header/Header';
import Top from './Components/Top/Top';

function App() {
  return (
    <div className="App">
      <Header />
      <Goods />
      <Top />
      <Features />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
