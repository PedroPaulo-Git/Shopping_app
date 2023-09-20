import styles from '../styles/CartPages.module.css';
import { useContext } from 'react';
import CartContext from '../context/Cart/CartContext';
import CartItem from '../components/CartItem';



function CartPage() {
    const { showCart, cartItems, showHideCart } = useContext(CartContext);
    const opts = { format: '%s%v', symbol: 'R$ ' }

    return (

        <div className={styles.CartPage}>
            <div className={styles.CartList}>
                <h2 className={styles.Carth2}>Mostrar resultados para:</h2>
                <ul>

                    <li className={styles.CartLI}>Todos</li>
                    <li className={styles.CartLI}>Eletrônicos</li>
                    <li className={styles.CartLI}>Livros</li>
                    <li className={styles.CartLI}>Roupas</li>
                    <li className={styles.CartLI}>Cosméticos</li>
                    <li className={styles.CartLI}>Beleza e Cuidados Pessoais</li>
                    <li className={styles.CartLI}>Pet Shop</li>
                    <li className={styles.CartLI}>Esportes e Lazer</li>
                    <li className={styles.CartLI}>Outros</li>
                  

                </ul>

            </div>
            <div className={styles.Cart_container}>
                    <div className={styles.CartItensAdded}>
                    
                                {cartItems.map(item => (
                                    <CartItem key={item._id} item={item} />
                                ))}
                           
                            
                        </div>  
                        <button onClick={showHideCart}>mostrar carrinho</button>
            </div>
        </div>

    )
}

export default CartPage;