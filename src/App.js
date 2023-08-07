import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartPage from './pages/CartPage'
import styles from './styles/nav.module.css'
import CarrinhoIcon from './img/iconcarrinho.png';
import HomeIcon from './img/iconcasa.png'
import HeaderHome from './components/componentsHome/Header'


function App() {
  
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
                <Link className={styles.Headerlink} to={'/'}> <img  className={styles.imglink} src={HomeIcon}/> Home</Link>

                <Link className={styles.Headerlink} to={'/Carrinho'}><img  className={styles.imglink} src={CarrinhoIcon}/>Carrinho</Link>
            </nav>
            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrinho" element={[<HeaderHome/>,<CartPage />]}/>
            </Routes>

          </div>
        </Router>
     </div>
      )
     
 

}

export default App;
