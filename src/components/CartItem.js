import { useContext } from "react";
import CartContext from "../context/Cart/CartContext";
import formatCurrency from 'format-currency';
import styles from '../styles/CartItem.module.css'

const CartItem = ({item}) => {
    const { removeItem } = useContext(CartContext)
    let opts = {format:'%s%v',symbol:"R$ "}
    return ( 
        <div className={styles.mainContainerCart} >
                <div className={styles.ContainerCart} >
                    <img alt="Produto" className={styles.img_Cart}  src={item.image}/>
                <div className={styles.ContainerCart_infoProducts}>
                    <p className={styles.nameItem}>{item.nome}</p>
                    <h1 className={styles.precoItem}>{formatCurrency(`${item.Preco}</div>`,opts)}</h1>
                </div>
                <button className={styles.buttonItem} onClick={()=> removeItem(item.id)}>Remover do carrinho</button>
                
                </div>
        </div>
    );
}
 
export default CartItem;