import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Selectitem from './components/Select_item';
import HeaderHome from './components/componentsHome/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={[<Home />,<HeaderHome />]} />
          <Route path="/Carrinho" element={[<CartPage />,<HeaderHome />]} />
          <Route path="/Sale/1" element={<Selectitem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
