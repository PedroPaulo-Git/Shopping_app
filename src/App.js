import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import Selectitem from './components/Select_item';
import HeaderHome from './components/componentsHome/Header';


function App() {
  
    return (
      <div className="App">

        <Router>
          <div>
          <Routes>
          <Route path="/" element={[<Home />]} />
          <Route path="/Carrinho" element={[<HeaderHome/>,<CartPage />]}/>
          <Route path="/Sale/1" element={[<HeaderHome/>,<Selectitem/>]}/>
          </Routes>
          </div>
        </Router>

     </div>
      )
     
 

}

export default App;
