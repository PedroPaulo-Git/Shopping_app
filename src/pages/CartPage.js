import styles from '../styles/CartPages.module.css';
function CartPage (){
return(
    <div className={styles.CartPage}>
        <div className={styles.CartDet}>
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
    </div>
)
}

export default CartPage;