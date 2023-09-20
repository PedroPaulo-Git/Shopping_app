
import HeaderHome from '../components/componentsHome/Header';
import SubHeader from "../components/componentsHome/subHeader";
import styles from '../styles/Home.module.css';
import banner from '../img/banner2.png';
import products from '../data/products';

import Cart from '../components/Cart';





function Home() {

 
    
    return (
        <div>

            <div>
                <HeaderHome />
                <SubHeader />


            </div>

            <div className={styles.Home}>

                <main className={styles.containerHome_Anuncio}>

                    <div className={styles.contentHome_Anuncio}>


                        <img
                            src={banner}
                            alt="imagem"
                            width='100%'
                            height="250"
                        />

                    </div>

                </main>
                <div>

                </div>
                <><h2 className={styles.containerHome_Tittle}>
                    <span className={styles.containerHome_Tittle_Span}></span>
                    Products on Sale
                    <span className={styles.containerHome_Tittle_Span}></span>
                </h2></>
                <div className={styles.products_container}>
                    {products.map((product) => (

                        <Cart key={product.id} product={product} />))}
                </div>

                <div>

                   
                </div>






                <main className={styles.containerHome}>

                    <div className={styles.contentHome}>

                    </div>





                </main>
            </div>
        </div >
    )
}
export default Home;