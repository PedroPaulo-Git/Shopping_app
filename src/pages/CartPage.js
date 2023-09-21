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

                <div className={styles.Cart_container_Products}>
                    <h1 className={styles.CartItensAdded_titulo_produtos}>Produtos do carrinho</h1>

                    <div className={styles.CartItensAdded}>

                        {cartItems.map(item => (

                            <CartItem key={item._id} item={item} />
                        ))}


                    </div>
                    {/*<button onClick={showHideCart}>mostrar carrinho</button>*/}
                </div>
                <div className={styles.CartItens_totalpreco}>
                   
                    <h1 className={styles.CartItensAdded_titulo}>Resumo</h1>
                   
                    <div className={styles.CartItens_totalpreco_soma}>
                            <p className={styles.CartItens_totalpreco_p}>Total produtos:</p>
                            <p className={styles.CartItens_totalpreco_p}>Frete:</p>
                            <p className={styles.CartItens_totalpreco_p}>Adicionar Cupom</p>

                            <h1 className={styles.CartItens_totalpreco_h1}>Total:</h1>
                            
                    </div>
                    <div>
                        <button  className={styles.CartItens_totalpreco_button}>Concluir</button>
                    </div>
               
               
                </div>
            </div>

        </div>

    )
}

export default CartPage;