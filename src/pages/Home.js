import { Link } from 'react-router-dom';
import HeaderHome from '../components/componentsHome/Header';
import SubHeader from "../components/componentsHome/subHeader";
import styles from '../styles/Home.module.css'


function Home (){
    return(
        <div> 
            
            <div>
            <HeaderHome/>
            <SubHeader/>
            
      
            </div>
            <div className={styles.Home}>

            <main className={styles.containerHome_Anuncio}>
                    <div className={styles.contentHome_Anuncio}>
            
                        <img
                            src="https://via.placeholder.com/1300x200" // URL da imagem temporária
                            alt="Temporary Image"
                            width='100%'
                            height="200"
                        />
                      
                    </div>


                </main>
                
                
                <><h2 className={styles.containerHome_Tittle}>
                    <span className={styles.containerHome_Tittle_Span}></span> 
                    Products on Sale 
                    <span className={styles.containerHome_Tittle_Span}></span>
                     </h2></>
                <main className={styles.containerHome_Sale}>
                    
                    <div className={styles.contentHome_Sale}>
                        <h4 className={styles.contentHome_tittle1}>Sale</h4>
                        <img
                            src="https://via.placeholder.com/180x200" // URL da imagem temporária
                            alt="Temporary Image"
                            width="180"
                            height="200"
                        />
                        <p className={styles.contentHome_p}>Camiseta polo</p>
                        <span  className={styles.contentHome_preco}> Price:<p className={styles.contentHome_preco_p }> 87.99$</p></span>  
                        <Link to={'/Sale/1'}>
                        <button  className={styles.contentHome_addCart_Active}>Adicionar ao Carrinho</button>
                        </Link>
                    </div>

                    <div className={styles.contentHome_Sale}>
                        <h4 className={styles.contentHome_tittle}>Sale</h4>
                        <img
                            src="https://via.placeholder.com/180x200" // URL da imagem temporária
                            alt="Temporary Image"
                            width="180"
                            height="200"
                        />
                        <p className={styles.contentHome_p}>Camiseta polo</p>
                        <span  className={styles.contentHome_preco}> Price:<p className={styles.contentHome_preco_p }> 87.99$</p></span>  
                        <Link to={'/Sale/1'}>
                        <button  className={styles.contentHome_addCart}>Adicionar ao Carrinho</button>
                        </Link>
                    </div>

                    <div className={styles.contentHome_Sale}>
                        <h4 className={styles.contentHome_tittle}>Sale</h4>
                        <img
                            src="https://via.placeholder.com/180x200" // URL da imagem temporária
                            alt="Temporary Image"
                            width="180"
                            height="200"
                        />
                        <p className={styles.contentHome_p}>Camiseta polo</p>
                        <span  className={styles.contentHome_preco}> Price:<p className={styles.contentHome_preco_p }> 87.99$</p></span>  
                        <Link to={'/Sale/1'}>
                        <button  className={styles.contentHome_addCart}>Adicionar ao Carrinho</button>
                        </Link>
                    </div>

                    <div className={styles.contentHome_Sale}>
                        <h4 className={styles.contentHome_tittle}>Sale</h4>
                        <img
                            src="https://via.placeholder.com/180x200" // URL da imagem temporária
                            alt="Temporary Image"
                            width="180"
                            height="200"
                        />
                        <p className={styles.contentHome_p}>Camiseta polo</p>
                        <span  className={styles.contentHome_preco}> Price:<p className={styles.contentHome_preco_p }> 87.99$</p></span>  
                        <Link to={'/Sale/1'}>
                        <button  className={styles.contentHome_addCart}>Adicionar ao Carrinho</button>
                        </Link>
                    </div>

                    <div className={styles.contentHome_Sale}>
                        <h4 className={styles.contentHome_tittle}>Sale</h4>
                        <img
                            src="https://via.placeholder.com/180x200" // URL da imagem temporária
                            alt="Temporary Image"
                            width="180"
                            height="200"
                        />
                        <p className={styles.contentHome_p}>Camiseta polo</p>
                        <span  className={styles.contentHome_preco}> Price:<p className={styles.contentHome_preco_p }> 87.99$</p></span>  
                        <Link to={'/Sale/1'}>
                        <button  className={styles.contentHome_addCart}>Adicionar ao Carrinho</button>
                        </Link>
                    </div>

                    


                </main>

                <main className={styles.containerHome}> 

                    <div className={styles.contentHome}>
                        <h4 className={styles.contentHome_tittle}>Sale</h4>
                        <img
                            src="https://via.placeholder.com/180x200" 
                            alt="Temporary Image"
                            width="180"
                            height="200"
                        />
                        <p className={styles.contentHome_p}>Camiseta polo</p>
                        <span  className={styles.contentHome_preco}>Price: 87.99$</span>  
                        <Link to={'/Sale/1'}>
                        <button  className={styles.contentHome_addCart}>Adicionar ao Carrinho</button>
                        </Link>
                    </div>
                   
                   



                </main>
            </div>
        </div>
    )
}
export default Home;