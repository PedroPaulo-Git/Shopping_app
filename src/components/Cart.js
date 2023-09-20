import formatCurrency from 'format-currency';
import styles from '../styles/productpreco.module.css';
import CartContext from '../context/Cart/CartContext';
import { useContext } from 'react';


const Cart = ({ product }) => {
    const {AddToCart} = useContext(CartContext) 
    let opts = {format:'%s%v',symbol:"R$ "}
    return (  
        <div>
            <div className={styles.contentHome_Sale}>
            <h4 className={styles.contentHome_tittle}>Sale</h4>
            <img alt="Produto" className="cardImg" src={product.image}/>
            
            <h4 >{product.nome}</h4>
            <div className={styles.productPreco}><h5>
            {formatCurrency(`${product.Preco}`,opts)}</h5></div>
            <button className={styles.contentHome_addCart} 
            onClick={()=> AddToCart(product)} >Adicionar ao Carrinho</button>
          
        </div>
        </div>

     );
}

export default Cart;