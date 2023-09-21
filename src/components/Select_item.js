import styles from '../styles/Select_items.module.css'
import roupa1 from '../img/roupa1.png';


function Select_item () {
   

    return (
        <div>

            <div className={styles.Select_item}>

                <img
                    src={roupa1} 
                    alt="imagem das camisas"
                    width="400"
                    height="450"
                />
                <div className={styles.infoSelectitem}>
                    <p>Camisa Polo de Alta Qualidade em Diversos Estilos e Cores</p>
                    <span className={styles.contentHome_preco}> Price:<p className={styles.contentHome_preco_p}> 87.99$</p></span>
                    <div className={styles.Tamanho_item_container}>
                        <h1 style={{ paddingBottom: 20 }}>Tamanho:</h1>
                        <span className={styles.Tamanho_item}>P</span>
                        <span className={styles.Tamanho_item}>M</span>
                        <span className={styles.Tamanho_item}>G</span>
                        <span className={styles.Tamanho_item}
                        >GG</span>
                    </div>
               
                
                </div>
              

            </div> 
              
        </div>
    )
}
export default Select_item;