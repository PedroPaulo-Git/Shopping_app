import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/subHeader.module.css';

function SubHeader() {
    const location = useLocation();

    return (
        <div className={styles.subHeader}>
            <nav className={styles.subHeader_itensAll}>
                <Link className={location.pathname === '/' ? styles.subheader_active : styles.a_subheader} to='/'>Todos</Link>
                <Link className={styles.a_subheader} to='#'>Eletrônicos</Link>
                <Link className={styles.a_subheader} to='#'>Livros</Link>
                <Link className={styles.a_subheader} to='#'>Esportes e Lazer</Link>
                <Link className={styles.a_subheader} to='#'>Portífolio</Link>
                <Link className={styles.a_subheader} to='#'>Idioma</Link>
                <Link className={styles.a_subheader} to='#'>Contato</Link>
            </nav>
        </div>
    );
}

export default SubHeader;
