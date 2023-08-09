import styles from '../../styles/HeaderHome.module.css';
import Icon from '../../img/icon.png';
import Lupa from '../../img/magnifying-glass-solid.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CartPage from '../../pages/CartPage'
import Home from '../../pages/Home'
import CarrinhoIcon from '../../img/iconcarrinho.png';
import HomeIcon from '../../img/iconcasa.png';
import SubHeader from "../../components/componentsHome/subHeader";




function HeaderHome(){


    return(
        
        
        <div className={styles.HeaderHome}>
             
          <div>
            <nav className={styles.HeaderlinkNav}>
                
                <Link className={styles.Headerlink} to={'/'}> <img  className={styles.imglink} src={HomeIcon}/> Home</Link>

                <Link className={styles.Headerlink} to={'/Carrinho'}><img  className={styles.imglink} src={CarrinhoIcon}/>Carrinho</Link>
                
            </nav>
            

          </div>




            <img className={styles.icon} src={Icon}/>
            <span className={styles.spanShopping}>Shopping</span><span className={styles.spanPedro}>Pedro</span>
           <div className={styles.inputAll}>
            
            <input id="searchInput" 
           className={styles.inputHome} 
            placeholder ="Pesquise pelo produto que deseja" 
            type='text'></input>

            <button className={styles.buttoninput} > <img className={styles.imginput} src={Lupa}/></button>
           
            
            </div> 
            
        </div>
    )


}
export default HeaderHome;