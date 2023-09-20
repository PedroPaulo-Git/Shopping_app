import styles from '../../styles/HeaderHome.module.css';
import Icon from '../../img/icon.png';
import Lupa from '../../img/magnifying-glass-solid.svg';
import { BrowserRouter as  Link } from 'react-router-dom';
import CarrinhoIcon from '../../img/iconcarrinho.png';
import HomeIcon from '../../img/iconcasa.png';
import CartContext from '../../context/Cart/CartContext';
import { useContext } from 'react';




function HeaderHome(){

     const { cartItems,showHideCart } = useContext(CartContext) 

    return(

    
        
        <div className={styles.HeaderHome}>
           

          <div>
            <nav className={styles.HeaderlinkNav}>
                
                <Link className={styles.Headerlink} to={'/'}> <img alt="Ícone de lupa" className={styles.imglink} src={HomeIcon}/> Home</Link>

                <Link onClick={showHideCart} className={styles.Headerlink} to={'/Carrinho'}>

                
                  {console.log('valor cart '+ cartItems)}
                {cartItems.length > 0 && ( <div className={styles.items_count}>
                <span style={{fontSize:'14px'}}>{cartItems.length}</span>
                </div>)}
                
                  <img alt="Ícone de lupa" className={styles.imglink} src={CarrinhoIcon}/>Carrinho
                  
                  </Link>
                

            </nav>
            

          </div>




            <img alt="Ícone de lupa"className={styles.icon} src={Icon}/>
            <span className={styles.spanShopping}>Shopping</span><span className={styles.spanPedro}>Pedro</span>
           <div className={styles.inputAll}>
            
            <input id="searchInput" 
           className={styles.inputHome} 
            placeholder ="Pesquise pelo produto que deseja" 
            type='text'></input>

            <button className={styles.buttoninput} > <img alt="Ícone de lupa" className={styles.imginput}  src={Lupa}/></button>
           
            
            </div> 
            
        </div>
    )


}
export default HeaderHome;