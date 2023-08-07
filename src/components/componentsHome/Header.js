import styles from '../../styles/HeaderHome.module.css';
import Icon from '../../img/icon.png';
import Lupa from '../../img/magnifying-glass-solid.svg';

function HeaderHome(){


    return(
        
        <div className={styles.HeaderHome}>
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